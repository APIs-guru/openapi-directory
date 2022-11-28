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
var SearchUserPostsPathParams = /** @class */ (function (_super) {
    __extends(SearchUserPostsPathParams, _super);
    function SearchUserPostsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], SearchUserPostsPathParams.prototype, "userId", void 0);
    return SearchUserPostsPathParams;
}(SpeakeasyBase));
export { SearchUserPostsPathParams };
var SearchUserPostsQueryParams = /** @class */ (function (_super) {
    __extends(SearchUserPostsQueryParams, _super);
    function SearchUserPostsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_max" }),
        __metadata("design:type", Date)
    ], SearchUserPostsQueryParams.prototype, "dateMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_min" }),
        __metadata("design:type", Date)
    ], SearchUserPostsQueryParams.prototype, "dateMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" }),
        __metadata("design:type", Number)
    ], SearchUserPostsQueryParams.prototype, "devicePixelRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_ids" }),
        __metadata("design:type", String)
    ], SearchUserPostsQueryParams.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], SearchUserPostsQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], SearchUserPostsQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outcomes" }),
        __metadata("design:type", String)
    ], SearchUserPostsQueryParams.prototype, "outcomes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchUserPostsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchUserPostsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], SearchUserPostsQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], SearchUserPostsQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], SearchUserPostsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", String)
    ], SearchUserPostsQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=types" }),
        __metadata("design:type", String)
    ], SearchUserPostsQueryParams.prototype, "types", void 0);
    return SearchUserPostsQueryParams;
}(SpeakeasyBase));
export { SearchUserPostsQueryParams };
var SearchUserPostsSecurity = /** @class */ (function (_super) {
    __extends(SearchUserPostsSecurity, _super);
    function SearchUserPostsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Implicit)
    ], SearchUserPostsSecurity.prototype, "oauth2Implicit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Code)
    ], SearchUserPostsSecurity.prototype, "oauth2Code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SearchUserPostsSecurity.prototype, "apiKey", void 0);
    return SearchUserPostsSecurity;
}(SpeakeasyBase));
export { SearchUserPostsSecurity };
var SearchUserPosts200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchUserPosts200ApplicationJson, _super);
    function SearchUserPosts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_index" }),
        __metadata("design:type", Number)
    ], SearchUserPosts200ApplicationJson.prototype, "endIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_ids" }),
        __metadata("design:type", Array)
    ], SearchUserPosts200ApplicationJson.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_pages" }),
        __metadata("design:type", Number)
    ], SearchUserPosts200ApplicationJson.prototype, "numPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_posts" }),
        __metadata("design:type", Number)
    ], SearchUserPosts200ApplicationJson.prototype, "numPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], SearchUserPosts200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], SearchUserPosts200ApplicationJson.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts", elemType: shared.PostSearchResult }),
        __metadata("design:type", Array)
    ], SearchUserPosts200ApplicationJson.prototype, "posts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_index" }),
        __metadata("design:type", Number)
    ], SearchUserPosts200ApplicationJson.prototype, "startIndex", void 0);
    return SearchUserPosts200ApplicationJson;
}(SpeakeasyBase));
export { SearchUserPosts200ApplicationJson };
var SearchUserPostsRequest = /** @class */ (function (_super) {
    __extends(SearchUserPostsRequest, _super);
    function SearchUserPostsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchUserPostsPathParams)
    ], SearchUserPostsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchUserPostsQueryParams)
    ], SearchUserPostsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchUserPostsSecurity)
    ], SearchUserPostsRequest.prototype, "security", void 0);
    return SearchUserPostsRequest;
}(SpeakeasyBase));
export { SearchUserPostsRequest };
var SearchUserPostsResponse = /** @class */ (function (_super) {
    __extends(SearchUserPostsResponse, _super);
    function SearchUserPostsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchUserPostsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchUserPostsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchUserPosts200ApplicationJson)
    ], SearchUserPostsResponse.prototype, "searchUserPosts200ApplicationJsonObject", void 0);
    return SearchUserPostsResponse;
}(SpeakeasyBase));
export { SearchUserPostsResponse };
