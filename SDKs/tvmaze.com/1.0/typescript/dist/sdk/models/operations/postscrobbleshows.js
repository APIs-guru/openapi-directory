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
var PostScrobbleShowsQueryParams = /** @class */ (function (_super) {
    __extends(PostScrobbleShowsQueryParams, _super);
    function PostScrobbleShowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imdb_id" }),
        __metadata("design:type", Number)
    ], PostScrobbleShowsQueryParams.prototype, "imdbId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thetvdb_id" }),
        __metadata("design:type", Number)
    ], PostScrobbleShowsQueryParams.prototype, "thetvdbId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tvmaze_id" }),
        __metadata("design:type", Number)
    ], PostScrobbleShowsQueryParams.prototype, "tvmazeId", void 0);
    return PostScrobbleShowsQueryParams;
}(SpeakeasyBase));
export { PostScrobbleShowsQueryParams };
var PostScrobbleShowsRequestBody = /** @class */ (function (_super) {
    __extends(PostScrobbleShowsRequestBody, _super);
    function PostScrobbleShowsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=airdate" }),
        __metadata("design:type", Date)
    ], PostScrobbleShowsRequestBody.prototype, "airdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episode" }),
        __metadata("design:type", Number)
    ], PostScrobbleShowsRequestBody.prototype, "episode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marked_at" }),
        __metadata("design:type", Number)
    ], PostScrobbleShowsRequestBody.prototype, "markedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], PostScrobbleShowsRequestBody.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", Object)
    ], PostScrobbleShowsRequestBody.prototype, "type", void 0);
    return PostScrobbleShowsRequestBody;
}(SpeakeasyBase));
export { PostScrobbleShowsRequestBody };
var PostScrobbleShowsRequest = /** @class */ (function (_super) {
    __extends(PostScrobbleShowsRequest, _super);
    function PostScrobbleShowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostScrobbleShowsQueryParams)
    ], PostScrobbleShowsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: PostScrobbleShowsRequestBody }),
        __metadata("design:type", Array)
    ], PostScrobbleShowsRequest.prototype, "request", void 0);
    return PostScrobbleShowsRequest;
}(SpeakeasyBase));
export { PostScrobbleShowsRequest };
var PostScrobbleShowsResponse = /** @class */ (function (_super) {
    __extends(PostScrobbleShowsResponse, _super);
    function PostScrobbleShowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], PostScrobbleShowsResponse.prototype, "bulkResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostScrobbleShowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostScrobbleShowsResponse.prototype, "statusCode", void 0);
    return PostScrobbleShowsResponse;
}(SpeakeasyBase));
export { PostScrobbleShowsResponse };
