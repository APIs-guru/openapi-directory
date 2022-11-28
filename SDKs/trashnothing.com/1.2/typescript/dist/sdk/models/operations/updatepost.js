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
var UpdatePostPathParams = /** @class */ (function (_super) {
    __extends(UpdatePostPathParams, _super);
    function UpdatePostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" }),
        __metadata("design:type", String)
    ], UpdatePostPathParams.prototype, "postId", void 0);
    return UpdatePostPathParams;
}(SpeakeasyBase));
export { UpdatePostPathParams };
var UpdatePostRequestBody = /** @class */ (function (_super) {
    __extends(UpdatePostRequestBody, _super);
    function UpdatePostRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=content" }),
        __metadata("design:type", String)
    ], UpdatePostRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=expires_in" }),
        __metadata("design:type", String)
    ], UpdatePostRequestBody.prototype, "expiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=fair_offer" }),
        __metadata("design:type", Number)
    ], UpdatePostRequestBody.prototype, "fairOffer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=latitude" }),
        __metadata("design:type", Number)
    ], UpdatePostRequestBody.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=location" }),
        __metadata("design:type", String)
    ], UpdatePostRequestBody.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=longitude" }),
        __metadata("design:type", Number)
    ], UpdatePostRequestBody.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=photo_ids" }),
        __metadata("design:type", String)
    ], UpdatePostRequestBody.prototype, "photoIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=preferences" }),
        __metadata("design:type", String)
    ], UpdatePostRequestBody.prototype, "preferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=session" }),
        __metadata("design:type", String)
    ], UpdatePostRequestBody.prototype, "session", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=title" }),
        __metadata("design:type", String)
    ], UpdatePostRequestBody.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], UpdatePostRequestBody.prototype, "type", void 0);
    return UpdatePostRequestBody;
}(SpeakeasyBase));
export { UpdatePostRequestBody };
var UpdatePost200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdatePost200ApplicationJson, _super);
    function UpdatePost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], UpdatePost200ApplicationJson.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdatePost200ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preference_key" }),
        __metadata("design:type", String)
    ], UpdatePost200ApplicationJson.prototype, "preferenceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdatePost200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=session" }),
        __metadata("design:type", Map)
    ], UpdatePost200ApplicationJson.prototype, "session", void 0);
    return UpdatePost200ApplicationJson;
}(SpeakeasyBase));
export { UpdatePost200ApplicationJson };
var UpdatePostRequest = /** @class */ (function (_super) {
    __extends(UpdatePostRequest, _super);
    function UpdatePostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePostPathParams)
    ], UpdatePostRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdatePostRequestBody)
    ], UpdatePostRequest.prototype, "request", void 0);
    return UpdatePostRequest;
}(SpeakeasyBase));
export { UpdatePostRequest };
var UpdatePostResponse = /** @class */ (function (_super) {
    __extends(UpdatePostResponse, _super);
    function UpdatePostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePost200ApplicationJson)
    ], UpdatePostResponse.prototype, "updatePost200ApplicationJsonObject", void 0);
    return UpdatePostResponse;
}(SpeakeasyBase));
export { UpdatePostResponse };
