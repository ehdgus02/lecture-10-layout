import { RouterProvider } from "react-router";
import { AppRouter } from "./router/AppRouter.tsx"
import GlobalStyle from "./styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import { useState } from "react";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const onClick = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
            <GlobalStyle />
            <RouterProvider router={AppRouter(onClick)} />
        </ThemeProvider>
    );
}

/*
    ThemeProvider로 감싸진 자식 컴포넌트들
    안에서 사용되는 styled-components 들에게
    해당 theme를 제공함
*/

export default App;
