const sum = require('./sum');
const { normalizeField, parseNumberField, establishField } = require('./modules/FieldFunctions')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('1. A)', () => {
    expect(normalizeField(JSON.parse(fs.readFileSync("data/broken-database.json", "utf8"))  , 'name').toBe())
}