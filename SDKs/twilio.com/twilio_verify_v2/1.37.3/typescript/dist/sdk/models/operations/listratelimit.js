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
export var ListRateLimitServerList = [
    "https://verify.twilio.com",
];
var ListRateLimitPathParams = /** @class */ (function (_super) {
    __extends(ListRateLimitPathParams, _super);
    function ListRateLimitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListRateLimitPathParams.prototype, "serviceSid", void 0);
    return ListRateLimitPathParams;
}(SpeakeasyBase));
export { ListRateLimitPathParams };
var ListRateLimitQueryParams = /** @class */ (function (_super) {
    __extends(ListRateLimitQueryParams, _super);
    function ListRateLimitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRateLimitQueryParams.prototype, "pageSize", void 0);
    return ListRateLimitQueryParams;
}(SpeakeasyBase));
export { ListRateLimitQueryParams };
var ListRateLimitSecurity = /** @class */ (function (_super) {
    __extends(ListRateLimitSecurity, _super);
    function ListRateLimitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRateLimitSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRateLimitSecurity;
}(SpeakeasyBase));
export { ListRateLimitSecurity };
var ListRateLimitListRateLimitResponseMeta = /** @class */ (function (_super) {
    __extends(ListRateLimitListRateLimitResponseMeta, _super);
    function ListRateLimitListRateLimitResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListRateLimitListRateLimitResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListRateLimitListRateLimitResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListRateLimitListRateLimitResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRateLimitListRateLimitResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRateLimitListRateLimitResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListRateLimitListRateLimitResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListRateLimitListRateLimitResponseMeta.prototype, "url", void 0);
    return ListRateLimitListRateLimitResponseMeta;
}(SpeakeasyBase));
export { ListRateLimitListRateLimitResponseMeta };
var ListRateLimitListRateLimitResponse = /** @class */ (function (_super) {
    __extends(ListRateLimitListRateLimitResponse, _super);
    function ListRateLimitListRateLimitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListRateLimitListRateLimitResponseMeta)
    ], ListRateLimitListRateLimitResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate_limits", elemType: shared.VerifyV2ServiceRateLimit }),
        __metadata("design:type", Array)
    ], ListRateLimitListRateLimitResponse.prototype, "rateLimits", void 0);
    return ListRateLimitListRateLimitResponse;
}(SpeakeasyBase));
export { ListRateLimitListRateLimitResponse };
var ListRateLimitRequest = /** @class */ (function (_super) {
    __extends(ListRateLimitRequest, _super);
    function ListRateLimitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRateLimitRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRateLimitPathParams)
    ], ListRateLimitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRateLimitQueryParams)
    ], ListRateLimitRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRateLimitSecurity)
    ], ListRateLimitRequest.prototype, "security", void 0);
    return ListRateLimitRequest;
}(SpeakeasyBase));
export { ListRateLimitRequest };
var ListRateLimitResponse = /** @class */ (function (_super) {
    __extends(ListRateLimitResponse, _super);
    function ListRateLimitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRateLimitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRateLimitListRateLimitResponse)
    ], ListRateLimitResponse.prototype, "listRateLimitResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListRateLimitResponse.prototype, "statusCode", void 0);
    return ListRateLimitResponse;
}(SpeakeasyBase));
export { ListRateLimitResponse };
