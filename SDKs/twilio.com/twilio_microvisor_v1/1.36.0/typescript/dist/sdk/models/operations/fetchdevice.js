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
export var FETCHDEVICE_SERVERS = [
    "https://microvisor.twilio.com",
];
var FetchDevicePathParams = /** @class */ (function (_super) {
    __extends(FetchDevicePathParams, _super);
    function FetchDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchDevicePathParams.prototype, "sid", void 0);
    return FetchDevicePathParams;
}(SpeakeasyBase));
export { FetchDevicePathParams };
var FetchDeviceSecurity = /** @class */ (function (_super) {
    __extends(FetchDeviceSecurity, _super);
    function FetchDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchDeviceSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchDeviceSecurity;
}(SpeakeasyBase));
export { FetchDeviceSecurity };
var FetchDeviceRequest = /** @class */ (function (_super) {
    __extends(FetchDeviceRequest, _super);
    function FetchDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchDeviceRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchDevicePathParams)
    ], FetchDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchDeviceSecurity)
    ], FetchDeviceRequest.prototype, "security", void 0);
    return FetchDeviceRequest;
}(SpeakeasyBase));
export { FetchDeviceRequest };
var FetchDeviceResponse = /** @class */ (function (_super) {
    __extends(FetchDeviceResponse, _super);
    function FetchDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MicrovisorV1Device)
    ], FetchDeviceResponse.prototype, "microvisorV1Device", void 0);
    return FetchDeviceResponse;
}(SpeakeasyBase));
export { FetchDeviceResponse };
