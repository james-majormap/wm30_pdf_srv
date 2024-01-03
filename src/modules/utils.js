import _ from "lodash";

const _convertKeys = (fn, o) => {
  // FormData 인 경우
  if (o instanceof FormData) {
    let f = new FormData();
    o.forEach((v, k) => f.append(fn(k), v));
    return f;
  }

  // JSON Array 인 경우
  else if (Array.isArray(o)) {
    return o.map(e => _convertKeys(fn, e));
  }

  // JSON Object 인 경우
  else if (_.isObject(o)) {
    const n = {};
    Object.keys(o).forEach(k => (n[fn(k)] = _convertKeys(fn, o[k])));
    return n;
  }

  return o;
}
export const keysToCamel = _convertKeys.bind(null, _.camelCase);
export const keysToSnake = _convertKeys.bind(null, _.snakeCase);
