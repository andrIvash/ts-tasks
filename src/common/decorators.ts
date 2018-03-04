export function sealed(param: string) {
  return function (target: Function) {
    console.log(`Sealing the constructor ${param}`)
    Object.seal(target);
    Object.seal(target.prototype);
  }
}

export function logger<TFunction extends {new(...args:any[]):{}}>(target:TFunction) {
  const newConstructor: Function = function () {
    console.log(`Creating new instance ${target.name}`);
  }
  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target.constructor;

  return <TFunction>newConstructor;
}

export function writable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.writable = value;
  };
}