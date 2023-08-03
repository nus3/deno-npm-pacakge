import cowsay from "npm:cowsay@1.5.0";

export function cowsayNus3(): string {
  return cowsay.say({ text: "Hello nus3!" });
}
