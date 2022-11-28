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
import { TflApiPresentationEntitiesAdditionalProperties } from "./tflapipresentationentitiesadditionalproperties";
import { TflApiPresentationEntitiesPlace } from "./tflapipresentationentitiesplace";
import { TflApiPresentationEntitiesLineGroup } from "./tflapipresentationentitieslinegroup";
import { TflApiPresentationEntitiesLineModeGroup } from "./tflapipresentationentitieslinemodegroup";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";
var TflApiPresentationEntitiesStopPoint = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesStopPoint, _super);
    function TflApiPresentationEntitiesStopPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessibilitySummary" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "accessibilitySummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalProperties", elemType: TflApiPresentationEntitiesAdditionalProperties }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesStopPoint.prototype, "additionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=children", elemType: TflApiPresentationEntitiesPlace }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesStopPoint.prototype, "children", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childrenUrls" }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesStopPoint.prototype, "childrenUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "commonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesStopPoint.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hubNaptanCode" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "hubNaptanCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icsCode" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "icsCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indicator" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "indicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesStopPoint.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineGroup", elemType: TflApiPresentationEntitiesLineGroup }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesStopPoint.prototype, "lineGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineModeGroups", elemType: TflApiPresentationEntitiesLineModeGroup }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesStopPoint.prototype, "lineModeGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lines", elemType: TflApiPresentationEntitiesIdentifier }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesStopPoint.prototype, "lines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lon" }),
        __metadata("design:type", Number)
    ], TflApiPresentationEntitiesStopPoint.prototype, "lon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modes" }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesStopPoint.prototype, "modes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=naptanId" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "naptanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=naptanMode" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "naptanMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placeType" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "placeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "platformName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smsCode" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "smsCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stationNaptan" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "stationNaptan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Boolean)
    ], TflApiPresentationEntitiesStopPoint.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopLetter" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "stopLetter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopType" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "stopType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesStopPoint.prototype, "url", void 0);
    return TflApiPresentationEntitiesStopPoint;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesStopPoint };
