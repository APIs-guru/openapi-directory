package shared

import (
	"time"
)

type MonthSummary struct {
	Activity     int64     `json:"activity"`
	AgeOfMoney   *int32    `json:"age_of_money"`
	Budgeted     int64     `json:"budgeted"`
	Deleted      bool      `json:"deleted"`
	Income       int64     `json:"income"`
	Month        time.Time `json:"month"`
	Note         *string   `json:"note"`
	ToBeBudgeted int64     `json:"to_be_budgeted"`
}
