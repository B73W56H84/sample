#!/usr/bin/env node
"use strict";

var http     = require( 'http' );
var url      = require( 'url' );
var path     = require( 'path' );
var fs       = require( 'fs');

var input    = 'http://www.post.japanpost.jp/zipcode/dl/kogaki/zip/ken_all.zip';

var request  = http.get( url.parse(input), function(res) {
    res
	.pipe( fs.createWriteStream(path.basename(input)) )
	.on('error', function(e){
	    console.log( 'エラー: ', e.message );
	});
});
