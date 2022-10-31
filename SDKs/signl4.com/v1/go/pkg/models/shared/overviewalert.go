package shared

import (
"time")

type OverviewAlert struct {
    AlertDeliveryStatus *AlertDeliveryStatusInfo `json:"alertDeliveryStatus,omitempty"`
    Annotations []AlertAnnotationInfo `json:"annotations,omitempty"`
    CategoryID *string `json:"categoryId,omitempty"`
    EventID *string `json:"eventId,omitempty"`
    Flags *int32 `json:"flags,omitempty"`
    HistoryDetailed *AlertHistoryInfoDetailed `json:"historyDetailed,omitempty"`
    ID *string `json:"id,omitempty"`
    LastModified *time.Time `json:"lastModified,omitempty"`
    RequiredAcknowledgements *int32 `json:"requiredAcknowledgements,omitempty"`
    Status *int32 `json:"status,omitempty"`
    SubscriptionID *string `json:"subscriptionId,omitempty"`
    TeamID *string `json:"teamId,omitempty"`
    Text *string `json:"text,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

