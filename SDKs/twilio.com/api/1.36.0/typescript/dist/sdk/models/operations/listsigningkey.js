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
export var LISTSIGNINGKEY_SERVERS = [
    "https://api.twilio.com",
];
var ListSigningKeyPathParams = /** @class */ (function (_super) {
    __extends(ListSigningKeyPathParams, _super);
    function ListSigningKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSigningKeyPathParams.prototype, "accountSid", void 0);
    return ListSigningKeyPathParams;
}(SpeakeasyBase));
export { ListSigningKeyPathParams };
var ListSigningKeyQueryParams = /** @class */ (function (_super) {
    __extends(ListSigningKeyQueryParams, _super);
    function ListSigningKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSigningKeyQueryParams.prototype, "pageSize", void 0);
    return ListSigningKeyQueryParams;
}(SpeakeasyBase));
export { ListSigningKeyQueryParams };
var ListSigningKeySecurity = /** @class */ (function (_super) {
    __extends(ListSigningKeySecurity, _super);
    function ListSigningKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSigningKeySecurity.prototype, "accountSidAuthToken", void 0);
    return ListSigningKeySecurity;
}(SpeakeasyBase));
export { ListSigningKeySecurity };
var ListSigningKeyRequest = /** @class */ (function (_super) {
    __extends(ListSigningKeyRequest, _super);
    function ListSigningKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSigningKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSigningKeyPathParams)
    ], ListSigningKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSigningKeyQueryParams)
    ], ListSigningKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSigningKeySecurity)
    ], ListSigningKeyRequest.prototype, "security", void 0);
    return ListSigningKeyRequest;
}(SpeakeasyBase));
export { ListSigningKeyRequest };
var ListSigningKeyListSigningKeyResponse = /** @class */ (function (_super) {
    __extends(ListSigningKeyListSigningKeyResponse, _super);
    function ListSigningKeyListSigningKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSigningKeyListSigningKeyResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSigningKeyListSigningKeyResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSigningKeyListSigningKeyResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSigningKeyListSigningKeyResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSigningKeyListSigningKeyResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSigningKeyListSigningKeyResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=signing_keys", elemType: shared.ApiV2010AccountSigningKey }),
        __metadata("design:type", Array)
    ], ListSigningKeyListSigningKeyResponse.prototype, "signingKeys", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSigningKeyListSigningKeyResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSigningKeyListSigningKeyResponse.prototype, "uri", void 0);
    return ListSigningKeyListSigningKeyResponse;
}(SpeakeasyBase));
export { ListSigningKeyListSigningKeyResponse };
var ListSigningKeyResponse = /** @class */ (function (_super) {
    __extends(ListSigningKeyResponse, _super);
    function ListSigningKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSigningKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSigningKeyListSigningKeyResponse)
    ], ListSigningKeyResponse.prototype, "listSigningKeyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSigningKeyResponse.prototype, "statusCode", void 0);
    return ListSigningKeyResponse;
}(SpeakeasyBase));
export { ListSigningKeyResponse };
