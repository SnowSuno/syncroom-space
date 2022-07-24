import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Grid } from "../elements/Grid";

import { LayoutGroup, motion } from "framer-motion";

export const IndexPage: React.FC = () => {
    interface Item {
        id: string;
        length: number;
    }
    
    const data: Item[] = [
        { id: "1", length: 1 },
        { id: "2", length: 3 },
        { id: "3", length: 2 },
        { id: "4", length: 6 },
        { id: "5", length: 1 },
        { id: "6", length: 3 },
    ];
    
    
    return (
        <Grid>
            {data.map((item, index) =>
                <motion.div
                    layout
                    layoutId={item.id}
                    key={item.id}
                    style={{
                        width: 200,
                        background: "red",
                    }}
                >
                    {Array(item.length).fill(<div>qwer</div>)}
                </motion.div>,
            )}
        </Grid>
    );
};
