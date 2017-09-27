const express = require('express');

const app = express();

app.use('/css', express.static(__dirname + '/HTML/css'))
app.use('/css/plugins', express.static(__dirname + '/HTML/css/plugins'))
app.use('/fonts', express.static(__dirname + '/HTML/fonts'))
app.use('/fonts/et-line_icon-font', express.static(__dirname + '/HTML/fonts/et-line_icon-font'))
app.use('/fonts/font-awesome', express.static(__dirname + '/HTML/fonts/font-awesome'))
app.use('/img', express.static(__dirname + '/HTML/img'))
app.use('/img/blog', express.static(__dirname + '/HTML/img/blog'))
app.use('/img/full', express.static(__dirname + '/HTML/img/full'))
app.use('/img/logos', express.static(__dirname + '/HTML/img/logos'))
app.use('/img/mockup', express.static(__dirname + '/HTML/img/mockup'))
app.use('/img/portfolio', express.static(__dirname + '/HTML/img/portfolio'))
app.use('/img/team', express.static(__dirname + '/HTML/img/team'))
app.use('/js', express.static(__dirname + '/HTML/js'))
app.use('/js/plugins', express.static(__dirname + '/HTML/js/plugins'))
app.use('/media', express.static(__dirname + '/HTML/media'))
app.use('/plugin', express.static(__dirname + '/HTML/plugin'))
app.use('/plugin/rs-plugin', express.static(__dirname + '/plugin/rs-plugin'))
app.use('plugin/rs-plugin/css/settings.css ', express.static(__dirname + ''))
app.use('css/plugins/animate.css', express.static(__dirname + 'css'))

module.exports = app;