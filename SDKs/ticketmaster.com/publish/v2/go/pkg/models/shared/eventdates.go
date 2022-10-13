package shared

type EventDates struct {
	Access   *AccessDates `json:"access"`
	End      *EndDates    `json:"end"`
	Start    *StartDates  `json:"start"`
	Status   *EventStatus `json:"status"`
	Timezone *string      `json:"timezone"`
}
