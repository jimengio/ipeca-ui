import React, { FC } from "react";
import { css } from "emotion";
import ShortenCode from "../../src/shorten-code";
import { DocDemo } from "@jimengio/doc-frame";

let DemoShortenCode: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="code">
        <div>
          <ShortenCode code={"1234567890"} />
        </div>
        <div>
          <ShortenCode code={"1234567890qwertyusdfgh"} />
        </div>
        <div>
          <ShortenCode code={"123456789012345678901234567890"} />
        </div>
      </DocDemo>
    </div>
  );
};

export default DemoShortenCode;

let styleContainer = null;
