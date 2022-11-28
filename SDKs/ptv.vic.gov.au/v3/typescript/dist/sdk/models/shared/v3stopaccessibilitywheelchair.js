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
var V3StopAccessibilityWheelchair = /** @class */ (function (_super) {
    __extends(V3StopAccessibilityWheelchair, _super);
    function V3StopAccessibilityWheelchair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessible_ramp" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibilityWheelchair.prototype, "accessibleRamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=low_ticket_counter" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibilityWheelchair.prototype, "lowTicketCounter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manouvering" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibilityWheelchair.prototype, "manouvering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parking" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibilityWheelchair.prototype, "parking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raised_platform" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibilityWheelchair.prototype, "raisedPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raised_platform_shelther" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibilityWheelchair.prototype, "raisedPlatformShelther", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ramp" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibilityWheelchair.prototype, "ramp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondary_path" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibilityWheelchair.prototype, "secondaryPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=steep_ramp" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibilityWheelchair.prototype, "steepRamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telephone" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibilityWheelchair.prototype, "telephone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toilet" }),
        __metadata("design:type", Boolean)
    ], V3StopAccessibilityWheelchair.prototype, "toilet", void 0);
    return V3StopAccessibilityWheelchair;
}(SpeakeasyBase));
export { V3StopAccessibilityWheelchair };
