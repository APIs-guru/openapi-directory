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
export var LISTBUCKET_SERVERS = [
    "https://verify.twilio.com",
];
var ListBucketPathParams = /** @class */ (function (_super) {
    __extends(ListBucketPathParams, _super);
    function ListBucketPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RateLimitSid" }),
        __metadata("design:type", String)
    ], ListBucketPathParams.prototype, "rateLimitSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListBucketPathParams.prototype, "serviceSid", void 0);
    return ListBucketPathParams;
}(SpeakeasyBase));
export { ListBucketPathParams };
var ListBucketQueryParams = /** @class */ (function (_super) {
    __extends(ListBucketQueryParams, _super);
    function ListBucketQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListBucketQueryParams.prototype, "pageSize", void 0);
    return ListBucketQueryParams;
}(SpeakeasyBase));
export { ListBucketQueryParams };
var ListBucketSecurity = /** @class */ (function (_super) {
    __extends(ListBucketSecurity, _super);
    function ListBucketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListBucketSecurity.prototype, "accountSidAuthToken", void 0);
    return ListBucketSecurity;
}(SpeakeasyBase));
export { ListBucketSecurity };
var ListBucketRequest = /** @class */ (function (_super) {
    __extends(ListBucketRequest, _super);
    function ListBucketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListBucketRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListBucketPathParams)
    ], ListBucketRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListBucketQueryParams)
    ], ListBucketRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListBucketSecurity)
    ], ListBucketRequest.prototype, "security", void 0);
    return ListBucketRequest;
}(SpeakeasyBase));
export { ListBucketRequest };
var ListBucketListBucketResponseMeta = /** @class */ (function (_super) {
    __extends(ListBucketListBucketResponseMeta, _super);
    function ListBucketListBucketResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListBucketListBucketResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListBucketListBucketResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListBucketListBucketResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListBucketListBucketResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListBucketListBucketResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListBucketListBucketResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListBucketListBucketResponseMeta.prototype, "url", void 0);
    return ListBucketListBucketResponseMeta;
}(SpeakeasyBase));
export { ListBucketListBucketResponseMeta };
var ListBucketListBucketResponse = /** @class */ (function (_super) {
    __extends(ListBucketListBucketResponse, _super);
    function ListBucketListBucketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=buckets", elemType: shared.VerifyV2ServiceRateLimitBucket }),
        __metadata("design:type", Array)
    ], ListBucketListBucketResponse.prototype, "buckets", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListBucketListBucketResponseMeta)
    ], ListBucketListBucketResponse.prototype, "meta", void 0);
    return ListBucketListBucketResponse;
}(SpeakeasyBase));
export { ListBucketListBucketResponse };
var ListBucketResponse = /** @class */ (function (_super) {
    __extends(ListBucketResponse, _super);
    function ListBucketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListBucketResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListBucketListBucketResponse)
    ], ListBucketResponse.prototype, "listBucketResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListBucketResponse.prototype, "statusCode", void 0);
    return ListBucketResponse;
}(SpeakeasyBase));
export { ListBucketResponse };
