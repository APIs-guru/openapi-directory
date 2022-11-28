package shared

// Timezone
// Timezone information of the node.
type Timezone struct {
	Name   string `json:"name"`
	Offset string `json:"offset"`
}
