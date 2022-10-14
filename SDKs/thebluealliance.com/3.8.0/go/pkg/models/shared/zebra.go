package shared

type ZebraAlliances struct {
	Blue []ZebraTeam `json:"blue,omitempty"`
	Red  []ZebraTeam `json:"red,omitempty"`
}

type Zebra struct {
	Alliances ZebraAlliances `json:"alliances"`
	Key       string         `json:"key"`
	Times     []float64      `json:"times"`
}
