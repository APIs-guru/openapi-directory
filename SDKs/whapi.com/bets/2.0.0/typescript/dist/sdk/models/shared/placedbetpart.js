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
import { PriceFormatted } from "./priceformatted";
var PlacedBetPart = /** @class */ (function (_super) {
    __extends(PlacedBetPart, _super);
    function PlacedBetPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PlacedBetPart.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eachWayDen" }),
        __metadata("design:type", Number)
    ], PlacedBetPart.prototype, "eachWayDen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eachWayNum" }),
        __metadata("design:type", Number)
    ], PlacedBetPart.prototype, "eachWayNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eachWayPlaces" }),
        __metadata("design:type", Number)
    ], PlacedBetPart.prototype, "eachWayPlaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventDescription" }),
        __metadata("design:type", String)
    ], PlacedBetPart.prototype, "eventDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventId" }),
        __metadata("design:type", String)
    ], PlacedBetPart.prototype, "eventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventMarketDescription" }),
        __metadata("design:type", String)
    ], PlacedBetPart.prototype, "eventMarketDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTypeDescription" }),
        __metadata("design:type", String)
    ], PlacedBetPart.prototype, "eventTypeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=handicap" }),
        __metadata("design:type", Number)
    ], PlacedBetPart.prototype, "handicap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], PlacedBetPart.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceDen" }),
        __metadata("design:type", Number)
    ], PlacedBetPart.prototype, "priceDen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceFormatted" }),
        __metadata("design:type", PriceFormatted)
    ], PlacedBetPart.prototype, "priceFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceNum" }),
        __metadata("design:type", Number)
    ], PlacedBetPart.prototype, "priceNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceType" }),
        __metadata("design:type", String)
    ], PlacedBetPart.prototype, "priceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], PlacedBetPart.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rule4Deductions" }),
        __metadata("design:type", Number)
    ], PlacedBetPart.prototype, "rule4Deductions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectionId" }),
        __metadata("design:type", String)
    ], PlacedBetPart.prototype, "selectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDateTime" }),
        __metadata("design:type", String)
    ], PlacedBetPart.prototype, "startDateTime", void 0);
    return PlacedBetPart;
}(SpeakeasyBase));
export { PlacedBetPart };
