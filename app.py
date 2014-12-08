#!/usr/bin/env python
#-*-encoding:utf-8-*-

import os
import json

import bottle
from bottle import run
from bottle import route
from bottle import request
from bottle import template
from bottle import static_file
from bottle import default_app

import qiniu
import qiniu.conf
import qiniu.rs
import qiniu.io

qiniu.conf.ACCESS_KEY = 'g90ltJ7E4c5pZItk-QNzhf099RF8UEBcVLugtEF9'
qiniu.conf.SECRET_KEY = 'uSBRqIJkuBkIulvc4_bsyhjuGeik6Ha3M5-PBrUi'
bucket_name = 'raspberry-pi'
base_url = 'http://raspberry-pi.qiniudn.com/'

DEV_ROOT = os.path.realpath(os.path.dirname(__file__))
bottle.TEMPLATE_PATH.append(DEV_ROOT+'/templates/')

@route('/')
def index():
	return template('index')

@route('/upload', method='POST')
def upload():
    f = request.files.values()
    if f:
        f = f[0]
    policy = qiniu.rs.PutPolicy(bucket_name)
    uptoken = policy.token()
    extra = qiniu.io.PutExtra()
    extra.mime_type = f.type
    ret, err = qiniu.io.put(uptoken, f.filename, f.file.read(), extra)
    #print ret
    #print err
    ret['baseurl'] = base_url
    return json.dumps(ret)

@route('/static/css/<path:path>')
def css(path):   
	return static_file(path, root=DEV_ROOT+'/static/css/')

@route('/static/js/<path:path>')
def js(path):
    return static_file(path, root=DEV_ROOT+'/static/js/')


@route('/static/fonts/<path:path>')
def js(path):
    return static_file(path, root=DEV_ROOT+'/static/fonts/')

@route('/static/img/<path:path>')
def js(path):
    return static_file(path, root=DEV_ROOT+'/static/img/')

if __name__ == '__main__':
	run(host="192.168.1.105", port=8000, reloader=True)

app = default_app()
