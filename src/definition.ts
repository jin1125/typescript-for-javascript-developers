export{}

type MyExclude<T, U> = T extends U ? never : T

type DebugType = () => void;
type SomeType = string | number | DebugType;

type FunctionType = Exclude<SomeType, string | number>
type MyFunctionType = MyExclude<SomeType, string | number>

type FunctionTypeByExtract = Extract<SomeType, DebugType>

type NullableType = string | number | null | undefined;
type NonNullableType = NonNullable<NullableType>