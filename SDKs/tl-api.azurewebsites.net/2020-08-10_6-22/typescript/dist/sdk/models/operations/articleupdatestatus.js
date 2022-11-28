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
var ArticleUpdateStatusQueryParams = /** @class */ (function (_super) {
    __extends(ArticleUpdateStatusQueryParams, _super);
    function ArticleUpdateStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ArticleId" }),
        __metadata("design:type", Number)
    ], ArticleUpdateStatusQueryParams.prototype, "articleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Number)
    ], ArticleUpdateStatusQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userName" }),
        __metadata("design:type", String)
    ], ArticleUpdateStatusQueryParams.prototype, "userName", void 0);
    return ArticleUpdateStatusQueryParams;
}(SpeakeasyBase));
export { ArticleUpdateStatusQueryParams };
var ArticleUpdateStatusRequest = /** @class */ (function (_super) {
    __extends(ArticleUpdateStatusRequest, _super);
    function ArticleUpdateStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArticleUpdateStatusQueryParams)
    ], ArticleUpdateStatusRequest.prototype, "queryParams", void 0);
    return ArticleUpdateStatusRequest;
}(SpeakeasyBase));
export { ArticleUpdateStatusRequest };
var ArticleUpdateStatusResponse = /** @class */ (function (_super) {
    __extends(ArticleUpdateStatusResponse, _super);
    function ArticleUpdateStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiException)
    ], ArticleUpdateStatusResponse.prototype, "apiException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArticleUpdateStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DefaultResponseDtoOfInteger)
    ], ArticleUpdateStatusResponse.prototype, "defaultResponseDtoOfInteger", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArticleUpdateStatusResponse.prototype, "statusCode", void 0);
    return ArticleUpdateStatusResponse;
}(SpeakeasyBase));
export { ArticleUpdateStatusResponse };
