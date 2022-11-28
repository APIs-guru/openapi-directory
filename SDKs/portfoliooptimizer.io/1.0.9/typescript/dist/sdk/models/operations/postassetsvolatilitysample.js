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
var PostAssetsVolatilitySampleRequestBodyAssets = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilitySampleRequestBodyAssets, _super);
    function PostAssetsVolatilitySampleRequestBodyAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetReturns" }),
        __metadata("design:type", Array)
    ], PostAssetsVolatilitySampleRequestBodyAssets.prototype, "assetReturns", void 0);
    return PostAssetsVolatilitySampleRequestBodyAssets;
}(SpeakeasyBase));
export { PostAssetsVolatilitySampleRequestBodyAssets };
var PostAssetsVolatilitySampleRequestBody = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilitySampleRequestBody, _super);
    function PostAssetsVolatilitySampleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVolatilitySampleRequestBodyAssets }),
        __metadata("design:type", Array)
    ], PostAssetsVolatilitySampleRequestBody.prototype, "assets", void 0);
    return PostAssetsVolatilitySampleRequestBody;
}(SpeakeasyBase));
export { PostAssetsVolatilitySampleRequestBody };
var PostAssetsVolatilitySample200ApplicationJsonAssets = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilitySample200ApplicationJsonAssets, _super);
    function PostAssetsVolatilitySample200ApplicationJsonAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetVolatility" }),
        __metadata("design:type", Number)
    ], PostAssetsVolatilitySample200ApplicationJsonAssets.prototype, "assetVolatility", void 0);
    return PostAssetsVolatilitySample200ApplicationJsonAssets;
}(SpeakeasyBase));
export { PostAssetsVolatilitySample200ApplicationJsonAssets };
var PostAssetsVolatilitySample200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilitySample200ApplicationJson, _super);
    function PostAssetsVolatilitySample200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVolatilitySample200ApplicationJsonAssets }),
        __metadata("design:type", Array)
    ], PostAssetsVolatilitySample200ApplicationJson.prototype, "assets", void 0);
    return PostAssetsVolatilitySample200ApplicationJson;
}(SpeakeasyBase));
export { PostAssetsVolatilitySample200ApplicationJson };
var PostAssetsVolatilitySampleRequest = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilitySampleRequest, _super);
    function PostAssetsVolatilitySampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAssetsVolatilitySampleRequestBody)
    ], PostAssetsVolatilitySampleRequest.prototype, "request", void 0);
    return PostAssetsVolatilitySampleRequest;
}(SpeakeasyBase));
export { PostAssetsVolatilitySampleRequest };
var PostAssetsVolatilitySampleResponse = /** @class */ (function (_super) {
    __extends(PostAssetsVolatilitySampleResponse, _super);
    function PostAssetsVolatilitySampleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssetsVolatilitySampleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssetsVolatilitySample200ApplicationJson)
    ], PostAssetsVolatilitySampleResponse.prototype, "postAssetsVolatilitySample200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssetsVolatilitySampleResponse.prototype, "statusCode", void 0);
    return PostAssetsVolatilitySampleResponse;
}(SpeakeasyBase));
export { PostAssetsVolatilitySampleResponse };
