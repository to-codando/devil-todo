import { css, tsx } from "iares";

type Component = () => unknown;

type Params = {
  props: {
    header: Component;
    content: Component;
    footer: Component;
  };
};

const template = ({ props }: Params) => {
  if (!props.header || !props.content || !props.footer) {
    throw new Error(
      "header, content and footer brops is not defined and must be.",
    );
  }
  return tsx`
  <div class="wrap-ctx">
    <div class="header-ctx">
      <${props.header} />
    </div>
    <div class="content-ctx">
      <${props.content} />
    </div>
    <div class="footer-ctx">
      <${props.footer} />
    </div>
  </div>
`;
};

export const PageLayout = () => ({
  template,
  styles,
});

const styles = () => css`
  page-layout,
  .wrap-ctx,
  .header-ctx,
  .content-ctx,
  .footer-ctx {
    display:flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }

  page-layout {}
  .header-ctx {
    position: fixed;
    top:0;
  }
  .content-ctx {}
  .footer-ctx {
    position: fixed;
    bottom:0;
  }
`;
