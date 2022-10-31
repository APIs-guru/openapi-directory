package shared

type ConnectionInfoBody struct {
	ConnectionServiceURI  *string  `json:"connectionServiceUri,omitempty"`
	ConnectionSessionID   *string  `json:"connectionSessionId,omitempty"`
	ConnectionSessionPath *string  `json:"connectionSessionPath,omitempty"`
	HostPublicKeys        []string `json:"hostPublicKeys,omitempty"`
	RelayEndpoint         *string  `json:"relayEndpoint,omitempty"`
	RelaySasToken         *string  `json:"relaySasToken,omitempty"`
	SessionToken          *string  `json:"sessionToken,omitempty"`
}
