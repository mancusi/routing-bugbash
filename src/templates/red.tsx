import * as React from "react";
import { templateForColor } from "../ColorBase";
import {Color} from "../PageLayout"
import img from "../imported.png";

// Red has an auth policy associated with so so YEXT_AUTH

const template = templateForColor(Color.RED)
export const getPath = template.getPath;
export const getHeadConfig = template.getHeadConfig;
const OverrideTemplate = (props: any) => {
  if (!template.default) {
    return "undefined";
  }

  const email = (window as any)?.YEXT_AUTH?.visitor?.email || "UNKNOWN!"

  return template.default({
    children: <div>
      {`You email is ${email}`}
      <img src="/simulated-prefix/assets/static.png"></img>
      <img src={img}></img>
      </div>
  });
};
export default OverrideTemplate;