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
var TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics = /** @class */ (function (_super) {
    __extends(TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics, _super);
    function TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cumulative" }),
        __metadata("design:type", Object)
    ], TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics.prototype, "cumulative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realtime" }),
        __metadata("design:type", Object)
    ], TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics.prototype, "realtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task_queue_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics.prototype, "taskQueueSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics.prototype, "workspaceSid", void 0);
    return TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics;
}(SpeakeasyBase));
export { TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics };
