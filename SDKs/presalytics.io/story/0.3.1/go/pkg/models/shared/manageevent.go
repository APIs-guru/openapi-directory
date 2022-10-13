package shared

type ManageEventActionEnum string

const (
	ManageEventActionEnumCreate ManageEventActionEnum = "create"
	ManageEventActionEnumFire   ManageEventActionEnum = "fire"
	ManageEventActionEnumChange ManageEventActionEnum = "change"
	ManageEventActionEnumDelete ManageEventActionEnum = "delete"
)

type ManageEvent struct {
	Action       *ManageEventActionEnum `json:"action"`
	ActionParams map[string]interface{} `json:"action_params"`
	Name         *string                `json:"name"`
}
