export function helloWorld(names: Array<string>): string {
    return names.map<string>(name => 'hello ' + name).join(`\n`)
  }
  export function helloWorld(): string {
    const predecessor = Context.predecessor
    return 'hello ' + predecessor
  }