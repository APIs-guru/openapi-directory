package shared

type UserLookupResponse struct {
	Data     []interface{} `json:"data"`
	Errors   []interface{} `json:"errors"`
	Includes *Expansions   `json:"includes"`
}
