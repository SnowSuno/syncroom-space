import React, { PropsWithChildren } from "react";
import { css } from "@emotion/css";

import Masonry from "react-masonry-css";

interface GridProps {
}

const grid = css`
  display: flex;
  width: auto;
  justify-content: center;
  gap: 10px;
`;

const column = css`
  width: auto !important;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Grid: React.FC<PropsWithChildren<GridProps>> = (props) => (
    <Masonry
        breakpointCols={3}
        className={grid}
        columnClassName={column}
    >
        {props.children}
    </Masonry>
);
