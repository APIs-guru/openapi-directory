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
import { AlertDeliveryStatusInfo } from "./alertdeliverystatusinfo";
import { AlertAnnotationInfo } from "./alertannotationinfo";
import { AlertHistoryInfoDetailed } from "./alerthistoryinfodetailed";
var OverviewAlert = /** @class */ (function (_super) {
    __extends(OverviewAlert, _super);
    function OverviewAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertDeliveryStatus" }),
        __metadata("design:type", AlertDeliveryStatusInfo)
    ], OverviewAlert.prototype, "alertDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations", elemType: AlertAnnotationInfo }),
        __metadata("design:type", Array)
    ], OverviewAlert.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryId" }),
        __metadata("design:type", String)
    ], OverviewAlert.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventId" }),
        __metadata("design:type", String)
    ], OverviewAlert.prototype, "eventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flags" }),
        __metadata("design:type", Number)
    ], OverviewAlert.prototype, "flags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=historyDetailed" }),
        __metadata("design:type", AlertHistoryInfoDetailed)
    ], OverviewAlert.prototype, "historyDetailed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OverviewAlert.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModified" }),
        __metadata("design:type", Date)
    ], OverviewAlert.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredAcknowledgements" }),
        __metadata("design:type", Number)
    ], OverviewAlert.prototype, "requiredAcknowledgements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], OverviewAlert.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptionId" }),
        __metadata("design:type", String)
    ], OverviewAlert.prototype, "subscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teamId" }),
        __metadata("design:type", String)
    ], OverviewAlert.prototype, "teamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], OverviewAlert.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OverviewAlert.prototype, "title", void 0);
    return OverviewAlert;
}(SpeakeasyBase));
export { OverviewAlert };
