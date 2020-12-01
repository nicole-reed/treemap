import React, { useEffect } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import './App.css';

function App() {

  useEffect(async () => {
    console.log(window.screen.width, ' screen width')

    try {
      const data = await axios.get('https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json')
      // console.log(data)
      treeMap(data.data)
    } catch (error) {
      console.log('error fetching data:\n', error)
    }
  }, [])

  const treeMap = (data) => {

    const root = d3.hierarchy(data);

    const treemapLayout = d3.treemap();

    const width = window.screen.width < 1200 ? window.screen.width * .9 : 1000;
    const height = width * .6;

    treemapLayout
      .size([width, height])

    root.sum((d) => d.value);

    treemapLayout(root)


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
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('rect')
      .data(root.descendants())
      .enter()
      .append('rect')
      .attr('x', (d) => d.x0)
      .attr('y', (d) => d.y0)
      .attr('width', (d) => d.x1 - d.x0)
      .attr('height', (d) => d.y1 - d.y0)
      .attr('class', 'tile')
      .attr('data-name', (d) => d.data.name)
      .attr('data-category', (d) => d.data.category)
      .attr('data-value', (d) => d.data.value)
      .style('fill', d => d.data.category ? colorScale(d.data.category) : 'white')
      .style('stroke', 'white')
      .append("title")
      .attr('id', 'tooltip')
      .attr('data-value', (d) => d.data.value)
      .text((d) => `Game: ${d.data.name}\nConsole: ${d.data.category}\nValue: ${d.data.value}`);

    const legend = d3.select('#legend')
      .append('svg')
      .attr('width', width * .1)
      .attr('height', height)

    const legendColors = d3.scaleOrdinal()
      .domain(consoles)
      .range(colors);

    const rectHeight = height / 36;
    const rectWidth = width / 50;

    legend.selectAll('rect')
      .data(consoles)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', (d, i) => i * (rectHeight + 5))
      .attr('class', 'legend-item')
      .attr('width', rectWidth)
      .attr('height', rectHeight)
      .style('fill', (d) => legendColors(d))

    legend.selectAll('text')
      .data(consoles)
      .enter()
      .append('text')
      .attr('x', rectWidth + 3)
      .attr('y', (d, i) => i * (rectHeight + 5) + (rectHeight / 2))
      .text((d) => d)
      .style("alignment-baseline", "middle")
      .style('font-size', `${height / 36}px`)
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
