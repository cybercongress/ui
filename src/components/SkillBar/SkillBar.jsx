import * as React from 'react';
import { Pane, Text, Tooltip, Link } from 'evergreen-ui';
import styles from './SkillBar.less';
// import cx from 'classnames';

export const SkillBar = ({ children, value }) => (
    <Tooltip
              appearance='card'
              content={ (
                  <Pane paddingX={ 18 } paddingY={ 14 }>
                      <Pane marginBottom={ 12 }>
                          <Text size={300}>You have 337 993 BP out of 789 877 BP.</Text>
                      </Pane>
                      <Pane marginBottom={ 12 }>
                          <Text size={300}>Full regeneration of bandwidth points or BP happens in 24 hours.</Text>
                      </Pane>
                      <Pane display='flex' marginBottom={ 12 }>
                          <Text size={300}>
                          Current rate for 1 cyberlink is 400 BP.
                          </Text>
                          
                      </Pane>
                      <Pane>
                          <Text size={300}>
                                More on
                              {' '}
                              <Link textDecoration='none' color='green' cursor='pointer'>
                              Bandwidth
                              </Link>
                          </Text>
                      </Pane>
                  </Pane>
) }
            >
    <Pane height={ 25 } width='100%' backgroundColor='#fff' borderRadius={ 4 } position='relative'>
        <Pane
          height='100%'
          borderRadius='inherit'
          style={ { transition: 'width .2s ease-in' } }
          width={ `${value}%` }
          backgroundColor={
                value <= 25 ? '#d32f2f' : value < 50 ? '#f57c00' : value < 76 ? '#fbc02d' : '#4caf50'
            }
        >
            <Pane display='flex' alignItems='center' width='100%' height='100%' position='absolute' paddingX={20} 
            justifyContent={ value < 26 ? 'flex-end' : 'flex-start' }
            >
                <Text fontSize={ 18 } fontWeight='bold' color={ value < 26 ? '#d32f2f' : '#ffffff'}>
                    {`${value} %`}
                </Text>
            </Pane>
        </Pane>
    </Pane>
    </Tooltip>
);
