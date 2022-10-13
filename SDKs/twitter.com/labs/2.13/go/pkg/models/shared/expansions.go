package shared

type Expansions struct {
	Media  []interface{} `json:"media"`
	Places []interface{} `json:"places"`
	Polls  []Poll        `json:"polls"`
	Tweets []interface{} `json:"tweets"`
	Users  []interface{} `json:"users"`
}
