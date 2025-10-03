import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';


export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators= [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 38,
            country: Country.Ukraine,
            lastname: 'jk',
            first: 'evg',
            city: 'Odesa',
            currency: Currency.USD,
        }
    }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators= [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 38,
            country: Country.Ukraine,
            lastname: 'jk',
            first: 'evg',
            city: 'Odesa',
            currency: Currency.USD,
        }
    }
})]