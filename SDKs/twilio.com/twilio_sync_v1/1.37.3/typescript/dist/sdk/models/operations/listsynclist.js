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
export var ListSyncListServerList = [
    "https://sync.twilio.com",
];
var ListSyncListPathParams = /** @class */ (function (_super) {
    __extends(ListSyncListPathParams, _super);
    function ListSyncListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncListPathParams.prototype, "serviceSid", void 0);
    return ListSyncListPathParams;
}(SpeakeasyBase));
export { ListSyncListPathParams };
var ListSyncListQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncListQueryParams, _super);
    function ListSyncListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncListQueryParams.prototype, "pageSize", void 0);
    return ListSyncListQueryParams;
}(SpeakeasyBase));
export { ListSyncListQueryParams };
var ListSyncListSecurity = /** @class */ (function (_super) {
    __extends(ListSyncListSecurity, _super);
    function ListSyncListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncListSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncListSecurity;
}(SpeakeasyBase));
export { ListSyncListSecurity };
var ListSyncListListSyncListResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncListListSyncListResponseMeta, _super);
    function ListSyncListListSyncListResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncListListSyncListResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncListListSyncListResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncListListSyncListResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncListListSyncListResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncListListSyncListResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncListListSyncListResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncListListSyncListResponseMeta.prototype, "url", void 0);
    return ListSyncListListSyncListResponseMeta;
}(SpeakeasyBase));
export { ListSyncListListSyncListResponseMeta };
var ListSyncListListSyncListResponse = /** @class */ (function (_super) {
    __extends(ListSyncListListSyncListResponse, _super);
    function ListSyncListListSyncListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lists", elemType: shared.SyncV1ServiceSyncList }),
        __metadata("design:type", Array)
    ], ListSyncListListSyncListResponse.prototype, "lists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncListListSyncListResponseMeta)
    ], ListSyncListListSyncListResponse.prototype, "meta", void 0);
    return ListSyncListListSyncListResponse;
}(SpeakeasyBase));
export { ListSyncListListSyncListResponse };
var ListSyncListRequest = /** @class */ (function (_super) {
    __extends(ListSyncListRequest, _super);
    function ListSyncListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncListRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncListPathParams)
    ], ListSyncListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncListQueryParams)
    ], ListSyncListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncListSecurity)
    ], ListSyncListRequest.prototype, "security", void 0);
    return ListSyncListRequest;
}(SpeakeasyBase));
export { ListSyncListRequest };
var ListSyncListResponse = /** @class */ (function (_super) {
    __extends(ListSyncListResponse, _super);
    function ListSyncListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncListListSyncListResponse)
    ], ListSyncListResponse.prototype, "listSyncListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSyncListResponse.prototype, "statusCode", void 0);
    return ListSyncListResponse;
}(SpeakeasyBase));
export { ListSyncListResponse };
