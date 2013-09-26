#grunt配置

grunt安装，-g全局安装

	npm install -g grunt-cli

新建package.json文件

	{
		"name": "grunt-test",
		"version": "0.1.0",
		"devDependencies": {
			"grunt": "~0.4.1",
			"grunt-contrib-jshint" : "",		//js语法检查
			"grunt-contrib-uglify" : "",		//js代码压缩
			"grunt-contrib-concat" : "",		//文件
			"grunt-contrib-clean"  : "",		//删除文件
			"grunt-contrib-copy"   : "",		//复制文件
			"grunt-contrib-watch"  : "",		//监视文件是否发生变化
			"grunt-contrib-qunit " : "",		//单元测试
			"grunt-contrib-less "  : "",		//less
			"grunt-contrib-yuidoc" : ""			//生成文档
		}
	}

安装所需的组件

```shell
npm install
```

监视文件
```shell
grunt test
```

合并压缩文件，编译less文件
```shell
grunt default
```

