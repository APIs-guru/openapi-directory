package shared

type ConnectionInfoBody struct {
	ConnectionServiceURI  *string  `json:"connectionServiceUri"`
	ConnectionSessionID   *string  `json:"connectionSessionId"`
	ConnectionSessionPath *string  `json:"connectionSessionPath"`
	HostPublicKeys        []string `json:"hostPublicKeys"`
	RelayEndpoint         *string  `json:"relayEndpoint"`
	RelaySasToken         *string  `json:"relaySasToken"`
	SessionToken          *string  `json:"sessionToken"`
}
