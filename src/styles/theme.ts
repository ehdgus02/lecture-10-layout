import type { DefaultTheme } from "styled-components";

/*
    새로 만들지 않고 재지정 하는 이유
    --- 이미 styled-components가 제공하고 있는 기능이
    저 DefaultTheme를 기반으로 제공하고 있기 때문.
    => styled-components의 메소드(기능)가 매개변수로 DefaultTheme를 받고록 강제하고 있기 때문에,
    우리는 DefaultTheme를 우리 입맛에 맞게끔 바꿔서 쓸 수 밖에 없다.
*/

export const LightTheme: DefaultTheme = {
    color: {
        background: "#ffffff",
        text: "#111111",
        primary: "#6c63ff",
        muted: "#f4f4f4",
    },
};

export const DarkTheme: DefaultTheme = {
    color: {
        background: "#111111",
        text: "#ffffff",
        primary: "#fcf3ff",
        muted: "#222222",
    },
};
