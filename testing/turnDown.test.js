const turnDown = require("../modules/turnDown").turnDown;

test("changes direction to the Down when current direction is North/South/East/West", () => {
    expect(turnDown("N")).toStrictEqual("D");
    expect(turnDown("S")).toStrictEqual("D");
    expect(turnDown("E")).toStrictEqual("D");
    expect(turnDown("W")).toStrictEqual("D");
});

test("changes direction to the Down when current direction is Up", () => {
    const Direction = "U";
    expect(turnDown(Direction)).toStrictEqual("S");
  });

  test("changes direction to the Down when current direction is Down", () => {
    const Direction = "D";
    expect(turnDown(Direction)).toStrictEqual("N");
  });



