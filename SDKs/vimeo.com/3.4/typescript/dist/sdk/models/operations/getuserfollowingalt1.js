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
export var GetUserFollowingAlt1DirectionEnum;
(function (GetUserFollowingAlt1DirectionEnum) {
    GetUserFollowingAlt1DirectionEnum["Asc"] = "asc";
    GetUserFollowingAlt1DirectionEnum["Desc"] = "desc";
})(GetUserFollowingAlt1DirectionEnum || (GetUserFollowingAlt1DirectionEnum = {}));
export var GetUserFollowingAlt1FilterEnum;
(function (GetUserFollowingAlt1FilterEnum) {
    GetUserFollowingAlt1FilterEnum["Online"] = "online";
})(GetUserFollowingAlt1FilterEnum || (GetUserFollowingAlt1FilterEnum = {}));
export var GetUserFollowingAlt1SortEnum;
(function (GetUserFollowingAlt1SortEnum) {
    GetUserFollowingAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetUserFollowingAlt1SortEnum["Date"] = "date";
})(GetUserFollowingAlt1SortEnum || (GetUserFollowingAlt1SortEnum = {}));
var GetUserFollowingAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetUserFollowingAlt1QueryParams, _super);
    function GetUserFollowingAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetUserFollowingAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUserFollowingAlt1QueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUserFollowingAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetUserFollowingAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetUserFollowingAlt1QueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUserFollowingAlt1QueryParams.prototype, "sort", void 0);
    return GetUserFollowingAlt1QueryParams;
}(SpeakeasyBase));
export { GetUserFollowingAlt1QueryParams };
var GetUserFollowingAlt1Request = /** @class */ (function (_super) {
    __extends(GetUserFollowingAlt1Request, _super);
    function GetUserFollowingAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserFollowingAlt1QueryParams)
    ], GetUserFollowingAlt1Request.prototype, "queryParams", void 0);
    return GetUserFollowingAlt1Request;
}(SpeakeasyBase));
export { GetUserFollowingAlt1Request };
var GetUserFollowingAlt1Response = /** @class */ (function (_super) {
    __extends(GetUserFollowingAlt1Response, _super);
    function GetUserFollowingAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserFollowingAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserFollowingAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetUserFollowingAlt1Response.prototype, "users", void 0);
    return GetUserFollowingAlt1Response;
}(SpeakeasyBase));
export { GetUserFollowingAlt1Response };
