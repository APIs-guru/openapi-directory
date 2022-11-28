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
var PostAssetsCorrelationMatrixNearestRequestBody = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixNearestRequestBody, _super);
    function PostAssetsCorrelationMatrixNearestRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostAssetsCorrelationMatrixNearestRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsApproximateCorrelationMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrixNearestRequestBody.prototype, "assetsApproximateCorrelationMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsFixedCorrelations" }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrixNearestRequestBody.prototype, "assetsFixedCorrelations", void 0);
    return PostAssetsCorrelationMatrixNearestRequestBody;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixNearestRequestBody };
var PostAssetsCorrelationMatrixNearest200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixNearest200ApplicationJson, _super);
    function PostAssetsCorrelationMatrixNearest200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrixNearest200ApplicationJson.prototype, "assetsCorrelationMatrix", void 0);
    return PostAssetsCorrelationMatrixNearest200ApplicationJson;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixNearest200ApplicationJson };
var PostAssetsCorrelationMatrixNearestRequest = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixNearestRequest, _super);
    function PostAssetsCorrelationMatrixNearestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAssetsCorrelationMatrixNearestRequestBody)
    ], PostAssetsCorrelationMatrixNearestRequest.prototype, "request", void 0);
    return PostAssetsCorrelationMatrixNearestRequest;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixNearestRequest };
var PostAssetsCorrelationMatrixNearestResponse = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixNearestResponse, _super);
    function PostAssetsCorrelationMatrixNearestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssetsCorrelationMatrixNearestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssetsCorrelationMatrixNearest200ApplicationJson)
    ], PostAssetsCorrelationMatrixNearestResponse.prototype, "postAssetsCorrelationMatrixNearest200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssetsCorrelationMatrixNearestResponse.prototype, "statusCode", void 0);
    return PostAssetsCorrelationMatrixNearestResponse;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixNearestResponse };
