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
var OverviewEvent = /** @class */ (function (_super) {
    __extends(OverviewEvent, _super);
    function OverviewEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acknowledgedAlerts" }),
        __metadata("design:type", Array)
    ], OverviewEvent.prototype, "acknowledgedAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertId" }),
        __metadata("design:type", String)
    ], OverviewEvent.prototype, "alertId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryId" }),
        __metadata("design:type", String)
    ], OverviewEvent.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closedAlerts" }),
        __metadata("design:type", Array)
    ], OverviewEvent.prototype, "closedAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Date)
    ], OverviewEvent.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventSourceType" }),
        __metadata("design:type", Number)
    ], OverviewEvent.prototype, "eventSourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventStatus" }),
        __metadata("design:type", Number)
    ], OverviewEvent.prototype, "eventStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OverviewEvent.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModified" }),
        __metadata("design:type", Date)
    ], OverviewEvent.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", Number)
    ], OverviewEvent.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teamId" }),
        __metadata("design:type", String)
    ], OverviewEvent.prototype, "teamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], OverviewEvent.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OverviewEvent.prototype, "title", void 0);
    return OverviewEvent;
}(SpeakeasyBase));
export { OverviewEvent };
