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
export var LISTORIGINATIONURL_SERVERS = [
    "https://trunking.twilio.com",
];
var ListOriginationUrlPathParams = /** @class */ (function (_super) {
    __extends(ListOriginationUrlPathParams, _super);
    function ListOriginationUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], ListOriginationUrlPathParams.prototype, "trunkSid", void 0);
    return ListOriginationUrlPathParams;
}(SpeakeasyBase));
export { ListOriginationUrlPathParams };
var ListOriginationUrlQueryParams = /** @class */ (function (_super) {
    __extends(ListOriginationUrlQueryParams, _super);
    function ListOriginationUrlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListOriginationUrlQueryParams.prototype, "pageSize", void 0);
    return ListOriginationUrlQueryParams;
}(SpeakeasyBase));
export { ListOriginationUrlQueryParams };
var ListOriginationUrlSecurity = /** @class */ (function (_super) {
    __extends(ListOriginationUrlSecurity, _super);
    function ListOriginationUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListOriginationUrlSecurity.prototype, "accountSidAuthToken", void 0);
    return ListOriginationUrlSecurity;
}(SpeakeasyBase));
export { ListOriginationUrlSecurity };
var ListOriginationUrlRequest = /** @class */ (function (_super) {
    __extends(ListOriginationUrlRequest, _super);
    function ListOriginationUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListOriginationUrlRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListOriginationUrlPathParams)
    ], ListOriginationUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListOriginationUrlQueryParams)
    ], ListOriginationUrlRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListOriginationUrlSecurity)
    ], ListOriginationUrlRequest.prototype, "security", void 0);
    return ListOriginationUrlRequest;
}(SpeakeasyBase));
export { ListOriginationUrlRequest };
var ListOriginationUrlListOriginationUrlResponseMeta = /** @class */ (function (_super) {
    __extends(ListOriginationUrlListOriginationUrlResponseMeta, _super);
    function ListOriginationUrlListOriginationUrlResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListOriginationUrlListOriginationUrlResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListOriginationUrlListOriginationUrlResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListOriginationUrlListOriginationUrlResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListOriginationUrlListOriginationUrlResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListOriginationUrlListOriginationUrlResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListOriginationUrlListOriginationUrlResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListOriginationUrlListOriginationUrlResponseMeta.prototype, "url", void 0);
    return ListOriginationUrlListOriginationUrlResponseMeta;
}(SpeakeasyBase));
export { ListOriginationUrlListOriginationUrlResponseMeta };
var ListOriginationUrlListOriginationUrlResponse = /** @class */ (function (_super) {
    __extends(ListOriginationUrlListOriginationUrlResponse, _super);
    function ListOriginationUrlListOriginationUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListOriginationUrlListOriginationUrlResponseMeta)
    ], ListOriginationUrlListOriginationUrlResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=origination_urls", elemType: shared.TrunkingV1TrunkOriginationUrl }),
        __metadata("design:type", Array)
    ], ListOriginationUrlListOriginationUrlResponse.prototype, "originationUrls", void 0);
    return ListOriginationUrlListOriginationUrlResponse;
}(SpeakeasyBase));
export { ListOriginationUrlListOriginationUrlResponse };
var ListOriginationUrlResponse = /** @class */ (function (_super) {
    __extends(ListOriginationUrlResponse, _super);
    function ListOriginationUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListOriginationUrlResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListOriginationUrlListOriginationUrlResponse)
    ], ListOriginationUrlResponse.prototype, "listOriginationUrlResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListOriginationUrlResponse.prototype, "statusCode", void 0);
    return ListOriginationUrlResponse;
}(SpeakeasyBase));
export { ListOriginationUrlResponse };
