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
var PostDatasetSecurity = /** @class */ (function (_super) {
    __extends(PostDatasetSecurity, _super);
    function PostDatasetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostDatasetSecurity.prototype, "jwt", void 0);
    return PostDatasetSecurity;
}(SpeakeasyBase));
export { PostDatasetSecurity };
var PostDataset201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDataset201ApplicationJson, _super);
    function PostDataset201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostDataset201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.DatasetRestApiPost)
    ], PostDataset201ApplicationJson.prototype, "result", void 0);
    return PostDataset201ApplicationJson;
}(SpeakeasyBase));
export { PostDataset201ApplicationJson };
var PostDataset400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDataset400ApplicationJson, _super);
    function PostDataset400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDataset400ApplicationJson.prototype, "message", void 0);
    return PostDataset400ApplicationJson;
}(SpeakeasyBase));
export { PostDataset400ApplicationJson };
var PostDataset401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDataset401ApplicationJson, _super);
    function PostDataset401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDataset401ApplicationJson.prototype, "message", void 0);
    return PostDataset401ApplicationJson;
}(SpeakeasyBase));
export { PostDataset401ApplicationJson };
var PostDataset422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDataset422ApplicationJson, _super);
    function PostDataset422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDataset422ApplicationJson.prototype, "message", void 0);
    return PostDataset422ApplicationJson;
}(SpeakeasyBase));
export { PostDataset422ApplicationJson };
var PostDataset500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDataset500ApplicationJson, _super);
    function PostDataset500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDataset500ApplicationJson.prototype, "message", void 0);
    return PostDataset500ApplicationJson;
}(SpeakeasyBase));
export { PostDataset500ApplicationJson };
var PostDatasetRequest = /** @class */ (function (_super) {
    __extends(PostDatasetRequest, _super);
    function PostDatasetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DatasetRestApiPost)
    ], PostDatasetRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatasetSecurity)
    ], PostDatasetRequest.prototype, "security", void 0);
    return PostDatasetRequest;
}(SpeakeasyBase));
export { PostDatasetRequest };
var PostDatasetResponse = /** @class */ (function (_super) {
    __extends(PostDatasetResponse, _super);
    function PostDatasetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDatasetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDataset201ApplicationJson)
    ], PostDatasetResponse.prototype, "postDataset201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDataset400ApplicationJson)
    ], PostDatasetResponse.prototype, "postDataset400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDataset401ApplicationJson)
    ], PostDatasetResponse.prototype, "postDataset401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDataset422ApplicationJson)
    ], PostDatasetResponse.prototype, "postDataset422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDataset500ApplicationJson)
    ], PostDatasetResponse.prototype, "postDataset500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDatasetResponse.prototype, "statusCode", void 0);
    return PostDatasetResponse;
}(SpeakeasyBase));
export { PostDatasetResponse };
