import { RouterProvider } from "react-router";
import AppRouter from "./router/AppRouter.tsx"
import GlobalStyle from "./styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/theme/ThemeContext.tsx";

function App() {
    // 초기값 자리에 함수를 집어 넣을 수도 있음.
    // useState가 state를 만들 때 그 함수를 실행시키고 난 결과를 초기값으로 사용함
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        // localStorage에서 가져오는 값은, 무조건 string | null
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const onClick = () => {
        // setState에도 매개변수로 함수를 작성해줄 수 있는데
        // 이 때 함수의 매개변수 자리에는 "지금 현재 state 값"이 들어옴
        setTheme(prev  => prev === "dark" ? "light" : "dark");
    };

    // 2. Context 제공자로 묶어주기
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme: onClick }}>
            <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
                <GlobalStyle />
                <RouterProvider router={AppRouter()} />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

/*
    ThemeProvider로 감싸진 자식 컴포넌트들
    안에서 사용되는 styled-components 들에게
    해당 theme를 제공함
*/

export default App;
