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
import { Meta15 } from "./meta15";
import { Meta14 } from "./meta14";
import { Meta17 } from "./meta17";
import { Meta16 } from "./meta16";
var DashboardRestApiGetList = /** @class */ (function (_super) {
    __extends(DashboardRestApiGetList, _super);
    function DashboardRestApiGetList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by" }),
        __metadata("design:type", Meta15)
    ], DashboardRestApiGetList.prototype, "changedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by_name" }),
        __metadata("design:type", Object)
    ], DashboardRestApiGetList.prototype, "changedByName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by_url" }),
        __metadata("design:type", Object)
    ], DashboardRestApiGetList.prototype, "changedByUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" }),
        __metadata("design:type", Object)
    ], DashboardRestApiGetList.prototype, "changedOnDeltaHumanized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on_utc" }),
        __metadata("design:type", Object)
    ], DashboardRestApiGetList.prototype, "changedOnUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", Meta14)
    ], DashboardRestApiGetList.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=css" }),
        __metadata("design:type", String)
    ], DashboardRestApiGetList.prototype, "css", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dashboard_title" }),
        __metadata("design:type", String)
    ], DashboardRestApiGetList.prototype, "dashboardTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DashboardRestApiGetList.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=json_metadata" }),
        __metadata("design:type", String)
    ], DashboardRestApiGetList.prototype, "jsonMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners" }),
        __metadata("design:type", Meta17)
    ], DashboardRestApiGetList.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position_json" }),
        __metadata("design:type", String)
    ], DashboardRestApiGetList.prototype, "positionJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published" }),
        __metadata("design:type", Boolean)
    ], DashboardRestApiGetList.prototype, "published", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles" }),
        __metadata("design:type", Meta16)
    ], DashboardRestApiGetList.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], DashboardRestApiGetList.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Object)
    ], DashboardRestApiGetList.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnail_url" }),
        __metadata("design:type", Object)
    ], DashboardRestApiGetList.prototype, "thumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", Object)
    ], DashboardRestApiGetList.prototype, "url", void 0);
    return DashboardRestApiGetList;
}(SpeakeasyBase));
export { DashboardRestApiGetList };
