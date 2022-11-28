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
var PostCachekeyInvalidateSecurity = /** @class */ (function (_super) {
    __extends(PostCachekeyInvalidateSecurity, _super);
    function PostCachekeyInvalidateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostCachekeyInvalidateSecurity.prototype, "jwt", void 0);
    return PostCachekeyInvalidateSecurity;
}(SpeakeasyBase));
export { PostCachekeyInvalidateSecurity };
var PostCachekeyInvalidate400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostCachekeyInvalidate400ApplicationJson, _super);
    function PostCachekeyInvalidate400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostCachekeyInvalidate400ApplicationJson.prototype, "message", void 0);
    return PostCachekeyInvalidate400ApplicationJson;
}(SpeakeasyBase));
export { PostCachekeyInvalidate400ApplicationJson };
var PostCachekeyInvalidate500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostCachekeyInvalidate500ApplicationJson, _super);
    function PostCachekeyInvalidate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostCachekeyInvalidate500ApplicationJson.prototype, "message", void 0);
    return PostCachekeyInvalidate500ApplicationJson;
}(SpeakeasyBase));
export { PostCachekeyInvalidate500ApplicationJson };
var PostCachekeyInvalidateRequest = /** @class */ (function (_super) {
    __extends(PostCachekeyInvalidateRequest, _super);
    function PostCachekeyInvalidateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CacheInvalidationRequestSchema)
    ], PostCachekeyInvalidateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCachekeyInvalidateSecurity)
    ], PostCachekeyInvalidateRequest.prototype, "security", void 0);
    return PostCachekeyInvalidateRequest;
}(SpeakeasyBase));
export { PostCachekeyInvalidateRequest };
var PostCachekeyInvalidateResponse = /** @class */ (function (_super) {
    __extends(PostCachekeyInvalidateResponse, _super);
    function PostCachekeyInvalidateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCachekeyInvalidateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCachekeyInvalidate400ApplicationJson)
    ], PostCachekeyInvalidateResponse.prototype, "postCachekeyInvalidate400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCachekeyInvalidate500ApplicationJson)
    ], PostCachekeyInvalidateResponse.prototype, "postCachekeyInvalidate500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCachekeyInvalidateResponse.prototype, "statusCode", void 0);
    return PostCachekeyInvalidateResponse;
}(SpeakeasyBase));
export { PostCachekeyInvalidateResponse };
