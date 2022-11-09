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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceEnumQueueOrderEnum } from "./workspaceenumqueueorderenum";
var TaskrouterV1Workspace = /** @class */ (function (_super) {
    __extends(TaskrouterV1Workspace, _super);
    function TaskrouterV1Workspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1Workspace.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], TaskrouterV1Workspace.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], TaskrouterV1Workspace.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=default_activity_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1Workspace.prototype, "defaultActivityName", void 0);
    __decorate([
        Metadata({ data: "json, name=default_activity_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1Workspace.prototype, "defaultActivitySid", void 0);
    __decorate([
        Metadata({ data: "json, name=event_callback_url" }),
        __metadata("design:type", String)
    ], TaskrouterV1Workspace.prototype, "eventCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=events_filter" }),
        __metadata("design:type", String)
    ], TaskrouterV1Workspace.prototype, "eventsFilter", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1Workspace.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], TaskrouterV1Workspace.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=multi_task_enabled" }),
        __metadata("design:type", Boolean)
    ], TaskrouterV1Workspace.prototype, "multiTaskEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=prioritize_queue_order" }),
        __metadata("design:type", String)
    ], TaskrouterV1Workspace.prototype, "prioritizeQueueOrder", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1Workspace.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=timeout_activity_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1Workspace.prototype, "timeoutActivityName", void 0);
    __decorate([
        Metadata({ data: "json, name=timeout_activity_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1Workspace.prototype, "timeoutActivitySid", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TaskrouterV1Workspace.prototype, "url", void 0);
    return TaskrouterV1Workspace;
}(SpeakeasyBase));
export { TaskrouterV1Workspace };
