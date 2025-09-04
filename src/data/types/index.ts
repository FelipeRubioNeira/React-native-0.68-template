/**
 * A type that represents either a success (with a value of type T)
 * or a failure (with an error of type E).
 */
type success<T> = { ok: true; value: T };
type failure<E> = { ok: false; error: E };
export type Result<T, E> = success<T> | failure<E>;
