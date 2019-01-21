import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    CentredPanel, FundContainer
} from '../..';

storiesOf('commponents/chain', module)

    .add('CentredPanel', () => (
        <CentredPanel>
            <span>CentredPanel</span>
            <span>CentredPanel</span>
        </CentredPanel>
    ));
    