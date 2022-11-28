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
export var GetFollowersAlt1DirectionEnum;
(function (GetFollowersAlt1DirectionEnum) {
    GetFollowersAlt1DirectionEnum["Asc"] = "asc";
    GetFollowersAlt1DirectionEnum["Desc"] = "desc";
})(GetFollowersAlt1DirectionEnum || (GetFollowersAlt1DirectionEnum = {}));
export var GetFollowersAlt1SortEnum;
(function (GetFollowersAlt1SortEnum) {
    GetFollowersAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetFollowersAlt1SortEnum["Date"] = "date";
})(GetFollowersAlt1SortEnum || (GetFollowersAlt1SortEnum = {}));
var GetFollowersAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetFollowersAlt1QueryParams, _super);
    function GetFollowersAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetFollowersAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFollowersAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetFollowersAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetFollowersAlt1QueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetFollowersAlt1QueryParams.prototype, "sort", void 0);
    return GetFollowersAlt1QueryParams;
}(SpeakeasyBase));
export { GetFollowersAlt1QueryParams };
var GetFollowersAlt1Request = /** @class */ (function (_super) {
    __extends(GetFollowersAlt1Request, _super);
    function GetFollowersAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFollowersAlt1QueryParams)
    ], GetFollowersAlt1Request.prototype, "queryParams", void 0);
    return GetFollowersAlt1Request;
}(SpeakeasyBase));
export { GetFollowersAlt1Request };
var GetFollowersAlt1Response = /** @class */ (function (_super) {
    __extends(GetFollowersAlt1Response, _super);
    function GetFollowersAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFollowersAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFollowersAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetFollowersAlt1Response.prototype, "users", void 0);
    return GetFollowersAlt1Response;
}(SpeakeasyBase));
export { GetFollowersAlt1Response };
