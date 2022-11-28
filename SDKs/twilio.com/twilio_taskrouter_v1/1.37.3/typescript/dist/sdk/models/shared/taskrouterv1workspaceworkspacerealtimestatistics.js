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
var TaskrouterV1WorkspaceWorkspaceRealTimeStatistics = /** @class */ (function (_super) {
    __extends(TaskrouterV1WorkspaceWorkspaceRealTimeStatistics, _super);
    function TaskrouterV1WorkspaceWorkspaceRealTimeStatistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activity_statistics" }),
        __metadata("design:type", Array)
    ], TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.prototype, "activityStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longest_task_waiting_age" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.prototype, "longestTaskWaitingAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longest_task_waiting_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.prototype, "longestTaskWaitingSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tasks_by_priority" }),
        __metadata("design:type", Object)
    ], TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.prototype, "tasksByPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tasks_by_status" }),
        __metadata("design:type", Object)
    ], TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.prototype, "tasksByStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tasks" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.prototype, "totalTasks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_workers" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.prototype, "totalWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.prototype, "workspaceSid", void 0);
    return TaskrouterV1WorkspaceWorkspaceRealTimeStatistics;
}(SpeakeasyBase));
export { TaskrouterV1WorkspaceWorkspaceRealTimeStatistics };
