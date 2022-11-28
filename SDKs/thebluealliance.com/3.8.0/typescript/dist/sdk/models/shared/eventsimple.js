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
import { DistrictList } from "./districtlist";
var EventSimple = /** @class */ (function (_super) {
    __extends(EventSimple, _super);
    function EventSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], EventSimple.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], EventSimple.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=district" }),
        __metadata("design:type", DistrictList)
    ], EventSimple.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", Date)
    ], EventSimple.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_code" }),
        __metadata("design:type", String)
    ], EventSimple.prototype, "eventCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_type" }),
        __metadata("design:type", Number)
    ], EventSimple.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], EventSimple.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EventSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", Date)
    ], EventSimple.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state_prov" }),
        __metadata("design:type", String)
    ], EventSimple.prototype, "stateProv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], EventSimple.prototype, "year", void 0);
    return EventSimple;
}(SpeakeasyBase));
export { EventSimple };
