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
var GetSpinsQueryParams = /** @class */ (function (_super) {
    __extends(GetSpinsQueryParams, _super);
    function GetSpinsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetSpinsQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Date)
    ], GetSpinsQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], GetSpinsQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetSpinsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSpinsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playlist_id" }),
        __metadata("design:type", Number)
    ], GetSpinsQueryParams.prototype, "playlistId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_id" }),
        __metadata("design:type", Number)
    ], GetSpinsQueryParams.prototype, "showId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Date)
    ], GetSpinsQueryParams.prototype, "start", void 0);
    return GetSpinsQueryParams;
}(SpeakeasyBase));
export { GetSpinsQueryParams };
var GetSpins200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(GetSpins200ApplicationJsonLinks, _super);
    function GetSpins200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", shared.Link)
    ], GetSpins200ApplicationJsonLinks.prototype, "self", void 0);
    return GetSpins200ApplicationJsonLinks;
}(SpeakeasyBase));
export { GetSpins200ApplicationJsonLinks };
var GetSpins200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSpins200ApplicationJson, _super);
    function GetSpins200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", GetSpins200ApplicationJsonLinks)
    ], GetSpins200ApplicationJson.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_meta" }),
        __metadata("design:type", shared.Pagination)
    ], GetSpins200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.Spin }),
        __metadata("design:type", Array)
    ], GetSpins200ApplicationJson.prototype, "items", void 0);
    return GetSpins200ApplicationJson;
}(SpeakeasyBase));
export { GetSpins200ApplicationJson };
var GetSpinsRequest = /** @class */ (function (_super) {
    __extends(GetSpinsRequest, _super);
    function GetSpinsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpinsQueryParams)
    ], GetSpinsRequest.prototype, "queryParams", void 0);
    return GetSpinsRequest;
}(SpeakeasyBase));
export { GetSpinsRequest };
var GetSpinsResponse = /** @class */ (function (_super) {
    __extends(GetSpinsResponse, _super);
    function GetSpinsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSpinsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSpinsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpins200ApplicationJson)
    ], GetSpinsResponse.prototype, "getSpins200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSpinsResponse.prototype, "statusCode", void 0);
    return GetSpinsResponse;
}(SpeakeasyBase));
export { GetSpinsResponse };
