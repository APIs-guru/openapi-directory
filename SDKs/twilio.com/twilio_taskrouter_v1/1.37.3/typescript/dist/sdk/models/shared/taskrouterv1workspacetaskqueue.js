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
import { TaskQueueEnumTaskOrderEnum } from "./taskqueueenumtaskorderenum";
var TaskrouterV1WorkspaceTaskQueue = /** @class */ (function (_super) {
    __extends(TaskrouterV1WorkspaceTaskQueue, _super);
    function TaskrouterV1WorkspaceTaskQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignment_activity_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "assignmentActivityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignment_activity_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "assignmentActivitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_reserved_workers" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "maxReservedWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservation_activity_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "reservationActivityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservation_activity_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "reservationActivitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_workers" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "targetWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task_order" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "taskOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueue.prototype, "workspaceSid", void 0);
    return TaskrouterV1WorkspaceTaskQueue;
}(SpeakeasyBase));
export { TaskrouterV1WorkspaceTaskQueue };
