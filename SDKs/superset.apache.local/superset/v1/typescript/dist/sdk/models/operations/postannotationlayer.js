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
var PostAnnotationLayerSecurity = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerSecurity, _super);
    function PostAnnotationLayerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostAnnotationLayerSecurity.prototype, "jwt", void 0);
    return PostAnnotationLayerSecurity;
}(SpeakeasyBase));
export { PostAnnotationLayerSecurity };
var PostAnnotationLayer201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnotationLayer201ApplicationJson, _super);
    function PostAnnotationLayer201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostAnnotationLayer201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.AnnotationLayerRestApiPost)
    ], PostAnnotationLayer201ApplicationJson.prototype, "result", void 0);
    return PostAnnotationLayer201ApplicationJson;
}(SpeakeasyBase));
export { PostAnnotationLayer201ApplicationJson };
var PostAnnotationLayer400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnotationLayer400ApplicationJson, _super);
    function PostAnnotationLayer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAnnotationLayer400ApplicationJson.prototype, "message", void 0);
    return PostAnnotationLayer400ApplicationJson;
}(SpeakeasyBase));
export { PostAnnotationLayer400ApplicationJson };
var PostAnnotationLayer401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnotationLayer401ApplicationJson, _super);
    function PostAnnotationLayer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAnnotationLayer401ApplicationJson.prototype, "message", void 0);
    return PostAnnotationLayer401ApplicationJson;
}(SpeakeasyBase));
export { PostAnnotationLayer401ApplicationJson };
var PostAnnotationLayer404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnotationLayer404ApplicationJson, _super);
    function PostAnnotationLayer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAnnotationLayer404ApplicationJson.prototype, "message", void 0);
    return PostAnnotationLayer404ApplicationJson;
}(SpeakeasyBase));
export { PostAnnotationLayer404ApplicationJson };
var PostAnnotationLayer500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnotationLayer500ApplicationJson, _super);
    function PostAnnotationLayer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAnnotationLayer500ApplicationJson.prototype, "message", void 0);
    return PostAnnotationLayer500ApplicationJson;
}(SpeakeasyBase));
export { PostAnnotationLayer500ApplicationJson };
var PostAnnotationLayerRequest = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerRequest, _super);
    function PostAnnotationLayerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AnnotationLayerRestApiPost)
    ], PostAnnotationLayerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayerSecurity)
    ], PostAnnotationLayerRequest.prototype, "security", void 0);
    return PostAnnotationLayerRequest;
}(SpeakeasyBase));
export { PostAnnotationLayerRequest };
var PostAnnotationLayerResponse = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerResponse, _super);
    function PostAnnotationLayerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAnnotationLayerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayer201ApplicationJson)
    ], PostAnnotationLayerResponse.prototype, "postAnnotationLayer201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayer400ApplicationJson)
    ], PostAnnotationLayerResponse.prototype, "postAnnotationLayer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayer401ApplicationJson)
    ], PostAnnotationLayerResponse.prototype, "postAnnotationLayer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayer404ApplicationJson)
    ], PostAnnotationLayerResponse.prototype, "postAnnotationLayer404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayer500ApplicationJson)
    ], PostAnnotationLayerResponse.prototype, "postAnnotationLayer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAnnotationLayerResponse.prototype, "statusCode", void 0);
    return PostAnnotationLayerResponse;
}(SpeakeasyBase));
export { PostAnnotationLayerResponse };
