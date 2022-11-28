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
var PostApiSocialNumberQueryParams = /** @class */ (function (_super) {
    __extends(PostApiSocialNumberQueryParams, _super);
    function PostApiSocialNumberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idType" }),
        __metadata("design:type", String)
    ], PostApiSocialNumberQueryParams.prototype, "idType", void 0);
    return PostApiSocialNumberQueryParams;
}(SpeakeasyBase));
export { PostApiSocialNumberQueryParams };
var PostApiSocialNumberHeaders = /** @class */ (function (_super) {
    __extends(PostApiSocialNumberHeaders, _super);
    function PostApiSocialNumberHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], PostApiSocialNumberHeaders.prototype, "xApiKey", void 0);
    return PostApiSocialNumberHeaders;
}(SpeakeasyBase));
export { PostApiSocialNumberHeaders };
var PostApiSocialNumberRequests = /** @class */ (function (_super) {
    __extends(PostApiSocialNumberRequests, _super);
    function PostApiSocialNumberRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.NumberValidation)
    ], PostApiSocialNumberRequests.prototype, "numberValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NumberValidation)
    ], PostApiSocialNumberRequests.prototype, "numberValidation1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.NumberValidation)
    ], PostApiSocialNumberRequests.prototype, "numberValidation2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.NumberValidation)
    ], PostApiSocialNumberRequests.prototype, "numberValidation3", void 0);
    return PostApiSocialNumberRequests;
}(SpeakeasyBase));
export { PostApiSocialNumberRequests };
var PostApiSocialNumberRequest = /** @class */ (function (_super) {
    __extends(PostApiSocialNumberRequest, _super);
    function PostApiSocialNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiSocialNumberQueryParams)
    ], PostApiSocialNumberRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiSocialNumberHeaders)
    ], PostApiSocialNumberRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiSocialNumberRequests)
    ], PostApiSocialNumberRequest.prototype, "request", void 0);
    return PostApiSocialNumberRequest;
}(SpeakeasyBase));
export { PostApiSocialNumberRequest };
var PostApiSocialNumberResponse = /** @class */ (function (_super) {
    __extends(PostApiSocialNumberResponse, _super);
    function PostApiSocialNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiSocialNumberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiSocialNumberResponse.prototype, "statusCode", void 0);
    return PostApiSocialNumberResponse;
}(SpeakeasyBase));
export { PostApiSocialNumberResponse };
