const random = (length = 8) => {
  return Math.random().toString(16).substr(2, length);
};

export default function lista1() {
  return (
    <div>
      <span>
        Aqui 01: {random()}
        <br />
      </span>
      <span>
        Aqui 02: {random()}
        <br />
      </span>
      <span>
        Aqui 03: {random()}
        <br />
      </span>
      <span>
        Aqui 05: {random()}
        <br />
      </span>
      <span>
        Aqui 04: {random()}
        <br />
      </span>
      <span>
        Aqui 06: {random()}
        <br />
      </span>
      <span>
        Aqui 07: {random()}
        <br />
      </span>
      <span>
        Aqui 08: {random()}
        <br />
      </span>
      <span>
        Aqui 09: {random()}
        <br />
      </span>
      <span>
        Aqui 10: {random()}
        <br />
      </span>
    </div>
  );
}
