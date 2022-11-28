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
export var DevicesBySubTypeGetMeterSubTypeEnum;
(function (DevicesBySubTypeGetMeterSubTypeEnum) {
    DevicesBySubTypeGetMeterSubTypeEnum["MeterSubTypeUnknown"] = "MeterSubTypeUnknown";
    DevicesBySubTypeGetMeterSubTypeEnum["MeterSubTypeCold"] = "MeterSubTypeCold";
    DevicesBySubTypeGetMeterSubTypeEnum["MeterSubTypeHeat"] = "MeterSubTypeHeat";
    DevicesBySubTypeGetMeterSubTypeEnum["MeterSubTypeChargingStation"] = "MeterSubTypeChargingStation";
    DevicesBySubTypeGetMeterSubTypeEnum["MeterSubTypeElectricity"] = "MeterSubTypeElectricity";
    DevicesBySubTypeGetMeterSubTypeEnum["MeterSubTypeWater"] = "MeterSubTypeWater";
    DevicesBySubTypeGetMeterSubTypeEnum["MeterSubTypeGas"] = "MeterSubTypeGas";
    DevicesBySubTypeGetMeterSubTypeEnum["MeterSubTypeElectricityHeat"] = "MeterSubTypeElectricityHeat";
    DevicesBySubTypeGetMeterSubTypeEnum["MeterSubTypeTemperature"] = "MeterSubTypeTemperature";
    DevicesBySubTypeGetMeterSubTypeEnum["MeterSubTypeVirtualBattery"] = "MeterSubTypeVirtualBattery";
})(DevicesBySubTypeGetMeterSubTypeEnum || (DevicesBySubTypeGetMeterSubTypeEnum = {}));
var DevicesBySubTypeGetQueryParams = /** @class */ (function (_super) {
    __extends(DevicesBySubTypeGetQueryParams, _super);
    function DevicesBySubTypeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meterSubType" }),
        __metadata("design:type", String)
    ], DevicesBySubTypeGetQueryParams.prototype, "meterSubType", void 0);
    return DevicesBySubTypeGetQueryParams;
}(SpeakeasyBase));
export { DevicesBySubTypeGetQueryParams };
var DevicesBySubTypeGetRequest = /** @class */ (function (_super) {
    __extends(DevicesBySubTypeGetRequest, _super);
    function DevicesBySubTypeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DevicesBySubTypeGetQueryParams)
    ], DevicesBySubTypeGetRequest.prototype, "queryParams", void 0);
    return DevicesBySubTypeGetRequest;
}(SpeakeasyBase));
export { DevicesBySubTypeGetRequest };
var DevicesBySubTypeGetResponse = /** @class */ (function (_super) {
    __extends(DevicesBySubTypeGetResponse, _super);
    function DevicesBySubTypeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DevicesBySubTypeGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DevicesBySubTypeGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Device }),
        __metadata("design:type", Array)
    ], DevicesBySubTypeGetResponse.prototype, "devices", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DevicesBySubTypeGetResponse.prototype, "statusCode", void 0);
    return DevicesBySubTypeGetResponse;
}(SpeakeasyBase));
export { DevicesBySubTypeGetResponse };
