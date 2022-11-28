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
var TflApiPresentationEntitiesStopPointRouteSection = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesStopPointRouteSection, _super);
    function TflApiPresentationEntitiesStopPointRouteSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "destinationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isActive" }),
        __metadata("design:type", Boolean)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineId" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "lineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineString" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "lineString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=naptanId" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "naptanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeSectionName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "routeSectionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceType" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validFrom" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "validFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validTo" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "validTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vehicleDestinationText" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPointRouteSection.prototype, "vehicleDestinationText", void 0);
    return TflApiPresentationEntitiesStopPointRouteSection;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesStopPointRouteSection };
