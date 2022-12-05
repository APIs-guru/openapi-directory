export function matchContentType(
  contentType: string,
  pattern: string
): boolean {
  let res = false;
  contentType
    .split(";")
    .map((ctPart: string) => {
      return ctPart.trim();
    })
    .forEach((ctPart: string) => {
      if (ctPart === pattern || pattern === "*" || pattern === "*/*") {
        res = true;
        return;
      }
      if (ctPart === pattern) {
        res = true;
        return;
      }
      const parts: string[] = ctPart.split("/");
      if (parts.length === 2) {
        if (`${parts[0]}/*` === pattern || `*/${parts[1]}` === pattern) {
          res = true;
          return;
        }
      }
    });
  return res;
}
