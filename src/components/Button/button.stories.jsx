import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { IconButton, Pane } from 'evergreen-ui';
import { Button } from '../../index';

storiesOf('Atoms|Button', module)
    .addDecorator(centered)

    .add('Button Gravity', () => <Button>Button</Button>)

    .add('Button Default', () => <Button>Button</Button>)

    .add('Button with an Icon', () => <Button iconBefore='cog'>Button</Button>)

    .add('Button Link', () => <a className='btn link-btn'>Button</a>)

    .add('IconButton', () => (
        <Pane display='flex'>
            <IconButton icon='trash' intent='danger' marginRight={ 10 } />
            <IconButton appearance='minimal' icon='notifications' iconSize={ 18 } />
        </Pane>
    ));
