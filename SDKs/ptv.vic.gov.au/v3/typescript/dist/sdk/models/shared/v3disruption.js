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
import { V3DisruptionRoute } from "./v3disruptionroute";
import { V3DisruptionStop } from "./v3disruptionstop";
var V3Disruption = /** @class */ (function (_super) {
    __extends(V3Disruption, _super);
    function V3Disruption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colour" }),
        __metadata("design:type", String)
    ], V3Disruption.prototype, "colour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], V3Disruption.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_on_board" }),
        __metadata("design:type", Boolean)
    ], V3Disruption.prototype, "displayOnBoard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_status" }),
        __metadata("design:type", Boolean)
    ], V3Disruption.prototype, "displayStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disruption_id" }),
        __metadata("design:type", Number)
    ], V3Disruption.prototype, "disruptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disruption_status" }),
        __metadata("design:type", String)
    ], V3Disruption.prototype, "disruptionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disruption_type" }),
        __metadata("design:type", String)
    ], V3Disruption.prototype, "disruptionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from_date" }),
        __metadata("design:type", Date)
    ], V3Disruption.prototype, "fromDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], V3Disruption.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published_on" }),
        __metadata("design:type", Date)
    ], V3Disruption.prototype, "publishedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routes", elemType: V3DisruptionRoute }),
        __metadata("design:type", Array)
    ], V3Disruption.prototype, "routes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stops", elemType: V3DisruptionStop }),
        __metadata("design:type", Array)
    ], V3Disruption.prototype, "stops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], V3Disruption.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to_date" }),
        __metadata("design:type", Date)
    ], V3Disruption.prototype, "toDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], V3Disruption.prototype, "url", void 0);
    return V3Disruption;
}(SpeakeasyBase));
export { V3Disruption };
