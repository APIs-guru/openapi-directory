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
export var LISTSYNCSYNCLIST_SERVERS = [
    "https://preview.twilio.com",
];
var ListSyncSyncListPathParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncListPathParams, _super);
    function ListSyncSyncListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncSyncListPathParams.prototype, "serviceSid", void 0);
    return ListSyncSyncListPathParams;
}(SpeakeasyBase));
export { ListSyncSyncListPathParams };
var ListSyncSyncListQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncSyncListQueryParams, _super);
    function ListSyncSyncListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncSyncListQueryParams.prototype, "pageSize", void 0);
    return ListSyncSyncListQueryParams;
}(SpeakeasyBase));
export { ListSyncSyncListQueryParams };
var ListSyncSyncListSecurity = /** @class */ (function (_super) {
    __extends(ListSyncSyncListSecurity, _super);
    function ListSyncSyncListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncSyncListSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncSyncListSecurity;
}(SpeakeasyBase));
export { ListSyncSyncListSecurity };
var ListSyncSyncListRequest = /** @class */ (function (_super) {
    __extends(ListSyncSyncListRequest, _super);
    function ListSyncSyncListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncSyncListRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncListPathParams)
    ], ListSyncSyncListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncListQueryParams)
    ], ListSyncSyncListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncListSecurity)
    ], ListSyncSyncListRequest.prototype, "security", void 0);
    return ListSyncSyncListRequest;
}(SpeakeasyBase));
export { ListSyncSyncListRequest };
var ListSyncSyncListListSyncSyncListResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncSyncListListSyncSyncListResponseMeta, _super);
    function ListSyncSyncListListSyncSyncListResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListListSyncSyncListResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncSyncListListSyncSyncListResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListListSyncSyncListResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncSyncListListSyncSyncListResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncSyncListListSyncSyncListResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListListSyncSyncListResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncSyncListListSyncSyncListResponseMeta.prototype, "url", void 0);
    return ListSyncSyncListListSyncSyncListResponseMeta;
}(SpeakeasyBase));
export { ListSyncSyncListListSyncSyncListResponseMeta };
var ListSyncSyncListListSyncSyncListResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncListListSyncSyncListResponse, _super);
    function ListSyncSyncListListSyncSyncListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=lists", elemType: shared.PreviewSyncServiceSyncList }),
        __metadata("design:type", Array)
    ], ListSyncSyncListListSyncSyncListResponse.prototype, "lists", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncSyncListListSyncSyncListResponseMeta)
    ], ListSyncSyncListListSyncSyncListResponse.prototype, "meta", void 0);
    return ListSyncSyncListListSyncSyncListResponse;
}(SpeakeasyBase));
export { ListSyncSyncListListSyncSyncListResponse };
var ListSyncSyncListResponse = /** @class */ (function (_super) {
    __extends(ListSyncSyncListResponse, _super);
    function ListSyncSyncListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncSyncListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncSyncListListSyncSyncListResponse)
    ], ListSyncSyncListResponse.prototype, "listSyncSyncListResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSyncSyncListResponse.prototype, "statusCode", void 0);
    return ListSyncSyncListResponse;
}(SpeakeasyBase));
export { ListSyncSyncListResponse };
