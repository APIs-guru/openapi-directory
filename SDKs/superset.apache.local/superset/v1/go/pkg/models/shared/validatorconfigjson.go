package shared

type ValidatorConfigJSONOpEnum string

const (
	ValidatorConfigJSONOpEnumLessThan         ValidatorConfigJSONOpEnum = "<"
	ValidatorConfigJSONOpEnumLessThanEqual    ValidatorConfigJSONOpEnum = "<="
	ValidatorConfigJSONOpEnumGreaterThan      ValidatorConfigJSONOpEnum = ">"
	ValidatorConfigJSONOpEnumGreaterThanEqual ValidatorConfigJSONOpEnum = ">="
	ValidatorConfigJSONOpEnumEqualEqual       ValidatorConfigJSONOpEnum = "=="
	ValidatorConfigJSONOpEnumNotEqual         ValidatorConfigJSONOpEnum = "!="
)

type ValidatorConfigJSON struct {
	Op        *ValidatorConfigJSONOpEnum `json:"op"`
	Threshold *int32                     `json:"threshold"`
}
