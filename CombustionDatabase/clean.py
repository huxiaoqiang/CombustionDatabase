#!/usr/bin/env python
# -*- coding: utf-8 -*-
# pantianxiang@gmail.com 2014-11-26 00:24:56

import os
import fnmatch
import sys

import os

def clean(filepath):
	for dir, folders, files in os.walk('.'):
		for file in files:
			root, ext = os.path.splitext(file)
			if ext == '.pyc':
				os.remove( os.path.abspath(os.path.join( dir, file ) ) )

if __name__ == '__main__':
	clean(os.path.realpath(__file__));
