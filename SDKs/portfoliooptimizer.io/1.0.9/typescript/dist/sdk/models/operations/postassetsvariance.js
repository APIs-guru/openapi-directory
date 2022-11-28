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
var PostAssetsVarianceRequestBody1Assets = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceRequestBody1Assets, _super);
    function PostAssetsVarianceRequestBody1Assets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetReturns" }),
        __metadata("design:type", Array)
    ], PostAssetsVarianceRequestBody1Assets.prototype, "assetReturns", void 0);
    return PostAssetsVarianceRequestBody1Assets;
}(SpeakeasyBase));
export { PostAssetsVarianceRequestBody1Assets };
var PostAssetsVarianceRequestBody1 = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceRequestBody1, _super);
    function PostAssetsVarianceRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVarianceRequestBody1Assets }),
        __metadata("design:type", Array)
    ], PostAssetsVarianceRequestBody1.prototype, "assets", void 0);
    return PostAssetsVarianceRequestBody1;
}(SpeakeasyBase));
export { PostAssetsVarianceRequestBody1 };
var PostAssetsVarianceRequestBody2 = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceRequestBody2, _super);
    function PostAssetsVarianceRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostAssetsVarianceRequestBody2.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsVarianceRequestBody2.prototype, "assetsCovarianceMatrix", void 0);
    return PostAssetsVarianceRequestBody2;
}(SpeakeasyBase));
export { PostAssetsVarianceRequestBody2 };
var PostAssetsVarianceRequestBody3Assets = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceRequestBody3Assets, _super);
    function PostAssetsVarianceRequestBody3Assets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetVolatility" }),
        __metadata("design:type", Number)
    ], PostAssetsVarianceRequestBody3Assets.prototype, "assetVolatility", void 0);
    return PostAssetsVarianceRequestBody3Assets;
}(SpeakeasyBase));
export { PostAssetsVarianceRequestBody3Assets };
var PostAssetsVarianceRequestBody3 = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceRequestBody3, _super);
    function PostAssetsVarianceRequestBody3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVarianceRequestBody3Assets }),
        __metadata("design:type", Array)
    ], PostAssetsVarianceRequestBody3.prototype, "assets", void 0);
    return PostAssetsVarianceRequestBody3;
}(SpeakeasyBase));
export { PostAssetsVarianceRequestBody3 };
var PostAssetsVariance200ApplicationJsonAssets = /** @class */ (function (_super) {
    __extends(PostAssetsVariance200ApplicationJsonAssets, _super);
    function PostAssetsVariance200ApplicationJsonAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetVariance" }),
        __metadata("design:type", Number)
    ], PostAssetsVariance200ApplicationJsonAssets.prototype, "assetVariance", void 0);
    return PostAssetsVariance200ApplicationJsonAssets;
}(SpeakeasyBase));
export { PostAssetsVariance200ApplicationJsonAssets };
var PostAssetsVariance200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsVariance200ApplicationJson, _super);
    function PostAssetsVariance200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVariance200ApplicationJsonAssets }),
        __metadata("design:type", Array)
    ], PostAssetsVariance200ApplicationJson.prototype, "assets", void 0);
    return PostAssetsVariance200ApplicationJson;
}(SpeakeasyBase));
export { PostAssetsVariance200ApplicationJson };
var PostAssetsVarianceRequest = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceRequest, _super);
    function PostAssetsVarianceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostAssetsVarianceRequest.prototype, "request", void 0);
    return PostAssetsVarianceRequest;
}(SpeakeasyBase));
export { PostAssetsVarianceRequest };
var PostAssetsVarianceResponse = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceResponse, _super);
    function PostAssetsVarianceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssetsVarianceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssetsVariance200ApplicationJson)
    ], PostAssetsVarianceResponse.prototype, "postAssetsVariance200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssetsVarianceResponse.prototype, "statusCode", void 0);
    return PostAssetsVarianceResponse;
}(SpeakeasyBase));
export { PostAssetsVarianceResponse };
