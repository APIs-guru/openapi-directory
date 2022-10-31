package shared

import (
	"time"
)

type FlexV1Configuration struct {
	AccountSid                   *string                      `json:"account_sid,omitempty"`
	Attributes                   *interface{}                 `json:"attributes,omitempty"`
	CallRecordingEnabled         *bool                        `json:"call_recording_enabled,omitempty"`
	CallRecordingWebhookURL      *string                      `json:"call_recording_webhook_url,omitempty"`
	ChannelConfigs               []interface{}                `json:"channel_configs,omitempty"`
	ChatServiceInstanceSid       *string                      `json:"chat_service_instance_sid,omitempty"`
	CrmAttributes                *interface{}                 `json:"crm_attributes,omitempty"`
	CrmCallbackURL               *string                      `json:"crm_callback_url,omitempty"`
	CrmEnabled                   *bool                        `json:"crm_enabled,omitempty"`
	CrmFallbackURL               *string                      `json:"crm_fallback_url,omitempty"`
	CrmType                      *string                      `json:"crm_type,omitempty"`
	DateCreated                  *time.Time                   `json:"date_created,omitempty"`
	DateUpdated                  *time.Time                   `json:"date_updated,omitempty"`
	DebuggerIntegration          *interface{}                 `json:"debugger_integration,omitempty"`
	FlexInsightsDrilldown        *bool                        `json:"flex_insights_drilldown,omitempty"`
	FlexInsightsHr               *interface{}                 `json:"flex_insights_hr,omitempty"`
	FlexServiceInstanceSid       *string                      `json:"flex_service_instance_sid,omitempty"`
	FlexUIStatusReport           *interface{}                 `json:"flex_ui_status_report,omitempty"`
	FlexURL                      *string                      `json:"flex_url,omitempty"`
	Integrations                 []interface{}                `json:"integrations,omitempty"`
	Markdown                     *interface{}                 `json:"markdown,omitempty"`
	MessagingServiceInstanceSid  *string                      `json:"messaging_service_instance_sid,omitempty"`
	Notifications                *interface{}                 `json:"notifications,omitempty"`
	OutboundCallFlows            *interface{}                 `json:"outbound_call_flows,omitempty"`
	PluginServiceAttributes      *interface{}                 `json:"plugin_service_attributes,omitempty"`
	PluginServiceEnabled         *bool                        `json:"plugin_service_enabled,omitempty"`
	PublicAttributes             *interface{}                 `json:"public_attributes,omitempty"`
	QueueStatsConfiguration      *interface{}                 `json:"queue_stats_configuration,omitempty"`
	RuntimeDomain                *string                      `json:"runtime_domain,omitempty"`
	ServerlessServiceSids        []string                     `json:"serverless_service_sids,omitempty"`
	ServiceVersion               *string                      `json:"service_version,omitempty"`
	Status                       *ConfigurationEnumStatusEnum `json:"status,omitempty"`
	TaskrouterOfflineActivitySid *string                      `json:"taskrouter_offline_activity_sid,omitempty"`
	TaskrouterSkills             []interface{}                `json:"taskrouter_skills,omitempty"`
	TaskrouterTargetTaskqueueSid *string                      `json:"taskrouter_target_taskqueue_sid,omitempty"`
	TaskrouterTargetWorkflowSid  *string                      `json:"taskrouter_target_workflow_sid,omitempty"`
	TaskrouterTaskqueues         []interface{}                `json:"taskrouter_taskqueues,omitempty"`
	TaskrouterWorkerAttributes   *interface{}                 `json:"taskrouter_worker_attributes,omitempty"`
	TaskrouterWorkerChannels     *interface{}                 `json:"taskrouter_worker_channels,omitempty"`
	TaskrouterWorkspaceSid       *string                      `json:"taskrouter_workspace_sid,omitempty"`
	UIAttributes                 *interface{}                 `json:"ui_attributes,omitempty"`
	UIDependencies               *interface{}                 `json:"ui_dependencies,omitempty"`
	UILanguage                   *string                      `json:"ui_language,omitempty"`
	UIVersion                    *string                      `json:"ui_version,omitempty"`
	URL                          *string                      `json:"url,omitempty"`
}
