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
var GetPostAndRelatedDataPathParams = /** @class */ (function (_super) {
    __extends(GetPostAndRelatedDataPathParams, _super);
    function GetPostAndRelatedDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" }),
        __metadata("design:type", String)
    ], GetPostAndRelatedDataPathParams.prototype, "postId", void 0);
    return GetPostAndRelatedDataPathParams;
}(SpeakeasyBase));
export { GetPostAndRelatedDataPathParams };
var GetPostAndRelatedDataSecurity = /** @class */ (function (_super) {
    __extends(GetPostAndRelatedDataSecurity, _super);
    function GetPostAndRelatedDataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Implicit)
    ], GetPostAndRelatedDataSecurity.prototype, "oauth2Implicit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Code)
    ], GetPostAndRelatedDataSecurity.prototype, "oauth2Code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetPostAndRelatedDataSecurity.prototype, "apiKey", void 0);
    return GetPostAndRelatedDataSecurity;
}(SpeakeasyBase));
export { GetPostAndRelatedDataSecurity };
var GetPostAndRelatedData200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPostAndRelatedData200ApplicationJson, _super);
    function GetPostAndRelatedData200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", shared.User)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_offer_count" }),
        __metadata("design:type", Number)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "authorOfferCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_posts", elemType: shared.Post }),
        __metadata("design:type", Array)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "authorPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_wanted_count" }),
        __metadata("design:type", Number)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "authorWantedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookmarked" }),
        __metadata("design:type", Boolean)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "bookmarked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedback", elemType: shared.Feedback }),
        __metadata("design:type", Array)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "feedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geolocate_bounds" }),
        __metadata("design:type", shared.GeolocateBounds)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "geolocateBounds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group }),
        __metadata("design:type", Array)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post" }),
        __metadata("design:type", shared.Post)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "post", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replied" }),
        __metadata("design:type", Boolean)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "replied", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_can_reply" }),
        __metadata("design:type", Boolean)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "userCanReply", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewed" }),
        __metadata("design:type", Boolean)
    ], GetPostAndRelatedData200ApplicationJson.prototype, "viewed", void 0);
    return GetPostAndRelatedData200ApplicationJson;
}(SpeakeasyBase));
export { GetPostAndRelatedData200ApplicationJson };
var GetPostAndRelatedDataRequest = /** @class */ (function (_super) {
    __extends(GetPostAndRelatedDataRequest, _super);
    function GetPostAndRelatedDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostAndRelatedDataPathParams)
    ], GetPostAndRelatedDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostAndRelatedDataSecurity)
    ], GetPostAndRelatedDataRequest.prototype, "security", void 0);
    return GetPostAndRelatedDataRequest;
}(SpeakeasyBase));
export { GetPostAndRelatedDataRequest };
var GetPostAndRelatedDataResponse = /** @class */ (function (_super) {
    __extends(GetPostAndRelatedDataResponse, _super);
    function GetPostAndRelatedDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPostAndRelatedDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPostAndRelatedDataResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostAndRelatedData200ApplicationJson)
    ], GetPostAndRelatedDataResponse.prototype, "getPostAndRelatedData200ApplicationJsonObject", void 0);
    return GetPostAndRelatedDataResponse;
}(SpeakeasyBase));
export { GetPostAndRelatedDataResponse };
