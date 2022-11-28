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
var AlbumApiDeleteReviewPathParams = /** @class */ (function (_super) {
    __extends(AlbumApiDeleteReviewPathParams, _super);
    function AlbumApiDeleteReviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], AlbumApiDeleteReviewPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" }),
        __metadata("design:type", Number)
    ], AlbumApiDeleteReviewPathParams.prototype, "reviewId", void 0);
    return AlbumApiDeleteReviewPathParams;
}(SpeakeasyBase));
export { AlbumApiDeleteReviewPathParams };
var AlbumApiDeleteReviewRequest = /** @class */ (function (_super) {
    __extends(AlbumApiDeleteReviewRequest, _super);
    function AlbumApiDeleteReviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlbumApiDeleteReviewPathParams)
    ], AlbumApiDeleteReviewRequest.prototype, "pathParams", void 0);
    return AlbumApiDeleteReviewRequest;
}(SpeakeasyBase));
export { AlbumApiDeleteReviewRequest };
var AlbumApiDeleteReviewResponse = /** @class */ (function (_super) {
    __extends(AlbumApiDeleteReviewResponse, _super);
    function AlbumApiDeleteReviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AlbumApiDeleteReviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AlbumApiDeleteReviewResponse.prototype, "statusCode", void 0);
    return AlbumApiDeleteReviewResponse;
}(SpeakeasyBase));
export { AlbumApiDeleteReviewResponse };
