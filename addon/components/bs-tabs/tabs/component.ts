import Component from '@glimmer/component';

type Args = {
  content: any[];
  selected: any;
  contentPath: string;
  onItemSelected(): void
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class BsTabs extends Component<Args> {
}
