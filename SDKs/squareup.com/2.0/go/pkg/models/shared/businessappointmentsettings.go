package shared

type BusinessAppointmentSettings struct {
	AlignmentTime                  *string  `json:"alignment_time"`
	AnyTeamMemberBookingEnabled    *bool    `json:"any_team_member_booking_enabled"`
	CancellationFeeMoney           *Money   `json:"cancellation_fee_money"`
	CancellationPolicy             *string  `json:"cancellation_policy"`
	CancellationPolicyText         *string  `json:"cancellation_policy_text"`
	CancellationWindowSeconds      *int64   `json:"cancellation_window_seconds"`
	LocationTypes                  []string `json:"location_types"`
	MaxAppointmentsPerDayLimit     *int64   `json:"max_appointments_per_day_limit"`
	MaxAppointmentsPerDayLimitType *string  `json:"max_appointments_per_day_limit_type"`
	MaxBookingLeadTimeSeconds      *int64   `json:"max_booking_lead_time_seconds"`
	MinBookingLeadTimeSeconds      *int64   `json:"min_booking_lead_time_seconds"`
	MultipleServiceBookingEnabled  *bool    `json:"multiple_service_booking_enabled"`
	SkipBookingFlowStaffSelection  *bool    `json:"skip_booking_flow_staff_selection"`
}
