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
export var CREATEDEPLOYEDDEVICESCERTIFICATE_SERVERS = [
    "https://preview.twilio.com",
];
var CreateDeployedDevicesCertificatePathParams = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesCertificatePathParams, _super);
    function CreateDeployedDevicesCertificatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesCertificatePathParams.prototype, "fleetSid", void 0);
    return CreateDeployedDevicesCertificatePathParams;
}(SpeakeasyBase));
export { CreateDeployedDevicesCertificatePathParams };
var CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest, _super);
    function CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CertificateData;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest.prototype, "certificateData", void 0);
    __decorate([
        Metadata({ data: "form, name=DeviceSid;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest.prototype, "deviceSid", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest.prototype, "friendlyName", void 0);
    return CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;
}(SpeakeasyBase));
export { CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest };
var CreateDeployedDevicesCertificateSecurity = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesCertificateSecurity, _super);
    function CreateDeployedDevicesCertificateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateDeployedDevicesCertificateSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateDeployedDevicesCertificateSecurity;
}(SpeakeasyBase));
export { CreateDeployedDevicesCertificateSecurity };
var CreateDeployedDevicesCertificateRequest = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesCertificateRequest, _super);
    function CreateDeployedDevicesCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDeployedDevicesCertificateRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDeployedDevicesCertificatePathParams)
    ], CreateDeployedDevicesCertificateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest)
    ], CreateDeployedDevicesCertificateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDeployedDevicesCertificateSecurity)
    ], CreateDeployedDevicesCertificateRequest.prototype, "security", void 0);
    return CreateDeployedDevicesCertificateRequest;
}(SpeakeasyBase));
export { CreateDeployedDevicesCertificateRequest };
var CreateDeployedDevicesCertificateResponse = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesCertificateResponse, _super);
    function CreateDeployedDevicesCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDeployedDevicesCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateDeployedDevicesCertificateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewDeployedDevicesFleetCertificate)
    ], CreateDeployedDevicesCertificateResponse.prototype, "previewDeployedDevicesFleetCertificate", void 0);
    return CreateDeployedDevicesCertificateResponse;
}(SpeakeasyBase));
export { CreateDeployedDevicesCertificateResponse };
