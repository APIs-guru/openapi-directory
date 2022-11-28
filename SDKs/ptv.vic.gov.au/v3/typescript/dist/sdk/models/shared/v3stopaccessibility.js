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
import { V3StopAccessibilityWheelchair } from "./v3stopaccessibilitywheelchair";
var V3StopAccessibility = /** @class */ (function (_super) {
    __extends(V3StopAccessibility, _super);
    function V3StopAccessibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audio_customer_information" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibility.prototype, "audioCustomerInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=escalator" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibility.prototype, "escalator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hearing_loop" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibility.prototype, "hearingLoop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lift" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibility.prototype, "lift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lighting" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibility.prototype, "lighting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform_number" }),
        __metadata("design:type", Number)
    ], V3StopAccessibility.prototype, "platformNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stairs" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibility.prototype, "stairs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stop_accessible" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibility.prototype, "stopAccessible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tactile_ground_surface_indicator" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibility.prototype, "tactileGroundSurfaceIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibility.prototype, "waitingRoom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wheelchair" }),
        __metadata("design:type", V3StopAccessibilityWheelchair)
    ], V3StopAccessibility.prototype, "wheelchair", void 0);
    return V3StopAccessibility;
}(SpeakeasyBase));
export { V3StopAccessibility };
