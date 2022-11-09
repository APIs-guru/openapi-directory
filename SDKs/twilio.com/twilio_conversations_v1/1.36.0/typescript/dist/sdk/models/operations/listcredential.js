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
export var LISTCREDENTIAL_SERVERS = [
    "https://conversations.twilio.com",
];
var ListCredentialQueryParams = /** @class */ (function (_super) {
    __extends(ListCredentialQueryParams, _super);
    function ListCredentialQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCredentialQueryParams.prototype, "pageSize", void 0);
    return ListCredentialQueryParams;
}(SpeakeasyBase));
export { ListCredentialQueryParams };
var ListCredentialSecurity = /** @class */ (function (_super) {
    __extends(ListCredentialSecurity, _super);
    function ListCredentialSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCredentialSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCredentialSecurity;
}(SpeakeasyBase));
export { ListCredentialSecurity };
var ListCredentialRequest = /** @class */ (function (_super) {
    __extends(ListCredentialRequest, _super);
    function ListCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCredentialRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCredentialQueryParams)
    ], ListCredentialRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCredentialSecurity)
    ], ListCredentialRequest.prototype, "security", void 0);
    return ListCredentialRequest;
}(SpeakeasyBase));
export { ListCredentialRequest };
var ListCredentialListCredentialResponseMeta = /** @class */ (function (_super) {
    __extends(ListCredentialListCredentialResponseMeta, _super);
    function ListCredentialListCredentialResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialListCredentialResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListCredentialListCredentialResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialListCredentialResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCredentialListCredentialResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCredentialListCredentialResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialListCredentialResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListCredentialListCredentialResponseMeta.prototype, "url", void 0);
    return ListCredentialListCredentialResponseMeta;
}(SpeakeasyBase));
export { ListCredentialListCredentialResponseMeta };
var ListCredentialListCredentialResponse = /** @class */ (function (_super) {
    __extends(ListCredentialListCredentialResponse, _super);
    function ListCredentialListCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=credentials", elemType: shared.ConversationsV1Credential }),
        __metadata("design:type", Array)
    ], ListCredentialListCredentialResponse.prototype, "credentials", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListCredentialListCredentialResponseMeta)
    ], ListCredentialListCredentialResponse.prototype, "meta", void 0);
    return ListCredentialListCredentialResponse;
}(SpeakeasyBase));
export { ListCredentialListCredentialResponse };
var ListCredentialResponse = /** @class */ (function (_super) {
    __extends(ListCredentialResponse, _super);
    function ListCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCredentialListCredentialResponse)
    ], ListCredentialResponse.prototype, "listCredentialResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListCredentialResponse.prototype, "statusCode", void 0);
    return ListCredentialResponse;
}(SpeakeasyBase));
export { ListCredentialResponse };
