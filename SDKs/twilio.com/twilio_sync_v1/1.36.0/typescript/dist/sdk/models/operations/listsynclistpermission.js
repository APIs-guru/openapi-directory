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
export var LISTSYNCLISTPERMISSION_SERVERS = [
    "https://sync.twilio.com",
];
var ListSyncListPermissionPathParams = /** @class */ (function (_super) {
    __extends(ListSyncListPermissionPathParams, _super);
    function ListSyncListPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], ListSyncListPermissionPathParams.prototype, "listSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncListPermissionPathParams.prototype, "serviceSid", void 0);
    return ListSyncListPermissionPathParams;
}(SpeakeasyBase));
export { ListSyncListPermissionPathParams };
var ListSyncListPermissionQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncListPermissionQueryParams, _super);
    function ListSyncListPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncListPermissionQueryParams.prototype, "pageSize", void 0);
    return ListSyncListPermissionQueryParams;
}(SpeakeasyBase));
export { ListSyncListPermissionQueryParams };
var ListSyncListPermissionSecurity = /** @class */ (function (_super) {
    __extends(ListSyncListPermissionSecurity, _super);
    function ListSyncListPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncListPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncListPermissionSecurity;
}(SpeakeasyBase));
export { ListSyncListPermissionSecurity };
var ListSyncListPermissionRequest = /** @class */ (function (_super) {
    __extends(ListSyncListPermissionRequest, _super);
    function ListSyncListPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncListPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncListPermissionPathParams)
    ], ListSyncListPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncListPermissionQueryParams)
    ], ListSyncListPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncListPermissionSecurity)
    ], ListSyncListPermissionRequest.prototype, "security", void 0);
    return ListSyncListPermissionRequest;
}(SpeakeasyBase));
export { ListSyncListPermissionRequest };
var ListSyncListPermissionListSyncListPermissionResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncListPermissionListSyncListPermissionResponseMeta, _super);
    function ListSyncListPermissionListSyncListPermissionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncListPermissionListSyncListPermissionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncListPermissionListSyncListPermissionResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncListPermissionListSyncListPermissionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncListPermissionListSyncListPermissionResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncListPermissionListSyncListPermissionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncListPermissionListSyncListPermissionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncListPermissionListSyncListPermissionResponseMeta.prototype, "url", void 0);
    return ListSyncListPermissionListSyncListPermissionResponseMeta;
}(SpeakeasyBase));
export { ListSyncListPermissionListSyncListPermissionResponseMeta };
var ListSyncListPermissionListSyncListPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncListPermissionListSyncListPermissionResponse, _super);
    function ListSyncListPermissionListSyncListPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncListPermissionListSyncListPermissionResponseMeta)
    ], ListSyncListPermissionListSyncListPermissionResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=permissions", elemType: shared.SyncV1ServiceSyncListSyncListPermission }),
        __metadata("design:type", Array)
    ], ListSyncListPermissionListSyncListPermissionResponse.prototype, "permissions", void 0);
    return ListSyncListPermissionListSyncListPermissionResponse;
}(SpeakeasyBase));
export { ListSyncListPermissionListSyncListPermissionResponse };
var ListSyncListPermissionResponse = /** @class */ (function (_super) {
    __extends(ListSyncListPermissionResponse, _super);
    function ListSyncListPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncListPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncListPermissionListSyncListPermissionResponse)
    ], ListSyncListPermissionResponse.prototype, "listSyncListPermissionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSyncListPermissionResponse.prototype, "statusCode", void 0);
    return ListSyncListPermissionResponse;
}(SpeakeasyBase));
export { ListSyncListPermissionResponse };
