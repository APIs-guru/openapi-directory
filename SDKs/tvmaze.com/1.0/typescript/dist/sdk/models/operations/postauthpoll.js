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
var PostAuthPollRequestBody = /** @class */ (function (_super) {
    __extends(PostAuthPollRequestBody, _super);
    function PostAuthPollRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostAuthPollRequestBody.prototype, "token", void 0);
    return PostAuthPollRequestBody;
}(SpeakeasyBase));
export { PostAuthPollRequestBody };
var PostAuthPoll200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAuthPoll200ApplicationJson, _super);
    function PostAuthPoll200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apikey" }),
        __metadata("design:type", String)
    ], PostAuthPoll200ApplicationJson.prototype, "apikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAuthPoll200ApplicationJson.prototype, "username", void 0);
    return PostAuthPoll200ApplicationJson;
}(SpeakeasyBase));
export { PostAuthPoll200ApplicationJson };
var PostAuthPollRequest = /** @class */ (function (_super) {
    __extends(PostAuthPollRequest, _super);
    function PostAuthPollRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAuthPollRequestBody)
    ], PostAuthPollRequest.prototype, "request", void 0);
    return PostAuthPollRequest;
}(SpeakeasyBase));
export { PostAuthPollRequest };
var PostAuthPollResponse = /** @class */ (function (_super) {
    __extends(PostAuthPollResponse, _super);
    function PostAuthPollResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAuthPollResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAuthPoll200ApplicationJson)
    ], PostAuthPollResponse.prototype, "postAuthPoll200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAuthPollResponse.prototype, "statusCode", void 0);
    return PostAuthPollResponse;
}(SpeakeasyBase));
export { PostAuthPollResponse };
