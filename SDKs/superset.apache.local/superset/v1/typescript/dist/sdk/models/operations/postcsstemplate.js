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
var PostCssTemplateSecurity = /** @class */ (function (_super) {
    __extends(PostCssTemplateSecurity, _super);
    function PostCssTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostCssTemplateSecurity.prototype, "jwt", void 0);
    return PostCssTemplateSecurity;
}(SpeakeasyBase));
export { PostCssTemplateSecurity };
var PostCssTemplate201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostCssTemplate201ApplicationJson, _super);
    function PostCssTemplate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostCssTemplate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.CssTemplateRestApiPost)
    ], PostCssTemplate201ApplicationJson.prototype, "result", void 0);
    return PostCssTemplate201ApplicationJson;
}(SpeakeasyBase));
export { PostCssTemplate201ApplicationJson };
var PostCssTemplate400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostCssTemplate400ApplicationJson, _super);
    function PostCssTemplate400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostCssTemplate400ApplicationJson.prototype, "message", void 0);
    return PostCssTemplate400ApplicationJson;
}(SpeakeasyBase));
export { PostCssTemplate400ApplicationJson };
var PostCssTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostCssTemplate401ApplicationJson, _super);
    function PostCssTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostCssTemplate401ApplicationJson.prototype, "message", void 0);
    return PostCssTemplate401ApplicationJson;
}(SpeakeasyBase));
export { PostCssTemplate401ApplicationJson };
var PostCssTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostCssTemplate422ApplicationJson, _super);
    function PostCssTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostCssTemplate422ApplicationJson.prototype, "message", void 0);
    return PostCssTemplate422ApplicationJson;
}(SpeakeasyBase));
export { PostCssTemplate422ApplicationJson };
var PostCssTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostCssTemplate500ApplicationJson, _super);
    function PostCssTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostCssTemplate500ApplicationJson.prototype, "message", void 0);
    return PostCssTemplate500ApplicationJson;
}(SpeakeasyBase));
export { PostCssTemplate500ApplicationJson };
var PostCssTemplateRequest = /** @class */ (function (_super) {
    __extends(PostCssTemplateRequest, _super);
    function PostCssTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CssTemplateRestApiPost)
    ], PostCssTemplateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCssTemplateSecurity)
    ], PostCssTemplateRequest.prototype, "security", void 0);
    return PostCssTemplateRequest;
}(SpeakeasyBase));
export { PostCssTemplateRequest };
var PostCssTemplateResponse = /** @class */ (function (_super) {
    __extends(PostCssTemplateResponse, _super);
    function PostCssTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCssTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCssTemplate201ApplicationJson)
    ], PostCssTemplateResponse.prototype, "postCssTemplate201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCssTemplate400ApplicationJson)
    ], PostCssTemplateResponse.prototype, "postCssTemplate400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCssTemplate401ApplicationJson)
    ], PostCssTemplateResponse.prototype, "postCssTemplate401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCssTemplate422ApplicationJson)
    ], PostCssTemplateResponse.prototype, "postCssTemplate422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCssTemplate500ApplicationJson)
    ], PostCssTemplateResponse.prototype, "postCssTemplate500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCssTemplateResponse.prototype, "statusCode", void 0);
    return PostCssTemplateResponse;
}(SpeakeasyBase));
export { PostCssTemplateResponse };
