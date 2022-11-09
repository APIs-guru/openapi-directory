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
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=agent_id" }),
        __metadata("design:type", String)
    ], Task.prototype, "agentId", void 0);
    __decorate([
        Metadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], Task.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], Task.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Task.prototype, "createdBy", void 0);
    __decorate([
        Metadata({ data: "json, name=created_by_user_id" }),
        __metadata("design:type", String)
    ], Task.prototype, "createdByUserId", void 0);
    __decorate([
        Metadata({ data: "json, name=cruncher_id" }),
        __metadata("design:type", String)
    ], Task.prototype, "cruncherId", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Task.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Task.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], Task.prototype, "hidden", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Task.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Task.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=organization_id" }),
        __metadata("design:type", String)
    ], Task.prototype, "organizationId", void 0);
    __decorate([
        Metadata({ data: "json, name=params" }),
        __metadata("design:type", Map)
    ], Task.prototype, "params", void 0);
    __decorate([
        Metadata({ data: "json, name=parent_id" }),
        __metadata("design:type", String)
    ], Task.prototype, "parentId", void 0);
    __decorate([
        Metadata({ data: "json, name=recur" }),
        __metadata("design:type", Boolean)
    ], Task.prototype, "recur", void 0);
    __decorate([
        Metadata({ data: "json, name=recur_frequency" }),
        __metadata("design:type", String)
    ], Task.prototype, "recurFrequency", void 0);
    __decorate([
        Metadata({ data: "json, name=recur_last" }),
        __metadata("design:type", Number)
    ], Task.prototype, "recurLast", void 0);
    __decorate([
        Metadata({ data: "json, name=recur_last_task_id" }),
        __metadata("design:type", String)
    ], Task.prototype, "recurLastTaskId", void 0);
    __decorate([
        Metadata({ data: "json, name=recur_next" }),
        __metadata("design:type", Number)
    ], Task.prototype, "recurNext", void 0);
    __decorate([
        Metadata({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], Task.prototype, "siteId", void 0);
    __decorate([
        Metadata({ data: "json, name=start_time" }),
        __metadata("design:type", Number)
    ], Task.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=stats" }),
        __metadata("design:type", Map)
    ], Task.prototype, "stats", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Task.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Task.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Number)
    ], Task.prototype, "updatedAt", void 0);
    return Task;
}(SpeakeasyBase));
export { Task };
