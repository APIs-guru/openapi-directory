package shared

type ManageEventActionEnum string

const (
	ManageEventActionEnumCreate ManageEventActionEnum = "create"
	ManageEventActionEnumFire   ManageEventActionEnum = "fire"
	ManageEventActionEnumChange ManageEventActionEnum = "change"
	ManageEventActionEnumDelete ManageEventActionEnum = "delete"
)

type ManageEvent struct {
	Action       *ManageEventActionEnum `json:"action,omitempty"`
	ActionParams map[string]interface{} `json:"action_params,omitempty"`
	Name         *string                `json:"name,omitempty"`
}
