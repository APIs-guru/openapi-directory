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
export var TaskStateEnum;
(function (TaskStateEnum) {
    TaskStateEnum["Pending"] = "pending";
    TaskStateEnum["Queued"] = "queued";
    TaskStateEnum["Running"] = "running";
    TaskStateEnum["Timedout"] = "timedout";
    TaskStateEnum["Completed"] = "completed";
})(TaskStateEnum || (TaskStateEnum = {}));
export var TaskStatusEnum;
(function (TaskStatusEnum) {
    TaskStatusEnum["Ok"] = "ok";
    TaskStatusEnum["Warn"] = "warn";
    TaskStatusEnum["Unchanged"] = "unchanged";
    TaskStatusEnum["Error"] = "error";
})(TaskStatusEnum || (TaskStatusEnum = {}));
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=archived_at" }),
        __metadata("design:type", Date)
    ], Task.prototype, "archivedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=child_task_id" }),
        __metadata("design:type", String)
    ], Task.prototype, "childTaskId", void 0);
    __decorate([
        Metadata({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], Task.prototype, "completedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=controller_message_id" }),
        __metadata("design:type", String)
    ], Task.prototype, "controllerMessageId", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Task.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Task.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=input" }),
        __metadata("design:type", Map)
    ], Task.prototype, "input", void 0);
    __decorate([
        Metadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Task.prototype, "message", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Task.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=output" }),
        __metadata("design:type", Map)
    ], Task.prototype, "output", void 0);
    __decorate([
        Metadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], Task.prototype, "owner", void 0);
    __decorate([
        Metadata({ data: "json, name=source_id" }),
        __metadata("design:type", String)
    ], Task.prototype, "sourceId", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Task.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Task.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=target_source_ref" }),
        __metadata("design:type", String)
    ], Task.prototype, "targetSourceRef", void 0);
    __decorate([
        Metadata({ data: "json, name=target_type" }),
        __metadata("design:type", String)
    ], Task.prototype, "targetType", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Task.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Task.prototype, "updatedAt", void 0);
    return Task;
}(SpeakeasyBase));
export { Task };
