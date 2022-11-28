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
var GetAccountCredentialsQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountCredentialsQueryParams, _super);
    function GetAccountCredentialsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetAccountCredentialsQueryParams.prototype, "search", void 0);
    return GetAccountCredentialsQueryParams;
}(SpeakeasyBase));
export { GetAccountCredentialsQueryParams };
var GetAccountCredentialsSecurity = /** @class */ (function (_super) {
    __extends(GetAccountCredentialsSecurity, _super);
    function GetAccountCredentialsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAccountCredentialsSecurity.prototype, "bearerAuth", void 0);
    return GetAccountCredentialsSecurity;
}(SpeakeasyBase));
export { GetAccountCredentialsSecurity };
var GetAccountCredentialsRequest = /** @class */ (function (_super) {
    __extends(GetAccountCredentialsRequest, _super);
    function GetAccountCredentialsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountCredentialsQueryParams)
    ], GetAccountCredentialsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountCredentialsSecurity)
    ], GetAccountCredentialsRequest.prototype, "security", void 0);
    return GetAccountCredentialsRequest;
}(SpeakeasyBase));
export { GetAccountCredentialsRequest };
var GetAccountCredentialsResponse = /** @class */ (function (_super) {
    __extends(GetAccountCredentialsResponse, _super);
    function GetAccountCredentialsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountCredentialsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Credential }),
        __metadata("design:type", Array)
    ], GetAccountCredentialsResponse.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountCredentialsResponse.prototype, "statusCode", void 0);
    return GetAccountCredentialsResponse;
}(SpeakeasyBase));
export { GetAccountCredentialsResponse };
