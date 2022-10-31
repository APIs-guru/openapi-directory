package shared



type BusinessAppointmentSettings struct {
    AlignmentTime *string `json:"alignment_time,omitempty"`
    AnyTeamMemberBookingEnabled *bool `json:"any_team_member_booking_enabled,omitempty"`
    CancellationFeeMoney *Money `json:"cancellation_fee_money,omitempty"`
    CancellationPolicy *string `json:"cancellation_policy,omitempty"`
    CancellationPolicyText *string `json:"cancellation_policy_text,omitempty"`
    CancellationWindowSeconds *int64 `json:"cancellation_window_seconds,omitempty"`
    LocationTypes []string `json:"location_types,omitempty"`
    MaxAppointmentsPerDayLimit *int64 `json:"max_appointments_per_day_limit,omitempty"`
    MaxAppointmentsPerDayLimitType *string `json:"max_appointments_per_day_limit_type,omitempty"`
    MaxBookingLeadTimeSeconds *int64 `json:"max_booking_lead_time_seconds,omitempty"`
    MinBookingLeadTimeSeconds *int64 `json:"min_booking_lead_time_seconds,omitempty"`
    MultipleServiceBookingEnabled *bool `json:"multiple_service_booking_enabled,omitempty"`
    SkipBookingFlowStaffSelection *bool `json:"skip_booking_flow_staff_selection,omitempty"`
    
}

