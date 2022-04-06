export{}

type DebugType = () => void;
type SomeType = string | number | DebugType;

type FunctionType = Exclude<SomeType, string | number>
type NonFunctionType = Exclude<SomeType, DebugType>
type TypeExcludingFunction = Exclude<SomeType, Function>

type FunctionTypeByExtract = Extract<SomeType, DebugType>
type NonFunctionTypeByExtract = Extract<SomeType, string | number>
type FunctionTypeExtractingFunction = Extract<SomeType, Function>

type NullableType = string | number | null | undefined;
type NonNullableType = NonNullable<NullableType>