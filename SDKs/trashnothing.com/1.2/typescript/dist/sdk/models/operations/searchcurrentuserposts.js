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
var SearchCurrentUserPostsQueryParams = /** @class */ (function (_super) {
    __extends(SearchCurrentUserPostsQueryParams, _super);
    function SearchCurrentUserPostsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_max" }),
        __metadata("design:type", Date)
    ], SearchCurrentUserPostsQueryParams.prototype, "dateMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_min" }),
        __metadata("design:type", Date)
    ], SearchCurrentUserPostsQueryParams.prototype, "dateMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPostsQueryParams.prototype, "devicePixelRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_ids" }),
        __metadata("design:type", String)
    ], SearchCurrentUserPostsQueryParams.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPostsQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPostsQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outcomes" }),
        __metadata("design:type", String)
    ], SearchCurrentUserPostsQueryParams.prototype, "outcomes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPostsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPostsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPostsQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], SearchCurrentUserPostsQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], SearchCurrentUserPostsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", String)
    ], SearchCurrentUserPostsQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=types" }),
        __metadata("design:type", String)
    ], SearchCurrentUserPostsQueryParams.prototype, "types", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_state" }),
        __metadata("design:type", String)
    ], SearchCurrentUserPostsQueryParams.prototype, "userState", void 0);
    return SearchCurrentUserPostsQueryParams;
}(SpeakeasyBase));
export { SearchCurrentUserPostsQueryParams };
var SearchCurrentUserPosts200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchCurrentUserPosts200ApplicationJson, _super);
    function SearchCurrentUserPosts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_index" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPosts200ApplicationJson.prototype, "endIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_ids" }),
        __metadata("design:type", Array)
    ], SearchCurrentUserPosts200ApplicationJson.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_pages" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPosts200ApplicationJson.prototype, "numPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_posts" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPosts200ApplicationJson.prototype, "numPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPosts200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPosts200ApplicationJson.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts", elemType: shared.PostSearchResult }),
        __metadata("design:type", Array)
    ], SearchCurrentUserPosts200ApplicationJson.prototype, "posts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_index" }),
        __metadata("design:type", Number)
    ], SearchCurrentUserPosts200ApplicationJson.prototype, "startIndex", void 0);
    return SearchCurrentUserPosts200ApplicationJson;
}(SpeakeasyBase));
export { SearchCurrentUserPosts200ApplicationJson };
var SearchCurrentUserPostsRequest = /** @class */ (function (_super) {
    __extends(SearchCurrentUserPostsRequest, _super);
    function SearchCurrentUserPostsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCurrentUserPostsQueryParams)
    ], SearchCurrentUserPostsRequest.prototype, "queryParams", void 0);
    return SearchCurrentUserPostsRequest;
}(SpeakeasyBase));
export { SearchCurrentUserPostsRequest };
var SearchCurrentUserPostsResponse = /** @class */ (function (_super) {
    __extends(SearchCurrentUserPostsResponse, _super);
    function SearchCurrentUserPostsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchCurrentUserPostsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchCurrentUserPostsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCurrentUserPosts200ApplicationJson)
    ], SearchCurrentUserPostsResponse.prototype, "searchCurrentUserPosts200ApplicationJsonObject", void 0);
    return SearchCurrentUserPostsResponse;
}(SpeakeasyBase));
export { SearchCurrentUserPostsResponse };
