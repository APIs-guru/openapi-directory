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
export var BookingStatusItineraryLevelEnum;
(function (BookingStatusItineraryLevelEnum) {
    BookingStatusItineraryLevelEnum["Item"] = "ITEM";
    BookingStatusItineraryLevelEnum["Itinerary"] = "ITINERARY";
})(BookingStatusItineraryLevelEnum || (BookingStatusItineraryLevelEnum = {}));
export var BookingStatusItineraryTypeEnum;
(function (BookingStatusItineraryTypeEnum) {
    BookingStatusItineraryTypeEnum["Waiting"] = "WAITING";
    BookingStatusItineraryTypeEnum["Confirmed"] = "CONFIRMED";
    BookingStatusItineraryTypeEnum["Pending"] = "PENDING";
    BookingStatusItineraryTypeEnum["Failed"] = "FAILED";
    BookingStatusItineraryTypeEnum["Cancelled"] = "CANCELLED";
    BookingStatusItineraryTypeEnum["Amended"] = "AMENDED";
    BookingStatusItineraryTypeEnum["PendingAmend"] = "PENDING_AMEND";
})(BookingStatusItineraryTypeEnum || (BookingStatusItineraryTypeEnum = {}));
// BookingStatusItinerary
/**
 * **object** containing itinerary booking status information
**/
var BookingStatusItinerary = /** @class */ (function (_super) {
    __extends(BookingStatusItinerary, _super);
    function BookingStatusItinerary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amended" }),
        __metadata("design:type", Boolean)
    ], BookingStatusItinerary.prototype, "amended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelled" }),
        __metadata("design:type", Boolean)
    ], BookingStatusItinerary.prototype, "cancelled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirmed" }),
        __metadata("design:type", Boolean)
    ], BookingStatusItinerary.prototype, "confirmed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failed" }),
        __metadata("design:type", Boolean)
    ], BookingStatusItinerary.prototype, "failed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=level" }),
        __metadata("design:type", String)
    ], BookingStatusItinerary.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pending" }),
        __metadata("design:type", Boolean)
    ], BookingStatusItinerary.prototype, "pending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], BookingStatusItinerary.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], BookingStatusItinerary.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BookingStatusItinerary.prototype, "type", void 0);
    return BookingStatusItinerary;
}(SpeakeasyBase));
export { BookingStatusItinerary };
