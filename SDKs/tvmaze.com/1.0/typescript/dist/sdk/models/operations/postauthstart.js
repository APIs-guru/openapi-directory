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
var PostAuthStartRequestBody = /** @class */ (function (_super) {
    __extends(PostAuthStartRequestBody, _super);
    function PostAuthStartRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostAuthStartRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email_confirmation" }),
        __metadata("design:type", Boolean)
    ], PostAuthStartRequestBody.prototype, "emailConfirmation", void 0);
    return PostAuthStartRequestBody;
}(SpeakeasyBase));
export { PostAuthStartRequestBody };
var PostAuthStart200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAuthStart200ApplicationJson, _super);
    function PostAuthStart200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirm_url" }),
        __metadata("design:type", String)
    ], PostAuthStart200ApplicationJson.prototype, "confirmUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostAuthStart200ApplicationJson.prototype, "token", void 0);
    return PostAuthStart200ApplicationJson;
}(SpeakeasyBase));
export { PostAuthStart200ApplicationJson };
var PostAuthStartRequest = /** @class */ (function (_super) {
    __extends(PostAuthStartRequest, _super);
    function PostAuthStartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAuthStartRequestBody)
    ], PostAuthStartRequest.prototype, "request", void 0);
    return PostAuthStartRequest;
}(SpeakeasyBase));
export { PostAuthStartRequest };
var PostAuthStartResponse = /** @class */ (function (_super) {
    __extends(PostAuthStartResponse, _super);
    function PostAuthStartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAuthStartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAuthStart200ApplicationJson)
    ], PostAuthStartResponse.prototype, "postAuthStart200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAuthStartResponse.prototype, "statusCode", void 0);
    return PostAuthStartResponse;
}(SpeakeasyBase));
export { PostAuthStartResponse };
