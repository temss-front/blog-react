type TClassNamesArgs = string | Record<string, unknown> | string[];

export default function classNames(...args: TClassNamesArgs[]): string {
    const classes: string[] = [];

    args.forEach((arg) => {
        if (typeof arg === 'string') {
            classes.push(arg);
        }
        if (Array.isArray(arg) && arg.length) {
            classes.push(...arg.filter(Boolean));
        }
        if (typeof arg === 'object' && !Array.isArray(arg)) {
            Object.entries(arg).forEach(([key, value]) => {
                if (value) {
                    classes.push(key);
                }
            });
        }
    });

    return classes.join(' ');
}
