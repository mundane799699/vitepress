# 尝试在现有next.js项目中集成shadcn遇到的坑
## 起因

看到很多人都说shadcn好，于是打算尝试一下，集成在现有的项目中。

目前这个项目我使用的是一个模板：https://github.com/nextjsTemplates/play-nextjs

模板中的调色方案使用的是https://tailgrids.com/

## 集成步骤

问了claude，回答如下：

![](https://cdn.mundane.ink/202408161817595.png)

第1步

``` bash
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react
```

第2步

``` bash
npm i -D @shadcn/ui
```

第3步

```bash
npx shadcn-ui init
```

第4步(我还没做)

```
npx shadcn-ui add button
```

## 遇到的问题

为什么第4步没做呢？因为在第4步之前就遇到了问题。

- 第1个问题

之前定义的主题色变成了黑蓝色。要改回来是改这里

在全局的css样式文件中，就是之前写了

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

的那个。我的是index.css



修改--primary如下：

```
--primary: 17 78% 60%;
```

因为之前是十六进制rgb格式的颜色，还得转成这种hsl的格式，用了一个工具https://tools.fun/color.html

将#e87549转成了hsl(17,78%,60%)

- 第2个问题

透明度失效了，之前的className里是这么写的"bg-primary bg-opacity-20 "

引入shadcn之前：
![](https://cdn.mundane.ink/202408161828983.png)

引入shadcn之后：
![](https://cdn.mundane.ink/202408161829044.png)

在stackoverflow和github issues里搜到了类似的问题

https://stackoverflow.com/questions/77665503/issue-with-tailwind-css-and-shadcn-ui-in-applying-background-opacity-to-custom-c

https://github.com/shadcn-ui/ui/issues/560

解决方法：

在index.css添加`--tw-bg-opacity: 1;`

修改tailwind.config.ts:

``` typescript
  ...        
  primary: {
    DEFAULT: "hsl(var(--primary)/var(--tw-bg-opacity))",
    foreground: "hsl(var(--primary-foreground)/var(--tw-bg-opacity))",
  },
  ...
```

这样透明度就生效了

  

- 第3个问题

  夜间模式下主题色和背景色有问题，暂时还没解决
  
  引入之前：
  
  ![](https://cdn.mundane.ink/202408161832302.png)

引入之后

![](https://cdn.mundane.ink/202408161833278.png)

## 总结

在已有项目中集成shadcn问题还是挺多的，要对css变量等概念有一定的理解，并且还需要好好看一下tailwindcss和shadcn的文档关于怎么自定义颜色和主题色，比如https://tailwindcss.com/docs/customizing-colors

目前我时间有限，打算暂时放弃在现有项目中集成shadcn，准备只集成一下radix。开新坑的时候可以在全新项目中集成shadcn。

## 参考

[Tailwind CSS 组件框架 shadcn/ui 使用笔记](https://heibaimeng.com/post/235)

https://ui.shadcn.com/docs/theming

https://ui.shadcn.com/themes

## 工具推荐

#### uicolorfule

在阮一峰的[weekly](https://github.com/ruanyf/weekly/issues/4944)上看到的

【网站自荐】🎨 轻松在线生成 Shadcn 和 Tailwind 颜色主题

https://uicolorful.com/

#### tailgrids

一套商务的tailwindcss配色方案

https://tailgrids.com/



