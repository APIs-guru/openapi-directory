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
var GetAlbumsPathParams = /** @class */ (function (_super) {
    __extends(GetAlbumsPathParams, _super);
    function GetAlbumsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetAlbumsPathParams.prototype, "userId", void 0);
    return GetAlbumsPathParams;
}(SpeakeasyBase));
export { GetAlbumsPathParams };
export var GetAlbumsDirectionEnum;
(function (GetAlbumsDirectionEnum) {
    GetAlbumsDirectionEnum["Asc"] = "asc";
    GetAlbumsDirectionEnum["Desc"] = "desc";
})(GetAlbumsDirectionEnum || (GetAlbumsDirectionEnum = {}));
export var GetAlbumsSortEnum;
(function (GetAlbumsSortEnum) {
    GetAlbumsSortEnum["Alphabetical"] = "alphabetical";
    GetAlbumsSortEnum["Date"] = "date";
    GetAlbumsSortEnum["Duration"] = "duration";
    GetAlbumsSortEnum["Videos"] = "videos";
})(GetAlbumsSortEnum || (GetAlbumsSortEnum = {}));
var GetAlbumsQueryParams = /** @class */ (function (_super) {
    __extends(GetAlbumsQueryParams, _super);
    function GetAlbumsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetAlbumsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAlbumsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetAlbumsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetAlbumsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAlbumsQueryParams.prototype, "sort", void 0);
    return GetAlbumsQueryParams;
}(SpeakeasyBase));
export { GetAlbumsQueryParams };
var GetAlbumsRequest = /** @class */ (function (_super) {
    __extends(GetAlbumsRequest, _super);
    function GetAlbumsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlbumsPathParams)
    ], GetAlbumsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlbumsQueryParams)
    ], GetAlbumsRequest.prototype, "queryParams", void 0);
    return GetAlbumsRequest;
}(SpeakeasyBase));
export { GetAlbumsRequest };
var GetAlbumsResponse = /** @class */ (function (_super) {
    __extends(GetAlbumsResponse, _super);
    function GetAlbumsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAlbumsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAlbumsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Album }),
        __metadata("design:type", Array)
    ], GetAlbumsResponse.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetAlbumsResponse.prototype, "legacyError", void 0);
    return GetAlbumsResponse;
}(SpeakeasyBase));
export { GetAlbumsResponse };
