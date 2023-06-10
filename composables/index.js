import { useDisplay } from "vuetify";

const { smAndDown, mdAndUp, mdAndDown } = useDisplay();
let phoneView = smAndDown;
let tabletView = mdAndDown;
let largeView = mdAndUp;

export default breakpoints = { phoneView, tabletView, largeView };
