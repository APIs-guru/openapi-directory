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
export var GetUserVodsAlt1DirectionEnum;
(function (GetUserVodsAlt1DirectionEnum) {
    GetUserVodsAlt1DirectionEnum["Asc"] = "asc";
    GetUserVodsAlt1DirectionEnum["Desc"] = "desc";
})(GetUserVodsAlt1DirectionEnum || (GetUserVodsAlt1DirectionEnum = {}));
export var GetUserVodsAlt1FilterEnum;
(function (GetUserVodsAlt1FilterEnum) {
    GetUserVodsAlt1FilterEnum["Film"] = "film";
    GetUserVodsAlt1FilterEnum["Series"] = "series";
})(GetUserVodsAlt1FilterEnum || (GetUserVodsAlt1FilterEnum = {}));
export var GetUserVodsAlt1SortEnum;
(function (GetUserVodsAlt1SortEnum) {
    GetUserVodsAlt1SortEnum["Added"] = "added";
    GetUserVodsAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetUserVodsAlt1SortEnum["Date"] = "date";
    GetUserVodsAlt1SortEnum["ModifiedTime"] = "modified_time";
    GetUserVodsAlt1SortEnum["Name"] = "name";
    GetUserVodsAlt1SortEnum["PublishTime"] = "publish.time";
    GetUserVodsAlt1SortEnum["Rating"] = "rating";
})(GetUserVodsAlt1SortEnum || (GetUserVodsAlt1SortEnum = {}));
var GetUserVodsAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetUserVodsAlt1QueryParams, _super);
    function GetUserVodsAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetUserVodsAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUserVodsAlt1QueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUserVodsAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetUserVodsAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUserVodsAlt1QueryParams.prototype, "sort", void 0);
    return GetUserVodsAlt1QueryParams;
}(SpeakeasyBase));
export { GetUserVodsAlt1QueryParams };
var GetUserVodsAlt1Request = /** @class */ (function (_super) {
    __extends(GetUserVodsAlt1Request, _super);
    function GetUserVodsAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserVodsAlt1QueryParams)
    ], GetUserVodsAlt1Request.prototype, "queryParams", void 0);
    return GetUserVodsAlt1Request;
}(SpeakeasyBase));
export { GetUserVodsAlt1Request };
var GetUserVodsAlt1Response = /** @class */ (function (_super) {
    __extends(GetUserVodsAlt1Response, _super);
    function GetUserVodsAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserVodsAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserVodsAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetUserVodsAlt1Response.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OnDemandPage }),
        __metadata("design:type", Array)
    ], GetUserVodsAlt1Response.prototype, "onDemandPages", void 0);
    return GetUserVodsAlt1Response;
}(SpeakeasyBase));
export { GetUserVodsAlt1Response };
