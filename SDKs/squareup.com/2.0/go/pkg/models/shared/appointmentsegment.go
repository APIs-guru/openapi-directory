package shared



type AppointmentSegment struct {
    DurationMinutes int64 `json:"duration_minutes"`
    ServiceVariationID string `json:"service_variation_id"`
    ServiceVariationVersion int64 `json:"service_variation_version"`
    TeamMemberID string `json:"team_member_id"`
    
}

