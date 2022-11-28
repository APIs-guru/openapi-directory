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
var PostListingsSlugFlagPathParams = /** @class */ (function (_super) {
    __extends(PostListingsSlugFlagPathParams, _super);
    function PostListingsSlugFlagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" }),
        __metadata("design:type", String)
    ], PostListingsSlugFlagPathParams.prototype, "slug", void 0);
    return PostListingsSlugFlagPathParams;
}(SpeakeasyBase));
export { PostListingsSlugFlagPathParams };
var PostListingsSlugFlagRequestBody = /** @class */ (function (_super) {
    __extends(PostListingsSlugFlagRequestBody, _super);
    function PostListingsSlugFlagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostListingsSlugFlagRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], PostListingsSlugFlagRequestBody.prototype, "reason", void 0);
    return PostListingsSlugFlagRequestBody;
}(SpeakeasyBase));
export { PostListingsSlugFlagRequestBody };
var PostListingsSlugFlagRequest = /** @class */ (function (_super) {
    __extends(PostListingsSlugFlagRequest, _super);
    function PostListingsSlugFlagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListingsSlugFlagPathParams)
    ], PostListingsSlugFlagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostListingsSlugFlagRequestBody)
    ], PostListingsSlugFlagRequest.prototype, "request", void 0);
    return PostListingsSlugFlagRequest;
}(SpeakeasyBase));
export { PostListingsSlugFlagRequest };
var PostListingsSlugFlagResponse = /** @class */ (function (_super) {
    __extends(PostListingsSlugFlagResponse, _super);
    function PostListingsSlugFlagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListingsSlugFlagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListingsSlugFlagResponse.prototype, "statusCode", void 0);
    return PostListingsSlugFlagResponse;
}(SpeakeasyBase));
export { PostListingsSlugFlagResponse };
