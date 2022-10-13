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
	AdminState            *ProblemEventAdminStateEnum `json:"admin_state"`
	AnchorEntities        []Reference                 `json:"anchor_entities"`
	Archived              *bool                       `json:"archived"`
	EntityID              *string                     `json:"entity_id"`
	EntityType            *EntityTypeEnum             `json:"entity_type"`
	EventCloseTimeEpochMs *int64                      `json:"event_close_time_epoch_ms"`
	EventTags             []string                    `json:"event_tags"`
	EventTimeEpochMs      *int64                      `json:"event_time_epoch_ms"`
	Message               *string                     `json:"message"`
	Name                  *string                     `json:"name"`
	RelatedEntities       []Reference                 `json:"related_entities"`
	Severity              *ProblemEventSeverityEnum   `json:"severity"`
}
