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
var PostAssetsReturnsAverageRequestBodyAssets = /** @class */ (function (_super) {
    __extends(PostAssetsReturnsAverageRequestBodyAssets, _super);
    function PostAssetsReturnsAverageRequestBodyAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetReturns" }),
        __metadata("design:type", Array)
    ], PostAssetsReturnsAverageRequestBodyAssets.prototype, "assetReturns", void 0);
    return PostAssetsReturnsAverageRequestBodyAssets;
}(SpeakeasyBase));
export { PostAssetsReturnsAverageRequestBodyAssets };
var PostAssetsReturnsAverageRequestBody = /** @class */ (function (_super) {
    __extends(PostAssetsReturnsAverageRequestBody, _super);
    function PostAssetsReturnsAverageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsReturnsAverageRequestBodyAssets }),
        __metadata("design:type", Array)
    ], PostAssetsReturnsAverageRequestBody.prototype, "assets", void 0);
    return PostAssetsReturnsAverageRequestBody;
}(SpeakeasyBase));
export { PostAssetsReturnsAverageRequestBody };
var PostAssetsReturnsAverage200ApplicationJsonAssets = /** @class */ (function (_super) {
    __extends(PostAssetsReturnsAverage200ApplicationJsonAssets, _super);
    function PostAssetsReturnsAverage200ApplicationJsonAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetAverageReturn" }),
        __metadata("design:type", Number)
    ], PostAssetsReturnsAverage200ApplicationJsonAssets.prototype, "assetAverageReturn", void 0);
    return PostAssetsReturnsAverage200ApplicationJsonAssets;
}(SpeakeasyBase));
export { PostAssetsReturnsAverage200ApplicationJsonAssets };
var PostAssetsReturnsAverage200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsReturnsAverage200ApplicationJson, _super);
    function PostAssetsReturnsAverage200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsReturnsAverage200ApplicationJsonAssets }),
        __metadata("design:type", Array)
    ], PostAssetsReturnsAverage200ApplicationJson.prototype, "assets", void 0);
    return PostAssetsReturnsAverage200ApplicationJson;
}(SpeakeasyBase));
export { PostAssetsReturnsAverage200ApplicationJson };
var PostAssetsReturnsAverageRequest = /** @class */ (function (_super) {
    __extends(PostAssetsReturnsAverageRequest, _super);
    function PostAssetsReturnsAverageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAssetsReturnsAverageRequestBody)
    ], PostAssetsReturnsAverageRequest.prototype, "request", void 0);
    return PostAssetsReturnsAverageRequest;
}(SpeakeasyBase));
export { PostAssetsReturnsAverageRequest };
var PostAssetsReturnsAverageResponse = /** @class */ (function (_super) {
    __extends(PostAssetsReturnsAverageResponse, _super);
    function PostAssetsReturnsAverageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssetsReturnsAverageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssetsReturnsAverage200ApplicationJson)
    ], PostAssetsReturnsAverageResponse.prototype, "postAssetsReturnsAverage200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssetsReturnsAverageResponse.prototype, "statusCode", void 0);
    return PostAssetsReturnsAverageResponse;
}(SpeakeasyBase));
export { PostAssetsReturnsAverageResponse };
