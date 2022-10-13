package shared

type V3SearchResult struct {
	Outlets []V3ResultOutlet `json:"outlets"`
	Routes  []V3ResultRoute  `json:"routes"`
	Status  *V3Status        `json:"status"`
	Stops   []V3ResultStop   `json:"stops"`
}
