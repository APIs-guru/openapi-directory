var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationEnumStatusEnum } from "./configurationenumstatusenum";
var FlexV1Configuration = /** @class */ (function (_super) {
    __extends(FlexV1Configuration, _super);
    function FlexV1Configuration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_recording_enabled" }),
        __metadata("design:type", Boolean)
    ], FlexV1Configuration.prototype, "callRecordingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_recording_webhook_url" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "callRecordingWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel_configs" }),
        __metadata("design:type", Array)
    ], FlexV1Configuration.prototype, "channelConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chat_service_instance_sid" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "chatServiceInstanceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crm_attributes" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "crmAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crm_callback_url" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "crmCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crm_enabled" }),
        __metadata("design:type", Boolean)
    ], FlexV1Configuration.prototype, "crmEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crm_fallback_url" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "crmFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crm_type" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "crmType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], FlexV1Configuration.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], FlexV1Configuration.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debugger_integration" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "debuggerIntegration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flex_insights_drilldown" }),
        __metadata("design:type", Boolean)
    ], FlexV1Configuration.prototype, "flexInsightsDrilldown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flex_insights_hr" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "flexInsightsHr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flex_service_instance_sid" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "flexServiceInstanceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flex_ui_status_report" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "flexUiStatusReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flex_url" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "flexUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrations" }),
        __metadata("design:type", Array)
    ], FlexV1Configuration.prototype, "integrations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=markdown" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "markdown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messaging_service_instance_sid" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "messagingServiceInstanceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_call_flows" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "outboundCallFlows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plugin_service_attributes" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "pluginServiceAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plugin_service_enabled" }),
        __metadata("design:type", Boolean)
    ], FlexV1Configuration.prototype, "pluginServiceEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_attributes" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "publicAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queue_stats_configuration" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "queueStatsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtime_domain" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "runtimeDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverless_service_sids" }),
        __metadata("design:type", Array)
    ], FlexV1Configuration.prototype, "serverlessServiceSids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_version" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "serviceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskrouter_offline_activity_sid" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "taskrouterOfflineActivitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskrouter_skills" }),
        __metadata("design:type", Array)
    ], FlexV1Configuration.prototype, "taskrouterSkills", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskrouter_target_taskqueue_sid" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "taskrouterTargetTaskqueueSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskrouter_target_workflow_sid" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "taskrouterTargetWorkflowSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskrouter_taskqueues" }),
        __metadata("design:type", Array)
    ], FlexV1Configuration.prototype, "taskrouterTaskqueues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskrouter_worker_attributes" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "taskrouterWorkerAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskrouter_worker_channels" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "taskrouterWorkerChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskrouter_workspace_sid" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "taskrouterWorkspaceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ui_attributes" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "uiAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ui_dependencies" }),
        __metadata("design:type", Object)
    ], FlexV1Configuration.prototype, "uiDependencies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ui_language" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "uiLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ui_version" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "uiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FlexV1Configuration.prototype, "url", void 0);
    return FlexV1Configuration;
}(SpeakeasyBase));
export { FlexV1Configuration };
