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
export var ListSupportingDocumentServerList = [
    "https://trusthub.twilio.com",
];
var ListSupportingDocumentQueryParams = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentQueryParams, _super);
    function ListSupportingDocumentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSupportingDocumentQueryParams.prototype, "pageSize", void 0);
    return ListSupportingDocumentQueryParams;
}(SpeakeasyBase));
export { ListSupportingDocumentQueryParams };
var ListSupportingDocumentSecurity = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentSecurity, _super);
    function ListSupportingDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSupportingDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSupportingDocumentSecurity;
}(SpeakeasyBase));
export { ListSupportingDocumentSecurity };
var ListSupportingDocumentListSupportingDocumentResponseMeta = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentListSupportingDocumentResponseMeta, _super);
    function ListSupportingDocumentListSupportingDocumentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSupportingDocumentListSupportingDocumentResponseMeta.prototype, "url", void 0);
    return ListSupportingDocumentListSupportingDocumentResponseMeta;
}(SpeakeasyBase));
export { ListSupportingDocumentListSupportingDocumentResponseMeta };
var ListSupportingDocumentListSupportingDocumentResponse = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentListSupportingDocumentResponse, _super);
    function ListSupportingDocumentListSupportingDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSupportingDocumentListSupportingDocumentResponseMeta)
    ], ListSupportingDocumentListSupportingDocumentResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.TrusthubV1SupportingDocument }),
        __metadata("design:type", Array)
    ], ListSupportingDocumentListSupportingDocumentResponse.prototype, "results", void 0);
    return ListSupportingDocumentListSupportingDocumentResponse;
}(SpeakeasyBase));
export { ListSupportingDocumentListSupportingDocumentResponse };
var ListSupportingDocumentRequest = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentRequest, _super);
    function ListSupportingDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSupportingDocumentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSupportingDocumentQueryParams)
    ], ListSupportingDocumentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSupportingDocumentSecurity)
    ], ListSupportingDocumentRequest.prototype, "security", void 0);
    return ListSupportingDocumentRequest;
}(SpeakeasyBase));
export { ListSupportingDocumentRequest };
var ListSupportingDocumentResponse = /** @class */ (function (_super) {
    __extends(ListSupportingDocumentResponse, _super);
    function ListSupportingDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSupportingDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSupportingDocumentListSupportingDocumentResponse)
    ], ListSupportingDocumentResponse.prototype, "listSupportingDocumentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSupportingDocumentResponse.prototype, "statusCode", void 0);
    return ListSupportingDocumentResponse;
}(SpeakeasyBase));
export { ListSupportingDocumentResponse };
