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
var PostAssetsVarianceSampleRequestBodyAssets = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceSampleRequestBodyAssets, _super);
    function PostAssetsVarianceSampleRequestBodyAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetReturns" }),
        __metadata("design:type", Array)
    ], PostAssetsVarianceSampleRequestBodyAssets.prototype, "assetReturns", void 0);
    return PostAssetsVarianceSampleRequestBodyAssets;
}(SpeakeasyBase));
export { PostAssetsVarianceSampleRequestBodyAssets };
var PostAssetsVarianceSampleRequestBody = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceSampleRequestBody, _super);
    function PostAssetsVarianceSampleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVarianceSampleRequestBodyAssets }),
        __metadata("design:type", Array)
    ], PostAssetsVarianceSampleRequestBody.prototype, "assets", void 0);
    return PostAssetsVarianceSampleRequestBody;
}(SpeakeasyBase));
export { PostAssetsVarianceSampleRequestBody };
var PostAssetsVarianceSample200ApplicationJsonAssets = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceSample200ApplicationJsonAssets, _super);
    function PostAssetsVarianceSample200ApplicationJsonAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetVariance" }),
        __metadata("design:type", Number)
    ], PostAssetsVarianceSample200ApplicationJsonAssets.prototype, "assetVariance", void 0);
    return PostAssetsVarianceSample200ApplicationJsonAssets;
}(SpeakeasyBase));
export { PostAssetsVarianceSample200ApplicationJsonAssets };
var PostAssetsVarianceSample200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceSample200ApplicationJson, _super);
    function PostAssetsVarianceSample200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVarianceSample200ApplicationJsonAssets }),
        __metadata("design:type", Array)
    ], PostAssetsVarianceSample200ApplicationJson.prototype, "assets", void 0);
    return PostAssetsVarianceSample200ApplicationJson;
}(SpeakeasyBase));
export { PostAssetsVarianceSample200ApplicationJson };
var PostAssetsVarianceSampleRequest = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceSampleRequest, _super);
    function PostAssetsVarianceSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAssetsVarianceSampleRequestBody)
    ], PostAssetsVarianceSampleRequest.prototype, "request", void 0);
    return PostAssetsVarianceSampleRequest;
}(SpeakeasyBase));
export { PostAssetsVarianceSampleRequest };
var PostAssetsVarianceSampleResponse = /** @class */ (function (_super) {
    __extends(PostAssetsVarianceSampleResponse, _super);
    function PostAssetsVarianceSampleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssetsVarianceSampleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssetsVarianceSample200ApplicationJson)
    ], PostAssetsVarianceSampleResponse.prototype, "postAssetsVarianceSample200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssetsVarianceSampleResponse.prototype, "statusCode", void 0);
    return PostAssetsVarianceSampleResponse;
}(SpeakeasyBase));
export { PostAssetsVarianceSampleResponse };
