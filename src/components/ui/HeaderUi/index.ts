import { css, tsx } from "iares";

const template = () => tsx`
  <h1 class="title-ctx">Header ui</h1>
`;

export const HeaderUi = () => ({
  template,
  styles,
});

const styles = () => css`
  header-ui,
  header-ui > h1 {
    display:flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .title-ctx {
    color: #ff6600
  }
`;
