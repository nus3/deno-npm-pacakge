import cowsay from "npm:cowsay@1.5.0";

console.log(cowsay.say({ text: "Hello nus3!" }));

export function cowsayNus3(): string {
  return cowsay.say({ text: "Hello nus3!" });
}
