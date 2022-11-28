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
import { TflApiPresentationEntitiesCrowding } from "./tflapipresentationentitiescrowding";
export var TflApiPresentationEntitiesIdentifierRouteTypeEnum;
(function (TflApiPresentationEntitiesIdentifierRouteTypeEnum) {
    TflApiPresentationEntitiesIdentifierRouteTypeEnum["Unknown"] = "Unknown";
    TflApiPresentationEntitiesIdentifierRouteTypeEnum["All"] = "All";
    TflApiPresentationEntitiesIdentifierRouteTypeEnum["CycleSuperhighways"] = "Cycle Superhighways";
    TflApiPresentationEntitiesIdentifierRouteTypeEnum["Quietways"] = "Quietways";
    TflApiPresentationEntitiesIdentifierRouteTypeEnum["Cycleways"] = "Cycleways";
    TflApiPresentationEntitiesIdentifierRouteTypeEnum["MiniHollands"] = "Mini-Hollands";
    TflApiPresentationEntitiesIdentifierRouteTypeEnum["CentralLondonGrid"] = "Central London Grid";
    TflApiPresentationEntitiesIdentifierRouteTypeEnum["StreetspaceRoute"] = "Streetspace Route";
})(TflApiPresentationEntitiesIdentifierRouteTypeEnum || (TflApiPresentationEntitiesIdentifierRouteTypeEnum = {}));
export var TflApiPresentationEntitiesIdentifierStatusEnum;
(function (TflApiPresentationEntitiesIdentifierStatusEnum) {
    TflApiPresentationEntitiesIdentifierStatusEnum["Unknown"] = "Unknown";
    TflApiPresentationEntitiesIdentifierStatusEnum["All"] = "All";
    TflApiPresentationEntitiesIdentifierStatusEnum["Open"] = "Open";
    TflApiPresentationEntitiesIdentifierStatusEnum["InProgress"] = "In Progress";
    TflApiPresentationEntitiesIdentifierStatusEnum["Planned"] = "Planned";
    TflApiPresentationEntitiesIdentifierStatusEnum["PlannedSubjectToFeasibilityAndConsultation"] = "Planned - Subject to feasibility and consultation.";
    TflApiPresentationEntitiesIdentifierStatusEnum["NotOpen"] = "Not Open";
})(TflApiPresentationEntitiesIdentifierStatusEnum || (TflApiPresentationEntitiesIdentifierStatusEnum = {}));
var TflApiPresentationEntitiesIdentifier = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesIdentifier, _super);
    function TflApiPresentationEntitiesIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crowding" }),
        __metadata("design:type", TflApiPresentationEntitiesCrowding)
    ], TflApiPresentationEntitiesIdentifier.prototype, "crowding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesIdentifier.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesIdentifier.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesIdentifier.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeType" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesIdentifier.prototype, "routeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesIdentifier.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesIdentifier.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesIdentifier.prototype, "uri", void 0);
    return TflApiPresentationEntitiesIdentifier;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesIdentifier };
