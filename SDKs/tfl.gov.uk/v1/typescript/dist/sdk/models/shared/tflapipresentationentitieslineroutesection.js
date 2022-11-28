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
var TflApiPresentationEntitiesLineRouteSection = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesLineRouteSection, _super);
    function TflApiPresentationEntitiesLineRouteSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesLineRouteSection.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesLineRouteSection.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromStation" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesLineRouteSection.prototype, "fromStation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeId" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesLineRouteSection.prototype, "routeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceType" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesLineRouteSection.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toStation" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesLineRouteSection.prototype, "toStation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vehicleDestinationText" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesLineRouteSection.prototype, "vehicleDestinationText", void 0);
    return TflApiPresentationEntitiesLineRouteSection;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesLineRouteSection };
