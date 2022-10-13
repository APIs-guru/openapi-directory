package shared

type SingleUserLookupResponse struct {
	Data     *interface{}  `json:"data"`
	Errors   []interface{} `json:"errors"`
	Includes *Expansions   `json:"includes"`
}
