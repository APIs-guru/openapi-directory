#!/usr/bin/env node

'use strict';

const fs = require('fs');

const removeMarkdown = require('remove-markdown');
const j2x = require('jgexml/json2xml.js');

function finish(data) {
	let feed = {};
	let rss = {};

  let d = new Date();

	rss['@version'] = '2.0';
	rss["@xmlns:atom"] = 'http://www.w3.org/2005/Atom';
	rss.channel = {};
	rss.channel.title = 'APIs.guru OpenAPI directory RSS feed';
  rss.channel.link = 'https://api.apis.guru/v2/list.rss';
	rss.channel["atom:link"] = {};
	rss.channel["atom:link"]["@rel"] = 'self';
	rss.channel["atom:link"]["@href"] = rss.channel.link;
	rss.channel["atom:link"]["@type"] = 'application/rss+xml';
	rss.channel.description = 'APIs.guru OpenAPI directory RSS feed';
	rss.channel.webMaster = 'mike.ralphson@gmail.com (Mike Ralphson)';
	rss.channel.pubDate = new Date().toUTCString();
	rss.channel.generator = 'openapi-directory https://github.com/apis-guru/openapi-directory';
	rss.channel.item = [];

  for (let api in data) {

      let p = data[api].versions[data[api].preferred];
      if (p && p.info) {
			  let i = {};
			  i.title = p.info.title;
			  i.link = p.info["x-origin"][0].url;
			  i.description = removeMarkdown(p.info.description ? p.info.description.trim().split('\n')[0] : p.info.title);
			  i.category = 'APIs';
			  i.guid = {};
			  i.guid["@isPermaLink"] = 'false';
			  i.guid[""] = api;
			  i.pubDate = new Date(p.updated).toUTCString();

			  if (p.info["x-logo"]) {
				  i.enclosure = {};
				  i.enclosure["@url"] = p.info["x-logo"].url;
				  i.enclosure["@length"] = 15026;
				  i.enclosure["@type"] = 'image/jpeg';
          if (typeof i.enclosure["@url"] === 'string') {
            let tmp = i.enclosure["@url"].toLowerCase();
            if (tmp.indexOf('.png')>=0) i.enclosure["@type"] = 'image/png';
            if (tmp.indexOf('.svg')>=0) i.enclosure["@type"] = 'image/svg+xml';
          }
          else console.warn(api,i.enclosure["@url"]);
			  }

			  rss.channel.item.push(i);
      }
	}

	feed.rss = rss;
	let s = j2x.getXml(feed,'@','',2);
  return s;
}

const listFile = './deploy/v2/list.json';
let xml = finish(JSON.parse(fs.readFileSync(listFile,'utf8')));
fs.writeFileSync('./deploy/v2/list.rss',xml,'utf8');
