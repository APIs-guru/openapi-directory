package shared




type ChangeOpEnum string

const (
    ChangeOpEnumAdd ChangeOpEnum = "add"
ChangeOpEnumRemove ChangeOpEnum = "remove"
ChangeOpEnumReplace ChangeOpEnum = "replace"
ChangeOpEnumMove ChangeOpEnum = "move"
ChangeOpEnumCopy ChangeOpEnum = "copy"
ChangeOpEnumTest ChangeOpEnum = "test"
)


type Change struct {
    From *string `json:"from,omitempty"`
    Op ChangeOpEnum `json:"op"`
    Path string `json:"path"`
    Value map[string]interface{} `json:"value,omitempty"`
    
}

