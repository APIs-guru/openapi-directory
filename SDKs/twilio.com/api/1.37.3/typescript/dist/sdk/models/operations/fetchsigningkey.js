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
export var FetchSigningKeyServerList = [
    "https://api.twilio.com",
];
var FetchSigningKeyPathParams = /** @class */ (function (_super) {
    __extends(FetchSigningKeyPathParams, _super);
    function FetchSigningKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchSigningKeyPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSigningKeyPathParams.prototype, "sid", void 0);
    return FetchSigningKeyPathParams;
}(SpeakeasyBase));
export { FetchSigningKeyPathParams };
var FetchSigningKeySecurity = /** @class */ (function (_super) {
    __extends(FetchSigningKeySecurity, _super);
    function FetchSigningKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSigningKeySecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSigningKeySecurity;
}(SpeakeasyBase));
export { FetchSigningKeySecurity };
var FetchSigningKeyRequest = /** @class */ (function (_super) {
    __extends(FetchSigningKeyRequest, _super);
    function FetchSigningKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSigningKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSigningKeyPathParams)
    ], FetchSigningKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSigningKeySecurity)
    ], FetchSigningKeyRequest.prototype, "security", void 0);
    return FetchSigningKeyRequest;
}(SpeakeasyBase));
export { FetchSigningKeyRequest };
var FetchSigningKeyResponse = /** @class */ (function (_super) {
    __extends(FetchSigningKeyResponse, _super);
    function FetchSigningKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSigningKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSigningKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSigningKey)
    ], FetchSigningKeyResponse.prototype, "apiV2010AccountSigningKey", void 0);
    return FetchSigningKeyResponse;
}(SpeakeasyBase));
export { FetchSigningKeyResponse };
