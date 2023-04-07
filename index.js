const tokenizer=require("./token")
const parser=require("./parser")
const transformer=require("./transform")
const codeGenerator=require("./generate")
const program=require("./code")

function compiler(input) {
    let tokens = tokenizer(input); //生成tokens
    let ast    = parser(tokens); //生成ast
    let newAst = transformer(ast); //拿到新的ast
    let output = codeGenerator(newAst); //生成新代码
    return output;
  }
console.log(compiler(program))