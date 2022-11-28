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
export var ListContentServerList = [
    "https://content.twilio.com",
];
var ListContentQueryParams = /** @class */ (function (_super) {
    __extends(ListContentQueryParams, _super);
    function ListContentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListContentQueryParams.prototype, "pageSize", void 0);
    return ListContentQueryParams;
}(SpeakeasyBase));
export { ListContentQueryParams };
var ListContentSecurity = /** @class */ (function (_super) {
    __extends(ListContentSecurity, _super);
    function ListContentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListContentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListContentSecurity;
}(SpeakeasyBase));
export { ListContentSecurity };
var ListContentListContentResponseMeta = /** @class */ (function (_super) {
    __extends(ListContentListContentResponseMeta, _super);
    function ListContentListContentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListContentListContentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListContentListContentResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListContentListContentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListContentListContentResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListContentListContentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListContentListContentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListContentListContentResponseMeta.prototype, "url", void 0);
    return ListContentListContentResponseMeta;
}(SpeakeasyBase));
export { ListContentListContentResponseMeta };
var ListContentListContentResponse = /** @class */ (function (_super) {
    __extends(ListContentListContentResponse, _super);
    function ListContentListContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents", elemType: shared.ContentV1Content }),
        __metadata("design:type", Array)
    ], ListContentListContentResponse.prototype, "contents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListContentListContentResponseMeta)
    ], ListContentListContentResponse.prototype, "meta", void 0);
    return ListContentListContentResponse;
}(SpeakeasyBase));
export { ListContentListContentResponse };
var ListContentRequest = /** @class */ (function (_super) {
    __extends(ListContentRequest, _super);
    function ListContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListContentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListContentQueryParams)
    ], ListContentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListContentSecurity)
    ], ListContentRequest.prototype, "security", void 0);
    return ListContentRequest;
}(SpeakeasyBase));
export { ListContentRequest };
var ListContentResponse = /** @class */ (function (_super) {
    __extends(ListContentResponse, _super);
    function ListContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListContentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListContentListContentResponse)
    ], ListContentResponse.prototype, "listContentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListContentResponse.prototype, "statusCode", void 0);
    return ListContentResponse;
}(SpeakeasyBase));
export { ListContentResponse };
