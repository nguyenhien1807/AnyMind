export enum KeyCode {
  tilde = 192,
  exclamation_mark = 49,
  at_sign = 50,
  hashtag = 51,
  dollar_sign= 52,
  percent = 53,
  caret= 54,
  and_sign = 55,
  start = 56,
  open_round_bracket = 57,
  close_round_bracket = 48,
  back_slash = 120,
  forward_slash = 191,
  open_curly_bracket = 219,
  close_curly_bracket = 221,
}

function keyFromValue(stringEnum: { [key: string]: string }, value: string): string | undefined {
  for (const k of Object.keys(stringEnum)) {
    if (stringEnum[k] === value) return k;
  }
  return undefined;
}
