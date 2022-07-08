export const savedLayouts = [];
export const defaultLayouts = [
    {
        name: "VJing",
        isMany: true,
        rows: [
            {
                flex: 1,
                cols: [
                    {
                        flex: 1,
                        modules: [
                            { name: "monitor", flex: 0 },
                            { name: "params", flex: 1 },
                        ]
                    }, {
                        flex: 1,
                        modules: [
                            { name: "monitor", flex: 0 },
                            { name: "params", flex: 1 },
                        ]
                    }, {
                        flex: 1,
                        modules: [
                            { name: "monitor", flex: 0, params: {
                                selected: "output",
                            } },
                            { name: "params", flex: 1 },
                        ]
                    },
                    // {
                    //     flex: 1,
                    //     modules: [
                    //         { name: "monitor", flex: 0 },
                    //         { name: "params", flex: 1 },
                    //     ]
                    // }
                ]
            },
        ]
    },
    {
        name: "Single",
        isMany: false,
        rows: [
            {
                flex: 1,
                cols: [
                    {
                        flex: 1.4,
                        modules: [
                            { name: "monitor", flex: 1, grow: true },
                        ]
                    },
                ]
            }
            ]
    },
    {
        name: "Sketching",
        isMany: false,
        rows: [
            {
                size: 0.5,
                cols: [
                    {
                        size: 0.5,
                        modules: [
                            { name: "monitor", flex: 1, grow: true },
                        ]
                    },
                    {
                        size: 0.5,
                        modules: [
                            { name: "exports", minimized: true },
                            { name: "params" },
                        ]
                    },
                ]
            },
            {
                size: 0.5,
                cols: [
                    {
                        modules: [
                            { name: "midi" },
                        ]
                    }
                ],
            }
            
            // {
            //     flex: 1,
            //     cols: [
            //         {
            //             flex: 1,
            //             modules: [
            //                 { name: "console", flex: 0 },
            //             ]
            //         },
            //     ]
            // }
        ]
    },
    {
        name: "Output",
        rows: [
            {
                flex: 1,
                cols: [
                    {
                        flex: 1,
                        modules: [
                            { name: "output" }
                        ]
                    }
                ]
            }
        ]
    }
];
