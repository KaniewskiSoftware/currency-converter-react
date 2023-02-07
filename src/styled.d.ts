import "styled-components";

interface Colors {
    readonly [index: string]: string;
}

declare module "styled-components" {
    export interface DefaultTheme {
        color: Colors,
    }
}