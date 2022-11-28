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
var GetShowsQueryParams = /** @class */ (function (_super) {
    __extends(GetShowsQueryParams, _super);
    function GetShowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetShowsQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Date)
    ], GetShowsQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], GetShowsQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetShowsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetShowsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Date)
    ], GetShowsQueryParams.prototype, "start", void 0);
    return GetShowsQueryParams;
}(SpeakeasyBase));
export { GetShowsQueryParams };
var GetShows200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(GetShows200ApplicationJsonLinks, _super);
    function GetShows200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", shared.Link)
    ], GetShows200ApplicationJsonLinks.prototype, "self", void 0);
    return GetShows200ApplicationJsonLinks;
}(SpeakeasyBase));
export { GetShows200ApplicationJsonLinks };
var GetShows200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetShows200ApplicationJson, _super);
    function GetShows200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", GetShows200ApplicationJsonLinks)
    ], GetShows200ApplicationJson.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_meta" }),
        __metadata("design:type", shared.Pagination)
    ], GetShows200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.Show }),
        __metadata("design:type", Array)
    ], GetShows200ApplicationJson.prototype, "items", void 0);
    return GetShows200ApplicationJson;
}(SpeakeasyBase));
export { GetShows200ApplicationJson };
var GetShowsRequest = /** @class */ (function (_super) {
    __extends(GetShowsRequest, _super);
    function GetShowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShowsQueryParams)
    ], GetShowsRequest.prototype, "queryParams", void 0);
    return GetShowsRequest;
}(SpeakeasyBase));
export { GetShowsRequest };
var GetShowsResponse = /** @class */ (function (_super) {
    __extends(GetShowsResponse, _super);
    function GetShowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetShowsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetShowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetShowsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShows200ApplicationJson)
    ], GetShowsResponse.prototype, "getShows200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetShowsResponse.prototype, "statusCode", void 0);
    return GetShowsResponse;
}(SpeakeasyBase));
export { GetShowsResponse };
