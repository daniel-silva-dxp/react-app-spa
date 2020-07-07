import { action } from '@storybook/addon-actions';
import React from 'react';
import { storiesOf } from '@storybook/react';

import Actions from '../src/components/Actions'

export default {
    title: 'Action',
    component: Actions,
  };

storiesOf('Button', module)
  .add('Button Default', () => <Actions getRepos={action('GET REPOS')} getStarreds={action('GET STARREDS')}/>)
