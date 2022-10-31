package shared

type ConferenceEnumTagEnum string

const (
	ConferenceEnumTagEnumInvalidRequestedRegion    ConferenceEnumTagEnum = "invalid_requested_region"
	ConferenceEnumTagEnumDuplicateIdentity         ConferenceEnumTagEnum = "duplicate_identity"
	ConferenceEnumTagEnumStartFailure              ConferenceEnumTagEnum = "start_failure"
	ConferenceEnumTagEnumRegionConfigurationIssues ConferenceEnumTagEnum = "region_configuration_issues"
	ConferenceEnumTagEnumQualityWarnings           ConferenceEnumTagEnum = "quality_warnings"
	ConferenceEnumTagEnumParticipantBehaviorIssues ConferenceEnumTagEnum = "participant_behavior_issues"
	ConferenceEnumTagEnumHighPacketLoss            ConferenceEnumTagEnum = "high_packet_loss"
	ConferenceEnumTagEnumHighJitter                ConferenceEnumTagEnum = "high_jitter"
	ConferenceEnumTagEnumHighLatency               ConferenceEnumTagEnum = "high_latency"
	ConferenceEnumTagEnumLowMos                    ConferenceEnumTagEnum = "low_mos"
	ConferenceEnumTagEnumDetectedSilence           ConferenceEnumTagEnum = "detected_silence"
)
