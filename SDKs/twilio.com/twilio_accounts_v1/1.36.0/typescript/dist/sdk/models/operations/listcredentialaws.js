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
export var LISTCREDENTIALAWS_SERVERS = [
    "https://accounts.twilio.com",
];
var ListCredentialAwsQueryParams = /** @class */ (function (_super) {
    __extends(ListCredentialAwsQueryParams, _super);
    function ListCredentialAwsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCredentialAwsQueryParams.prototype, "pageSize", void 0);
    return ListCredentialAwsQueryParams;
}(SpeakeasyBase));
export { ListCredentialAwsQueryParams };
var ListCredentialAwsSecurity = /** @class */ (function (_super) {
    __extends(ListCredentialAwsSecurity, _super);
    function ListCredentialAwsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCredentialAwsSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCredentialAwsSecurity;
}(SpeakeasyBase));
export { ListCredentialAwsSecurity };
var ListCredentialAwsRequest = /** @class */ (function (_super) {
    __extends(ListCredentialAwsRequest, _super);
    function ListCredentialAwsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCredentialAwsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCredentialAwsQueryParams)
    ], ListCredentialAwsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCredentialAwsSecurity)
    ], ListCredentialAwsRequest.prototype, "security", void 0);
    return ListCredentialAwsRequest;
}(SpeakeasyBase));
export { ListCredentialAwsRequest };
var ListCredentialAwsListCredentialAwsResponseMeta = /** @class */ (function (_super) {
    __extends(ListCredentialAwsListCredentialAwsResponseMeta, _super);
    function ListCredentialAwsListCredentialAwsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialAwsListCredentialAwsResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListCredentialAwsListCredentialAwsResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialAwsListCredentialAwsResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCredentialAwsListCredentialAwsResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCredentialAwsListCredentialAwsResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListCredentialAwsListCredentialAwsResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListCredentialAwsListCredentialAwsResponseMeta.prototype, "url", void 0);
    return ListCredentialAwsListCredentialAwsResponseMeta;
}(SpeakeasyBase));
export { ListCredentialAwsListCredentialAwsResponseMeta };
var ListCredentialAwsListCredentialAwsResponse = /** @class */ (function (_super) {
    __extends(ListCredentialAwsListCredentialAwsResponse, _super);
    function ListCredentialAwsListCredentialAwsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=credentials", elemType: shared.AccountsV1CredentialCredentialAws }),
        __metadata("design:type", Array)
    ], ListCredentialAwsListCredentialAwsResponse.prototype, "credentials", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListCredentialAwsListCredentialAwsResponseMeta)
    ], ListCredentialAwsListCredentialAwsResponse.prototype, "meta", void 0);
    return ListCredentialAwsListCredentialAwsResponse;
}(SpeakeasyBase));
export { ListCredentialAwsListCredentialAwsResponse };
var ListCredentialAwsResponse = /** @class */ (function (_super) {
    __extends(ListCredentialAwsResponse, _super);
    function ListCredentialAwsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCredentialAwsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCredentialAwsListCredentialAwsResponse)
    ], ListCredentialAwsResponse.prototype, "listCredentialAwsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListCredentialAwsResponse.prototype, "statusCode", void 0);
    return ListCredentialAwsResponse;
}(SpeakeasyBase));
export { ListCredentialAwsResponse };
