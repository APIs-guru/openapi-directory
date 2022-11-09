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
export var LISTSYNCMAPPERMISSION_SERVERS = [
    "https://sync.twilio.com",
];
var ListSyncMapPermissionPathParams = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionPathParams, _super);
    function ListSyncMapPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionPathParams.prototype, "mapSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionPathParams.prototype, "serviceSid", void 0);
    return ListSyncMapPermissionPathParams;
}(SpeakeasyBase));
export { ListSyncMapPermissionPathParams };
var ListSyncMapPermissionQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionQueryParams, _super);
    function ListSyncMapPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncMapPermissionQueryParams.prototype, "pageSize", void 0);
    return ListSyncMapPermissionQueryParams;
}(SpeakeasyBase));
export { ListSyncMapPermissionQueryParams };
var ListSyncMapPermissionSecurity = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionSecurity, _super);
    function ListSyncMapPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncMapPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncMapPermissionSecurity;
}(SpeakeasyBase));
export { ListSyncMapPermissionSecurity };
var ListSyncMapPermissionRequest = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionRequest, _super);
    function ListSyncMapPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncMapPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncMapPermissionPathParams)
    ], ListSyncMapPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncMapPermissionQueryParams)
    ], ListSyncMapPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncMapPermissionSecurity)
    ], ListSyncMapPermissionRequest.prototype, "security", void 0);
    return ListSyncMapPermissionRequest;
}(SpeakeasyBase));
export { ListSyncMapPermissionRequest };
var ListSyncMapPermissionListSyncMapPermissionResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionListSyncMapPermissionResponseMeta, _super);
    function ListSyncMapPermissionListSyncMapPermissionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncMapPermissionListSyncMapPermissionResponseMeta.prototype, "url", void 0);
    return ListSyncMapPermissionListSyncMapPermissionResponseMeta;
}(SpeakeasyBase));
export { ListSyncMapPermissionListSyncMapPermissionResponseMeta };
var ListSyncMapPermissionListSyncMapPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionListSyncMapPermissionResponse, _super);
    function ListSyncMapPermissionListSyncMapPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncMapPermissionListSyncMapPermissionResponseMeta)
    ], ListSyncMapPermissionListSyncMapPermissionResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=permissions", elemType: shared.SyncV1ServiceSyncMapSyncMapPermission }),
        __metadata("design:type", Array)
    ], ListSyncMapPermissionListSyncMapPermissionResponse.prototype, "permissions", void 0);
    return ListSyncMapPermissionListSyncMapPermissionResponse;
}(SpeakeasyBase));
export { ListSyncMapPermissionListSyncMapPermissionResponse };
var ListSyncMapPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncMapPermissionResponse, _super);
    function ListSyncMapPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncMapPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncMapPermissionListSyncMapPermissionResponse)
    ], ListSyncMapPermissionResponse.prototype, "listSyncMapPermissionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSyncMapPermissionResponse.prototype, "statusCode", void 0);
    return ListSyncMapPermissionResponse;
}(SpeakeasyBase));
export { ListSyncMapPermissionResponse };
