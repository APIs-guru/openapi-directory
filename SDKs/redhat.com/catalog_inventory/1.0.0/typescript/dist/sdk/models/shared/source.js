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
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    function Source() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=archived_at" }),
        __metadata("design:type", Date)
    ], Source.prototype, "archivedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=availability_message" }),
        __metadata("design:type", String)
    ], Source.prototype, "availabilityMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=availability_status" }),
        __metadata("design:type", String)
    ], Source.prototype, "availabilityStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=cloud_connector_id" }),
        __metadata("design:type", String)
    ], Source.prototype, "cloudConnectorId", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Source.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], Source.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Source.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=info" }),
        __metadata("design:type", Map)
    ], Source.prototype, "info", void 0);
    __decorate([
        Metadata({ data: "json, name=last_available_at" }),
        __metadata("design:type", Date)
    ], Source.prototype, "lastAvailableAt", void 0);
    __decorate([
        Metadata({ data: "json, name=last_checked_at" }),
        __metadata("design:type", Date)
    ], Source.prototype, "lastCheckedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=last_refresh_message" }),
        __metadata("design:type", String)
    ], Source.prototype, "lastRefreshMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=last_successful_refresh_at" }),
        __metadata("design:type", Date)
    ], Source.prototype, "lastSuccessfulRefreshAt", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Source.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_sha" }),
        __metadata("design:type", String)
    ], Source.prototype, "previousSha", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_size" }),
        __metadata("design:type", Number)
    ], Source.prototype, "previousSize", void 0);
    __decorate([
        Metadata({ data: "json, name=refresh_finished_at" }),
        __metadata("design:type", Date)
    ], Source.prototype, "refreshFinishedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=refresh_started_at" }),
        __metadata("design:type", Date)
    ], Source.prototype, "refreshStartedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=refresh_state" }),
        __metadata("design:type", String)
    ], Source.prototype, "refreshState", void 0);
    __decorate([
        Metadata({ data: "json, name=refresh_task_id" }),
        __metadata("design:type", String)
    ], Source.prototype, "refreshTaskId", void 0);
    __decorate([
        Metadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Source.prototype, "uid", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Source.prototype, "updatedAt", void 0);
    return Source;
}(SpeakeasyBase));
export { Source };
