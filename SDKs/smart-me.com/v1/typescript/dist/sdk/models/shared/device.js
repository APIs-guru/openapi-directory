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
export var DeviceChargingStationStateEnum;
(function (DeviceChargingStationStateEnum) {
    DeviceChargingStationStateEnum["Booting"] = "Booting";
    DeviceChargingStationStateEnum["ReadyNoCarConnected"] = "ReadyNoCarConnected";
    DeviceChargingStationStateEnum["ReadyCarConnected"] = "ReadyCarConnected";
    DeviceChargingStationStateEnum["StartedWaitForCar"] = "StartedWaitForCar";
    DeviceChargingStationStateEnum["Charging"] = "Charging";
    DeviceChargingStationStateEnum["Offline"] = "Offline";
})(DeviceChargingStationStateEnum || (DeviceChargingStationStateEnum = {}));
export var DeviceDeviceEnergyTypeEnum;
(function (DeviceDeviceEnergyTypeEnum) {
    DeviceDeviceEnergyTypeEnum["MeterTypeUnknown"] = "MeterTypeUnknown";
    DeviceDeviceEnergyTypeEnum["MeterTypeElectricity"] = "MeterTypeElectricity";
    DeviceDeviceEnergyTypeEnum["MeterTypeWater"] = "MeterTypeWater";
    DeviceDeviceEnergyTypeEnum["MeterTypeGas"] = "MeterTypeGas";
    DeviceDeviceEnergyTypeEnum["MeterTypeHeat"] = "MeterTypeHeat";
    DeviceDeviceEnergyTypeEnum["MeterTypeHca"] = "MeterTypeHCA";
    DeviceDeviceEnergyTypeEnum["MeterTypeAllMeters"] = "MeterTypeAllMeters";
    DeviceDeviceEnergyTypeEnum["MeterTypeTemperature"] = "MeterTypeTemperature";
    DeviceDeviceEnergyTypeEnum["MeterTypeMBusGateway"] = "MeterTypeMBusGateway";
    DeviceDeviceEnergyTypeEnum["MeterTypeRs485Gateway"] = "MeterTypeRS485Gateway";
    DeviceDeviceEnergyTypeEnum["MeterTypeCustomDevice"] = "MeterTypeCustomDevice";
    DeviceDeviceEnergyTypeEnum["MeterTypeCompressedAir"] = "MeterTypeCompressedAir";
    DeviceDeviceEnergyTypeEnum["MeterTypeSolarLog"] = "MeterTypeSolarLog";
    DeviceDeviceEnergyTypeEnum["MeterTypeVirtualMeter"] = "MeterTypeVirtualMeter";
    DeviceDeviceEnergyTypeEnum["MeterTypeWmBusGateway"] = "MeterTypeWMBusGateway";
})(DeviceDeviceEnergyTypeEnum || (DeviceDeviceEnergyTypeEnum = {}));
export var DeviceFamilyTypeEnum;
(function (DeviceFamilyTypeEnum) {
    DeviceFamilyTypeEnum["MeterFamilyTypeUnknown"] = "MeterFamilyTypeUnknown";
    DeviceFamilyTypeEnum["MeterFamilyTypeSmartMeConnectV1"] = "MeterFamilyTypeSmartMeConnectV1";
    DeviceFamilyTypeEnum["MeterFamiliyTypeSmartMeMeter"] = "MeterFamiliyTypeSmartMeMeter";
    DeviceFamilyTypeEnum["MeterFamiliyTypeSmartMeMeterWithSwitch"] = "MeterFamiliyTypeSmartMeMeterWithSwitch";
    DeviceFamilyTypeEnum["MeterFamilyTypeMBusGatewayV1"] = "MeterFamilyTypeMBusGatewayV1";
    DeviceFamilyTypeEnum["MeterFamilyTypeRs485GatewayV1"] = "MeterFamilyTypeRS485GatewayV1";
    DeviceFamilyTypeEnum["MeterFamilyTypeKamstrupModule"] = "MeterFamilyTypeKamstrupModule";
    DeviceFamilyTypeEnum["MeterFamilyTypeSmartMe3PhaseMeter80A"] = "MeterFamilyTypeSmartMe3PhaseMeter80A";
    DeviceFamilyTypeEnum["MeterFamilyTypeSmartMe3PhaseMeter32A"] = "MeterFamilyTypeSmartMe3PhaseMeter32A";
    DeviceFamilyTypeEnum["MeterFamilyTypeSmartMe3PhaseTelstarTransformer"] = "MeterFamilyTypeSmartMe3PhaseTelstarTransformer";
    DeviceFamilyTypeEnum["MeterFamilyTypeLandisGyrModule"] = "MeterFamilyTypeLandisGyrModule";
    DeviceFamilyTypeEnum["MeterFamilyTypeFnnOpticalModule"] = "MeterFamilyTypeFnnOpticalModule";
    DeviceFamilyTypeEnum["MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi"] = "MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi";
    DeviceFamilyTypeEnum["MeterFamilyTypeSmartMe3PhaseTelstar80AMobile"] = "MeterFamilyTypeSmartMe3PhaseTelstar80AMobile";
    DeviceFamilyTypeEnum["MeterFamilyTypeSmartMe1PhaseMeter80Av2WiFi"] = "MeterFamilyTypeSmartMe1PhaseMeter80AV2WiFi";
    DeviceFamilyTypeEnum["MeterFamilyTypeSmartMe1PhaseMeter32Av2WiFi"] = "MeterFamilyTypeSmartMe1PhaseMeter32AV2WiFi";
    DeviceFamilyTypeEnum["MeterFamilyTypeSmartMe1PhaseMeter80AGprs"] = "MeterFamilyTypeSmartMe1PhaseMeter80AGprs";
    DeviceFamilyTypeEnum["MeterFamilyTypeSmartMe1PhaseMeter32AGprs"] = "MeterFamilyTypeSmartMe1PhaseMeter32AGprs";
    DeviceFamilyTypeEnum["MeterFamilyTypeWmBusGatewayV1"] = "MeterFamilyTypeWMBusGatewayV1";
    DeviceFamilyTypeEnum["MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile"] = "MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile";
    DeviceFamilyTypeEnum["MeterFamilyTypeMithralHallV1"] = "MeterFamilyTypeMithralHallV1";
    DeviceFamilyTypeEnum["MeterFamilyTypeRestApiMeter"] = "MeterFamilyTypeRestApiMeter";
    DeviceFamilyTypeEnum["MeterFamilyTypeVirtualBillingMeter"] = "MeterFamilyTypeVirtualBillingMeter";
})(DeviceFamilyTypeEnum || (DeviceFamilyTypeEnum = {}));
export var DeviceMeterSubTypeEnum;
(function (DeviceMeterSubTypeEnum) {
    DeviceMeterSubTypeEnum["MeterSubTypeUnknown"] = "MeterSubTypeUnknown";
    DeviceMeterSubTypeEnum["MeterSubTypeCold"] = "MeterSubTypeCold";
    DeviceMeterSubTypeEnum["MeterSubTypeHeat"] = "MeterSubTypeHeat";
    DeviceMeterSubTypeEnum["MeterSubTypeChargingStation"] = "MeterSubTypeChargingStation";
    DeviceMeterSubTypeEnum["MeterSubTypeElectricity"] = "MeterSubTypeElectricity";
    DeviceMeterSubTypeEnum["MeterSubTypeWater"] = "MeterSubTypeWater";
    DeviceMeterSubTypeEnum["MeterSubTypeGas"] = "MeterSubTypeGas";
    DeviceMeterSubTypeEnum["MeterSubTypeElectricityHeat"] = "MeterSubTypeElectricityHeat";
    DeviceMeterSubTypeEnum["MeterSubTypeTemperature"] = "MeterSubTypeTemperature";
    DeviceMeterSubTypeEnum["MeterSubTypeVirtualBattery"] = "MeterSubTypeVirtualBattery";
})(DeviceMeterSubTypeEnum || (DeviceMeterSubTypeEnum = {}));
// Device
/**
 * Container Class for the Web API
**/
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivePower" }),
        __metadata("design:type", Number)
    ], Device.prototype, "activePower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivePowerL1" }),
        __metadata("design:type", Number)
    ], Device.prototype, "activePowerL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivePowerL2" }),
        __metadata("design:type", Number)
    ], Device.prototype, "activePowerL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivePowerL3" }),
        __metadata("design:type", Number)
    ], Device.prototype, "activePowerL3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivePowerUnit" }),
        __metadata("design:type", String)
    ], Device.prototype, "activePowerUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveTariff" }),
        __metadata("design:type", Number)
    ], Device.prototype, "activeTariff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalMeterSerialNumber" }),
        __metadata("design:type", String)
    ], Device.prototype, "additionalMeterSerialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnalogOutput1" }),
        __metadata("design:type", Number)
    ], Device.prototype, "analogOutput1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnalogOutput2" }),
        __metadata("design:type", Number)
    ], Device.prototype, "analogOutput2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargingStationState" }),
        __metadata("design:type", String)
    ], Device.prototype, "chargingStationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReading" }),
        __metadata("design:type", Number)
    ], Device.prototype, "counterReading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingExport" }),
        __metadata("design:type", Number)
    ], Device.prototype, "counterReadingExport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingImport" }),
        __metadata("design:type", Number)
    ], Device.prototype, "counterReadingImport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingT1" }),
        __metadata("design:type", Number)
    ], Device.prototype, "counterReadingT1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingT2" }),
        __metadata("design:type", Number)
    ], Device.prototype, "counterReadingT2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingT3" }),
        __metadata("design:type", Number)
    ], Device.prototype, "counterReadingT3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingT4" }),
        __metadata("design:type", Number)
    ], Device.prototype, "counterReadingT4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CounterReadingUnit" }),
        __metadata("design:type", String)
    ], Device.prototype, "counterReadingUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Current" }),
        __metadata("design:type", Number)
    ], Device.prototype, "current", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentL1" }),
        __metadata("design:type", Number)
    ], Device.prototype, "currentL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentL2" }),
        __metadata("design:type", Number)
    ], Device.prototype, "currentL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentL3" }),
        __metadata("design:type", Number)
    ], Device.prototype, "currentL3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceEnergyType" }),
        __metadata("design:type", String)
    ], Device.prototype, "deviceEnergyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DigitalInput1" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "digitalInput1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DigitalInput2" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "digitalInput2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DigitalOutput1" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "digitalOutput1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DigitalOutput2" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "digitalOutput2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FamilyType" }),
        __metadata("design:type", String)
    ], Device.prototype, "familyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FlowRate" }),
        __metadata("design:type", Number)
    ], Device.prototype, "flowRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Device.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MeterSubType" }),
        __metadata("design:type", String)
    ], Device.prototype, "meterSubType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Device.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PowerFactor" }),
        __metadata("design:type", Number)
    ], Device.prototype, "powerFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PowerFactorL1" }),
        __metadata("design:type", Number)
    ], Device.prototype, "powerFactorL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PowerFactorL2" }),
        __metadata("design:type", Number)
    ], Device.prototype, "powerFactorL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PowerFactorL3" }),
        __metadata("design:type", Number)
    ], Device.prototype, "powerFactorL3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Serial" }),
        __metadata("design:type", Number)
    ], Device.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SwitchOn" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "switchOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SwitchPhaseL1On" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "switchPhaseL1On", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SwitchPhaseL2On" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "switchPhaseL2On", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SwitchPhaseL3On" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "switchPhaseL3On", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Temperature" }),
        __metadata("design:type", Number)
    ], Device.prototype, "temperature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValueDate" }),
        __metadata("design:type", Date)
    ], Device.prototype, "valueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Voltage" }),
        __metadata("design:type", Number)
    ], Device.prototype, "voltage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoltageL1" }),
        __metadata("design:type", Number)
    ], Device.prototype, "voltageL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoltageL2" }),
        __metadata("design:type", Number)
    ], Device.prototype, "voltageL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoltageL3" }),
        __metadata("design:type", Number)
    ], Device.prototype, "voltageL3", void 0);
    return Device;
}(SpeakeasyBase));
export { Device };
