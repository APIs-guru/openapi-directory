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
export var CreateNewSigningKeyServerList = [
    "https://api.twilio.com",
];
var CreateNewSigningKeyPathParams = /** @class */ (function (_super) {
    __extends(CreateNewSigningKeyPathParams, _super);
    function CreateNewSigningKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateNewSigningKeyPathParams.prototype, "accountSid", void 0);
    return CreateNewSigningKeyPathParams;
}(SpeakeasyBase));
export { CreateNewSigningKeyPathParams };
var CreateNewSigningKeyCreateNewSigningKeyRequest = /** @class */ (function (_super) {
    __extends(CreateNewSigningKeyCreateNewSigningKeyRequest, _super);
    function CreateNewSigningKeyCreateNewSigningKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateNewSigningKeyCreateNewSigningKeyRequest.prototype, "friendlyName", void 0);
    return CreateNewSigningKeyCreateNewSigningKeyRequest;
}(SpeakeasyBase));
export { CreateNewSigningKeyCreateNewSigningKeyRequest };
var CreateNewSigningKeySecurity = /** @class */ (function (_super) {
    __extends(CreateNewSigningKeySecurity, _super);
    function CreateNewSigningKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateNewSigningKeySecurity.prototype, "accountSidAuthToken", void 0);
    return CreateNewSigningKeySecurity;
}(SpeakeasyBase));
export { CreateNewSigningKeySecurity };
var CreateNewSigningKeyRequest = /** @class */ (function (_super) {
    __extends(CreateNewSigningKeyRequest, _super);
    function CreateNewSigningKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNewSigningKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNewSigningKeyPathParams)
    ], CreateNewSigningKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateNewSigningKeyCreateNewSigningKeyRequest)
    ], CreateNewSigningKeyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNewSigningKeySecurity)
    ], CreateNewSigningKeyRequest.prototype, "security", void 0);
    return CreateNewSigningKeyRequest;
}(SpeakeasyBase));
export { CreateNewSigningKeyRequest };
var CreateNewSigningKeyResponse = /** @class */ (function (_super) {
    __extends(CreateNewSigningKeyResponse, _super);
    function CreateNewSigningKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNewSigningKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNewSigningKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountNewSigningKey)
    ], CreateNewSigningKeyResponse.prototype, "apiV2010AccountNewSigningKey", void 0);
    return CreateNewSigningKeyResponse;
}(SpeakeasyBase));
export { CreateNewSigningKeyResponse };
