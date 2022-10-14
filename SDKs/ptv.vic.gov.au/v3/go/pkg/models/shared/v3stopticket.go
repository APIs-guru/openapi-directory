package shared

type V3StopTicket struct {
	IsFreeFareZone   *bool   `json:"is_free_fare_zone,omitempty"`
	TicketChecks     *bool   `json:"ticket_checks,omitempty"`
	TicketMachine    *bool   `json:"ticket_machine,omitempty"`
	TicketType       *string `json:"ticket_type,omitempty"`
	TicketZones      []int32 `json:"ticket_zones,omitempty"`
	VlineReservation *bool   `json:"vline_reservation,omitempty"`
	Zone             *string `json:"zone,omitempty"`
}
