type TClassNamesArgs = string | Record<string, unknown> | string[]

function classNames(...args: TClassNamesArgs[]): string {
    const classes: string[] = []

    args.forEach(arg => {
        if (typeof arg === 'string') {
            classes.push(arg)
        }
        if (Array.isArray(arg) && arg.length) {
            classes.push(...arg)
        }
        if (typeof arg === 'object' && !Array.isArray(arg)) {
            Object.entries(arg).forEach(([key, value]) => {
                if (Boolean(value)) {
                    classes.push(key)
                }
            })
        }
    })

    return classes.join(' ')
}

export default classNames

