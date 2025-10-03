import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
import avatar from 'shared/assets/tests/storybook.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 38,
        country: Country.Ukraine,
        lastname: 'jk',
        first: 'evg',
        city: 'Odesa',
        currency: Currency.USD,
        avatar,
    }
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};


export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};

