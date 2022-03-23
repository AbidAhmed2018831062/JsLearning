console.log("Annyeonghasseyo, de irimi Mapimmida");

const map = new Map();

map.set("Abid", "Ahmed");

map.set(() => {
  console.log("Annyeong");
}, "2018831062");

console.log(map);

console.log(map.get("Abid"));

for (let [key, values] of map) {
  console.log(key, values);
}

map.forEach((values, key) => {
  console.log("The value for " + key + " is" + values);
});

for (let key of map.keys()) {
  console.log(key);
}
for (let key of map.values()) {
  console.log(key);
}
//map.delete("Abid");
console.log(map);
