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
export var UpdateDeviceServerList = [
    "https://microvisor.twilio.com",
];
var UpdateDevicePathParams = /** @class */ (function (_super) {
    __extends(UpdateDevicePathParams, _super);
    function UpdateDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateDevicePathParams.prototype, "sid", void 0);
    return UpdateDevicePathParams;
}(SpeakeasyBase));
export { UpdateDevicePathParams };
var UpdateDeviceUpdateDeviceRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceUpdateDeviceRequest, _super);
    function UpdateDeviceUpdateDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=LoggingEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceUpdateDeviceRequest.prototype, "loggingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TargetApp;" }),
        __metadata("design:type", String)
    ], UpdateDeviceUpdateDeviceRequest.prototype, "targetApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateDeviceUpdateDeviceRequest.prototype, "uniqueName", void 0);
    return UpdateDeviceUpdateDeviceRequest;
}(SpeakeasyBase));
export { UpdateDeviceUpdateDeviceRequest };
var UpdateDeviceSecurity = /** @class */ (function (_super) {
    __extends(UpdateDeviceSecurity, _super);
    function UpdateDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDeviceSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateDeviceSecurity;
}(SpeakeasyBase));
export { UpdateDeviceSecurity };
var UpdateDeviceRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceRequest, _super);
    function UpdateDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDevicePathParams)
    ], UpdateDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDeviceUpdateDeviceRequest)
    ], UpdateDeviceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceSecurity)
    ], UpdateDeviceRequest.prototype, "security", void 0);
    return UpdateDeviceRequest;
}(SpeakeasyBase));
export { UpdateDeviceRequest };
var UpdateDeviceResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceResponse, _super);
    function UpdateDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MicrovisorV1Device)
    ], UpdateDeviceResponse.prototype, "microvisorV1Device", void 0);
    return UpdateDeviceResponse;
}(SpeakeasyBase));
export { UpdateDeviceResponse };
