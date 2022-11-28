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
var GetPostsQueryParams = /** @class */ (function (_super) {
    __extends(GetPostsQueryParams, _super);
    function GetPostsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_max" }),
        __metadata("design:type", Date)
    ], GetPostsQueryParams.prototype, "dateMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_min" }),
        __metadata("design:type", Date)
    ], GetPostsQueryParams.prototype, "dateMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" }),
        __metadata("design:type", Number)
    ], GetPostsQueryParams.prototype, "devicePixelRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_ids" }),
        __metadata("design:type", String)
    ], GetPostsQueryParams.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], GetPostsQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], GetPostsQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outcomes" }),
        __metadata("design:type", String)
    ], GetPostsQueryParams.prototype, "outcomes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPostsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetPostsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetPostsQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetPostsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", String)
    ], GetPostsQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=types" }),
        __metadata("design:type", String)
    ], GetPostsQueryParams.prototype, "types", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_state" }),
        __metadata("design:type", String)
    ], GetPostsQueryParams.prototype, "userState", void 0);
    return GetPostsQueryParams;
}(SpeakeasyBase));
export { GetPostsQueryParams };
var GetPostsSecurity = /** @class */ (function (_super) {
    __extends(GetPostsSecurity, _super);
    function GetPostsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Implicit)
    ], GetPostsSecurity.prototype, "oauth2Implicit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Code)
    ], GetPostsSecurity.prototype, "oauth2Code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetPostsSecurity.prototype, "apiKey", void 0);
    return GetPostsSecurity;
}(SpeakeasyBase));
export { GetPostsSecurity };
var GetPosts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPosts200ApplicationJson, _super);
    function GetPosts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_index" }),
        __metadata("design:type", Number)
    ], GetPosts200ApplicationJson.prototype, "endIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_ids" }),
        __metadata("design:type", Array)
    ], GetPosts200ApplicationJson.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_listings_view" }),
        __metadata("design:type", Date)
    ], GetPosts200ApplicationJson.prototype, "lastListingsView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_pages" }),
        __metadata("design:type", Number)
    ], GetPosts200ApplicationJson.prototype, "numPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_posts" }),
        __metadata("design:type", Number)
    ], GetPosts200ApplicationJson.prototype, "numPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetPosts200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetPosts200ApplicationJson.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts", elemType: shared.Post }),
        __metadata("design:type", Array)
    ], GetPosts200ApplicationJson.prototype, "posts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_index" }),
        __metadata("design:type", Number)
    ], GetPosts200ApplicationJson.prototype, "startIndex", void 0);
    return GetPosts200ApplicationJson;
}(SpeakeasyBase));
export { GetPosts200ApplicationJson };
var GetPostsRequest = /** @class */ (function (_super) {
    __extends(GetPostsRequest, _super);
    function GetPostsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostsQueryParams)
    ], GetPostsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostsSecurity)
    ], GetPostsRequest.prototype, "security", void 0);
    return GetPostsRequest;
}(SpeakeasyBase));
export { GetPostsRequest };
var GetPostsResponse = /** @class */ (function (_super) {
    __extends(GetPostsResponse, _super);
    function GetPostsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPostsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPostsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPosts200ApplicationJson)
    ], GetPostsResponse.prototype, "getPosts200ApplicationJsonObject", void 0);
    return GetPostsResponse;
}(SpeakeasyBase));
export { GetPostsResponse };
