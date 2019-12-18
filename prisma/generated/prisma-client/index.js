"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Job",
    embedded: false
  },
  {
    name: "Industry",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://herokupractice-cf1e4183de.herokuapp.com/PracticeQ/dev`
});
exports.prisma = new exports.Prisma();
