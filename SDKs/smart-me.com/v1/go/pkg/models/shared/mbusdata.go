package shared

import (
	"time"
)

type MBusData struct {
	Date     *time.Time `json:"Date" form:"name=Date"`
	Telegram *string    `json:"Telegram" form:"name=Telegram"`
}
