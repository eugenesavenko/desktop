import Editor from './editor'


export default class Vim implements Editor {

  public get name():string {
    return 'Vim'
  }

  public get icon(): string {
    return ''
  }

  public async isEditorInstalled(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      resolve(false);
    });
  }

  public async isPluginInstalled(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      resolve(false);
    });
  }

  public async installPlugin(): Promise<void> {
    return new Promise<void>(resolve => {
      resolve();
    });
  }

  public async uninstallPlugin(): Promise<void> {
    return new Promise<void>(resolve => {
      resolve();
    });
  }
}
