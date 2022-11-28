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
var GetPlaylistsQueryParams = /** @class */ (function (_super) {
    __extends(GetPlaylistsQueryParams, _super);
    function GetPlaylistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetPlaylistsQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Date)
    ], GetPlaylistsQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], GetPlaylistsQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetPlaylistsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPlaylistsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=persona_id" }),
        __metadata("design:type", Number)
    ], GetPlaylistsQueryParams.prototype, "personaId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_id" }),
        __metadata("design:type", Number)
    ], GetPlaylistsQueryParams.prototype, "showId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Date)
    ], GetPlaylistsQueryParams.prototype, "start", void 0);
    return GetPlaylistsQueryParams;
}(SpeakeasyBase));
export { GetPlaylistsQueryParams };
var GetPlaylists200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(GetPlaylists200ApplicationJsonLinks, _super);
    function GetPlaylists200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", shared.Link)
    ], GetPlaylists200ApplicationJsonLinks.prototype, "self", void 0);
    return GetPlaylists200ApplicationJsonLinks;
}(SpeakeasyBase));
export { GetPlaylists200ApplicationJsonLinks };
var GetPlaylists200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPlaylists200ApplicationJson, _super);
    function GetPlaylists200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", GetPlaylists200ApplicationJsonLinks)
    ], GetPlaylists200ApplicationJson.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_meta" }),
        __metadata("design:type", shared.Pagination)
    ], GetPlaylists200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.Playlist }),
        __metadata("design:type", Array)
    ], GetPlaylists200ApplicationJson.prototype, "items", void 0);
    return GetPlaylists200ApplicationJson;
}(SpeakeasyBase));
export { GetPlaylists200ApplicationJson };
var GetPlaylistsRequest = /** @class */ (function (_super) {
    __extends(GetPlaylistsRequest, _super);
    function GetPlaylistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlaylistsQueryParams)
    ], GetPlaylistsRequest.prototype, "queryParams", void 0);
    return GetPlaylistsRequest;
}(SpeakeasyBase));
export { GetPlaylistsRequest };
var GetPlaylistsResponse = /** @class */ (function (_super) {
    __extends(GetPlaylistsResponse, _super);
    function GetPlaylistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPlaylistsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPlaylistsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlaylists200ApplicationJson)
    ], GetPlaylistsResponse.prototype, "getPlaylists200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPlaylistsResponse.prototype, "statusCode", void 0);
    return GetPlaylistsResponse;
}(SpeakeasyBase));
export { GetPlaylistsResponse };
