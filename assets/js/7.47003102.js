(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{445:function(t,r,e){"use strict";e.r(r);var o=e(17),a=Object(o.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言，Python 的设计具有很强的可读性，相比其他语言经常使用英文关键字，其他语言的一些标点符号，它具有比其他语言更有特色语法结构。")]),t._v(" "),e("p",[t._v("Python是一门十分高级的语言，这意味着它：")]),t._v(" "),e("ul",[e("li",[t._v("足够的简单，甚至十分适合学生学习")]),t._v(" "),e("li",[t._v("比起C,C++等语言，编写难度、代码量降低了太多")]),t._v(" "),e("li",[t._v("功能广泛，从数值计算，字符串处理，文件操作，到网站爬虫，图表生成，网站服务等等无所不能")]),t._v(" "),e("li",[t._v("有许多成熟的，完善的第三方库，能想到的基本都有")])]),t._v(" "),e("h2",{attrs:{id:"任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[t._v("#")]),t._v(" 任务")]),t._v(" "),e("p",[t._v("所用到的资源从"),e("a",{attrs:{href:"https://github.com/yubincloud/lab-scratch",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v("或"),e("a",{attrs:{href:"https://gitee.com/yubinCloud/lab-scratch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee"),e("OutboundLink")],1),t._v("中下载。")]),t._v(" "),e("h3",{attrs:{id:"task-1-python-基本数据类型和语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-1-python-基本数据类型和语法"}},[t._v("#")]),t._v(" TASK 1：Python 基本数据类型和语法")]),t._v(" "),e("p",[t._v("认识Python基本数据类型（int、float、list、dict、set、str 等），并学习它们的功能函数")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/1016959663602400",target:"_blank",rel:"noopener noreferrer"}},[t._v("廖雪峰-Python教程"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.runoob.com/python3/python3-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜鸟教程-Python3"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("基础部分+高级教程中的（正则表达式，Json，日期和时间，内置函数）简单过一遍知道即可，至少要知道有这些操作，实际使用时现用现查即可。")]),t._v(" "),e("p",[e("strong",[t._v("关键")]),t._v("：Python 各种内置数据结构的使用、对 class 的使用。")]),t._v(" "),e("h3",{attrs:{id:"task-2-第三方库的安装与使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-2-第三方库的安装与使用"}},[t._v("#")]),t._v(" TASK 2：第三方库的安装与使用")]),t._v(" "),e("p",[t._v("了解一下 pip 工具")]),t._v(" "),e("p",[e("strong",[t._v("任务描述")]),t._v("：")]),t._v(" "),e("ol",[e("li",[t._v("安装 requests 库，使用该库请求百度的首页页面（www.baidu.com），并写入一个文件之中。")]),t._v(" "),e("li",[t._v("安装 numpy 库，会使用它计算两个矩阵的乘积。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("ul",[e("li",[t._v("熟练使用一些功能强大的第三方库能极大地提升开发效率；")]),t._v(" "),e("li",[t._v("requests 库的学习可参见"),e("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/1016959663602400/1183249464292448",target:"_blank",rel:"noopener noreferrer"}},[t._v("廖雪峰-requests"),e("OutboundLink")],1),t._v("；")]),t._v(" "),e("li",[t._v("numpy 的学习可参见"),e("a",{attrs:{href:"https://numpy.org/doc/stable/user/quickstart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("numpy-QuickStart"),e("OutboundLink")],1),t._v("。")])])]),t._v(" "),e("h3",{attrs:{id:"task-3-解析网页并操作-mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-3-解析网页并操作-mongodb"}},[t._v("#")]),t._v(" TASK 3：解析网页并操作 MongoDB")]),t._v(" "),e("p",[e("strong",[t._v("任务描述")]),t._v("：")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("/resource/2019spring-course.html")]),t._v("中能够知晓全校的本学期课程信息，借助于网页解析库（bs4或lxml等）将数据解析出来，并将得到的数据写入 MongoDB 中：")]),t._v(" "),e("ul",[e("li",[t._v("去除掉无效的列：详细信息、课容量、选课限制说明、考试类型；")]),t._v(" "),e("li",[t._v("必须保留的列：课程学分、课程名称、任课教师、上课地点")])]),t._v(" "),e("p",[t._v("将数据通过 python 写入数据库 MongoDB 中。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("ul",[e("li",[t._v("解析网页内容推荐使用xpath/BeautifulSoup，看情况使用正则表达式；")]),t._v(" "),e("li",[t._v("使用 pymongo 库可以通过 python 将数据写入 MongoDB 中。")])])])])}),[],!1,null,null,null);r.default=a.exports}}]);