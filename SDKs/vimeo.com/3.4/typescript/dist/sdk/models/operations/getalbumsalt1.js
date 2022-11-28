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
export var GetAlbumsAlt1DirectionEnum;
(function (GetAlbumsAlt1DirectionEnum) {
    GetAlbumsAlt1DirectionEnum["Asc"] = "asc";
    GetAlbumsAlt1DirectionEnum["Desc"] = "desc";
})(GetAlbumsAlt1DirectionEnum || (GetAlbumsAlt1DirectionEnum = {}));
export var GetAlbumsAlt1SortEnum;
(function (GetAlbumsAlt1SortEnum) {
    GetAlbumsAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetAlbumsAlt1SortEnum["Date"] = "date";
    GetAlbumsAlt1SortEnum["Duration"] = "duration";
    GetAlbumsAlt1SortEnum["Videos"] = "videos";
})(GetAlbumsAlt1SortEnum || (GetAlbumsAlt1SortEnum = {}));
var GetAlbumsAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetAlbumsAlt1QueryParams, _super);
    function GetAlbumsAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetAlbumsAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAlbumsAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetAlbumsAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetAlbumsAlt1QueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAlbumsAlt1QueryParams.prototype, "sort", void 0);
    return GetAlbumsAlt1QueryParams;
}(SpeakeasyBase));
export { GetAlbumsAlt1QueryParams };
var GetAlbumsAlt1Request = /** @class */ (function (_super) {
    __extends(GetAlbumsAlt1Request, _super);
    function GetAlbumsAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlbumsAlt1QueryParams)
    ], GetAlbumsAlt1Request.prototype, "queryParams", void 0);
    return GetAlbumsAlt1Request;
}(SpeakeasyBase));
export { GetAlbumsAlt1Request };
var GetAlbumsAlt1Response = /** @class */ (function (_super) {
    __extends(GetAlbumsAlt1Response, _super);
    function GetAlbumsAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAlbumsAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAlbumsAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Album }),
        __metadata("design:type", Array)
    ], GetAlbumsAlt1Response.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetAlbumsAlt1Response.prototype, "legacyError", void 0);
    return GetAlbumsAlt1Response;
}(SpeakeasyBase));
export { GetAlbumsAlt1Response };
