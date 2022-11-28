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
import { ObservationHeadingGroup } from "./observationheadinggroup";
var ObservationHeading = /** @class */ (function (_super) {
    __extends(ObservationHeading, _super);
    function ObservationHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ObservationHeading.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], ObservationHeading.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decimalPlaces" }),
        __metadata("design:type", Number)
    ], ObservationHeading.prototype, "decimalPlaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultPanel" }),
        __metadata("design:type", Number)
    ], ObservationHeading.prototype, "defaultPanel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultPanelOrder" }),
        __metadata("design:type", Number)
    ], ObservationHeading.prototype, "defaultPanelOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heading" }),
        __metadata("design:type", String)
    ], ObservationHeading.prototype, "heading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ObservationHeading.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infoLink" }),
        __metadata("design:type", String)
    ], ObservationHeading.prototype, "infoLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdate" }),
        __metadata("design:type", Date)
    ], ObservationHeading.prototype, "lastUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxGraph" }),
        __metadata("design:type", Number)
    ], ObservationHeading.prototype, "maxGraph", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minGraph" }),
        __metadata("design:type", Number)
    ], ObservationHeading.prototype, "minGraph", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ObservationHeading.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=normalRange" }),
        __metadata("design:type", String)
    ], ObservationHeading.prototype, "normalRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observationHeadingGroups", elemType: ObservationHeadingGroup }),
        __metadata("design:type", Array)
    ], ObservationHeading.prototype, "observationHeadingGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], ObservationHeading.prototype, "units", void 0);
    return ObservationHeading;
}(SpeakeasyBase));
export { ObservationHeading };
