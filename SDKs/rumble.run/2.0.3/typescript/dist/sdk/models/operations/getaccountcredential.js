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
var GetAccountCredentialPathParams = /** @class */ (function (_super) {
    __extends(GetAccountCredentialPathParams, _super);
    function GetAccountCredentialPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credential_id" }),
        __metadata("design:type", String)
    ], GetAccountCredentialPathParams.prototype, "credentialId", void 0);
    return GetAccountCredentialPathParams;
}(SpeakeasyBase));
export { GetAccountCredentialPathParams };
var GetAccountCredentialSecurity = /** @class */ (function (_super) {
    __extends(GetAccountCredentialSecurity, _super);
    function GetAccountCredentialSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAccountCredentialSecurity.prototype, "bearerAuth", void 0);
    return GetAccountCredentialSecurity;
}(SpeakeasyBase));
export { GetAccountCredentialSecurity };
var GetAccountCredentialRequest = /** @class */ (function (_super) {
    __extends(GetAccountCredentialRequest, _super);
    function GetAccountCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountCredentialPathParams)
    ], GetAccountCredentialRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountCredentialSecurity)
    ], GetAccountCredentialRequest.prototype, "security", void 0);
    return GetAccountCredentialRequest;
}(SpeakeasyBase));
export { GetAccountCredentialRequest };
var GetAccountCredentialResponse = /** @class */ (function (_super) {
    __extends(GetAccountCredentialResponse, _super);
    function GetAccountCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Credential)
    ], GetAccountCredentialResponse.prototype, "credential", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountCredentialResponse.prototype, "statusCode", void 0);
    return GetAccountCredentialResponse;
}(SpeakeasyBase));
export { GetAccountCredentialResponse };
