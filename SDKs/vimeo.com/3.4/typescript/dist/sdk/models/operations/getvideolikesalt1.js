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
var GetVideoLikesAlt1PathParams = /** @class */ (function (_super) {
    __extends(GetVideoLikesAlt1PathParams, _super);
    function GetVideoLikesAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], GetVideoLikesAlt1PathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], GetVideoLikesAlt1PathParams.prototype, "videoId", void 0);
    return GetVideoLikesAlt1PathParams;
}(SpeakeasyBase));
export { GetVideoLikesAlt1PathParams };
export var GetVideoLikesAlt1DirectionEnum;
(function (GetVideoLikesAlt1DirectionEnum) {
    GetVideoLikesAlt1DirectionEnum["Asc"] = "asc";
    GetVideoLikesAlt1DirectionEnum["Desc"] = "desc";
})(GetVideoLikesAlt1DirectionEnum || (GetVideoLikesAlt1DirectionEnum = {}));
export var GetVideoLikesAlt1SortEnum;
(function (GetVideoLikesAlt1SortEnum) {
    GetVideoLikesAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetVideoLikesAlt1SortEnum["Date"] = "date";
})(GetVideoLikesAlt1SortEnum || (GetVideoLikesAlt1SortEnum = {}));
var GetVideoLikesAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetVideoLikesAlt1QueryParams, _super);
    function GetVideoLikesAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetVideoLikesAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVideoLikesAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVideoLikesAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVideoLikesAlt1QueryParams.prototype, "sort", void 0);
    return GetVideoLikesAlt1QueryParams;
}(SpeakeasyBase));
export { GetVideoLikesAlt1QueryParams };
var GetVideoLikesAlt1Request = /** @class */ (function (_super) {
    __extends(GetVideoLikesAlt1Request, _super);
    function GetVideoLikesAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoLikesAlt1PathParams)
    ], GetVideoLikesAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoLikesAlt1QueryParams)
    ], GetVideoLikesAlt1Request.prototype, "queryParams", void 0);
    return GetVideoLikesAlt1Request;
}(SpeakeasyBase));
export { GetVideoLikesAlt1Request };
var GetVideoLikesAlt1Response = /** @class */ (function (_super) {
    __extends(GetVideoLikesAlt1Response, _super);
    function GetVideoLikesAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideoLikesAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideoLikesAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetVideoLikesAlt1Response.prototype, "users", void 0);
    return GetVideoLikesAlt1Response;
}(SpeakeasyBase));
export { GetVideoLikesAlt1Response };
