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
export var LISTCREDENTIALPUBLICKEY_SERVERS = [
    "https://accounts.twilio.com",
];
var ListCredentialPublicKeyQueryParams = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeyQueryParams, _super);
    function ListCredentialPublicKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCredentialPublicKeyQueryParams.prototype, "pageSize", void 0);
    return ListCredentialPublicKeyQueryParams;
}(SpeakeasyBase));
export { ListCredentialPublicKeyQueryParams };
var ListCredentialPublicKeySecurity = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeySecurity, _super);
    function ListCredentialPublicKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCredentialPublicKeySecurity.prototype, "accountSidAuthToken", void 0);
    return ListCredentialPublicKeySecurity;
}(SpeakeasyBase));
export { ListCredentialPublicKeySecurity };
var ListCredentialPublicKeyRequest = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeyRequest, _super);
    function ListCredentialPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCredentialPublicKeyQueryParams)
    ], ListCredentialPublicKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCredentialPublicKeySecurity)
    ], ListCredentialPublicKeyRequest.prototype, "security", void 0);
    return ListCredentialPublicKeyRequest;
}(SpeakeasyBase));
export { ListCredentialPublicKeyRequest };
var ListCredentialPublicKeyListCredentialPublicKeyResponseMeta = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeyListCredentialPublicKeyResponseMeta, _super);
    function ListCredentialPublicKeyListCredentialPublicKeyResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponseMeta.prototype, "url", void 0);
    return ListCredentialPublicKeyListCredentialPublicKeyResponseMeta;
}(SpeakeasyBase));
export { ListCredentialPublicKeyListCredentialPublicKeyResponseMeta };
var ListCredentialPublicKeyListCredentialPublicKeyResponse = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeyListCredentialPublicKeyResponse, _super);
    function ListCredentialPublicKeyListCredentialPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=credentials", elemType: shared.AccountsV1CredentialCredentialPublicKey }),
        __metadata("design:type", Array)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponse.prototype, "credentials", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListCredentialPublicKeyListCredentialPublicKeyResponseMeta)
    ], ListCredentialPublicKeyListCredentialPublicKeyResponse.prototype, "meta", void 0);
    return ListCredentialPublicKeyListCredentialPublicKeyResponse;
}(SpeakeasyBase));
export { ListCredentialPublicKeyListCredentialPublicKeyResponse };
var ListCredentialPublicKeyResponse = /** @class */ (function (_super) {
    __extends(ListCredentialPublicKeyResponse, _super);
    function ListCredentialPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCredentialPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCredentialPublicKeyListCredentialPublicKeyResponse)
    ], ListCredentialPublicKeyResponse.prototype, "listCredentialPublicKeyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListCredentialPublicKeyResponse.prototype, "statusCode", void 0);
    return ListCredentialPublicKeyResponse;
}(SpeakeasyBase));
export { ListCredentialPublicKeyResponse };
