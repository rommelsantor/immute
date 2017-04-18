# immute
## Natively, Deeply Immutable Objects
Safe, recursive immutability using Object.freeze() with built-in detection and prevention of cyclic references.

While this implementation mitigates the possibility of a circular reference breaking your app, it is still possible to encounter and recurse on an object that cause issues. `window` is the most obvious of such objects and is explicitly ignored by `immute()`.
