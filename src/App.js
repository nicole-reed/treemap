import React, { useEffect } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import './App.css';

function App() {

  useEffect(async () => {
    try {
      const data = await axios.get('https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json')
      // console.log(data)
      treeMap(data.data)
      // drawMap(countiesResponse.data, educationResponse.data)
    } catch (error) {
      console.log('error fetching data:\n', error)
    }
  }, [])

  const treeMap = (data) => {
    // console.log('data', data)
    const root = d3.hierarchy(data);
    // console.log('root', root)
    const treemapLayout = d3.treemap();

    treemapLayout
      .size([1000, 600])

    root.sum((d) => d.value);
    // console.log('root modified', root)

    treemapLayout(root)
    // console.log('root.children', root.children)

    const consoles = root.children.map((item) => item.data.name)
    console.log('consoles', consoles)

    const colors = ['3f3d3d', '#86cc86e7', '#9a9ad4', '#c78cc7', '#ffc0cb', '#e9fa8b',
      '#85eeb9', '#fac61c', '#f06f6f', '#fc3085ef', '#75a0a0', '#a7d69e',
      '#b64545', '#aaa7a7', '#01c483', '#d644d6', '#45a4f1', '#fafa4f'];
    const colorScale = d3.scaleOrdinal()
      .domain(consoles)
      .range(colors);

    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', 1000)
      .attr('height', 600);

    svg.selectAll('rect')
      .data(root.descendants())
      .enter()
      .append('rect')
      .attr('x', function (d) { return d.x0; })
      .attr('y', function (d) { return d.y0; })
      .attr('width', function (d) { return d.x1 - d.x0; })
      .attr('height', function (d) { return d.y1 - d.y0; })
      .attr('class', 'tile')
      .attr('data-name', (d) => d.data.name)
      .attr('data-category', (d) => d.data.category)
      .attr('data-value', (d) => d.data.value)
      .style('fill', d => d.data.category ? colorScale(d.data.category) : 'white')
      .style('stroke', 'white')
      .append("title")
      .attr('id', 'tooltip')
      .attr('data-value', (d) => d.data.value)
      .text((d) => `Game: ${d.data.name}\nConsole: ${d.data.category}\n Value: ${d.data.value}`);

    const legend = d3.select('#legend')
      .append('svg')
      .attr('width', 100)
      .attr('height', 600)

    const legendColors = d3.scaleOrdinal()
      .domain(consoles)
      .range(colors);

    legend.selectAll('rect')
      .data(consoles)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', (d, i) => i * 30)
      .attr('class', 'legend-item')
      .attr('width', 20)
      .attr('height', 20)
      .style('fill', (d) => legendColors(d))

    legend.selectAll('text')
      .data(consoles)
      .enter()
      .append('text')
      .attr('x', 20)
      .attr('y', (d, i) => 12 + (i * 30))
      .text((d) => d)
      .style("alignment-baseline", "middle")
      .style('font-size', '15px')


  }

  return (
    <div className="App">
      <h1 id='title'>100 Most Popular Video Games</h1>
      <p id='description'>Grouped By Gaming Console</p>
      <div id='styling'>
        <div id='chart'></div>
        <div id='legend'></div>
      </div>

    </div>
  );
}

export default App;
