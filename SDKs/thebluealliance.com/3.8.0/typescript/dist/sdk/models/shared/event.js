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
import { Webcast } from "./webcast";
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], Event.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Event.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Event.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=district" }),
        __metadata("design:type", DistrictList)
    ], Event.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=division_keys" }),
        __metadata("design:type", Array)
    ], Event.prototype, "divisionKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", Date)
    ], Event.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_code" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_type" }),
        __metadata("design:type", Number)
    ], Event.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_type_string" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventTypeString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_event_code" }),
        __metadata("design:type", String)
    ], Event.prototype, "firstEventCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_event_id" }),
        __metadata("design:type", String)
    ], Event.prototype, "firstEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gmaps_place_id" }),
        __metadata("design:type", String)
    ], Event.prototype, "gmapsPlaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gmaps_url" }),
        __metadata("design:type", String)
    ], Event.prototype, "gmapsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], Event.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], Event.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], Event.prototype, "lng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_name" }),
        __metadata("design:type", String)
    ], Event.prototype, "locationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Event.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_event_key" }),
        __metadata("design:type", String)
    ], Event.prototype, "parentEventKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playoff_type" }),
        __metadata("design:type", Number)
    ], Event.prototype, "playoffType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playoff_type_string" }),
        __metadata("design:type", String)
    ], Event.prototype, "playoffTypeString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], Event.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=short_name" }),
        __metadata("design:type", String)
    ], Event.prototype, "shortName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", Date)
    ], Event.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state_prov" }),
        __metadata("design:type", String)
    ], Event.prototype, "stateProv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Event.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webcasts", elemType: Webcast }),
        __metadata("design:type", Array)
    ], Event.prototype, "webcasts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], Event.prototype, "website", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=week" }),
        __metadata("design:type", Number)
    ], Event.prototype, "week", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], Event.prototype, "year", void 0);
    return Event;
}(SpeakeasyBase));
export { Event };
