export interface PrimerPalette {
  canvasDefaultTransparent: string;
  pageHeaderBg: string;
  marketingIcon: MarketingIcon;
  diffBlob: DiffBlob;
  diffstat: Diffstat;
  searchKeyword: SearchKeyword;
  prettylights: Prettylights;
  codemirror: Codemirror;
  checks: Checks;
  project: Project;
  mktg: Mktg;
  control: Control;
  avatar: Avatar;
  topicTag: SelectedOrTopicTagOrCounter;
  counter: SelectedOrTopicTagOrCounter;
  selectMenu: SelectMenu;
  overlay: Overlay;
  header: Header;
  headerSearch: HeaderSearch;
  sidenav: Sidenav;
  menu: Menu;
  input: Input;
  timeline: Timeline;
  ansi: Ansi;
  btn: Btn;
  underlinenav: Underlinenav;
  actionListItem: ActionListItem;
  switchTrack: SwitchTrack;
  switchKnob: SwitchKnob;
  segmentedControl: SegmentedControl;
  treeViewItem: TreeViewItem;
  fg: Fg;
  canvas: Canvas;
  border: Border;
  shadow: Shadow;
  neutral: Neutral;
  accent: AccentOrSuccessOrAttentionOrSevereOrDangerOrOpenOrClosedOrDoneOrSponsors;
  success: AccentOrSuccessOrAttentionOrSevereOrDangerOrOpenOrClosedOrDoneOrSponsors;
  attention: AccentOrSuccessOrAttentionOrSevereOrDangerOrOpenOrClosedOrDoneOrSponsors;
  severe: AccentOrSuccessOrAttentionOrSevereOrDangerOrOpenOrClosedOrDoneOrSponsors;
  danger: AccentOrSuccessOrAttentionOrSevereOrDangerOrOpenOrClosedOrDoneOrSponsors;
  open: AccentOrSuccessOrAttentionOrSevereOrDangerOrOpenOrClosedOrDoneOrSponsors;
  closed: AccentOrSuccessOrAttentionOrSevereOrDangerOrOpenOrClosedOrDoneOrSponsors;
  done: AccentOrSuccessOrAttentionOrSevereOrDangerOrOpenOrClosedOrDoneOrSponsors;
  sponsors: AccentOrSuccessOrAttentionOrSevereOrDangerOrOpenOrClosedOrDoneOrSponsors;
  primer: Primer;
  scale: Scale;
}
export interface MarketingIcon {
  primary: string;
  secondary: string;
}
export interface DiffBlob {
  addition: AdditionOrDeletion;
  deletion: AdditionOrDeletion;
  hunk: Hunk;
  expander: Expander;
  selectedLineHighlightMixBlendMode: string;
}
export interface AdditionOrDeletion {
  numText: string;
  fg: string;
  numBg: string;
  lineBg: string;
  wordBg: string;
}
export interface Hunk {
  numBg: string;
}
export interface Expander {
  icon: string;
}
export interface Diffstat {
  deletionBorder: string;
  additionBorder: string;
  additionBg: string;
}
export interface SearchKeyword {
  hl: string;
}
export interface Prettylights {
  syntax: Syntax;
}
export interface Syntax {
  comment: string;
  constant: string;
  entity: string;
  storageModifierImport: string;
  entityTag: string;
  keyword: string;
  string: string;
  variable: string;
  brackethighlighterUnmatched: string;
  invalidIllegalText: string;
  invalidIllegalBg: string;
  carriageReturnText: string;
  carriageReturnBg: string;
  stringRegexp: string;
  markupList: string;
  markupHeading: string;
  markupItalic: string;
  markupBold: string;
  markupDeletedText: string;
  markupDeletedBg: string;
  markupInsertedText: string;
  markupInsertedBg: string;
  markupChangedText: string;
  markupChangedBg: string;
  markupIgnoredText: string;
  markupIgnoredBg: string;
  metaDiffRange: string;
  brackethighlighterAngle: string;
  sublimelinterGutterMark: string;
  constantOtherReferenceLink: string;
}
export interface Codemirror {
  text: string;
  bg: string;
  guttersBg: string;
  guttermarkerText: string;
  guttermarkerSubtleText: string;
  linenumberText: string;
  cursor: string;
  selectionBg: string;
  activelineBg: string;
  matchingbracketText: string;
  linesBg: string;
  syntax: Syntax1;
}
export interface Syntax1 {
  comment: string;
  constant: string;
  entity: string;
  keyword: string;
  storage: string;
  string: string;
  support: string;
  variable: string;
}
export interface Checks {
  bg: string;
  runBorderWidth: string;
  containerBorderWidth: string;
  textPrimary: string;
  textSecondary: string;
  textLink: string;
  btnIcon: string;
  btnHoverIcon: string;
  btnHoverBg: string;
  inputText: string;
  inputPlaceholderText: string;
  inputFocusText: string;
  inputBg: string;
  inputShadow: string;
  donutError: string;
  donutPending: string;
  donutSuccess: string;
  donutNeutral: string;
  dropdownText: string;
  dropdownBg: string;
  dropdownBorder: string;
  dropdownShadow: string;
  dropdownHoverText: string;
  dropdownHoverBg: string;
  dropdownBtnHoverText: string;
  dropdownBtnHoverBg: string;
  scrollbarThumbBg: string;
  headerLabelText: string;
  headerLabelOpenText: string;
  headerBorder: string;
  headerIcon: string;
  lineText: string;
  lineNumText: string;
  lineTimestampText: string;
  lineHoverBg: string;
  lineSelectedBg: string;
  lineSelectedNumText: string;
  lineDtFmText: string;
  lineDtFmBg: string;
  gateBg: string;
  gateText: string;
  gateWaitingText: string;
  stepHeaderOpenBg: string;
  stepErrorText: string;
  stepWarningText: string;
  loglineText: string;
  loglineNumText: string;
  loglineDebugText: string;
  loglineErrorText: string;
  loglineErrorNumText: string;
  loglineErrorBg: string;
  loglineWarningText: string;
  loglineWarningNumText: string;
  loglineWarningBg: string;
  loglineCommandText: string;
  loglineSectionText: string;
  ansi: Ansi;
}
export interface Ansi {
  black: string;
  blackBright: string;
  white: string;
  whiteBright: string;
  gray: string;
  red: string;
  redBright: string;
  green: string;
  greenBright: string;
  yellow: string;
  yellowBright: string;
  blue: string;
  blueBright: string;
  magenta: string;
  magentaBright: string;
  cyan: string;
  cyanBright: string;
}
export interface Project {
  headerBg: string;
  sidebarBg: string;
  gradientIn: string;
  gradientOut: string;
}
export interface Mktg {
  btn: Btn1;
}
export interface Btn1 {
  bg: string;
  shadow: Shadow1;
}
export interface Shadow1 {
  outline: string;
  focus: string;
  hover: string;
  hoverMuted: string;
}
export interface Control {
  borderColor: BorderColor;
}
export interface BorderColor {
  emphasis: string;
}
export interface Avatar {
  bg: string;
  border: string;
  stackFade: string;
  stackFadeMore: string;
  childShadow: string;
}
export interface SelectedOrTopicTagOrCounter {
  border: string;
}
export interface SelectMenu {
  backdropBorder: string;
  tapHighlight: string;
  tapFocusBg: string;
}
export interface Overlay {
  shadow: string;
  backdrop: string;
}
export interface Header {
  text: string;
  bg: string;
  divider: string;
  logo: string;
}
export interface HeaderSearch {
  bg: string;
  border: string;
}
export interface Sidenav {
  selectedBg: string;
}
export interface Menu {
  bgActive: string;
}
export interface Input {
  disabledBg: string;
}
export interface Timeline {
  badgeBg: string;
}
export interface Btn {
  text: string;
  bg: string;
  border: string;
  shadow: string;
  insetShadow: string;
  hoverBg: string;
  hoverBorder: string;
  activeBg: string;
  activeBorder: string;
  selectedBg: string;
  counterBg: string;
  primary: Primary;
  outline: Outline;
  danger: Danger;
}
export interface Primary {
  text: string;
  bg: string;
  border: string;
  shadow: string;
  insetShadow: string;
  hoverBg: string;
  hoverBorder: string;
  selectedBg: string;
  selectedShadow: string;
  disabledText: string;
  disabledBg: string;
  disabledBorder: string;
  icon: string;
  counterBg: string;
}
export interface Outline {
  text: string;
  hoverText: string;
  hoverBg: string;
  hoverBorder: string;
  hoverShadow: string;
  hoverInsetShadow: string;
  hoverCounterBg: string;
  selectedText: string;
  selectedBg: string;
  selectedBorder: string;
  selectedShadow: string;
  disabledText: string;
  disabledBg: string;
  disabledCounterBg: string;
  counterBg: string;
  hoverCounterFg: string;
  disabledCounterFg: string;
  counterFg: string;
}
export interface Danger {
  text: string;
  hoverText: string;
  hoverBg: string;
  hoverBorder: string;
  hoverShadow: string;
  hoverInsetShadow: string;
  hoverIcon: string;
  hoverCounterBg: string;
  selectedText: string;
  selectedBg: string;
  selectedBorder: string;
  selectedShadow: string;
  disabledText: string;
  disabledBg: string;
  disabledCounterBg: string;
  counterBg: string;
  icon: string;
  counterFg: string;
  disabledCounterFg: string;
  hoverCounterFg: string;
}
export interface Underlinenav {
  icon: string;
  borderHover: string;
}
export interface ActionListItem {
  inlineDivider: string;
  default: Default;
  danger: Danger1;
}
export interface Default {
  hoverBg: string;
  hoverBorder: string;
  activeBg: string;
  activeBorder: string;
  selectedBg: string;
}
export interface Danger1 {
  hoverBg: string;
  activeBg: string;
  hoverText: string;
}
export interface SwitchTrack {
  bg: string;
  hoverBg: string;
  activeBg: string;
  disabledBg: string;
  fg: string;
  disabledFg: string;
  border: string;
  checked: Checked;
}
export interface Checked {
  bg: string;
  hoverBg: string;
  activeBg: string;
  fg: string;
  disabledFg: string;
  border: string;
}
export interface SwitchKnob {
  bg: string;
  border: string;
  disabledBg: string;
  checked: Checked1;
}
export interface Checked1 {
  bg: string;
  disabledBg: string;
  border: string;
}
export interface SegmentedControl {
  bg: string;
  button: Button;
}
export interface Button {
  bg: string;
  hover: HoverOrActive;
  active: HoverOrActive;
  selected: SelectedOrTopicTagOrCounter;
}
export interface HoverOrActive {
  bg: string;
}
export interface TreeViewItem {
  chevron: Chevron;
  directory: Directory;
}
export interface Chevron {
  hoverBg: string;
}
export interface Directory {
  fill: string;
}
export interface Fg {
  default: string;
  muted: string;
  subtle: string;
  onEmphasis: string;
}
export interface Canvas {
  default: string;
  overlay: string;
  inset: string;
  subtle: string;
}
export interface Border {
  default: string;
  muted: string;
  subtle: string;
}
export interface Shadow {
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}
export interface Neutral {
  emphasisPlus: string;
  emphasis: string;
  muted: string;
  subtle: string;
}
export interface AccentOrSuccessOrAttentionOrSevereOrDangerOrOpenOrClosedOrDoneOrSponsors {
  fg: string;
  emphasis: string;
  muted: string;
  subtle: string;
}
export interface Primer {
  fg: Fg1;
  canvas: Canvas1;
  border: Border1;
  shadow: Shadow2;
}
export interface Fg1 {
  disabled: string;
}
export interface Canvas1 {
  backdrop: string;
  sticky: string;
}
export interface Border1 {
  active: string;
  contrast: string;
}
export interface Shadow2 {
  highlight: string;
  inset: string;
}
export interface Scale {
  black: string;
  white: string;
  gray?: string[] | null;
  blue?: string[] | null;
  green?: string[] | null;
  yellow?: string[] | null;
  orange?: string[] | null;
  red?: string[] | null;
  purple?: string[] | null;
  pink?: string[] | null;
  coral?: string[] | null;
}
