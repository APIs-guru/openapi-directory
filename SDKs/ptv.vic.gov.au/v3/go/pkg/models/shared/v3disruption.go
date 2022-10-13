package shared

import (
	"time"
)

type V3Disruption struct {
	Colour           *string             `json:"colour"`
	Description      *string             `json:"description"`
	DisplayOnBoard   *bool               `json:"display_on_board"`
	DisplayStatus    *bool               `json:"display_status"`
	DisruptionID     *int64              `json:"disruption_id"`
	DisruptionStatus *string             `json:"disruption_status"`
	DisruptionType   *string             `json:"disruption_type"`
	FromDate         *time.Time          `json:"from_date"`
	LastUpdated      *time.Time          `json:"last_updated"`
	PublishedOn      *time.Time          `json:"published_on"`
	Routes           []V3DisruptionRoute `json:"routes"`
	Stops            []V3DisruptionStop  `json:"stops"`
	Title            *string             `json:"title"`
	ToDate           *time.Time          `json:"to_date"`
	URL              *string             `json:"url"`
}
