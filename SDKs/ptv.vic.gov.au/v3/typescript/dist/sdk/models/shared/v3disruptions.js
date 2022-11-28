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
import { V3Disruption } from "./v3disruption";
var V3Disruptions = /** @class */ (function (_super) {
    __extends(V3Disruptions, _super);
    function V3Disruptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ferry", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "ferry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=general", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "general", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interstate_train", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "interstateTrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metro_bus", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "metroBus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metro_train", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "metroTrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metro_tram", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "metroTram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=night_bus", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "nightBus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regional_bus", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "regionalBus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regional_coach", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "regionalCoach", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regional_train", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "regionalTrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=school_bus", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "schoolBus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skybus", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "skybus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxi", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "taxi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telebus", elemType: V3Disruption }),
        __metadata("design:type", Array)
    ], V3Disruptions.prototype, "telebus", void 0);
    return V3Disruptions;
}(SpeakeasyBase));
export { V3Disruptions };
