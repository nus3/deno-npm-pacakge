import { assertStringIncludes } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { cowsayNus3 } from "./index.ts";

Deno.test("Cow should say Hello nus3!", () => {
  assertStringIncludes(cowsayNus3(), "Hello nus3!");
});
