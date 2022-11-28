package shared

// ActionToPost
// Container Class for an action to post
type ActionToPost struct {
	Actions  []ActionToPostItem `json:"Actions,omitempty"`
	DeviceID *string            `json:"DeviceID,omitempty"`
}
