import { css, tsx } from "iares";

type Props = {
  height?: "50px" | "75px" | "100px" | "125px" | "auto";
};

type Params = {
  props: Props;
};

const template = () => tsx`
  <h1 class="title-ctx">Header ui</h1>
`;

export const HeaderUi = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = ({ props }: Params) => {
  return css`
  header-ui,
  header-ui > h1 {
    display:flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width:100%;
  }
  header-ui {
    height: ${props?.height || "75px"};
    padding:0 1em;
    position: fixed;
    top:0;
  }
  .title-ctx {
    color: #ff6600
  }
`;
};
