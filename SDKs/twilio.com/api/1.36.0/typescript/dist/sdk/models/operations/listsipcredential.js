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
export var LISTSIPCREDENTIAL_SERVERS = [
    "https://api.twilio.com",
];
var ListSipCredentialPathParams = /** @class */ (function (_super) {
    __extends(ListSipCredentialPathParams, _super);
    function ListSipCredentialPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSipCredentialPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CredentialListSid" }),
        __metadata("design:type", String)
    ], ListSipCredentialPathParams.prototype, "credentialListSid", void 0);
    return ListSipCredentialPathParams;
}(SpeakeasyBase));
export { ListSipCredentialPathParams };
var ListSipCredentialQueryParams = /** @class */ (function (_super) {
    __extends(ListSipCredentialQueryParams, _super);
    function ListSipCredentialQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSipCredentialQueryParams.prototype, "pageSize", void 0);
    return ListSipCredentialQueryParams;
}(SpeakeasyBase));
export { ListSipCredentialQueryParams };
var ListSipCredentialSecurity = /** @class */ (function (_super) {
    __extends(ListSipCredentialSecurity, _super);
    function ListSipCredentialSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSipCredentialSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSipCredentialSecurity;
}(SpeakeasyBase));
export { ListSipCredentialSecurity };
var ListSipCredentialRequest = /** @class */ (function (_super) {
    __extends(ListSipCredentialRequest, _super);
    function ListSipCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSipCredentialRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipCredentialPathParams)
    ], ListSipCredentialRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipCredentialQueryParams)
    ], ListSipCredentialRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipCredentialSecurity)
    ], ListSipCredentialRequest.prototype, "security", void 0);
    return ListSipCredentialRequest;
}(SpeakeasyBase));
export { ListSipCredentialRequest };
var ListSipCredentialListSipCredentialResponse = /** @class */ (function (_super) {
    __extends(ListSipCredentialListSipCredentialResponse, _super);
    function ListSipCredentialListSipCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=credentials", elemType: shared.ApiV2010AccountSipSipCredentialListSipCredential }),
        __metadata("design:type", Array)
    ], ListSipCredentialListSipCredentialResponse.prototype, "credentials", void 0);
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSipCredentialListSipCredentialResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSipCredentialListSipCredentialResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSipCredentialListSipCredentialResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSipCredentialListSipCredentialResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipCredentialListSipCredentialResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSipCredentialListSipCredentialResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSipCredentialListSipCredentialResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSipCredentialListSipCredentialResponse.prototype, "uri", void 0);
    return ListSipCredentialListSipCredentialResponse;
}(SpeakeasyBase));
export { ListSipCredentialListSipCredentialResponse };
var ListSipCredentialResponse = /** @class */ (function (_super) {
    __extends(ListSipCredentialResponse, _super);
    function ListSipCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSipCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipCredentialListSipCredentialResponse)
    ], ListSipCredentialResponse.prototype, "listSipCredentialResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSipCredentialResponse.prototype, "statusCode", void 0);
    return ListSipCredentialResponse;
}(SpeakeasyBase));
export { ListSipCredentialResponse };
