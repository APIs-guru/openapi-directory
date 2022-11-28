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
export var CreateDeployedDevicesDeviceServerList = [
    "https://preview.twilio.com",
];
var CreateDeployedDevicesDevicePathParams = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesDevicePathParams, _super);
    function CreateDeployedDevicesDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDevicePathParams.prototype, "fleetSid", void 0);
    return CreateDeployedDevicesDevicePathParams;
}(SpeakeasyBase));
export { CreateDeployedDevicesDevicePathParams };
var CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest, _super);
    function CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DeploymentSid;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest.prototype, "deploymentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest.prototype, "uniqueName", void 0);
    return CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest;
}(SpeakeasyBase));
export { CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest };
var CreateDeployedDevicesDeviceSecurity = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesDeviceSecurity, _super);
    function CreateDeployedDevicesDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateDeployedDevicesDeviceSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateDeployedDevicesDeviceSecurity;
}(SpeakeasyBase));
export { CreateDeployedDevicesDeviceSecurity };
var CreateDeployedDevicesDeviceRequest = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesDeviceRequest, _super);
    function CreateDeployedDevicesDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDeviceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDeployedDevicesDevicePathParams)
    ], CreateDeployedDevicesDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest)
    ], CreateDeployedDevicesDeviceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDeployedDevicesDeviceSecurity)
    ], CreateDeployedDevicesDeviceRequest.prototype, "security", void 0);
    return CreateDeployedDevicesDeviceRequest;
}(SpeakeasyBase));
export { CreateDeployedDevicesDeviceRequest };
var CreateDeployedDevicesDeviceResponse = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesDeviceResponse, _super);
    function CreateDeployedDevicesDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDeployedDevicesDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewDeployedDevicesFleetDevice)
    ], CreateDeployedDevicesDeviceResponse.prototype, "previewDeployedDevicesFleetDevice", void 0);
    return CreateDeployedDevicesDeviceResponse;
}(SpeakeasyBase));
export { CreateDeployedDevicesDeviceResponse };
