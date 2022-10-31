package shared

type ProblemEventAdminStateEnum string

const (
	ProblemEventAdminStateEnumEnabled  ProblemEventAdminStateEnum = "ENABLED"
	ProblemEventAdminStateEnumDisabled ProblemEventAdminStateEnum = "DISABLED"
)

type ProblemEventSeverityEnum string

const (
	ProblemEventSeverityEnumCritical ProblemEventSeverityEnum = "CRITICAL"
	ProblemEventSeverityEnumModerate ProblemEventSeverityEnum = "MODERATE"
	ProblemEventSeverityEnumWarning  ProblemEventSeverityEnum = "WARNING"
	ProblemEventSeverityEnumInfo     ProblemEventSeverityEnum = "INFO"
)

type ProblemEvent struct {
	AdminState            *ProblemEventAdminStateEnum `json:"admin_state,omitempty"`
	AnchorEntities        []Reference                 `json:"anchor_entities,omitempty"`
	Archived              *bool                       `json:"archived,omitempty"`
	EntityID              *string                     `json:"entity_id,omitempty"`
	EntityType            *EntityTypeEnum             `json:"entity_type,omitempty"`
	EventCloseTimeEpochMs *int64                      `json:"event_close_time_epoch_ms,omitempty"`
	EventTags             []string                    `json:"event_tags,omitempty"`
	EventTimeEpochMs      *int64                      `json:"event_time_epoch_ms,omitempty"`
	Message               *string                     `json:"message,omitempty"`
	Name                  *string                     `json:"name,omitempty"`
	RelatedEntities       []Reference                 `json:"related_entities,omitempty"`
	Severity              *ProblemEventSeverityEnum   `json:"severity,omitempty"`
}
