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
var PostMyFollowsCategoriesUuidPathParams = /** @class */ (function (_super) {
    __extends(PostMyFollowsCategoriesUuidPathParams, _super);
    function PostMyFollowsCategoriesUuidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" }),
        __metadata("design:type", String)
    ], PostMyFollowsCategoriesUuidPathParams.prototype, "uuid", void 0);
    return PostMyFollowsCategoriesUuidPathParams;
}(SpeakeasyBase));
export { PostMyFollowsCategoriesUuidPathParams };
var PostMyFollowsCategoriesUuidSecurity = /** @class */ (function (_super) {
    __extends(PostMyFollowsCategoriesUuidSecurity, _super);
    function PostMyFollowsCategoriesUuidSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostMyFollowsCategoriesUuidSecurity.prototype, "oauth2", void 0);
    return PostMyFollowsCategoriesUuidSecurity;
}(SpeakeasyBase));
export { PostMyFollowsCategoriesUuidSecurity };
var PostMyFollowsCategoriesUuidRequest = /** @class */ (function (_super) {
    __extends(PostMyFollowsCategoriesUuidRequest, _super);
    function PostMyFollowsCategoriesUuidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyFollowsCategoriesUuidPathParams)
    ], PostMyFollowsCategoriesUuidRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyFollowsCategoriesUuidSecurity)
    ], PostMyFollowsCategoriesUuidRequest.prototype, "security", void 0);
    return PostMyFollowsCategoriesUuidRequest;
}(SpeakeasyBase));
export { PostMyFollowsCategoriesUuidRequest };
var PostMyFollowsCategoriesUuidResponse = /** @class */ (function (_super) {
    __extends(PostMyFollowsCategoriesUuidResponse, _super);
    function PostMyFollowsCategoriesUuidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMyFollowsCategoriesUuidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMyFollowsCategoriesUuidResponse.prototype, "statusCode", void 0);
    return PostMyFollowsCategoriesUuidResponse;
}(SpeakeasyBase));
export { PostMyFollowsCategoriesUuidResponse };
