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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var UPDATEDEPLOYEDDEVICESDEVICE_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateDeployedDevicesDevicePathParams = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesDevicePathParams, _super);
    function UpdateDeployedDevicesDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDevicePathParams.prototype, "fleetSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDevicePathParams.prototype, "sid", void 0);
    return UpdateDeployedDevicesDevicePathParams;
}(SpeakeasyBase));
export { UpdateDeployedDevicesDevicePathParams };
var UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest, _super);
    function UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=DeploymentSid;" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest.prototype, "deploymentSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest.prototype, "identity", void 0);
    return UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest;
}(SpeakeasyBase));
export { UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest };
var UpdateDeployedDevicesDeviceSecurity = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesDeviceSecurity, _super);
    function UpdateDeployedDevicesDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDeployedDevicesDeviceSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateDeployedDevicesDeviceSecurity;
}(SpeakeasyBase));
export { UpdateDeployedDevicesDeviceSecurity };
var UpdateDeployedDevicesDeviceRequest = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesDeviceRequest, _super);
    function UpdateDeployedDevicesDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDeviceRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDeployedDevicesDevicePathParams)
    ], UpdateDeployedDevicesDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest)
    ], UpdateDeployedDevicesDeviceRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDeployedDevicesDeviceSecurity)
    ], UpdateDeployedDevicesDeviceRequest.prototype, "security", void 0);
    return UpdateDeployedDevicesDeviceRequest;
}(SpeakeasyBase));
export { UpdateDeployedDevicesDeviceRequest };
var UpdateDeployedDevicesDeviceResponse = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesDeviceResponse, _super);
    function UpdateDeployedDevicesDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDeployedDevicesDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewDeployedDevicesFleetDevice)
    ], UpdateDeployedDevicesDeviceResponse.prototype, "previewDeployedDevicesFleetDevice", void 0);
    return UpdateDeployedDevicesDeviceResponse;
}(SpeakeasyBase));
export { UpdateDeployedDevicesDeviceResponse };
