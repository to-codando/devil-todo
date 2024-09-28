import { FamIcon } from "fam-code-ui";
import { css, tsx } from "iares";

const template = () => tsx`
  <ul class="list-ctx">
    <li class="list-item-ctx">
      <${FamIcon}
        name="filter_list"
        size="2"
      />
    </li>
    <li class="list-item-ctx">
      <${FamIcon}
        name="check"
        size="2"
      />
    </li>
    <li class="list-item-ctx">
      <${FamIcon}
        name="add"
        size="2"
      />
    </li>
    <li class="list-item-ctx">
      <${FamIcon}
        name="close"
        size="2"
      />
    </li>
    <li class="list-item-ctx">
      <${FamIcon}
        name="info_i"
        size="2"
      />
    </li>
  </ul>
`;

export const FooterUi = () => ({
  template,
  styles,
});

const styles = () => css`
  footer-ui,
  .list-ctx,
  .list-item-ctx {
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .list-ctx {
    justify-content: space-between;
  }
  .list-item-ctx {
    width: auto
  }
  .list-item-ctx:nth-of-type(3) {
    padding:0.5em;
    background:#128DFF;
    border-radius: 100%;
    border: 2px #1b1f2b solid;
  }
  .list-item-ctx:hover {
    cursor: pointer;
  }
`;
