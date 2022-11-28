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
export var PostSecurityLoginRequestBodyProviderEnum;
(function (PostSecurityLoginRequestBodyProviderEnum) {
    PostSecurityLoginRequestBodyProviderEnum["Db"] = "db";
    PostSecurityLoginRequestBodyProviderEnum["Ldap"] = "ldap";
})(PostSecurityLoginRequestBodyProviderEnum || (PostSecurityLoginRequestBodyProviderEnum = {}));
var PostSecurityLoginRequestBody = /** @class */ (function (_super) {
    __extends(PostSecurityLoginRequestBody, _super);
    function PostSecurityLoginRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostSecurityLoginRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], PostSecurityLoginRequestBody.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refresh" }),
        __metadata("design:type", Boolean)
    ], PostSecurityLoginRequestBody.prototype, "refresh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostSecurityLoginRequestBody.prototype, "username", void 0);
    return PostSecurityLoginRequestBody;
}(SpeakeasyBase));
export { PostSecurityLoginRequestBody };
var PostSecurityLogin200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSecurityLogin200ApplicationJson, _super);
    function PostSecurityLogin200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], PostSecurityLogin200ApplicationJson.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refresh_token" }),
        __metadata("design:type", String)
    ], PostSecurityLogin200ApplicationJson.prototype, "refreshToken", void 0);
    return PostSecurityLogin200ApplicationJson;
}(SpeakeasyBase));
export { PostSecurityLogin200ApplicationJson };
var PostSecurityLogin400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSecurityLogin400ApplicationJson, _super);
    function PostSecurityLogin400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSecurityLogin400ApplicationJson.prototype, "message", void 0);
    return PostSecurityLogin400ApplicationJson;
}(SpeakeasyBase));
export { PostSecurityLogin400ApplicationJson };
var PostSecurityLogin401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSecurityLogin401ApplicationJson, _super);
    function PostSecurityLogin401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSecurityLogin401ApplicationJson.prototype, "message", void 0);
    return PostSecurityLogin401ApplicationJson;
}(SpeakeasyBase));
export { PostSecurityLogin401ApplicationJson };
var PostSecurityLogin500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSecurityLogin500ApplicationJson, _super);
    function PostSecurityLogin500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSecurityLogin500ApplicationJson.prototype, "message", void 0);
    return PostSecurityLogin500ApplicationJson;
}(SpeakeasyBase));
export { PostSecurityLogin500ApplicationJson };
var PostSecurityLoginRequest = /** @class */ (function (_super) {
    __extends(PostSecurityLoginRequest, _super);
    function PostSecurityLoginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostSecurityLoginRequestBody)
    ], PostSecurityLoginRequest.prototype, "request", void 0);
    return PostSecurityLoginRequest;
}(SpeakeasyBase));
export { PostSecurityLoginRequest };
var PostSecurityLoginResponse = /** @class */ (function (_super) {
    __extends(PostSecurityLoginResponse, _super);
    function PostSecurityLoginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSecurityLoginResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSecurityLogin200ApplicationJson)
    ], PostSecurityLoginResponse.prototype, "postSecurityLogin200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSecurityLogin400ApplicationJson)
    ], PostSecurityLoginResponse.prototype, "postSecurityLogin400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSecurityLogin401ApplicationJson)
    ], PostSecurityLoginResponse.prototype, "postSecurityLogin401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSecurityLogin500ApplicationJson)
    ], PostSecurityLoginResponse.prototype, "postSecurityLogin500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSecurityLoginResponse.prototype, "statusCode", void 0);
    return PostSecurityLoginResponse;
}(SpeakeasyBase));
export { PostSecurityLoginResponse };
