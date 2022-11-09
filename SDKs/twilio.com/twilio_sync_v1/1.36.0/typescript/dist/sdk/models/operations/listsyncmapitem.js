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
export var LISTSYNCMAPITEM_SERVERS = [
    "https://sync.twilio.com",
];
var ListSyncMapItemPathParams = /** @class */ (function (_super) {
    __extends(ListSyncMapItemPathParams, _super);
    function ListSyncMapItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], ListSyncMapItemPathParams.prototype, "mapSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncMapItemPathParams.prototype, "serviceSid", void 0);
    return ListSyncMapItemPathParams;
}(SpeakeasyBase));
export { ListSyncMapItemPathParams };
var ListSyncMapItemQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncMapItemQueryParams, _super);
    function ListSyncMapItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Bounds" }),
        __metadata("design:type", String)
    ], ListSyncMapItemQueryParams.prototype, "bounds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=From" }),
        __metadata("design:type", String)
    ], ListSyncMapItemQueryParams.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListSyncMapItemQueryParams.prototype, "order", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncMapItemQueryParams.prototype, "pageSize", void 0);
    return ListSyncMapItemQueryParams;
}(SpeakeasyBase));
export { ListSyncMapItemQueryParams };
var ListSyncMapItemSecurity = /** @class */ (function (_super) {
    __extends(ListSyncMapItemSecurity, _super);
    function ListSyncMapItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncMapItemSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncMapItemSecurity;
}(SpeakeasyBase));
export { ListSyncMapItemSecurity };
var ListSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(ListSyncMapItemRequest, _super);
    function ListSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncMapItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncMapItemPathParams)
    ], ListSyncMapItemRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncMapItemQueryParams)
    ], ListSyncMapItemRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncMapItemSecurity)
    ], ListSyncMapItemRequest.prototype, "security", void 0);
    return ListSyncMapItemRequest;
}(SpeakeasyBase));
export { ListSyncMapItemRequest };
var ListSyncMapItemListSyncMapItemResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncMapItemListSyncMapItemResponseMeta, _super);
    function ListSyncMapItemListSyncMapItemResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapItemListSyncMapItemResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncMapItemListSyncMapItemResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapItemListSyncMapItemResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncMapItemListSyncMapItemResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncMapItemListSyncMapItemResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncMapItemListSyncMapItemResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncMapItemListSyncMapItemResponseMeta.prototype, "url", void 0);
    return ListSyncMapItemListSyncMapItemResponseMeta;
}(SpeakeasyBase));
export { ListSyncMapItemListSyncMapItemResponseMeta };
var ListSyncMapItemListSyncMapItemResponse = /** @class */ (function (_super) {
    __extends(ListSyncMapItemListSyncMapItemResponse, _super);
    function ListSyncMapItemListSyncMapItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=items", elemType: shared.SyncV1ServiceSyncMapSyncMapItem }),
        __metadata("design:type", Array)
    ], ListSyncMapItemListSyncMapItemResponse.prototype, "items", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncMapItemListSyncMapItemResponseMeta)
    ], ListSyncMapItemListSyncMapItemResponse.prototype, "meta", void 0);
    return ListSyncMapItemListSyncMapItemResponse;
}(SpeakeasyBase));
export { ListSyncMapItemListSyncMapItemResponse };
var ListSyncMapItemResponse = /** @class */ (function (_super) {
    __extends(ListSyncMapItemResponse, _super);
    function ListSyncMapItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSyncMapItemResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSyncMapItemListSyncMapItemResponse)
    ], ListSyncMapItemResponse.prototype, "listSyncMapItemResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSyncMapItemResponse.prototype, "statusCode", void 0);
    return ListSyncMapItemResponse;
}(SpeakeasyBase));
export { ListSyncMapItemResponse };
