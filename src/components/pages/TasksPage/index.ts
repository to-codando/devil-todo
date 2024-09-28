import { css, tsx } from "iares";
import { FooterUi, HeaderUi, PageLayout } from "@/ui";

const template = () => tsx`
   <${PageLayout} header=${HeaderUi} content=${HeaderUi} footer=${FooterUi} />
`;

export const TasksPage = () => ({
  template,
  styles,
});

const styles = () => css`
  tasks-page {
    display: flex;
    flex-wrap:wrap;
    width: 100%;
  }
`;
