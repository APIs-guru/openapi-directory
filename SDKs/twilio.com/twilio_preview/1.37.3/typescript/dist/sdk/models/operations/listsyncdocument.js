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
export var ListSyncDocumentServerList = [
    "https://preview.twilio.com",
];
var ListSyncDocumentPathParams = /** @class */ (function (_super) {
    __extends(ListSyncDocumentPathParams, _super);
    function ListSyncDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncDocumentPathParams.prototype, "serviceSid", void 0);
    return ListSyncDocumentPathParams;
}(SpeakeasyBase));
export { ListSyncDocumentPathParams };
var ListSyncDocumentQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncDocumentQueryParams, _super);
    function ListSyncDocumentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncDocumentQueryParams.prototype, "pageSize", void 0);
    return ListSyncDocumentQueryParams;
}(SpeakeasyBase));
export { ListSyncDocumentQueryParams };
var ListSyncDocumentSecurity = /** @class */ (function (_super) {
    __extends(ListSyncDocumentSecurity, _super);
    function ListSyncDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncDocumentSecurity;
}(SpeakeasyBase));
export { ListSyncDocumentSecurity };
var ListSyncDocumentListSyncDocumentResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncDocumentListSyncDocumentResponseMeta, _super);
    function ListSyncDocumentListSyncDocumentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncDocumentListSyncDocumentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncDocumentListSyncDocumentResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncDocumentListSyncDocumentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncDocumentListSyncDocumentResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncDocumentListSyncDocumentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncDocumentListSyncDocumentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncDocumentListSyncDocumentResponseMeta.prototype, "url", void 0);
    return ListSyncDocumentListSyncDocumentResponseMeta;
}(SpeakeasyBase));
export { ListSyncDocumentListSyncDocumentResponseMeta };
var ListSyncDocumentListSyncDocumentResponse = /** @class */ (function (_super) {
    __extends(ListSyncDocumentListSyncDocumentResponse, _super);
    function ListSyncDocumentListSyncDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documents", elemType: shared.PreviewSyncServiceDocument }),
        __metadata("design:type", Array)
    ], ListSyncDocumentListSyncDocumentResponse.prototype, "documents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncDocumentListSyncDocumentResponseMeta)
    ], ListSyncDocumentListSyncDocumentResponse.prototype, "meta", void 0);
    return ListSyncDocumentListSyncDocumentResponse;
}(SpeakeasyBase));
export { ListSyncDocumentListSyncDocumentResponse };
var ListSyncDocumentRequest = /** @class */ (function (_super) {
    __extends(ListSyncDocumentRequest, _super);
    function ListSyncDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncDocumentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncDocumentPathParams)
    ], ListSyncDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncDocumentQueryParams)
    ], ListSyncDocumentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncDocumentSecurity)
    ], ListSyncDocumentRequest.prototype, "security", void 0);
    return ListSyncDocumentRequest;
}(SpeakeasyBase));
export { ListSyncDocumentRequest };
var ListSyncDocumentResponse = /** @class */ (function (_super) {
    __extends(ListSyncDocumentResponse, _super);
    function ListSyncDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncDocumentListSyncDocumentResponse)
    ], ListSyncDocumentResponse.prototype, "listSyncDocumentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSyncDocumentResponse.prototype, "statusCode", void 0);
    return ListSyncDocumentResponse;
}(SpeakeasyBase));
export { ListSyncDocumentResponse };
