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
var GetCurrentUserPostsQueryParams = /** @class */ (function (_super) {
    __extends(GetCurrentUserPostsQueryParams, _super);
    function GetCurrentUserPostsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_max" }),
        __metadata("design:type", Date)
    ], GetCurrentUserPostsQueryParams.prototype, "dateMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_min" }),
        __metadata("design:type", Date)
    ], GetCurrentUserPostsQueryParams.prototype, "dateMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPostsQueryParams.prototype, "devicePixelRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_ids" }),
        __metadata("design:type", String)
    ], GetCurrentUserPostsQueryParams.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPostsQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPostsQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outcomes" }),
        __metadata("design:type", String)
    ], GetCurrentUserPostsQueryParams.prototype, "outcomes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPostsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPostsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPostsQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetCurrentUserPostsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", String)
    ], GetCurrentUserPostsQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=types" }),
        __metadata("design:type", String)
    ], GetCurrentUserPostsQueryParams.prototype, "types", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_state" }),
        __metadata("design:type", String)
    ], GetCurrentUserPostsQueryParams.prototype, "userState", void 0);
    return GetCurrentUserPostsQueryParams;
}(SpeakeasyBase));
export { GetCurrentUserPostsQueryParams };
var GetCurrentUserPosts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCurrentUserPosts200ApplicationJson, _super);
    function GetCurrentUserPosts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_index" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPosts200ApplicationJson.prototype, "endIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_ids" }),
        __metadata("design:type", Array)
    ], GetCurrentUserPosts200ApplicationJson.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_listings_view" }),
        __metadata("design:type", Date)
    ], GetCurrentUserPosts200ApplicationJson.prototype, "lastListingsView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_pages" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPosts200ApplicationJson.prototype, "numPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_posts" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPosts200ApplicationJson.prototype, "numPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPosts200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPosts200ApplicationJson.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts", elemType: shared.Post }),
        __metadata("design:type", Array)
    ], GetCurrentUserPosts200ApplicationJson.prototype, "posts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_index" }),
        __metadata("design:type", Number)
    ], GetCurrentUserPosts200ApplicationJson.prototype, "startIndex", void 0);
    return GetCurrentUserPosts200ApplicationJson;
}(SpeakeasyBase));
export { GetCurrentUserPosts200ApplicationJson };
var GetCurrentUserPostsRequest = /** @class */ (function (_super) {
    __extends(GetCurrentUserPostsRequest, _super);
    function GetCurrentUserPostsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCurrentUserPostsQueryParams)
    ], GetCurrentUserPostsRequest.prototype, "queryParams", void 0);
    return GetCurrentUserPostsRequest;
}(SpeakeasyBase));
export { GetCurrentUserPostsRequest };
var GetCurrentUserPostsResponse = /** @class */ (function (_super) {
    __extends(GetCurrentUserPostsResponse, _super);
    function GetCurrentUserPostsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCurrentUserPostsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCurrentUserPostsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCurrentUserPosts200ApplicationJson)
    ], GetCurrentUserPostsResponse.prototype, "getCurrentUserPosts200ApplicationJsonObject", void 0);
    return GetCurrentUserPostsResponse;
}(SpeakeasyBase));
export { GetCurrentUserPostsResponse };
