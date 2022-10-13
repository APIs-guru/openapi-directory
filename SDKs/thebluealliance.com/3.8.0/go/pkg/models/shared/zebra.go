package shared

type ZebraAlliances struct {
	Blue []ZebraTeam `json:"blue"`
	Red  []ZebraTeam `json:"red"`
}

type Zebra struct {
	Alliances ZebraAlliances `json:"alliances"`
	Key       string         `json:"key"`
	Times     []float64      `json:"times"`
}
