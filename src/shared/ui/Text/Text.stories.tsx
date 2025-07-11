import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem impsum',
    text: 'Description Description Description Description'
};
export const Error = Template.bind({});
Primary.args = {
    title: 'Title lorem impsum',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem impsum'
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description Description Description Description'
};

export const PrimaryDark = Template.bind({});
Primary.args = {
    title: 'Title lorem impsum',
    text: 'Description Description Description Description'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem impsum'
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyText.args = {
    text: 'Description Description Description Description'
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
