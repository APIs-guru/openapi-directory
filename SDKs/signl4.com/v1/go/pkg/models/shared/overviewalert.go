package shared

import (
	"time"
)

type OverviewAlert struct {
	AlertDeliveryStatus      *AlertDeliveryStatusInfo  `json:"alertDeliveryStatus"`
	Annotations              []AlertAnnotationInfo     `json:"annotations"`
	CategoryID               *string                   `json:"categoryId"`
	EventID                  *string                   `json:"eventId"`
	Flags                    *int32                    `json:"flags"`
	HistoryDetailed          *AlertHistoryInfoDetailed `json:"historyDetailed"`
	ID                       *string                   `json:"id"`
	LastModified             *time.Time                `json:"lastModified"`
	RequiredAcknowledgements *int32                    `json:"requiredAcknowledgements"`
	Status                   *int32                    `json:"status"`
	SubscriptionID           *string                   `json:"subscriptionId"`
	TeamID                   *string                   `json:"teamId"`
	Text                     *string                   `json:"text"`
	Title                    *string                   `json:"title"`
}
