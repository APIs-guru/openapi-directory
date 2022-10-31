package shared

import (
"time")

type InsightsV1Conference struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ConferenceSid *string `json:"conference_sid,omitempty"`
    ConnectDurationSeconds *int64 `json:"connect_duration_seconds,omitempty"`
    CreateTime *time.Time `json:"create_time,omitempty"`
    DetectedIssues *interface{} `json:"detected_issues,omitempty"`
    DurationSeconds *int64 `json:"duration_seconds,omitempty"`
    EndReason *ConferenceEnumConferenceEndReasonEnum `json:"end_reason,omitempty"`
    EndTime *time.Time `json:"end_time,omitempty"`
    EndedBy *string `json:"ended_by,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    MaxConcurrentParticipants *int64 `json:"max_concurrent_participants,omitempty"`
    MaxParticipants *int64 `json:"max_participants,omitempty"`
    MixerRegion *ConferenceEnumRegionEnum `json:"mixer_region,omitempty"`
    MixerRegionRequested *ConferenceEnumRegionEnum `json:"mixer_region_requested,omitempty"`
    ProcessingState *ConferenceEnumProcessingStateEnum `json:"processing_state,omitempty"`
    RecordingEnabled *bool `json:"recording_enabled,omitempty"`
    StartTime *time.Time `json:"start_time,omitempty"`
    Status *ConferenceEnumConferenceStatusEnum `json:"status,omitempty"`
    TagInfo *interface{} `json:"tag_info,omitempty"`
    Tags []ConferenceEnumTagEnum `json:"tags,omitempty"`
    UniqueParticipants *int64 `json:"unique_participants,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

