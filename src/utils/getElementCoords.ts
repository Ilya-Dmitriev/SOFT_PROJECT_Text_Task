export default function (id: string) {
  const coords = document
    .getElementsByClassName(id)[0]
    ?.getBoundingClientRect();
  return coords && coords;
}
