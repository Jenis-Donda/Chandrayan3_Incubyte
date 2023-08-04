const processCommands = require("../modules/processCommands").processCommands;

test("for the only one command", () => {
  const commands = ["b"];

  const start = {
    coordinates: [0, 0, 0],
    direction: "N",
  };

  const expected = {
    coordinates: [0, -1, 0],
    direction: "N",
  };

  const output = processCommands(commands, start);
  expect(output).toStrictEqual(expected);

});

test("for multiple commands", () => {
  const commands = ["f", "r", "u", "b", "l"];

  const start = {
    coordinates: [0, 0, 0],
    direction: "N",
  };
  const expected = {
    coordinates: [0, 1, -1],
    direction: "W",
  };

  const output = processCommands(commands, start);
  expect(output).toStrictEqual(expected);

});

test("for multiple commands", () => {
    const commands = ["f", "f", "u", "l", "l"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "W",
    };
    const expected = {
      coordinates: [-2, 0, 0],
      direction: "S",
    };
  
    const output = processCommands(commands, start);
    expect(output).toStrictEqual(expected);
    
  });

  test("for multiple commands", () => {
    const commands = ["f", "r", "u", "b", "r"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "U",
    };
    const expected = {
      coordinates: [0, 0, 0],
      direction: "E",
    };
  
    const output = processCommands(commands, start);
    expect(output).toStrictEqual(expected);
    
  });

  test("for multiple commands", () => {
    const commands = ["f", "r", "b", "b", "l"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "N",
    };
    const expected = {
      coordinates: [-2, 1, 0],
      direction: "N",
    };
  
    const output = processCommands(commands, start);
    expect(output).toStrictEqual(expected);
    
  });

  test("for multiple commands", () => {
    const commands = ["f", "f", "f", "f", "f"];
  
    const start = {
      coordinates: [5, -2, 1],
      direction: "E",
    };
    const expected = {
      coordinates: [10, -2, 1],
      direction: "E",
    };
  
    const output = processCommands(commands, start);
    expect(output).toStrictEqual(expected);
    
  });

  test("for multiple commands", () => {
    const commands = ["f", "r", "r", "l", "u"];
  
    const start = {
      coordinates: [2, -2, 1],
      direction: "S",
    };
    const expected = {
      coordinates: [2, -3, 1],
      direction: "U",
    };
  
    const output = processCommands(commands, start);
    expect(output).toStrictEqual(expected);
    
  });

  test("for multiple commands", () => {
    const commands = ["f", "r","d"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "N",
    };
    const expected = {
      coordinates: [0, 1, 0],
      direction: "D",
    };
  
    const output = processCommands(commands, start);
    expect(output).toStrictEqual(expected);
    
  });

  test("for multiple commands", () => {
    const commands = ["d", "l", "b", "b"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "W",
    };
    const expected = {
      coordinates: [-2, 0, 0],
      direction: "E",
    };
  
    const output = processCommands(commands, start);
    expect(output).toStrictEqual(expected);
    
  });

  test("for multiple commands", () => {
    const commands = ["r","r","r"];
  
    const start = {
      coordinates: [1, 1, 1],
      direction: "N",
    };
    
    const expected = {
      coordinates: [1,1,1],
      direction: "W",
    };
  
    const output = processCommands(commands, start);
    expect(output).toStrictEqual(expected);
    
  });
