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
var PostAdminNearMissesRequestRequestBody = /** @class */ (function (_super) {
    __extends(PostAdminNearMissesRequestRequestBody, _super);
    function PostAdminNearMissesRequestRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=absoluteUrl" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestRequestBody.prototype, "absoluteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], PostAdminNearMissesRequestRequestBody.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminNearMissesRequestRequestBody.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestRequestBody.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestRequestBody.prototype, "url", void 0);
    return PostAdminNearMissesRequestRequestBody;
}(SpeakeasyBase));
export { PostAdminNearMissesRequestRequestBody };
var PostAdminNearMissesRequest200ApplicationJsonNearMisses = /** @class */ (function (_super) {
    __extends(PostAdminNearMissesRequest200ApplicationJsonNearMisses, _super);
    function PostAdminNearMissesRequest200ApplicationJsonNearMisses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=absoluteUrl" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequest200ApplicationJsonNearMisses.prototype, "absoluteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequest200ApplicationJsonNearMisses.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], PostAdminNearMissesRequest200ApplicationJsonNearMisses.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminNearMissesRequest200ApplicationJsonNearMisses.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequest200ApplicationJsonNearMisses.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequest200ApplicationJsonNearMisses.prototype, "url", void 0);
    return PostAdminNearMissesRequest200ApplicationJsonNearMisses;
}(SpeakeasyBase));
export { PostAdminNearMissesRequest200ApplicationJsonNearMisses };
var PostAdminNearMissesRequest200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAdminNearMissesRequest200ApplicationJson, _super);
    function PostAdminNearMissesRequest200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nearMisses", elemType: PostAdminNearMissesRequest200ApplicationJsonNearMisses }),
        __metadata("design:type", Array)
    ], PostAdminNearMissesRequest200ApplicationJson.prototype, "nearMisses", void 0);
    return PostAdminNearMissesRequest200ApplicationJson;
}(SpeakeasyBase));
export { PostAdminNearMissesRequest200ApplicationJson };
var PostAdminNearMissesRequestRequest = /** @class */ (function (_super) {
    __extends(PostAdminNearMissesRequestRequest, _super);
    function PostAdminNearMissesRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAdminNearMissesRequestRequestBody)
    ], PostAdminNearMissesRequestRequest.prototype, "request", void 0);
    return PostAdminNearMissesRequestRequest;
}(SpeakeasyBase));
export { PostAdminNearMissesRequestRequest };
var PostAdminNearMissesRequestResponse = /** @class */ (function (_super) {
    __extends(PostAdminNearMissesRequestResponse, _super);
    function PostAdminNearMissesRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAdminNearMissesRequest200ApplicationJson)
    ], PostAdminNearMissesRequestResponse.prototype, "postAdminNearMissesRequest200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAdminNearMissesRequestResponse.prototype, "statusCode", void 0);
    return PostAdminNearMissesRequestResponse;
}(SpeakeasyBase));
export { PostAdminNearMissesRequestResponse };
