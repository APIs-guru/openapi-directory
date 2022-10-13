package shared

type V3StopTicket struct {
	IsFreeFareZone   *bool   `json:"is_free_fare_zone"`
	TicketChecks     *bool   `json:"ticket_checks"`
	TicketMachine    *bool   `json:"ticket_machine"`
	TicketType       *string `json:"ticket_type"`
	TicketZones      []int32 `json:"ticket_zones"`
	VlineReservation *bool   `json:"vline_reservation"`
	Zone             *string `json:"zone"`
}
