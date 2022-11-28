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
var PostAssetsVolatilityRequestBody1Assets = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilityRequestBody1Assets, _super);
    function PostAssetsVolatilityRequestBody1Assets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetReturns" }),
        __metadata("design:type", Array)
    ], PostAssetsVolatilityRequestBody1Assets.prototype, "assetReturns", void 0);
    return PostAssetsVolatilityRequestBody1Assets;
}(SpeakeasyBase));
export { PostAssetsVolatilityRequestBody1Assets };
var PostAssetsVolatilityRequestBody1 = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilityRequestBody1, _super);
    function PostAssetsVolatilityRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVolatilityRequestBody1Assets }),
        __metadata("design:type", Array)
    ], PostAssetsVolatilityRequestBody1.prototype, "assets", void 0);
    return PostAssetsVolatilityRequestBody1;
}(SpeakeasyBase));
export { PostAssetsVolatilityRequestBody1 };
var PostAssetsVolatilityRequestBody2 = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilityRequestBody2, _super);
    function PostAssetsVolatilityRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostAssetsVolatilityRequestBody2.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsVolatilityRequestBody2.prototype, "assetsCovarianceMatrix", void 0);
    return PostAssetsVolatilityRequestBody2;
}(SpeakeasyBase));
export { PostAssetsVolatilityRequestBody2 };
var PostAssetsVolatilityRequestBody3Assets = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilityRequestBody3Assets, _super);
    function PostAssetsVolatilityRequestBody3Assets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetVariance" }),
        __metadata("design:type", Number)
    ], PostAssetsVolatilityRequestBody3Assets.prototype, "assetVariance", void 0);
    return PostAssetsVolatilityRequestBody3Assets;
}(SpeakeasyBase));
export { PostAssetsVolatilityRequestBody3Assets };
var PostAssetsVolatilityRequestBody3 = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilityRequestBody3, _super);
    function PostAssetsVolatilityRequestBody3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVolatilityRequestBody3Assets }),
        __metadata("design:type", Array)
    ], PostAssetsVolatilityRequestBody3.prototype, "assets", void 0);
    return PostAssetsVolatilityRequestBody3;
}(SpeakeasyBase));
export { PostAssetsVolatilityRequestBody3 };
var PostAssetsVolatility200ApplicationJsonAssets = /** @class */ (function (_super) {
    __extends(PostAssetsVolatility200ApplicationJsonAssets, _super);
    function PostAssetsVolatility200ApplicationJsonAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetVolatility" }),
        __metadata("design:type", Number)
    ], PostAssetsVolatility200ApplicationJsonAssets.prototype, "assetVolatility", void 0);
    return PostAssetsVolatility200ApplicationJsonAssets;
}(SpeakeasyBase));
export { PostAssetsVolatility200ApplicationJsonAssets };
var PostAssetsVolatility200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsVolatility200ApplicationJson, _super);
    function PostAssetsVolatility200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVolatility200ApplicationJsonAssets }),
        __metadata("design:type", Array)
    ], PostAssetsVolatility200ApplicationJson.prototype, "assets", void 0);
    return PostAssetsVolatility200ApplicationJson;
}(SpeakeasyBase));
export { PostAssetsVolatility200ApplicationJson };
var PostAssetsVolatilityRequest = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilityRequest, _super);
    function PostAssetsVolatilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostAssetsVolatilityRequest.prototype, "request", void 0);
    return PostAssetsVolatilityRequest;
}(SpeakeasyBase));
export { PostAssetsVolatilityRequest };
var PostAssetsVolatilityResponse = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilityResponse, _super);
    function PostAssetsVolatilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssetsVolatilityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssetsVolatility200ApplicationJson)
    ], PostAssetsVolatilityResponse.prototype, "postAssetsVolatility200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssetsVolatilityResponse.prototype, "statusCode", void 0);
    return PostAssetsVolatilityResponse;
}(SpeakeasyBase));
export { PostAssetsVolatilityResponse };
