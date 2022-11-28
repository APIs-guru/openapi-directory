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
var PostMyFollowsCollectionsSlugPathParams = /** @class */ (function (_super) {
    __extends(PostMyFollowsCollectionsSlugPathParams, _super);
    function PostMyFollowsCollectionsSlugPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" }),
        __metadata("design:type", String)
    ], PostMyFollowsCollectionsSlugPathParams.prototype, "slug", void 0);
    return PostMyFollowsCollectionsSlugPathParams;
}(SpeakeasyBase));
export { PostMyFollowsCollectionsSlugPathParams };
var PostMyFollowsCollectionsSlugSecurity = /** @class */ (function (_super) {
    __extends(PostMyFollowsCollectionsSlugSecurity, _super);
    function PostMyFollowsCollectionsSlugSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostMyFollowsCollectionsSlugSecurity.prototype, "oauth2", void 0);
    return PostMyFollowsCollectionsSlugSecurity;
}(SpeakeasyBase));
export { PostMyFollowsCollectionsSlugSecurity };
var PostMyFollowsCollectionsSlugRequest = /** @class */ (function (_super) {
    __extends(PostMyFollowsCollectionsSlugRequest, _super);
    function PostMyFollowsCollectionsSlugRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyFollowsCollectionsSlugPathParams)
    ], PostMyFollowsCollectionsSlugRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyFollowsCollectionsSlugSecurity)
    ], PostMyFollowsCollectionsSlugRequest.prototype, "security", void 0);
    return PostMyFollowsCollectionsSlugRequest;
}(SpeakeasyBase));
export { PostMyFollowsCollectionsSlugRequest };
var PostMyFollowsCollectionsSlugResponse = /** @class */ (function (_super) {
    __extends(PostMyFollowsCollectionsSlugResponse, _super);
    function PostMyFollowsCollectionsSlugResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMyFollowsCollectionsSlugResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMyFollowsCollectionsSlugResponse.prototype, "statusCode", void 0);
    return PostMyFollowsCollectionsSlugResponse;
}(SpeakeasyBase));
export { PostMyFollowsCollectionsSlugResponse };
