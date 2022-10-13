package shared

import (
	"time"
)

type FlexV1Configuration struct {
	AccountSid                   *string                      `json:"account_sid"`
	Attributes                   *interface{}                 `json:"attributes"`
	CallRecordingEnabled         *bool                        `json:"call_recording_enabled"`
	CallRecordingWebhookURL      *string                      `json:"call_recording_webhook_url"`
	ChannelConfigs               []interface{}                `json:"channel_configs"`
	ChatServiceInstanceSid       *string                      `json:"chat_service_instance_sid"`
	CrmAttributes                *interface{}                 `json:"crm_attributes"`
	CrmCallbackURL               *string                      `json:"crm_callback_url"`
	CrmEnabled                   *bool                        `json:"crm_enabled"`
	CrmFallbackURL               *string                      `json:"crm_fallback_url"`
	CrmType                      *string                      `json:"crm_type"`
	DateCreated                  *time.Time                   `json:"date_created"`
	DateUpdated                  *time.Time                   `json:"date_updated"`
	FlexInsightsDrilldown        *bool                        `json:"flex_insights_drilldown"`
	FlexInsightsHr               *interface{}                 `json:"flex_insights_hr"`
	FlexServiceInstanceSid       *string                      `json:"flex_service_instance_sid"`
	FlexURL                      *string                      `json:"flex_url"`
	Integrations                 []interface{}                `json:"integrations"`
	Markdown                     *interface{}                 `json:"markdown"`
	MessagingServiceInstanceSid  *string                      `json:"messaging_service_instance_sid"`
	Notifications                *interface{}                 `json:"notifications"`
	OutboundCallFlows            *interface{}                 `json:"outbound_call_flows"`
	PluginServiceAttributes      *interface{}                 `json:"plugin_service_attributes"`
	PluginServiceEnabled         *bool                        `json:"plugin_service_enabled"`
	PublicAttributes             *interface{}                 `json:"public_attributes"`
	QueueStatsConfiguration      *interface{}                 `json:"queue_stats_configuration"`
	RuntimeDomain                *string                      `json:"runtime_domain"`
	ServerlessServiceSids        []string                     `json:"serverless_service_sids"`
	ServiceVersion               *string                      `json:"service_version"`
	Status                       *ConfigurationEnumStatusEnum `json:"status"`
	TaskrouterOfflineActivitySid *string                      `json:"taskrouter_offline_activity_sid"`
	TaskrouterSkills             []interface{}                `json:"taskrouter_skills"`
	TaskrouterTargetTaskqueueSid *string                      `json:"taskrouter_target_taskqueue_sid"`
	TaskrouterTargetWorkflowSid  *string                      `json:"taskrouter_target_workflow_sid"`
	TaskrouterTaskqueues         []interface{}                `json:"taskrouter_taskqueues"`
	TaskrouterWorkerAttributes   *interface{}                 `json:"taskrouter_worker_attributes"`
	TaskrouterWorkerChannels     *interface{}                 `json:"taskrouter_worker_channels"`
	TaskrouterWorkspaceSid       *string                      `json:"taskrouter_workspace_sid"`
	UIAttributes                 *interface{}                 `json:"ui_attributes"`
	UIDependencies               *interface{}                 `json:"ui_dependencies"`
	UILanguage                   *string                      `json:"ui_language"`
	UIVersion                    *string                      `json:"ui_version"`
	URL                          *string                      `json:"url"`
}
