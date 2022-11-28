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
export var ListSipIpAccessControlListServerList = [
    "https://api.twilio.com",
];
var ListSipIpAccessControlListPathParams = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListPathParams, _super);
    function ListSipIpAccessControlListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListPathParams.prototype, "accountSid", void 0);
    return ListSipIpAccessControlListPathParams;
}(SpeakeasyBase));
export { ListSipIpAccessControlListPathParams };
var ListSipIpAccessControlListQueryParams = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListQueryParams, _super);
    function ListSipIpAccessControlListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListQueryParams.prototype, "pageSize", void 0);
    return ListSipIpAccessControlListQueryParams;
}(SpeakeasyBase));
export { ListSipIpAccessControlListQueryParams };
var ListSipIpAccessControlListSecurity = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListSecurity, _super);
    function ListSipIpAccessControlListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSipIpAccessControlListSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSipIpAccessControlListSecurity;
}(SpeakeasyBase));
export { ListSipIpAccessControlListSecurity };
var ListSipIpAccessControlListListSipIpAccessControlListResponse = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListListSipIpAccessControlListResponse, _super);
    function ListSipIpAccessControlListListSipIpAccessControlListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListListSipIpAccessControlListResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListListSipIpAccessControlListResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_access_control_lists", elemType: shared.ApiV2010AccountSipSipIpAccessControlList }),
        __metadata("design:type", Array)
    ], ListSipIpAccessControlListListSipIpAccessControlListResponse.prototype, "ipAccessControlLists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListListSipIpAccessControlListResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListListSipIpAccessControlListResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListListSipIpAccessControlListResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListListSipIpAccessControlListResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListListSipIpAccessControlListResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListListSipIpAccessControlListResponse.prototype, "uri", void 0);
    return ListSipIpAccessControlListListSipIpAccessControlListResponse;
}(SpeakeasyBase));
export { ListSipIpAccessControlListListSipIpAccessControlListResponse };
var ListSipIpAccessControlListRequest = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListRequest, _super);
    function ListSipIpAccessControlListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipIpAccessControlListPathParams)
    ], ListSipIpAccessControlListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipIpAccessControlListQueryParams)
    ], ListSipIpAccessControlListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipIpAccessControlListSecurity)
    ], ListSipIpAccessControlListRequest.prototype, "security", void 0);
    return ListSipIpAccessControlListRequest;
}(SpeakeasyBase));
export { ListSipIpAccessControlListRequest };
var ListSipIpAccessControlListResponse = /** @class */ (function (_super) {
    __extends(ListSipIpAccessControlListResponse, _super);
    function ListSipIpAccessControlListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSipIpAccessControlListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipIpAccessControlListListSipIpAccessControlListResponse)
    ], ListSipIpAccessControlListResponse.prototype, "listSipIpAccessControlListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSipIpAccessControlListResponse.prototype, "statusCode", void 0);
    return ListSipIpAccessControlListResponse;
}(SpeakeasyBase));
export { ListSipIpAccessControlListResponse };
