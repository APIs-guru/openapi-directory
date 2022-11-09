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
import { TaskEnumStatusEnum } from "./taskenumstatusenum";
var TaskrouterV1WorkspaceTask = /** @class */ (function (_super) {
    __extends(TaskrouterV1WorkspaceTask, _super);
    function TaskrouterV1WorkspaceTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=addons" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "addons", void 0);
    __decorate([
        Metadata({ data: "json, name=age" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceTask.prototype, "age", void 0);
    __decorate([
        Metadata({ data: "json, name=assignment_status" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "assignmentStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=attributes" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceTask.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceTask.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], TaskrouterV1WorkspaceTask.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceTask.prototype, "priority", void 0);
    __decorate([
        Metadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "reason", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=task_channel_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "taskChannelSid", void 0);
    __decorate([
        Metadata({ data: "json, name=task_channel_unique_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "taskChannelUniqueName", void 0);
    __decorate([
        Metadata({ data: "json, name=task_queue_entered_date" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceTask.prototype, "taskQueueEnteredDate", void 0);
    __decorate([
        Metadata({ data: "json, name=task_queue_friendly_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "taskQueueFriendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=task_queue_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "taskQueueSid", void 0);
    __decorate([
        Metadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceTask.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=workflow_friendly_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "workflowFriendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=workflow_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "workflowSid", void 0);
    __decorate([
        Metadata({ data: "json, name=workspace_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTask.prototype, "workspaceSid", void 0);
    return TaskrouterV1WorkspaceTask;
}(SpeakeasyBase));
export { TaskrouterV1WorkspaceTask };
