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
export var DeviceToPostDeviceEnergyTypeEnum;
(function (DeviceToPostDeviceEnergyTypeEnum) {
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeUnknown"] = "MeterTypeUnknown";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeElectricity"] = "MeterTypeElectricity";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeWater"] = "MeterTypeWater";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeGas"] = "MeterTypeGas";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeHeat"] = "MeterTypeHeat";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeHca"] = "MeterTypeHCA";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeAllMeters"] = "MeterTypeAllMeters";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeTemperature"] = "MeterTypeTemperature";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeMBusGateway"] = "MeterTypeMBusGateway";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeRs485Gateway"] = "MeterTypeRS485Gateway";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeCustomDevice"] = "MeterTypeCustomDevice";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeCompressedAir"] = "MeterTypeCompressedAir";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeSolarLog"] = "MeterTypeSolarLog";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeVirtualMeter"] = "MeterTypeVirtualMeter";
    DeviceToPostDeviceEnergyTypeEnum["MeterTypeWmBusGateway"] = "MeterTypeWMBusGateway";
})(DeviceToPostDeviceEnergyTypeEnum || (DeviceToPostDeviceEnergyTypeEnum = {}));
export var DeviceToPostMeterSubTypeEnum;
(function (DeviceToPostMeterSubTypeEnum) {
    DeviceToPostMeterSubTypeEnum["MeterSubTypeUnknown"] = "MeterSubTypeUnknown";
    DeviceToPostMeterSubTypeEnum["MeterSubTypeCold"] = "MeterSubTypeCold";
    DeviceToPostMeterSubTypeEnum["MeterSubTypeHeat"] = "MeterSubTypeHeat";
    DeviceToPostMeterSubTypeEnum["MeterSubTypeChargingStation"] = "MeterSubTypeChargingStation";
    DeviceToPostMeterSubTypeEnum["MeterSubTypeElectricity"] = "MeterSubTypeElectricity";
    DeviceToPostMeterSubTypeEnum["MeterSubTypeWater"] = "MeterSubTypeWater";
    DeviceToPostMeterSubTypeEnum["MeterSubTypeGas"] = "MeterSubTypeGas";
    DeviceToPostMeterSubTypeEnum["MeterSubTypeElectricityHeat"] = "MeterSubTypeElectricityHeat";
    DeviceToPostMeterSubTypeEnum["MeterSubTypeTemperature"] = "MeterSubTypeTemperature";
    DeviceToPostMeterSubTypeEnum["MeterSubTypeVirtualBattery"] = "MeterSubTypeVirtualBattery";
})(DeviceToPostMeterSubTypeEnum || (DeviceToPostMeterSubTypeEnum = {}));
// DeviceToPost
/**
 * Container Class for the Web API
**/
var DeviceToPost = /** @class */ (function (_super) {
    __extends(DeviceToPost, _super);
    function DeviceToPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivePower, form, name=ActivePower;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "activePower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReading, form, name=CounterReading;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "counterReading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingExport, form, name=CounterReadingExport;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "counterReadingExport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingExportT1, form, name=CounterReadingExportT1;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "counterReadingExportT1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingExportT2, form, name=CounterReadingExportT2;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "counterReadingExportT2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingT1, form, name=CounterReadingT1;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "counterReadingT1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingT2, form, name=CounterReadingT2;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "counterReadingT2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Current, form, name=Current;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "current", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentL1, form, name=CurrentL1;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "currentL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentL2, form, name=CurrentL2;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "currentL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentL3, form, name=CurrentL3;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "currentL3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceEnergyType, form, name=DeviceEnergyType;" }),
        __metadata("design:type", String)
    ], DeviceToPost.prototype, "deviceEnergyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DigitalInput1, form, name=DigitalInput1;" }),
        __metadata("design:type", Boolean)
    ], DeviceToPost.prototype, "digitalInput1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" }),
        __metadata("design:type", String)
    ], DeviceToPost.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MeterSubType, form, name=MeterSubType;" }),
        __metadata("design:type", String)
    ], DeviceToPost.prototype, "meterSubType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" }),
        __metadata("design:type", String)
    ], DeviceToPost.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PowerFactor, form, name=PowerFactor;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "powerFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PowerFactorL1, form, name=PowerFactorL1;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "powerFactorL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PowerFactorL2, form, name=PowerFactorL2;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "powerFactorL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PowerFactorL3, form, name=PowerFactorL3;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "powerFactorL3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Serial, form, name=Serial;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Temperature, form, name=Temperature;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "temperature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValueDate, form, name=ValueDate;" }),
        __metadata("design:type", Date)
    ], DeviceToPost.prototype, "valueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Voltage, form, name=Voltage;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "voltage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoltageL1, form, name=VoltageL1;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "voltageL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoltageL2, form, name=VoltageL2;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "voltageL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoltageL3, form, name=VoltageL3;" }),
        __metadata("design:type", Number)
    ], DeviceToPost.prototype, "voltageL3", void 0);
    return DeviceToPost;
}(SpeakeasyBase));
export { DeviceToPost };
