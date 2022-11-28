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
export var ListSyncDocumentPermissionServerList = [
    "https://preview.twilio.com",
];
var ListSyncDocumentPermissionPathParams = /** @class */ (function (_super) {
    __extends(ListSyncDocumentPermissionPathParams, _super);
    function ListSyncDocumentPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" }),
        __metadata("design:type", String)
    ], ListSyncDocumentPermissionPathParams.prototype, "documentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncDocumentPermissionPathParams.prototype, "serviceSid", void 0);
    return ListSyncDocumentPermissionPathParams;
}(SpeakeasyBase));
export { ListSyncDocumentPermissionPathParams };
var ListSyncDocumentPermissionQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncDocumentPermissionQueryParams, _super);
    function ListSyncDocumentPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncDocumentPermissionQueryParams.prototype, "pageSize", void 0);
    return ListSyncDocumentPermissionQueryParams;
}(SpeakeasyBase));
export { ListSyncDocumentPermissionQueryParams };
var ListSyncDocumentPermissionSecurity = /** @class */ (function (_super) {
    __extends(ListSyncDocumentPermissionSecurity, _super);
    function ListSyncDocumentPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncDocumentPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncDocumentPermissionSecurity;
}(SpeakeasyBase));
export { ListSyncDocumentPermissionSecurity };
var ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta, _super);
    function ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta.prototype, "url", void 0);
    return ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta;
}(SpeakeasyBase));
export { ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta };
var ListSyncDocumentPermissionListSyncDocumentPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncDocumentPermissionListSyncDocumentPermissionResponse, _super);
    function ListSyncDocumentPermissionListSyncDocumentPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta)
    ], ListSyncDocumentPermissionListSyncDocumentPermissionResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions", elemType: shared.PreviewSyncServiceDocumentDocumentPermission }),
        __metadata("design:type", Array)
    ], ListSyncDocumentPermissionListSyncDocumentPermissionResponse.prototype, "permissions", void 0);
    return ListSyncDocumentPermissionListSyncDocumentPermissionResponse;
}(SpeakeasyBase));
export { ListSyncDocumentPermissionListSyncDocumentPermissionResponse };
var ListSyncDocumentPermissionRequest = /** @class */ (function (_super) {
    __extends(ListSyncDocumentPermissionRequest, _super);
    function ListSyncDocumentPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncDocumentPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncDocumentPermissionPathParams)
    ], ListSyncDocumentPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncDocumentPermissionQueryParams)
    ], ListSyncDocumentPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncDocumentPermissionSecurity)
    ], ListSyncDocumentPermissionRequest.prototype, "security", void 0);
    return ListSyncDocumentPermissionRequest;
}(SpeakeasyBase));
export { ListSyncDocumentPermissionRequest };
var ListSyncDocumentPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncDocumentPermissionResponse, _super);
    function ListSyncDocumentPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncDocumentPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncDocumentPermissionListSyncDocumentPermissionResponse)
    ], ListSyncDocumentPermissionResponse.prototype, "listSyncDocumentPermissionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSyncDocumentPermissionResponse.prototype, "statusCode", void 0);
    return ListSyncDocumentPermissionResponse;
}(SpeakeasyBase));
export { ListSyncDocumentPermissionResponse };
