#grunt配置

grunt安装，-g全局安装

	npm install -g grunt-cli

新建package.json文件

	{
		"name": "grunt-test",
		"version": "0.1.0",
		"devDependencies": {
			"grunt": "~0.4.1",
			"grunt-contrib-jshint" : "",
			"grunt-contrib-uglify" : "",
			"grunt-contrib-concat" : "",
			"grunt-contrib-clean"  : "",
			"grunt-contrib-copy"   : "",
			"grunt-contrib-watch"  : "",
			"grunt-contrib-qunit " : "",
			"grunt-contrib-less "  : ""
		}
	}

安装所需的组件

```shell
	npm install
```

安装jsdoc(需要安装jdk和git)

```shell
	npm install -g git://github.com/jsdoc3/jsdoc.git
```