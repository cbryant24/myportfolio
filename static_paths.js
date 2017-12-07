const express = require('express');

const app = express();

app.use('/css', express.static(__dirname + '/portfolio/css'))
app.use('/css/plugins', express.static(__dirname + '/portfolio/css/plugins'))
app.use('/fonts', express.static(__dirname + '/portfolio/fonts'))
app.use('/fonts/et-line_icon-font', express.static(__dirname + '/portfolio/fonts/et-line_icon-font'))
app.use('/fonts/font-awesome', express.static(__dirname + '/portfolio/fonts/font-awesome'))
app.use('/img', express.static(__dirname + '/portfolio/img'))
app.use('/img/blog', express.static(__dirname + '/portfolio/img/blog'))
app.use('/img/full', express.static(__dirname + '/portfolio/img/full'))
app.use('/img/logos', express.static(__dirname + '/portfolio/img/logos'))
app.use('/img/mockup', express.static(__dirname + '/portfolio/img/mockup'))
app.use('/img/portfolio', express.static(__dirname + '/portfolio/img/portfolio'))
app.use('/img/team', express.static(__dirname + '/portfolio/img/team'))
app.use('/js', express.static(__dirname + '/portfolio/js'))
app.use('/js/plugins', express.static(__dirname + '/portfolio/js/plugins'))
app.use('/media', express.static(__dirname + '/portfolio/media'))
app.use('/plugin', express.static(__dirname + '/portfolio/plugin'))
app.use('/plugin/rs-plugin', express.static(__dirname + '/plugin/rs-plugin'))
app.use('plugin/rs-plugin/css/settings.css ', express.static(__dirname + ''))
app.use('css/plugins/animate.css', express.static(__dirname + 'css'))

module.exports = app;