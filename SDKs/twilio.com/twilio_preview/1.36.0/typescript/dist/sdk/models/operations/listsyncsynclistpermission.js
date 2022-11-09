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
export var LISTSYNCSYNCLISTPERMISSION_SERVERS = [
    "https://preview.twilio.com",
];
var ListSyncSyncListPermissionPathParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncListPermissionPathParams, _super);
    function ListSyncSyncListPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], ListSyncSyncListPermissionPathParams.prototype, "listSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncSyncListPermissionPathParams.prototype, "serviceSid", void 0);
    return ListSyncSyncListPermissionPathParams;
}(SpeakeasyBase));
export { ListSyncSyncListPermissionPathParams };
var ListSyncSyncListPermissionQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncListPermissionQueryParams, _super);
    function ListSyncSyncListPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncSyncListPermissionQueryParams.prototype, "pageSize", void 0);
    return ListSyncSyncListPermissionQueryParams;
}(SpeakeasyBase));
export { ListSyncSyncListPermissionQueryParams };
var ListSyncSyncListPermissionSecurity = /** @class */ (function (_super) {
    __extends(ListSyncSyncListPermissionSecurity, _super);
    function ListSyncSyncListPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncSyncListPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncSyncListPermissionSecurity;
}(SpeakeasyBase));
export { ListSyncSyncListPermissionSecurity };
var ListSyncSyncListPermissionRequest = /** @class */ (function (_super) {
    __extends(ListSyncSyncListPermissionRequest, _super);
    function ListSyncSyncListPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncSyncListPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncListPermissionPathParams)
    ], ListSyncSyncListPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncListPermissionQueryParams)
    ], ListSyncSyncListPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncListPermissionSecurity)
    ], ListSyncSyncListPermissionRequest.prototype, "security", void 0);
    return ListSyncSyncListPermissionRequest;
}(SpeakeasyBase));
export { ListSyncSyncListPermissionRequest };
var ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta, _super);
    function ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta.prototype, "url", void 0);
    return ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta;
}(SpeakeasyBase));
export { ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta };
var ListSyncSyncListPermissionListSyncSyncListPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncListPermissionListSyncSyncListPermissionResponse, _super);
    function ListSyncSyncListPermissionListSyncSyncListPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta)
    ], ListSyncSyncListPermissionListSyncSyncListPermissionResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=permissions", elemType: shared.PreviewSyncServiceSyncListSyncListPermission }),
        __metadata("design:type", Array)
    ], ListSyncSyncListPermissionListSyncSyncListPermissionResponse.prototype, "permissions", void 0);
    return ListSyncSyncListPermissionListSyncSyncListPermissionResponse;
}(SpeakeasyBase));
export { ListSyncSyncListPermissionListSyncSyncListPermissionResponse };
var ListSyncSyncListPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncListPermissionResponse, _super);
    function ListSyncSyncListPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncSyncListPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncListPermissionListSyncSyncListPermissionResponse)
    ], ListSyncSyncListPermissionResponse.prototype, "listSyncSyncListPermissionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSyncSyncListPermissionResponse.prototype, "statusCode", void 0);
    return ListSyncSyncListPermissionResponse;
}(SpeakeasyBase));
export { ListSyncSyncListPermissionResponse };
