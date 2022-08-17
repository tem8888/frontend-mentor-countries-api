import React from "react";
import { Container } from "../../theme/theme";
import { HeaderElement, ThemeSwitcher, Wrapper } from "./styles";
import { HeaderLink } from "./styles";

type Props = {
  theme: string;
  handleChangeTheme: () => void;
};

const Header = ({ theme, handleChangeTheme }: Props) => {
  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <HeaderLink to="/">Where in the world?</HeaderLink>
          <ThemeSwitcher onClick={handleChangeTheme}>
            <span
              aria-label={`${theme} mode`}
              role="img"
              style={{ marginRight: "0.5rem" }}
            >
              {theme === "dark" ? "🌜" : "🌞"}
            </span>
            {`${theme} mode`}
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};

export default Header;
