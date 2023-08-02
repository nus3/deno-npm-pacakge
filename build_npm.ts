import { build, emptyDir } from "https://deno.land/x/dnt@0.37.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    name: "@nus3/deno-package",
    version: Deno.args[0],
    description: "String function that returns where the cow says Hello nus3",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/nus3/deno-npm-package.git",
    },
    bugs: {
      url: "https://github.com/nus3/deno-npm-package/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
