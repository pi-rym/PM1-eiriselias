const { Repository } = require("../scripts/models");

let repositorio;

describe("pruebas sobre la clase Repository",function(){
    beforeEach(()=>{
        repositorio = new Repository();
    })
    it("Repository debe ser una clase",function(){
        expect(typeof Repository.prototype.constructor).toBe("function");
    });
    it("debe ser una instacia de la clase Repository",()=>{
        expect(repositorio instanceof Repository).toBe(true);
    });
    it("debe tener un metodo getAllActivities",()=>{
        expect(repositorio.getAllActivities).toBeDefined();   
    });
    it("debe tener un metodo createActivity",()=>{
        expect(repositorio.createActivity).toBeDefined();   
    });
    it("debe tener un metodo deleteActivities",()=>{
        expect(repositorio.deleteActivity).toBeDefined();   
    });
})