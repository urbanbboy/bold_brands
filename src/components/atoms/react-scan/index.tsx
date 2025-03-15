// path/to/ReactScanComponent

"use client";
import { scan } from "react-scan";
import { JSX, useEffect } from "react";

export function ReactScan(): JSX.Element {
    useEffect(() => {
        scan({
            enabled: false,
        });
    }, []);

    return <></>;
}