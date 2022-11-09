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
export var CREATENEWKEY_SERVERS = [
    "https://api.twilio.com",
];
var CreateNewKeyPathParams = /** @class */ (function (_super) {
    __extends(CreateNewKeyPathParams, _super);
    function CreateNewKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateNewKeyPathParams.prototype, "accountSid", void 0);
    return CreateNewKeyPathParams;
}(SpeakeasyBase));
export { CreateNewKeyPathParams };
var CreateNewKeyCreateNewKeyRequest = /** @class */ (function (_super) {
    __extends(CreateNewKeyCreateNewKeyRequest, _super);
    function CreateNewKeyCreateNewKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateNewKeyCreateNewKeyRequest.prototype, "friendlyName", void 0);
    return CreateNewKeyCreateNewKeyRequest;
}(SpeakeasyBase));
export { CreateNewKeyCreateNewKeyRequest };
var CreateNewKeySecurity = /** @class */ (function (_super) {
    __extends(CreateNewKeySecurity, _super);
    function CreateNewKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateNewKeySecurity.prototype, "accountSidAuthToken", void 0);
    return CreateNewKeySecurity;
}(SpeakeasyBase));
export { CreateNewKeySecurity };
var CreateNewKeyRequest = /** @class */ (function (_super) {
    __extends(CreateNewKeyRequest, _super);
    function CreateNewKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateNewKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateNewKeyPathParams)
    ], CreateNewKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateNewKeyCreateNewKeyRequest)
    ], CreateNewKeyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateNewKeySecurity)
    ], CreateNewKeyRequest.prototype, "security", void 0);
    return CreateNewKeyRequest;
}(SpeakeasyBase));
export { CreateNewKeyRequest };
var CreateNewKeyResponse = /** @class */ (function (_super) {
    __extends(CreateNewKeyResponse, _super);
    function CreateNewKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateNewKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateNewKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountNewKey)
    ], CreateNewKeyResponse.prototype, "apiV2010AccountNewKey", void 0);
    return CreateNewKeyResponse;
}(SpeakeasyBase));
export { CreateNewKeyResponse };
