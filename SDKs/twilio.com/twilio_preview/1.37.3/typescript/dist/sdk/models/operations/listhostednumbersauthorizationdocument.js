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
export var ListHostedNumbersAuthorizationDocumentServerList = [
    "https://preview.twilio.com",
];
var ListHostedNumbersAuthorizationDocumentQueryParams = /** @class */ (function (_super) {
    __extends(ListHostedNumbersAuthorizationDocumentQueryParams, _super);
    function ListHostedNumbersAuthorizationDocumentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Email" }),
        __metadata("design:type", String)
    ], ListHostedNumbersAuthorizationDocumentQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListHostedNumbersAuthorizationDocumentQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListHostedNumbersAuthorizationDocumentQueryParams.prototype, "status", void 0);
    return ListHostedNumbersAuthorizationDocumentQueryParams;
}(SpeakeasyBase));
export { ListHostedNumbersAuthorizationDocumentQueryParams };
var ListHostedNumbersAuthorizationDocumentSecurity = /** @class */ (function (_super) {
    __extends(ListHostedNumbersAuthorizationDocumentSecurity, _super);
    function ListHostedNumbersAuthorizationDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListHostedNumbersAuthorizationDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListHostedNumbersAuthorizationDocumentSecurity;
}(SpeakeasyBase));
export { ListHostedNumbersAuthorizationDocumentSecurity };
var ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta = /** @class */ (function (_super) {
    __extends(ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta, _super);
    function ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta.prototype, "url", void 0);
    return ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta;
}(SpeakeasyBase));
export { ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta };
var ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse = /** @class */ (function (_super) {
    __extends(ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse, _super);
    function ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.PreviewHostedNumbersAuthorizationDocument }),
        __metadata("design:type", Array)
    ], ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta)
    ], ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse.prototype, "meta", void 0);
    return ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse;
}(SpeakeasyBase));
export { ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse };
var ListHostedNumbersAuthorizationDocumentRequest = /** @class */ (function (_super) {
    __extends(ListHostedNumbersAuthorizationDocumentRequest, _super);
    function ListHostedNumbersAuthorizationDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListHostedNumbersAuthorizationDocumentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListHostedNumbersAuthorizationDocumentQueryParams)
    ], ListHostedNumbersAuthorizationDocumentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListHostedNumbersAuthorizationDocumentSecurity)
    ], ListHostedNumbersAuthorizationDocumentRequest.prototype, "security", void 0);
    return ListHostedNumbersAuthorizationDocumentRequest;
}(SpeakeasyBase));
export { ListHostedNumbersAuthorizationDocumentRequest };
var ListHostedNumbersAuthorizationDocumentResponse = /** @class */ (function (_super) {
    __extends(ListHostedNumbersAuthorizationDocumentResponse, _super);
    function ListHostedNumbersAuthorizationDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListHostedNumbersAuthorizationDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse)
    ], ListHostedNumbersAuthorizationDocumentResponse.prototype, "listHostedNumbersAuthorizationDocumentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListHostedNumbersAuthorizationDocumentResponse.prototype, "statusCode", void 0);
    return ListHostedNumbersAuthorizationDocumentResponse;
}(SpeakeasyBase));
export { ListHostedNumbersAuthorizationDocumentResponse };
