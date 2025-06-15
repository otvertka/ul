import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from 'shared/ui/Modal/Modal';


export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptas pariatur tenetur obcaecati. Quos fugiat debitis laudantium ipsam nesciunt ea quaerat adipisci saepe enim, molestias architecto. Eligendi possimus natus a quam nesciunt amet, harum repudiandae dicta quae dolor quisquam tempore vel similique minima distinctio consequatur perferendis. Velit voluptatem nostrum delectus blanditiis suscipit distinctio esse odit numquam aperiam nisi obcaecati adipisci, rerum animi doloribus officiis facilis natus quo exercitationem est dignissimos perferendis? Nisi eligendi deleniti itaque. Nostrum delectus accusamus quibusdam, facere atque commodi maxime vitae ducimus velit necessitatibus hic earum explicabo tempora fugiat nisi alias a vel provident vero obcaecati quidem'
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptas pariatur tenetur obcaecati. Quos fugiat debitis laudantium ipsam nesciunt ea quaerat adipisci saepe enim, molestias architecto. Eligendi possimus natus a quam nesciunt amet, harum repudiandae dicta quae dolor quisquam tempore vel similique minima distinctio consequatur perferendis. Velit voluptatem nostrum delectus blanditiis suscipit distinctio esse odit numquam aperiam nisi obcaecati adipisci, rerum animi doloribus officiis facilis natus quo exercitationem est dignissimos perferendis? Nisi eligendi deleniti itaque. Nostrum delectus accusamus quibusdam, facere atque commodi maxime vitae ducimus velit necessitatibus hic earum explicabo tempora fugiat nisi alias a vel provident vero obcaecati quidem'
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]


