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
import { User } from "./user";
import { Roles } from "./roles";
var DashboardGetResponseSchema = /** @class */ (function (_super) {
    __extends(DashboardGetResponseSchema, _super);
    function DashboardGetResponseSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by" }),
        __metadata("design:type", User)
    ], DashboardGetResponseSchema.prototype, "changedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by_name" }),
        __metadata("design:type", String)
    ], DashboardGetResponseSchema.prototype, "changedByName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by_url" }),
        __metadata("design:type", String)
    ], DashboardGetResponseSchema.prototype, "changedByUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on" }),
        __metadata("design:type", Date)
    ], DashboardGetResponseSchema.prototype, "changedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" }),
        __metadata("design:type", String)
    ], DashboardGetResponseSchema.prototype, "changedOnDeltaHumanized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=charts" }),
        __metadata("design:type", Array)
    ], DashboardGetResponseSchema.prototype, "charts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=css" }),
        __metadata("design:type", String)
    ], DashboardGetResponseSchema.prototype, "css", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dashboard_title" }),
        __metadata("design:type", String)
    ], DashboardGetResponseSchema.prototype, "dashboardTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DashboardGetResponseSchema.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=json_metadata" }),
        __metadata("design:type", String)
    ], DashboardGetResponseSchema.prototype, "jsonMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners", elemType: User }),
        __metadata("design:type", Array)
    ], DashboardGetResponseSchema.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position_json" }),
        __metadata("design:type", String)
    ], DashboardGetResponseSchema.prototype, "positionJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published" }),
        __metadata("design:type", Boolean)
    ], DashboardGetResponseSchema.prototype, "published", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles", elemType: Roles }),
        __metadata("design:type", Array)
    ], DashboardGetResponseSchema.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], DashboardGetResponseSchema.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table_names" }),
        __metadata("design:type", String)
    ], DashboardGetResponseSchema.prototype, "tableNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnail_url" }),
        __metadata("design:type", String)
    ], DashboardGetResponseSchema.prototype, "thumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DashboardGetResponseSchema.prototype, "url", void 0);
    return DashboardGetResponseSchema;
}(SpeakeasyBase));
export { DashboardGetResponseSchema };
