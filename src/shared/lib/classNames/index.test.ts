import classNames from '.';

describe('classNames function', () => {
    it('should return empty string', () => {
        expect(classNames()).toBe('');
    });
    it('should return result with one string argument', () => {
        expect(classNames('test')).toBe('test');
    });
    it('should return result with all types of arguments', () => {
        expect(classNames('test', ['test2'], { test3: true })).toBe('test test2 test3');
    });
    it('should return result with one false in object argument and undefined in array argument', () => {
        expect(classNames('test', ['test2', undefined], { test3: true, test4: false })).toBe('test test2 test3');
    });
});
