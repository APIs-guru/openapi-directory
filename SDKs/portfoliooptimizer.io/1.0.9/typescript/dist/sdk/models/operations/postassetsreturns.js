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
var PostAssetsReturnsRequestBodyAssets = /** @class */ (function (_super) {
    __extends(PostAssetsReturnsRequestBodyAssets, _super);
    function PostAssetsReturnsRequestBodyAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetPrices" }),
        __metadata("design:type", Array)
    ], PostAssetsReturnsRequestBodyAssets.prototype, "assetPrices", void 0);
    return PostAssetsReturnsRequestBodyAssets;
}(SpeakeasyBase));
export { PostAssetsReturnsRequestBodyAssets };
var PostAssetsReturnsRequestBody = /** @class */ (function (_super) {
    __extends(PostAssetsReturnsRequestBody, _super);
    function PostAssetsReturnsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsReturnsRequestBodyAssets }),
        __metadata("design:type", Array)
    ], PostAssetsReturnsRequestBody.prototype, "assets", void 0);
    return PostAssetsReturnsRequestBody;
}(SpeakeasyBase));
export { PostAssetsReturnsRequestBody };
var PostAssetsReturns200ApplicationJsonAssets = /** @class */ (function (_super) {
    __extends(PostAssetsReturns200ApplicationJsonAssets, _super);
    function PostAssetsReturns200ApplicationJsonAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetReturns" }),
        __metadata("design:type", Array)
    ], PostAssetsReturns200ApplicationJsonAssets.prototype, "assetReturns", void 0);
    return PostAssetsReturns200ApplicationJsonAssets;
}(SpeakeasyBase));
export { PostAssetsReturns200ApplicationJsonAssets };
var PostAssetsReturns200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsReturns200ApplicationJson, _super);
    function PostAssetsReturns200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsReturns200ApplicationJsonAssets }),
        __metadata("design:type", Array)
    ], PostAssetsReturns200ApplicationJson.prototype, "assets", void 0);
    return PostAssetsReturns200ApplicationJson;
}(SpeakeasyBase));
export { PostAssetsReturns200ApplicationJson };
var PostAssetsReturnsRequest = /** @class */ (function (_super) {
    __extends(PostAssetsReturnsRequest, _super);
    function PostAssetsReturnsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAssetsReturnsRequestBody)
    ], PostAssetsReturnsRequest.prototype, "request", void 0);
    return PostAssetsReturnsRequest;
}(SpeakeasyBase));
export { PostAssetsReturnsRequest };
var PostAssetsReturnsResponse = /** @class */ (function (_super) {
    __extends(PostAssetsReturnsResponse, _super);
    function PostAssetsReturnsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssetsReturnsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssetsReturns200ApplicationJson)
    ], PostAssetsReturnsResponse.prototype, "postAssetsReturns200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssetsReturnsResponse.prototype, "statusCode", void 0);
    return PostAssetsReturnsResponse;
}(SpeakeasyBase));
export { PostAssetsReturnsResponse };
