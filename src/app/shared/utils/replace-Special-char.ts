export function replaceSpecialChar(str: string): string {
  str = str.replace("%7B%22", '{"').replace("%22%7D", '"}');
  let array = Array.from(str);
  let flag = false;
  let i = 0;
  while (true) {

    if (i > array.length) {
      break;
    }
    if (array[i] == '%') {
      flag = true;
    }
    if (flag) {
      flag = false;
      str = str.replace("%22", '"');
    }
    i++;


  }

  return str;
}
