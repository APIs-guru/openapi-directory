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
export var DELETESIGNINGKEY_SERVERS = [
    "https://api.twilio.com",
];
var DeleteSigningKeyPathParams = /** @class */ (function (_super) {
    __extends(DeleteSigningKeyPathParams, _super);
    function DeleteSigningKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], DeleteSigningKeyPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteSigningKeyPathParams.prototype, "sid", void 0);
    return DeleteSigningKeyPathParams;
}(SpeakeasyBase));
export { DeleteSigningKeyPathParams };
var DeleteSigningKeySecurity = /** @class */ (function (_super) {
    __extends(DeleteSigningKeySecurity, _super);
    function DeleteSigningKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSigningKeySecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSigningKeySecurity;
}(SpeakeasyBase));
export { DeleteSigningKeySecurity };
var DeleteSigningKeyRequest = /** @class */ (function (_super) {
    __extends(DeleteSigningKeyRequest, _super);
    function DeleteSigningKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSigningKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSigningKeyPathParams)
    ], DeleteSigningKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSigningKeySecurity)
    ], DeleteSigningKeyRequest.prototype, "security", void 0);
    return DeleteSigningKeyRequest;
}(SpeakeasyBase));
export { DeleteSigningKeyRequest };
var DeleteSigningKeyResponse = /** @class */ (function (_super) {
    __extends(DeleteSigningKeyResponse, _super);
    function DeleteSigningKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSigningKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSigningKeyResponse.prototype, "statusCode", void 0);
    return DeleteSigningKeyResponse;
}(SpeakeasyBase));
export { DeleteSigningKeyResponse };
