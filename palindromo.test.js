const palindromo = require("./palindromo")

describe("Palidromo, si el parametro es", () => {
    test("string vacio deberia devolver el mismo", () => {
        expect(palindromo("")).toBe("")
    })
    test("indefinido (undefined) deberia devolver lo mismo", () => {
        expect(palindromo()).toBeUndefined()
    })
    test("ada deberia de devolver (es palindroma)", () => {
    expect(palindromo("ada")).toBe("es palindroma")
    })
    test("casa deberia de devolver (no es palindroma)", () => {
    expect(palindromo("casa")).toBe("no es palindroma")
    })
    test("calla deberia de devolver (no es palindroma)", () => {
    expect(palindromo("calla")).toBe("no es palindroma")
    })
    test("RaceCar  deberia de devolver (es palindroma)", () => {
    console.log("recuerda verificar tu funcion con mayusculas y minusculas");
    expect(palindromo("RaceCar")).toBe("es palindroma")
    })
    test("AmanaplanacanalPanama deberia de devolver (es palindroma)", () => {
    expect(palindromo("AmanaplanacanalPanama")).toBe("es palindroma")
    })
})