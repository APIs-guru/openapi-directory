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
export var ListIpAccessControlListServerList = [
    "https://trunking.twilio.com",
];
var ListIpAccessControlListPathParams = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListPathParams, _super);
    function ListIpAccessControlListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListPathParams.prototype, "trunkSid", void 0);
    return ListIpAccessControlListPathParams;
}(SpeakeasyBase));
export { ListIpAccessControlListPathParams };
var ListIpAccessControlListQueryParams = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListQueryParams, _super);
    function ListIpAccessControlListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIpAccessControlListQueryParams.prototype, "pageSize", void 0);
    return ListIpAccessControlListQueryParams;
}(SpeakeasyBase));
export { ListIpAccessControlListQueryParams };
var ListIpAccessControlListSecurity = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListSecurity, _super);
    function ListIpAccessControlListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIpAccessControlListSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIpAccessControlListSecurity;
}(SpeakeasyBase));
export { ListIpAccessControlListSecurity };
var ListIpAccessControlListListIpAccessControlListResponseMeta = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListListIpAccessControlListResponseMeta, _super);
    function ListIpAccessControlListListIpAccessControlListResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListIpAccessControlListListIpAccessControlListResponseMeta.prototype, "url", void 0);
    return ListIpAccessControlListListIpAccessControlListResponseMeta;
}(SpeakeasyBase));
export { ListIpAccessControlListListIpAccessControlListResponseMeta };
var ListIpAccessControlListListIpAccessControlListResponse = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListListIpAccessControlListResponse, _super);
    function ListIpAccessControlListListIpAccessControlListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_access_control_lists", elemType: shared.TrunkingV1TrunkIpAccessControlList }),
        __metadata("design:type", Array)
    ], ListIpAccessControlListListIpAccessControlListResponse.prototype, "ipAccessControlLists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListIpAccessControlListListIpAccessControlListResponseMeta)
    ], ListIpAccessControlListListIpAccessControlListResponse.prototype, "meta", void 0);
    return ListIpAccessControlListListIpAccessControlListResponse;
}(SpeakeasyBase));
export { ListIpAccessControlListListIpAccessControlListResponse };
var ListIpAccessControlListRequest = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListRequest, _super);
    function ListIpAccessControlListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListIpAccessControlListRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIpAccessControlListPathParams)
    ], ListIpAccessControlListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIpAccessControlListQueryParams)
    ], ListIpAccessControlListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIpAccessControlListSecurity)
    ], ListIpAccessControlListRequest.prototype, "security", void 0);
    return ListIpAccessControlListRequest;
}(SpeakeasyBase));
export { ListIpAccessControlListRequest };
var ListIpAccessControlListResponse = /** @class */ (function (_super) {
    __extends(ListIpAccessControlListResponse, _super);
    function ListIpAccessControlListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListIpAccessControlListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListIpAccessControlListListIpAccessControlListResponse)
    ], ListIpAccessControlListResponse.prototype, "listIpAccessControlListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListIpAccessControlListResponse.prototype, "statusCode", void 0);
    return ListIpAccessControlListResponse;
}(SpeakeasyBase));
export { ListIpAccessControlListResponse };
