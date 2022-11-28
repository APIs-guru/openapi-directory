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
// ReinitializeActionConfiguration
/**
 * The deserialized form of the <b>Reinitialize</b> service's request payload.
**/
var ReinitializeActionConfiguration = /** @class */ (function (_super) {
    __extends(ReinitializeActionConfiguration, _super);
    function ReinitializeActionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetAlertActions" }),
        __metadata("design:type", Number)
    ], ReinitializeActionConfiguration.prototype, "resetAlertActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetAlertAfterNTimes" }),
        __metadata("design:type", Number)
    ], ReinitializeActionConfiguration.prototype, "resetAlertAfterNTimes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetDebugMode" }),
        __metadata("design:type", Number)
    ], ReinitializeActionConfiguration.prototype, "resetDebugMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetDiscoveryAndPollingIntervals" }),
        __metadata("design:type", Number)
    ], ReinitializeActionConfiguration.prototype, "resetDiscoveryAndPollingIntervals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetJavaSettings" }),
        __metadata("design:type", Number)
    ], ReinitializeActionConfiguration.prototype, "resetJavaSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetOtherAlertSettings" }),
        __metadata("design:type", Number)
    ], ReinitializeActionConfiguration.prototype, "resetOtherAlertSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetRemovedPausedObjectList" }),
        __metadata("design:type", Number)
    ], ReinitializeActionConfiguration.prototype, "resetRemovedPausedObjectList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetReportSettings" }),
        __metadata("design:type", Number)
    ], ReinitializeActionConfiguration.prototype, "resetReportSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetThresholds" }),
        __metadata("design:type", Number)
    ], ReinitializeActionConfiguration.prototype, "resetThresholds", void 0);
    return ReinitializeActionConfiguration;
}(SpeakeasyBase));
export { ReinitializeActionConfiguration };
