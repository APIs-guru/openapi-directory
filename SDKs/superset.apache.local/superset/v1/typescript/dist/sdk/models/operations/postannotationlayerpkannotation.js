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
var PostAnnotationLayerPkAnnotationPathParams = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerPkAnnotationPathParams, _super);
    function PostAnnotationLayerPkAnnotationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], PostAnnotationLayerPkAnnotationPathParams.prototype, "pk", void 0);
    return PostAnnotationLayerPkAnnotationPathParams;
}(SpeakeasyBase));
export { PostAnnotationLayerPkAnnotationPathParams };
var PostAnnotationLayerPkAnnotationSecurity = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerPkAnnotationSecurity, _super);
    function PostAnnotationLayerPkAnnotationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostAnnotationLayerPkAnnotationSecurity.prototype, "jwt", void 0);
    return PostAnnotationLayerPkAnnotationSecurity;
}(SpeakeasyBase));
export { PostAnnotationLayerPkAnnotationSecurity };
var PostAnnotationLayerPkAnnotation201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerPkAnnotation201ApplicationJson, _super);
    function PostAnnotationLayerPkAnnotation201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostAnnotationLayerPkAnnotation201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.AnnotationRestApiPost)
    ], PostAnnotationLayerPkAnnotation201ApplicationJson.prototype, "result", void 0);
    return PostAnnotationLayerPkAnnotation201ApplicationJson;
}(SpeakeasyBase));
export { PostAnnotationLayerPkAnnotation201ApplicationJson };
var PostAnnotationLayerPkAnnotation400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerPkAnnotation400ApplicationJson, _super);
    function PostAnnotationLayerPkAnnotation400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAnnotationLayerPkAnnotation400ApplicationJson.prototype, "message", void 0);
    return PostAnnotationLayerPkAnnotation400ApplicationJson;
}(SpeakeasyBase));
export { PostAnnotationLayerPkAnnotation400ApplicationJson };
var PostAnnotationLayerPkAnnotation401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerPkAnnotation401ApplicationJson, _super);
    function PostAnnotationLayerPkAnnotation401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAnnotationLayerPkAnnotation401ApplicationJson.prototype, "message", void 0);
    return PostAnnotationLayerPkAnnotation401ApplicationJson;
}(SpeakeasyBase));
export { PostAnnotationLayerPkAnnotation401ApplicationJson };
var PostAnnotationLayerPkAnnotation404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerPkAnnotation404ApplicationJson, _super);
    function PostAnnotationLayerPkAnnotation404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAnnotationLayerPkAnnotation404ApplicationJson.prototype, "message", void 0);
    return PostAnnotationLayerPkAnnotation404ApplicationJson;
}(SpeakeasyBase));
export { PostAnnotationLayerPkAnnotation404ApplicationJson };
var PostAnnotationLayerPkAnnotation500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerPkAnnotation500ApplicationJson, _super);
    function PostAnnotationLayerPkAnnotation500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAnnotationLayerPkAnnotation500ApplicationJson.prototype, "message", void 0);
    return PostAnnotationLayerPkAnnotation500ApplicationJson;
}(SpeakeasyBase));
export { PostAnnotationLayerPkAnnotation500ApplicationJson };
var PostAnnotationLayerPkAnnotationRequest = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerPkAnnotationRequest, _super);
    function PostAnnotationLayerPkAnnotationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayerPkAnnotationPathParams)
    ], PostAnnotationLayerPkAnnotationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AnnotationRestApiPost)
    ], PostAnnotationLayerPkAnnotationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayerPkAnnotationSecurity)
    ], PostAnnotationLayerPkAnnotationRequest.prototype, "security", void 0);
    return PostAnnotationLayerPkAnnotationRequest;
}(SpeakeasyBase));
export { PostAnnotationLayerPkAnnotationRequest };
var PostAnnotationLayerPkAnnotationResponse = /** @class */ (function (_super) {
    __extends(PostAnnotationLayerPkAnnotationResponse, _super);
    function PostAnnotationLayerPkAnnotationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAnnotationLayerPkAnnotationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayerPkAnnotation201ApplicationJson)
    ], PostAnnotationLayerPkAnnotationResponse.prototype, "postAnnotationLayerPkAnnotation201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayerPkAnnotation400ApplicationJson)
    ], PostAnnotationLayerPkAnnotationResponse.prototype, "postAnnotationLayerPkAnnotation400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayerPkAnnotation401ApplicationJson)
    ], PostAnnotationLayerPkAnnotationResponse.prototype, "postAnnotationLayerPkAnnotation401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayerPkAnnotation404ApplicationJson)
    ], PostAnnotationLayerPkAnnotationResponse.prototype, "postAnnotationLayerPkAnnotation404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnotationLayerPkAnnotation500ApplicationJson)
    ], PostAnnotationLayerPkAnnotationResponse.prototype, "postAnnotationLayerPkAnnotation500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAnnotationLayerPkAnnotationResponse.prototype, "statusCode", void 0);
    return PostAnnotationLayerPkAnnotationResponse;
}(SpeakeasyBase));
export { PostAnnotationLayerPkAnnotationResponse };
