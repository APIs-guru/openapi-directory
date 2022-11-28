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
export var ListSyncSyncMapPermissionServerList = [
    "https://preview.twilio.com",
];
var ListSyncSyncMapPermissionPathParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionPathParams, _super);
    function ListSyncSyncMapPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionPathParams.prototype, "mapSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionPathParams.prototype, "serviceSid", void 0);
    return ListSyncSyncMapPermissionPathParams;
}(SpeakeasyBase));
export { ListSyncSyncMapPermissionPathParams };
var ListSyncSyncMapPermissionQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionQueryParams, _super);
    function ListSyncSyncMapPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncSyncMapPermissionQueryParams.prototype, "pageSize", void 0);
    return ListSyncSyncMapPermissionQueryParams;
}(SpeakeasyBase));
export { ListSyncSyncMapPermissionQueryParams };
var ListSyncSyncMapPermissionSecurity = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionSecurity, _super);
    function ListSyncSyncMapPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncSyncMapPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncSyncMapPermissionSecurity;
}(SpeakeasyBase));
export { ListSyncSyncMapPermissionSecurity };
var ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta, _super);
    function ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta.prototype, "url", void 0);
    return ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta;
}(SpeakeasyBase));
export { ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta };
var ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse, _super);
    function ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions", elemType: shared.PreviewSyncServiceSyncMapSyncMapPermission }),
        __metadata("design:type", Array)
    ], ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse.prototype, "permissions", void 0);
    return ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse;
}(SpeakeasyBase));
export { ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse };
var ListSyncSyncMapPermissionRequest = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionRequest, _super);
    function ListSyncSyncMapPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncSyncMapPermissionPathParams)
    ], ListSyncSyncMapPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncSyncMapPermissionQueryParams)
    ], ListSyncSyncMapPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncSyncMapPermissionSecurity)
    ], ListSyncSyncMapPermissionRequest.prototype, "security", void 0);
    return ListSyncSyncMapPermissionRequest;
}(SpeakeasyBase));
export { ListSyncSyncMapPermissionRequest };
var ListSyncSyncMapPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncMapPermissionResponse, _super);
    function ListSyncSyncMapPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncSyncMapPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse)
    ], ListSyncSyncMapPermissionResponse.prototype, "listSyncSyncMapPermissionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSyncSyncMapPermissionResponse.prototype, "statusCode", void 0);
    return ListSyncSyncMapPermissionResponse;
}(SpeakeasyBase));
export { ListSyncSyncMapPermissionResponse };
