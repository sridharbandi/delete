import { expect } from "chai";

describe('Use case tests', () => {

    it('3 is greater than 4', () => {
        expect(4).to.be.above(3)
    })

    it('Array [8, 9, 11, 23] length is 4', () => {
        let arr = [8, 9, 11, 23]
        expect(arr).to.have.lengthOf(4)
    })

    it('Strict equal 101 to ‘101’', () => {
        expect(101).to.equal(101)
    })

    it('Array [‘a’, ‘b’, ‘c’] contains ‘c’', () => {
        let arr = ['a', 'b', 'c']
        expect(arr).to.include('c')
    })
});