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
export var CREATEDEPLOYEDDEVICESKEY_SERVERS = [
    "https://preview.twilio.com",
];
var CreateDeployedDevicesKeyPathParams = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesKeyPathParams, _super);
    function CreateDeployedDevicesKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesKeyPathParams.prototype, "fleetSid", void 0);
    return CreateDeployedDevicesKeyPathParams;
}(SpeakeasyBase));
export { CreateDeployedDevicesKeyPathParams };
var CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest, _super);
    function CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=DeviceSid;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest.prototype, "deviceSid", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest.prototype, "friendlyName", void 0);
    return CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest;
}(SpeakeasyBase));
export { CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest };
var CreateDeployedDevicesKeySecurity = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesKeySecurity, _super);
    function CreateDeployedDevicesKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateDeployedDevicesKeySecurity.prototype, "accountSidAuthToken", void 0);
    return CreateDeployedDevicesKeySecurity;
}(SpeakeasyBase));
export { CreateDeployedDevicesKeySecurity };
var CreateDeployedDevicesKeyRequest = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesKeyRequest, _super);
    function CreateDeployedDevicesKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDeployedDevicesKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDeployedDevicesKeyPathParams)
    ], CreateDeployedDevicesKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest)
    ], CreateDeployedDevicesKeyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDeployedDevicesKeySecurity)
    ], CreateDeployedDevicesKeyRequest.prototype, "security", void 0);
    return CreateDeployedDevicesKeyRequest;
}(SpeakeasyBase));
export { CreateDeployedDevicesKeyRequest };
var CreateDeployedDevicesKeyResponse = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesKeyResponse, _super);
    function CreateDeployedDevicesKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDeployedDevicesKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateDeployedDevicesKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewDeployedDevicesFleetKey)
    ], CreateDeployedDevicesKeyResponse.prototype, "previewDeployedDevicesFleetKey", void 0);
    return CreateDeployedDevicesKeyResponse;
}(SpeakeasyBase));
export { CreateDeployedDevicesKeyResponse };
