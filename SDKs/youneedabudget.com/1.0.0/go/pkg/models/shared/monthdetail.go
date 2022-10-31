package shared

import (
"time")

type MonthDetail struct {
    Activity int64 `json:"activity"`
    AgeOfMoney *int32 `json:"age_of_money,omitempty"`
    Budgeted int64 `json:"budgeted"`
    Categories []Category `json:"categories"`
    Deleted bool `json:"deleted"`
    Income int64 `json:"income"`
    Month time.Time `json:"month"`
    Note *string `json:"note,omitempty"`
    ToBeBudgeted int64 `json:"to_be_budgeted"`
    
}

