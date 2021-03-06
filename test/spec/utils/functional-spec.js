import { without } from '../../../src/scripts/utils/functional';

describe("Functional", () => {
  describe("Without", () => {
    let elements;

    beforeEach(function () {
      elements = [document.createElement("div"), document.createElement("div"), document.createElement("div")];
    });

    it("should remove values from an array", function () {
      const result = without([2, 3], [1, 2, 3, 4]);

      expect(result.length).toEqual(2);
      expect(result[0]).toEqual(1);
      expect(result[1]).toEqual(4);
    });

    it("should remove elements from an array", function () {
      const result = without([elements[0]], elements);

      expect(result.length).toEqual(2);
    });
  });
});