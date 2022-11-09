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
var RotateAccountKeyPathParams = /** @class */ (function (_super) {
    __extends(RotateAccountKeyPathParams, _super);
    function RotateAccountKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" }),
        __metadata("design:type", String)
    ], RotateAccountKeyPathParams.prototype, "keyId", void 0);
    return RotateAccountKeyPathParams;
}(SpeakeasyBase));
export { RotateAccountKeyPathParams };
var RotateAccountKeySecurity = /** @class */ (function (_super) {
    __extends(RotateAccountKeySecurity, _super);
    function RotateAccountKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], RotateAccountKeySecurity.prototype, "bearerAuth", void 0);
    return RotateAccountKeySecurity;
}(SpeakeasyBase));
export { RotateAccountKeySecurity };
var RotateAccountKeyRequest = /** @class */ (function (_super) {
    __extends(RotateAccountKeyRequest, _super);
    function RotateAccountKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RotateAccountKeyPathParams)
    ], RotateAccountKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RotateAccountKeySecurity)
    ], RotateAccountKeyRequest.prototype, "security", void 0);
    return RotateAccountKeyRequest;
}(SpeakeasyBase));
export { RotateAccountKeyRequest };
var RotateAccountKeyResponse = /** @class */ (function (_super) {
    __extends(RotateAccountKeyResponse, _super);
    function RotateAccountKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiKey)
    ], RotateAccountKeyResponse.prototype, "apiKey", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RotateAccountKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RotateAccountKeyResponse.prototype, "statusCode", void 0);
    return RotateAccountKeyResponse;
}(SpeakeasyBase));
export { RotateAccountKeyResponse };
