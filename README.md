JavaScript Rollup With Dependencies But Set As "external" Demo
==============================================================

这个Demo对应的问题是，如果一个package：

1. 使用了某个第三方库，比如`force-number`，并放在`package.json`的`dependencies`中
3. 使用rollup打包，并且在`rollup.config.js`中，把`force-number`放在了`external`中

那么，当该package发布以后，别人使用它时，是否需要在`package.json`中声明对`force-number`的引用？

答案是“不用”。跟rollup没关系，而跟把`force-number`放在`dependencies`还是`devDependencies`中有关系：

1. 如果放在`dependencies`中，则不需要再次声明
2. 如果放在`devDependencies`中，则需要

该demo下有两个project：

1. `hello`: 是一个用rollup来打包的package，它已经通过`npm publish`发布到了npm server上
2. `main`: 将使用`hello`来验证是否还需要再次声明`force-number`的依赖

```
cd main
npm install
npm run demo
```

