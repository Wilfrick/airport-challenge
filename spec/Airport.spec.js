import Airport from '../src/airport.js';

describe('Airport', () => {
    describe('landPlane', () => {
        /*
            // test landPlane
            let ap = new Airport();
            let mockPlane1 = {};
            let mockPlane2 = {};
            expect(ap.planesOnGround).toHaveSize(0);
            ap.landPlane(mockPlane1);
            expect(ap.planesOnGround).toHaveSize(1);
            expect(ap.planesOnGround[0]).toBe(mockPlane1);
            ap.landPlane(mockPlane2);
            expect(ap.planesOnGround).toHaveSize(2);
            expect(ap.planesOnGround[0]).toBe(mockPlane1);
        expect(ap.planesOnGround[1]).toBe(mockPlane2);
        */
        let ap, mockPlane1, mockPlane2;
        beforeEach(() => {
            ap = new Airport();
            mockPlane1 = {};
            mockPlane2 = {};
        });
        it('airport should be empty for a new airport', () => { expect(ap.planesOnGround).toHaveSize(0); });
        describe('after landing one plane', () => {
            beforeEach(() => {
                ap.landPlane(mockPlane1);
            });
            it('airport should contain one plane', () => { expect(ap.planesOnGround).toHaveSize(1); });
            it('airport should contain the plane that landed', () => { expect(ap.planesOnGround[0]).toBe(mockPlane1); });
            describe('after landing a second, different, plane', () => {
                beforeEach(() => { ap.landPlane(mockPlane2); });
                it('airport should contain two aeroplanes', () => { expect(ap.planesOnGround).toHaveSize(2); });
                it('the first plane to have landed should not have been modified', () => { expect(ap.planesOnGround[0]).toBe(mockPlane1); });
                it('the second plane to have landed is the plane that we landed', () => { expect(ap.planesOnGround[1]).toBe(mockPlane2); });
            });
        });
    });

    describe('canSetCapacity', () => {
        /*
        // test canSetCapacity
        let airport = new Airport();
        expect(Number.isInteger(airport.defaultCapacity)).toBeTrue();
        expect(airport.defaultCapacity >= 0).toBeTrue();
        expect(airport.capacity).toBe(airport.defaultCapacity);
        const oldDefaultCapacity = airport.defaultCapacity;
        airport.setCapacity(3);
        expect(airport.capacity).toBe(3);
        expect(airport.defaultCapacity).toBe(oldDefaultCapacity);

        let airport = new Airport();
        const badCapacity = -3;
        const terribleCapacity1 = [];
        const terribleCapacity2 = { a: [], b: [], c: "oeun" };
        test(airport.setCapacity).given(badCapacity).throws(RangeError);
        test(airport.setCapacity).with(terribleCapacity1).throws(TypeError);
        test(airport.setCapacity).with(terribleCapacity2).throws(TypeError);
        test.showSummary();
            */

        let airport;
        beforeEach(() => {
            airport = new Airport();
        });
        it('defaultCapacity should be an integer', () => { expect(Number.isInteger(airport.defaultCapacity)).toBeTrue(); });
        it('default capacity should be non negative', () => { expect(airport.defaultCapacity).toBeGreaterThanOrEqual(0); });
        it('current capacity should be same value as the default', () => { expect(airport.capacity).toBe(airport.defaultCapacity); });
        describe('when the capacity is set to 3', () => {
            // const oldDefaultCapacity = airport.defaultCapacity; // doesn't work presumably because js is compiled
            let oldDefaultCapacity;
            beforeEach(() => {
                oldDefaultCapacity = airport.defaultCapacity;
                airport.setCapacity(3);
            });
            it('capacity should be 3', () => { expect(airport.capacity).toBe(3); });
            it('default capacity shouldn\'t change', () => { expect(airport.defaultCapacity).toBe(oldDefaultCapacity); });

        });
        describe('when the capacity is set to a bad value', () => {
            const badCapacity = -3;
            const terribleCapacity1 = [];
            const terribleCapacity2 = { a: [], b: [], c: "oeun" };
            it('should throw range error on bad numeric value', () => { expect(() => { airport.setCapacity(badCapacity) }).toThrowError(RangeError); });

            /*Is the following an acceptable unit test? 
    
    For context this method (setCapacity) usually expects a non negative integer and I have already tested the case where you pass in a negative integer separately. 
    I'm now adding some tests to check that this function throws the correct error with other values (things like an empty array and an object with a few hard coded properties). I have two cases to test, but they both run the same code and test for the same thing, just using a different parameter. Given that these tests both test for the same thing (that this function throws a TypeError when given very bad input) and should fail for the same reason (the function doesn't throw this error when given said bad input) am I allowed to use multiple asserts within the same `it` statement? If I wanted to split this into two tests I would use the same test description both times (as I don't care about the specific object that I'm passing in, just the fact that it's a bad value), which I think would defeat the point of splitting the test up. I also do want both test cases because I think that javascript might act irrationally with some of these objects and I'd like the sanity check.
    
    Any thoughts? */
            it('should throw type error on meaningless values', () => {
                expect(() => {
                    airport.setCapacity(terribleCapacity1);
                }).toThrowError(TypeError);
                expect(() => {
                    airport.setCapacity(terribleCapacity2);
                }).toThrowError(TypeError);
            });
        });
    });
});