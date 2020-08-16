function f1(args) {
    console.log('f1', args)
    return args
}

function f2(args) {
    console.log('f2', args)
    return args
}

function f3(args) {
    console.log('f3', args)
    return args
}

// let res = f1(f2(f3('omg')))

let res = compose(f1, f2, f3)('omg4')

function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (arg) => a(b(arg)))
}

export default res