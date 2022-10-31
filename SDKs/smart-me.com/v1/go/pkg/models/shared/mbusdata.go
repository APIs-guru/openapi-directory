package shared

import (
	"time"
)

type MBusData struct {
	Date     *time.Time `json:"Date,omitempty" form:"name=Date"`
	Telegram *string    `json:"Telegram,omitempty" form:"name=Telegram"`
}
