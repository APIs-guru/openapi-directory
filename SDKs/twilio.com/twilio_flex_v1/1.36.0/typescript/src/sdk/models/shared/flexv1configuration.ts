import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationEnumStatusEnum } from "./configurationenumstatusenum";


export class FlexV1Configuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: any;

  @Metadata({ data: "json, name=call_recording_enabled" })
  callRecordingEnabled?: boolean;

  @Metadata({ data: "json, name=call_recording_webhook_url" })
  callRecordingWebhookUrl?: string;

  @Metadata({ data: "json, name=channel_configs" })
  channelConfigs?: any[];

  @Metadata({ data: "json, name=chat_service_instance_sid" })
  chatServiceInstanceSid?: string;

  @Metadata({ data: "json, name=crm_attributes" })
  crmAttributes?: any;

  @Metadata({ data: "json, name=crm_callback_url" })
  crmCallbackUrl?: string;

  @Metadata({ data: "json, name=crm_enabled" })
  crmEnabled?: boolean;

  @Metadata({ data: "json, name=crm_fallback_url" })
  crmFallbackUrl?: string;

  @Metadata({ data: "json, name=crm_type" })
  crmType?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=debugger_integration" })
  debuggerIntegration?: any;

  @Metadata({ data: "json, name=flex_insights_drilldown" })
  flexInsightsDrilldown?: boolean;

  @Metadata({ data: "json, name=flex_insights_hr" })
  flexInsightsHr?: any;

  @Metadata({ data: "json, name=flex_service_instance_sid" })
  flexServiceInstanceSid?: string;

  @Metadata({ data: "json, name=flex_ui_status_report" })
  flexUiStatusReport?: any;

  @Metadata({ data: "json, name=flex_url" })
  flexUrl?: string;

  @Metadata({ data: "json, name=integrations" })
  integrations?: any[];

  @Metadata({ data: "json, name=markdown" })
  markdown?: any;

  @Metadata({ data: "json, name=messaging_service_instance_sid" })
  messagingServiceInstanceSid?: string;

  @Metadata({ data: "json, name=notifications" })
  notifications?: any;

  @Metadata({ data: "json, name=outbound_call_flows" })
  outboundCallFlows?: any;

  @Metadata({ data: "json, name=plugin_service_attributes" })
  pluginServiceAttributes?: any;

  @Metadata({ data: "json, name=plugin_service_enabled" })
  pluginServiceEnabled?: boolean;

  @Metadata({ data: "json, name=public_attributes" })
  publicAttributes?: any;

  @Metadata({ data: "json, name=queue_stats_configuration" })
  queueStatsConfiguration?: any;

  @Metadata({ data: "json, name=runtime_domain" })
  runtimeDomain?: string;

  @Metadata({ data: "json, name=serverless_service_sids" })
  serverlessServiceSids?: string[];

  @Metadata({ data: "json, name=service_version" })
  serviceVersion?: string;

  @Metadata({ data: "json, name=status" })
  status?: ConfigurationEnumStatusEnum;

  @Metadata({ data: "json, name=taskrouter_offline_activity_sid" })
  taskrouterOfflineActivitySid?: string;

  @Metadata({ data: "json, name=taskrouter_skills" })
  taskrouterSkills?: any[];

  @Metadata({ data: "json, name=taskrouter_target_taskqueue_sid" })
  taskrouterTargetTaskqueueSid?: string;

  @Metadata({ data: "json, name=taskrouter_target_workflow_sid" })
  taskrouterTargetWorkflowSid?: string;

  @Metadata({ data: "json, name=taskrouter_taskqueues" })
  taskrouterTaskqueues?: any[];

  @Metadata({ data: "json, name=taskrouter_worker_attributes" })
  taskrouterWorkerAttributes?: any;

  @Metadata({ data: "json, name=taskrouter_worker_channels" })
  taskrouterWorkerChannels?: any;

  @Metadata({ data: "json, name=taskrouter_workspace_sid" })
  taskrouterWorkspaceSid?: string;

  @Metadata({ data: "json, name=ui_attributes" })
  uiAttributes?: any;

  @Metadata({ data: "json, name=ui_dependencies" })
  uiDependencies?: any;

  @Metadata({ data: "json, name=ui_language" })
  uiLanguage?: string;

  @Metadata({ data: "json, name=ui_version" })
  uiVersion?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
