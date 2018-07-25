import React from 'react';
import Header from '../component/Header';
import renderer from 'react-test-renderer';
describe('Header', () => {
    it('should render correctly', () => {
        const header = renderer.create(React.createElement(Header, { title: 'Test' })).toJSON;
        expect(header).toMatchSnapshot();
    });
});
//# sourceMappingURL=Header.test.js.map