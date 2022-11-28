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
export var OutputConfigurationContainerDigitalOutputNoConnectionActionEnum;
(function (OutputConfigurationContainerDigitalOutputNoConnectionActionEnum) {
    OutputConfigurationContainerDigitalOutputNoConnectionActionEnum["Nothing"] = "Nothing";
    OutputConfigurationContainerDigitalOutputNoConnectionActionEnum["TurnOff"] = "TurnOff";
    OutputConfigurationContainerDigitalOutputNoConnectionActionEnum["TurnOn"] = "TurnOn";
    OutputConfigurationContainerDigitalOutputNoConnectionActionEnum["SetPwmValue"] = "SetPwmValue";
})(OutputConfigurationContainerDigitalOutputNoConnectionActionEnum || (OutputConfigurationContainerDigitalOutputNoConnectionActionEnum = {}));
export var OutputConfigurationContainerS0PulseValueEnum;
(function (OutputConfigurationContainerS0PulseValueEnum) {
    OutputConfigurationContainerS0PulseValueEnum["PulseValue1000Kwh"] = "PulseValue1000Kwh";
    OutputConfigurationContainerS0PulseValueEnum["PulseValue10000Kwh"] = "PulseValue10000Kwh";
})(OutputConfigurationContainerS0PulseValueEnum || (OutputConfigurationContainerS0PulseValueEnum = {}));
export var OutputConfigurationContainerTypeEnum;
(function (OutputConfigurationContainerTypeEnum) {
    OutputConfigurationContainerTypeEnum["ImpulseOutputActiveEnergy"] = "ImpulseOutputActiveEnergy";
    OutputConfigurationContainerTypeEnum["ImpulseOutputActiveEnergyImport"] = "ImpulseOutputActiveEnergyImport";
    OutputConfigurationContainerTypeEnum["ImpulseOutputActiveEnergyExport"] = "ImpulseOutputActiveEnergyExport";
    OutputConfigurationContainerTypeEnum["ImpulseOutputReactiveEnergy"] = "ImpulseOutputReactiveEnergy";
    OutputConfigurationContainerTypeEnum["DigitalOutput"] = "DigitalOutput";
    OutputConfigurationContainerTypeEnum["AnalogPwmSignalOutput"] = "AnalogPwmSignalOutput";
    OutputConfigurationContainerTypeEnum["Disabled"] = "Disabled";
})(OutputConfigurationContainerTypeEnum || (OutputConfigurationContainerTypeEnum = {}));
// OutputConfigurationContainer
/**
 * Configuration for the outputs of a meter (analog/digital outputs)
**/
var OutputConfigurationContainer = /** @class */ (function (_super) {
    __extends(OutputConfigurationContainer, _super);
    function OutputConfigurationContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DigitalOutputNoConnectionAction" }),
        __metadata("design:type", String)
    ], OutputConfigurationContainer.prototype, "digitalOutputNoConnectionAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], OutputConfigurationContainer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", Number)
    ], OutputConfigurationContainer.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S0PulseValue" }),
        __metadata("design:type", String)
    ], OutputConfigurationContainer.prototype, "s0PulseValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], OutputConfigurationContainer.prototype, "type", void 0);
    return OutputConfigurationContainer;
}(SpeakeasyBase));
export { OutputConfigurationContainer };
