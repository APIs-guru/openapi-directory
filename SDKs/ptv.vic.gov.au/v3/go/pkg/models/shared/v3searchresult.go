package shared

type V3SearchResult struct {
	Outlets []V3ResultOutlet `json:"outlets,omitempty"`
	Routes  []V3ResultRoute  `json:"routes,omitempty"`
	Status  *V3Status        `json:"status,omitempty"`
	Stops   []V3ResultStop   `json:"stops,omitempty"`
}
