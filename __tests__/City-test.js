import React from 'react';
import City from '../src/screens/City';
import renderer from 'react-test-renderer';

test('City snapshot',()=>{
    const snap = renderer.create(
        <City />
    );
expect(snap).toMatchSnapshot();
}); 

