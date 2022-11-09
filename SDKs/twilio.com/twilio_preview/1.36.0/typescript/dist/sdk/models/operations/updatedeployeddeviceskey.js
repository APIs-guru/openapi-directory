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
export var UPDATEDEPLOYEDDEVICESKEY_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateDeployedDevicesKeyPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesKeyPathParams, _super);
    function UpdateDeployedDevicesKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyPathParams.prototype, "fleetSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyPathParams.prototype, "sid", void 0);
    return UpdateDeployedDevicesKeyPathParams;
}(SpeakeasyBase));
export { UpdateDeployedDevicesKeyPathParams };
var UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest, _super);
    function UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=DeviceSid;" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest.prototype, "deviceSid", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest.prototype, "friendlyName", void 0);
    return UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest;
}(SpeakeasyBase));
export { UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest };
var UpdateDeployedDevicesKeySecurity = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesKeySecurity, _super);
    function UpdateDeployedDevicesKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDeployedDevicesKeySecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateDeployedDevicesKeySecurity;
}(SpeakeasyBase));
export { UpdateDeployedDevicesKeySecurity };
var UpdateDeployedDevicesKeyRequest = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesKeyRequest, _super);
    function UpdateDeployedDevicesKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDeployedDevicesKeyPathParams)
    ], UpdateDeployedDevicesKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest)
    ], UpdateDeployedDevicesKeyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDeployedDevicesKeySecurity)
    ], UpdateDeployedDevicesKeyRequest.prototype, "security", void 0);
    return UpdateDeployedDevicesKeyRequest;
}(SpeakeasyBase));
export { UpdateDeployedDevicesKeyRequest };
var UpdateDeployedDevicesKeyResponse = /** @class */ (function (_super) {
    __extends(UpdateDeployedDevicesKeyResponse, _super);
    function UpdateDeployedDevicesKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDeployedDevicesKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDeployedDevicesKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewDeployedDevicesFleetKey)
    ], UpdateDeployedDevicesKeyResponse.prototype, "previewDeployedDevicesFleetKey", void 0);
    return UpdateDeployedDevicesKeyResponse;
}(SpeakeasyBase));
export { UpdateDeployedDevicesKeyResponse };
