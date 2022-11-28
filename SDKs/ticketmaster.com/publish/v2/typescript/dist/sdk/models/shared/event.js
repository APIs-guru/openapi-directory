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
import { Attraction } from "./attraction";
import { Classification } from "./classification";
import { EventDates } from "./eventdates";
import { Image } from "./image";
import { Location } from "./location";
import { Place } from "./place";
import { PriceRange } from "./pricerange";
import { Promoter } from "./promoter";
import { PublicVisibility } from "./publicvisibility";
import { EventSalesDates } from "./eventsalesdates";
import { Source } from "./source";
import { Venue } from "./venue";
export var EventTypeEnum;
(function (EventTypeEnum) {
    EventTypeEnum["Event"] = "event";
    EventTypeEnum["Venue"] = "venue";
    EventTypeEnum["Attraction"] = "attraction";
})(EventTypeEnum || (EventTypeEnum = {}));
// Event
/**
 * Event
**/
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalInfos" }),
        __metadata("design:type", Map)
    ], Event.prototype, "additionalInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attractions", elemType: Attraction }),
        __metadata("design:type", Array)
    ], Event.prototype, "attractions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classifications", elemType: Classification }),
        __metadata("design:type", Array)
    ], Event.prototype, "classifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dates" }),
        __metadata("design:type", EventDates)
    ], Event.prototype, "dates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=descriptions" }),
        __metadata("design:type", Map)
    ], Event.prototype, "descriptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discoverable" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "discoverable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], Event.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: Image }),
        __metadata("design:type", Array)
    ], Event.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infos" }),
        __metadata("design:type", Map)
    ], Event.prototype, "infos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", Location)
    ], Event.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names" }),
        __metadata("design:type", Map)
    ], Event.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=place" }),
        __metadata("design:type", Place)
    ], Event.prototype, "place", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pleaseNotes" }),
        __metadata("design:type", Map)
    ], Event.prototype, "pleaseNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceRanges", elemType: PriceRange }),
        __metadata("design:type", Array)
    ], Event.prototype, "priceRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promoter" }),
        __metadata("design:type", Promoter)
    ], Event.prototype, "promoter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicVisibility" }),
        __metadata("design:type", PublicVisibility)
    ], Event.prototype, "publicVisibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=references" }),
        __metadata("design:type", Map)
    ], Event.prototype, "references", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationships" }),
        __metadata("design:type", Array)
    ], Event.prototype, "relationships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sales" }),
        __metadata("design:type", EventSalesDates)
    ], Event.prototype, "sales", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Source)
    ], Event.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "test", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Event.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], Event.prototype, "units", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Event.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=venue" }),
        __metadata("design:type", Venue)
    ], Event.prototype, "venue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Event.prototype, "version", void 0);
    return Event;
}(SpeakeasyBase));
export { Event };
