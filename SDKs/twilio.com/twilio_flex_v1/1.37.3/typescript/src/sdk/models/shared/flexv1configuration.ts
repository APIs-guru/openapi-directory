import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationEnumStatusEnum } from "./configurationenumstatusenum";



export class FlexV1Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: any;

  @SpeakeasyMetadata({ data: "json, name=call_recording_enabled" })
  callRecordingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=call_recording_webhook_url" })
  callRecordingWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=channel_configs" })
  channelConfigs?: any[];

  @SpeakeasyMetadata({ data: "json, name=chat_service_instance_sid" })
  chatServiceInstanceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=crm_attributes" })
  crmAttributes?: any;

  @SpeakeasyMetadata({ data: "json, name=crm_callback_url" })
  crmCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=crm_enabled" })
  crmEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=crm_fallback_url" })
  crmFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=crm_type" })
  crmType?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=debugger_integration" })
  debuggerIntegration?: any;

  @SpeakeasyMetadata({ data: "json, name=flex_insights_drilldown" })
  flexInsightsDrilldown?: boolean;

  @SpeakeasyMetadata({ data: "json, name=flex_insights_hr" })
  flexInsightsHr?: any;

  @SpeakeasyMetadata({ data: "json, name=flex_service_instance_sid" })
  flexServiceInstanceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=flex_ui_status_report" })
  flexUiStatusReport?: any;

  @SpeakeasyMetadata({ data: "json, name=flex_url" })
  flexUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=integrations" })
  integrations?: any[];

  @SpeakeasyMetadata({ data: "json, name=markdown" })
  markdown?: any;

  @SpeakeasyMetadata({ data: "json, name=messaging_service_instance_sid" })
  messagingServiceInstanceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=notifications" })
  notifications?: any;

  @SpeakeasyMetadata({ data: "json, name=outbound_call_flows" })
  outboundCallFlows?: any;

  @SpeakeasyMetadata({ data: "json, name=plugin_service_attributes" })
  pluginServiceAttributes?: any;

  @SpeakeasyMetadata({ data: "json, name=plugin_service_enabled" })
  pluginServiceEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=public_attributes" })
  publicAttributes?: any;

  @SpeakeasyMetadata({ data: "json, name=queue_stats_configuration" })
  queueStatsConfiguration?: any;

  @SpeakeasyMetadata({ data: "json, name=runtime_domain" })
  runtimeDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=serverless_service_sids" })
  serverlessServiceSids?: string[];

  @SpeakeasyMetadata({ data: "json, name=service_version" })
  serviceVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConfigurationEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=taskrouter_offline_activity_sid" })
  taskrouterOfflineActivitySid?: string;

  @SpeakeasyMetadata({ data: "json, name=taskrouter_skills" })
  taskrouterSkills?: any[];

  @SpeakeasyMetadata({ data: "json, name=taskrouter_target_taskqueue_sid" })
  taskrouterTargetTaskqueueSid?: string;

  @SpeakeasyMetadata({ data: "json, name=taskrouter_target_workflow_sid" })
  taskrouterTargetWorkflowSid?: string;

  @SpeakeasyMetadata({ data: "json, name=taskrouter_taskqueues" })
  taskrouterTaskqueues?: any[];

  @SpeakeasyMetadata({ data: "json, name=taskrouter_worker_attributes" })
  taskrouterWorkerAttributes?: any;

  @SpeakeasyMetadata({ data: "json, name=taskrouter_worker_channels" })
  taskrouterWorkerChannels?: any;

  @SpeakeasyMetadata({ data: "json, name=taskrouter_workspace_sid" })
  taskrouterWorkspaceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=ui_attributes" })
  uiAttributes?: any;

  @SpeakeasyMetadata({ data: "json, name=ui_dependencies" })
  uiDependencies?: any;

  @SpeakeasyMetadata({ data: "json, name=ui_language" })
  uiLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=ui_version" })
  uiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
