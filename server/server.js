const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

// Proxy setup
app.use('/api', createProxyMiddleware({
  target: 'https://ccc.helloworldbox.com',
  changeOrigin: true,
  pathRewrite: {'^/api': ''}, // remove /api from the forwarded request
}));

module.exports = app;
