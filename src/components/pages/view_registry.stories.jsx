import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    LinkHash,
    MainContainer,
    Section,
    SectionContent,
    Centred,
    CentredPanel,
    FundContainer,
    BoxTitle,
    FlexContainerLeft,
    FlexContainerRight,
    FlexContainer,
    DbMenu,
    MenuPopup,
    MenuPopupItem,
    MenuSeparator,
    MenuPopupDeleteIcon,
    MenuPopupTransferIcon,
    MenuPopupAccountIcon,
    MenuPopupEditIcon,
    BenContainer,
    BenPieChart,
    MenuPopupResumeIcon,
    MenuPopupPauseIcon,
    ProgressBar,
    CircleLable,
    PageTitle,
    AddNewRecordButton,
    FormField,
    TableRecords,
    Button,
    calculateBensShares,
    InfoButton,
    DatabaseItemsContainer,
    DbMenuPoints,
    Text,
} from '../..';

const totalFee = 3;
const funded = '5';

const beneficiaries = [
    {
        address: '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef',
        stake: 22,
    },
    {
        address: '0xb175b6F3A4C712Da8CC59A824F1d3BC31f398CB8',
        stake: 123,
    },
    {
        address: '0x805dD5291406D081c7100916E1ACdb070d5b4DC5',
        stake: 98,
    },
    {
        address: '0x885dD5291406D081c9900916E1ACdb070d5b4DD5',
        stake: 40,
    },
    {
        address: '0x555dD52914000081c990091222ACdb070d5b4Dz1',
        stake: 66,
    },
];

const Disabled = {
    backgroundColor: '#3d3b56',
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: '0.6',
    borderRadius: '3px',
    zIndex: '99999',
};

const name = 'Appstore';
const admin = '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef';
const isDbPaused = null;
const databaseSymbol = ' APP';
const isSchemaExist = false;

const PagesViewRegistry = ({ showTable, disabled }) => (
    <MainContainer>
        <Section>
            <div style={ { marginLeft: '15px' } }>
                <Button color='blue' style={ { marginRight: '15px' } } to='/'>BACK TO CHAINGEAR</Button>
                {!isSchemaExist && (
                    <Button color='blue' to={ `/schema/${databaseSymbol}` }>
                        Define schema
                    </Button>
                )}
            </div>
        </Section>
        <PageTitle>{name}</PageTitle>
        <ProgressBar>
            <CircleLable type='complete' number='1' text='Registry initialization' />
            <CircleLable type='edit' number='2' text='Schema definition' />
            <CircleLable number='3' text='Contract code saving' />
        </ProgressBar>

        <FlexContainer line>
            <FlexContainerLeft>
                Symbol:
                {databaseSymbol}
            </FlexContainerLeft>
            <FlexContainerRight>
                status:
                {isDbPaused ? 'paused' : 'operational'}
                <DbMenu>
                    <MenuPopup>
                        <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
                            Transfer ownership
                        </MenuPopupItem>
                        <MenuSeparator />
                        <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>Fund registry</MenuPopupItem>
                        <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>Claim Funds</MenuPopupItem>
                        <MenuSeparator />
                        <MenuPopupItem icon={ <MenuPopupPauseIcon /> }>Pause database</MenuPopupItem>
                        <MenuPopupItem icon={ <MenuPopupResumeIcon /> }>
                            Resume database
                        </MenuPopupItem>
                        <MenuSeparator />
                        <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
                            Delete registry
                        </MenuPopupItem>
                    </MenuPopup>
                </DbMenu>
            </FlexContainerRight>
        </FlexContainer>
        <Section title='General'>
            <SectionContent style={ { width: '25%' } }>
                <CentredPanel>
                    <Text uppercase color='black' style={{marginBottom: '20px'}}>Created:</Text>
                    <Text uppercase color='black'>7/2/2018 17:13:33</Text>
                </CentredPanel>
            </SectionContent>

            <SectionContent style={ { width: '25%' } }>
                <CentredPanel>
                    <Text uppercase color='black' style={{marginBottom: '20px'}}>Admin:</Text>
                    <div>
                        <LinkHash value={ admin } />
                    </div>
                </CentredPanel>
            </SectionContent>

            <SectionContent style={ { width: '25%' } }>
                <CentredPanel>
                    <Text uppercase color='black' style={{marginBottom: '20px'}}>FUNDED:</Text>

                    <Text uppercase color='black'>
                        
                            {funded}
                            ETH
                        
                    </Text>
                </CentredPanel>
            </SectionContent>

            <SectionContent style={ { width: '25%' } }>
                <CentredPanel>
                    <Text uppercase color='black' style={{marginBottom: '20px'}}>FEES:</Text>

                    <Text uppercase color='black'>
                
                            {totalFee}
                            ETH
                    
                    </Text>
                </CentredPanel>
            </SectionContent>
        </Section>

        <Section>
            <SectionContent title='Overview' style={ { width: '70%' } } grow={ 3 }>
                <FormField label='Description' value='{description}' onUpdate='isOwner' />
                <FormField label='Tags' value='{tag}' />
                <FormField
                  label='Record Fee'
                  value='{entryCreationFee.toString()}'
                  valueType='ETH'
                  onUpdate='isOwner'
                />
                <FormField
                  label='Permissions'
                  value='{permissionGroupStr}'
                  onUpdate='isDbPaused'
                  icon={ <InfoButton /> }
                />
                <FormField label='Entries' value='{rows.length}' />
                <FormField label='Version' value='{contractVersion}' />
                <FormField label='Database address' value='{databaseAddress}' />
                <FormField label='Schema address' value='{entryCoreAddress}' />
                <FormField
                  label='Abi link'
                  value='QmdkrMcmKBWsg5K2senjLCFYLBxbqgamNF8d8ZC8xn1BHt'
                />
            </SectionContent>

            <SectionContent title='Beneficiaries' grow={ 0 } style={ { width: '30%' } }>
                <Centred>
                    <BenContainer>
                        <BenPieChart
                          bens={ beneficiaries }
                          calculateBensShares={ calculateBensShares }
                        />
                    </BenContainer>
                </Centred>
            </SectionContent>
        </Section>
        {!showTable && (
            <div>
                <FlexContainer line>
                    <FlexContainerLeft>RECORDS</FlexContainerLeft>

                    <FlexContainerRight>
                        <AddNewRecordButton>Add New Record</AddNewRecordButton>
                    </FlexContainerRight>
                </FlexContainer>
                
                <DatabaseItemsContainer>
                    { disabled && <div style={ Disabled } /> }
                    <TableRecords>
                        <thead>
                            <tr>
                                <th>Action</th> 
                                <th>
                                    <DbMenuPoints>
                                        <MenuPopup>
                                            <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
                                                Transfer Ownership
                                            </MenuPopupItem>
                                            <MenuSeparator />
                                            <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                Fund Registry
                                            </MenuPopupItem>
                                            <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                Claim Funds
                                            </MenuPopupItem>
                                            <MenuSeparator />
                                            <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
                                                Delete Registry
                                            </MenuPopupItem>
                                            <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
                                                Delete Registry
                                            </MenuPopupItem>
                                        </MenuPopup>
                                    </DbMenuPoints>
                                </th>
                                <th>
                                    <DbMenuPoints>
                                        <MenuPopup>
                                            <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
                                                Transfer Ownership
                                            </MenuPopupItem>
                                            <MenuSeparator />
                                            <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                Fund Registry
                                            </MenuPopupItem>
                                            <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                Claim Funds
                                            </MenuPopupItem>
                                            <MenuSeparator />
                                            <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
                                                Delete Registry
                                            </MenuPopupItem>
                                            <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
                                                Delete Registry
                                            </MenuPopupItem>
                                        </MenuPopup>
                                    </DbMenuPoints>
                                </th>
                                <th>
                                    <DbMenuPoints>
                                        <MenuPopup>
                                            <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
                                                Transfer Ownership
                                            </MenuPopupItem>
                                            <MenuSeparator />
                                            <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                Fund Registry
                                            </MenuPopupItem>
                                            <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                Claim Funds
                                            </MenuPopupItem>
                                            <MenuSeparator />
                                            <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
                                                Delete Registry
                                            </MenuPopupItem>
                                            <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
                                                Delete Registry
                                            </MenuPopupItem>
                                        </MenuPopup>
                                    </DbMenuPoints>
                                </th>
                                <th>
                                    <DbMenuPoints>
                                        <MenuPopup>
                                            <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
                                                Transfer Ownership
                                            </MenuPopupItem>
                                            <MenuSeparator />
                                            <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                Fund Registry
                                            </MenuPopupItem>
                                            <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                Claim Funds
                                            </MenuPopupItem>
                                            <MenuSeparator />
                                            <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
                                                Delete Registry
                                            </MenuPopupItem>
                                            <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
                                                Delete Registry
                                            </MenuPopupItem>
                                        </MenuPopup>
                                    </DbMenuPoints>
                                </th>
                            </tr>
                            <tr>
                                <th>Id</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                            </tr>
                            <tr>
                                <th>Funded</th>
                                <th>3 ETH</th>
                                <th>3 ETH</th>
                                <th>3 ETH</th>
                                <th>3 ETH</th>
                            </tr>
                            <tr>
                                <th>Owner</th>
                                <th><LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' /></th>
                                <th><LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' /></th>
                                <th><LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' /></th>
                                <th><LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Wallet</td>
                                <td>Chaingear</td>
                                <td>Dragons</td>
                                <td>ContractDeveloper</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                            </tr>
                            <tr>
                                <td>Developer</td>
                                <td>Congress</td>
                                <td>Congress</td>
                                <td>Dragonereum</td>
                                <td>ParityTech</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Wallet</td>
                                <td>Chaingear</td>
                                <td>Dragons</td>
                                <td>ContractDeveloper</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                            </tr>
                            <tr>
                                <td>Developer</td>
                                <td>Congress</td>
                                <td>Congress</td>
                                <td>Dragonereum</td>
                                <td>ParityTech</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Wallet</td>
                                <td>Chaingear</td>
                                <td>Dragons</td>
                                <td>ContractDeveloper</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                                <td>
                                    <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                </td>
                            </tr>
                            <tr>
                                <td>Developer</td>
                                <td>Congress</td>
                                <td>Congress</td>
                                <td>Dragonereum</td>
                                <td>ParityTech</td>
                            </tr>
                        </tbody>
                    </TableRecords>
                </DatabaseItemsContainer>
                
            </div>
        )}
    </MainContainer>
);

storiesOf('pages/view_registry', module)
    .add('registry', () => <PagesViewRegistry />)
    .add('registry_disabled_table', () => <PagesViewRegistry disabled='1' />)
    .add('registry_no_table', () => <PagesViewRegistry showTable='1' />);
