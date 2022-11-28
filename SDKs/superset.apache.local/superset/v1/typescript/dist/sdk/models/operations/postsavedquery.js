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
var PostSavedQuerySecurity = /** @class */ (function (_super) {
    __extends(PostSavedQuerySecurity, _super);
    function PostSavedQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostSavedQuerySecurity.prototype, "jwt", void 0);
    return PostSavedQuerySecurity;
}(SpeakeasyBase));
export { PostSavedQuerySecurity };
var PostSavedQuery201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSavedQuery201ApplicationJson, _super);
    function PostSavedQuery201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostSavedQuery201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.SavedQueryRestApiPost)
    ], PostSavedQuery201ApplicationJson.prototype, "result", void 0);
    return PostSavedQuery201ApplicationJson;
}(SpeakeasyBase));
export { PostSavedQuery201ApplicationJson };
var PostSavedQuery400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSavedQuery400ApplicationJson, _super);
    function PostSavedQuery400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSavedQuery400ApplicationJson.prototype, "message", void 0);
    return PostSavedQuery400ApplicationJson;
}(SpeakeasyBase));
export { PostSavedQuery400ApplicationJson };
var PostSavedQuery401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSavedQuery401ApplicationJson, _super);
    function PostSavedQuery401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSavedQuery401ApplicationJson.prototype, "message", void 0);
    return PostSavedQuery401ApplicationJson;
}(SpeakeasyBase));
export { PostSavedQuery401ApplicationJson };
var PostSavedQuery422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSavedQuery422ApplicationJson, _super);
    function PostSavedQuery422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSavedQuery422ApplicationJson.prototype, "message", void 0);
    return PostSavedQuery422ApplicationJson;
}(SpeakeasyBase));
export { PostSavedQuery422ApplicationJson };
var PostSavedQuery500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSavedQuery500ApplicationJson, _super);
    function PostSavedQuery500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSavedQuery500ApplicationJson.prototype, "message", void 0);
    return PostSavedQuery500ApplicationJson;
}(SpeakeasyBase));
export { PostSavedQuery500ApplicationJson };
var PostSavedQueryRequest = /** @class */ (function (_super) {
    __extends(PostSavedQueryRequest, _super);
    function PostSavedQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SavedQueryRestApiPost)
    ], PostSavedQueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQuerySecurity)
    ], PostSavedQueryRequest.prototype, "security", void 0);
    return PostSavedQueryRequest;
}(SpeakeasyBase));
export { PostSavedQueryRequest };
var PostSavedQueryResponse = /** @class */ (function (_super) {
    __extends(PostSavedQueryResponse, _super);
    function PostSavedQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSavedQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQuery201ApplicationJson)
    ], PostSavedQueryResponse.prototype, "postSavedQuery201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQuery400ApplicationJson)
    ], PostSavedQueryResponse.prototype, "postSavedQuery400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQuery401ApplicationJson)
    ], PostSavedQueryResponse.prototype, "postSavedQuery401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQuery422ApplicationJson)
    ], PostSavedQueryResponse.prototype, "postSavedQuery422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQuery500ApplicationJson)
    ], PostSavedQueryResponse.prototype, "postSavedQuery500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSavedQueryResponse.prototype, "statusCode", void 0);
    return PostSavedQueryResponse;
}(SpeakeasyBase));
export { PostSavedQueryResponse };
