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
export var ListSyncListItemServerList = [
    "https://sync.twilio.com",
];
var ListSyncListItemPathParams = /** @class */ (function (_super) {
    __extends(ListSyncListItemPathParams, _super);
    function ListSyncListItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], ListSyncListItemPathParams.prototype, "listSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncListItemPathParams.prototype, "serviceSid", void 0);
    return ListSyncListItemPathParams;
}(SpeakeasyBase));
export { ListSyncListItemPathParams };
var ListSyncListItemQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncListItemQueryParams, _super);
    function ListSyncListItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Bounds" }),
        __metadata("design:type", String)
    ], ListSyncListItemQueryParams.prototype, "bounds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=From" }),
        __metadata("design:type", String)
    ], ListSyncListItemQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListSyncListItemQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncListItemQueryParams.prototype, "pageSize", void 0);
    return ListSyncListItemQueryParams;
}(SpeakeasyBase));
export { ListSyncListItemQueryParams };
var ListSyncListItemSecurity = /** @class */ (function (_super) {
    __extends(ListSyncListItemSecurity, _super);
    function ListSyncListItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncListItemSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncListItemSecurity;
}(SpeakeasyBase));
export { ListSyncListItemSecurity };
var ListSyncListItemListSyncListItemResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncListItemListSyncListItemResponseMeta, _super);
    function ListSyncListItemListSyncListItemResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncListItemListSyncListItemResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncListItemListSyncListItemResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncListItemListSyncListItemResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncListItemListSyncListItemResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncListItemListSyncListItemResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncListItemListSyncListItemResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncListItemListSyncListItemResponseMeta.prototype, "url", void 0);
    return ListSyncListItemListSyncListItemResponseMeta;
}(SpeakeasyBase));
export { ListSyncListItemListSyncListItemResponseMeta };
var ListSyncListItemListSyncListItemResponse = /** @class */ (function (_super) {
    __extends(ListSyncListItemListSyncListItemResponse, _super);
    function ListSyncListItemListSyncListItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SyncV1ServiceSyncListSyncListItem }),
        __metadata("design:type", Array)
    ], ListSyncListItemListSyncListItemResponse.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncListItemListSyncListItemResponseMeta)
    ], ListSyncListItemListSyncListItemResponse.prototype, "meta", void 0);
    return ListSyncListItemListSyncListItemResponse;
}(SpeakeasyBase));
export { ListSyncListItemListSyncListItemResponse };
var ListSyncListItemRequest = /** @class */ (function (_super) {
    __extends(ListSyncListItemRequest, _super);
    function ListSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncListItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncListItemPathParams)
    ], ListSyncListItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncListItemQueryParams)
    ], ListSyncListItemRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncListItemSecurity)
    ], ListSyncListItemRequest.prototype, "security", void 0);
    return ListSyncListItemRequest;
}(SpeakeasyBase));
export { ListSyncListItemRequest };
var ListSyncListItemResponse = /** @class */ (function (_super) {
    __extends(ListSyncListItemResponse, _super);
    function ListSyncListItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncListItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncListItemListSyncListItemResponse)
    ], ListSyncListItemResponse.prototype, "listSyncListItemResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSyncListItemResponse.prototype, "statusCode", void 0);
    return ListSyncListItemResponse;
}(SpeakeasyBase));
export { ListSyncListItemResponse };
