import {Main} from "./styled";
import {ReactNode} from "react";

type ContainerProps = {
    children: ReactNode;
}

const Container = ({children}: ContainerProps) => <Main>{children}</Main>;

export default Container;
