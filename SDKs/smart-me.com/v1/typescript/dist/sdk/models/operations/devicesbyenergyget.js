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
import * as shared from "../shared";
export var DevicesByEnergyGetMeterEnergyTypeEnum;
(function (DevicesByEnergyGetMeterEnergyTypeEnum) {
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeUnknown"] = "MeterTypeUnknown";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeElectricity"] = "MeterTypeElectricity";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeWater"] = "MeterTypeWater";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeGas"] = "MeterTypeGas";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeHeat"] = "MeterTypeHeat";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeHca"] = "MeterTypeHCA";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeAllMeters"] = "MeterTypeAllMeters";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeTemperature"] = "MeterTypeTemperature";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeMBusGateway"] = "MeterTypeMBusGateway";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeRs485Gateway"] = "MeterTypeRS485Gateway";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeCustomDevice"] = "MeterTypeCustomDevice";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeCompressedAir"] = "MeterTypeCompressedAir";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeSolarLog"] = "MeterTypeSolarLog";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeVirtualMeter"] = "MeterTypeVirtualMeter";
    DevicesByEnergyGetMeterEnergyTypeEnum["MeterTypeWmBusGateway"] = "MeterTypeWMBusGateway";
})(DevicesByEnergyGetMeterEnergyTypeEnum || (DevicesByEnergyGetMeterEnergyTypeEnum = {}));
var DevicesByEnergyGetQueryParams = /** @class */ (function (_super) {
    __extends(DevicesByEnergyGetQueryParams, _super);
    function DevicesByEnergyGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meterEnergyType" }),
        __metadata("design:type", String)
    ], DevicesByEnergyGetQueryParams.prototype, "meterEnergyType", void 0);
    return DevicesByEnergyGetQueryParams;
}(SpeakeasyBase));
export { DevicesByEnergyGetQueryParams };
var DevicesByEnergyGetRequest = /** @class */ (function (_super) {
    __extends(DevicesByEnergyGetRequest, _super);
    function DevicesByEnergyGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DevicesByEnergyGetQueryParams)
    ], DevicesByEnergyGetRequest.prototype, "queryParams", void 0);
    return DevicesByEnergyGetRequest;
}(SpeakeasyBase));
export { DevicesByEnergyGetRequest };
var DevicesByEnergyGetResponse = /** @class */ (function (_super) {
    __extends(DevicesByEnergyGetResponse, _super);
    function DevicesByEnergyGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DevicesByEnergyGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DevicesByEnergyGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Device }),
        __metadata("design:type", Array)
    ], DevicesByEnergyGetResponse.prototype, "devices", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DevicesByEnergyGetResponse.prototype, "statusCode", void 0);
    return DevicesByEnergyGetResponse;
}(SpeakeasyBase));
export { DevicesByEnergyGetResponse };
