# typescript-node-starter-max
Starers for developing node.js app using typescript with alias & esm

I want to use typescript with esm and alias. Before when I realized how difficult it is, I've tried it lots of ways. But there is not an elegant way to do that. But I still summary these ways.

## starter-alias
feature: Write in esm and alias, Compile to commonjs

Dev: nodemon & ts-node & tsconfig-paths
Build: tsc & tsc-alias

Advantage: fast

Disadvantage: esm compiles to commonjs

## starter-alias-esm
feature: Write in esm and alias, Compile to esm

Dev: nodemon & tsc & tsc-alias
Build: tsc & tsc-alias

Advantage: all is well!

Disadvantage: slow

## starter-alias-esm-dev
feature: Write in esm and alias, Compile to esm

> not recommend to use because [this](https://github.com/antfu/vite-node#when-not-to-use)

Dev: nodemon & vite-node

Build: tsc & tsc-alias

Advantage: fast

Disadvantage: vite-node still on beta & introduces some overhead