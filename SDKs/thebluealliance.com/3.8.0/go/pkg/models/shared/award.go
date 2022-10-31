package shared



type Award struct {
    AwardType int64 `json:"award_type"`
    EventKey string `json:"event_key"`
    Name string `json:"name"`
    RecipientList []AwardRecipient `json:"recipient_list"`
    Year int64 `json:"year"`
    
}

