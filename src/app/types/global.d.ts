declare const __IS_DEV__: boolean;

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    const SVG: React.FunctionComponent<React.SVGProps<SVGElement>>;
    export default SVG;
}

declare module '*.png';
declare module '*.jpg';

