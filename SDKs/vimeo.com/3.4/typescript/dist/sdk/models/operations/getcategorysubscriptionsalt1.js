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
export var GetCategorySubscriptionsAlt1DirectionEnum;
(function (GetCategorySubscriptionsAlt1DirectionEnum) {
    GetCategorySubscriptionsAlt1DirectionEnum["Asc"] = "asc";
    GetCategorySubscriptionsAlt1DirectionEnum["Desc"] = "desc";
})(GetCategorySubscriptionsAlt1DirectionEnum || (GetCategorySubscriptionsAlt1DirectionEnum = {}));
export var GetCategorySubscriptionsAlt1SortEnum;
(function (GetCategorySubscriptionsAlt1SortEnum) {
    GetCategorySubscriptionsAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetCategorySubscriptionsAlt1SortEnum["Date"] = "date";
    GetCategorySubscriptionsAlt1SortEnum["Name"] = "name";
})(GetCategorySubscriptionsAlt1SortEnum || (GetCategorySubscriptionsAlt1SortEnum = {}));
var GetCategorySubscriptionsAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetCategorySubscriptionsAlt1QueryParams, _super);
    function GetCategorySubscriptionsAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetCategorySubscriptionsAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCategorySubscriptionsAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCategorySubscriptionsAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCategorySubscriptionsAlt1QueryParams.prototype, "sort", void 0);
    return GetCategorySubscriptionsAlt1QueryParams;
}(SpeakeasyBase));
export { GetCategorySubscriptionsAlt1QueryParams };
var GetCategorySubscriptionsAlt1Security = /** @class */ (function (_super) {
    __extends(GetCategorySubscriptionsAlt1Security, _super);
    function GetCategorySubscriptionsAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetCategorySubscriptionsAlt1Security.prototype, "oauth2", void 0);
    return GetCategorySubscriptionsAlt1Security;
}(SpeakeasyBase));
export { GetCategorySubscriptionsAlt1Security };
var GetCategorySubscriptionsAlt1Request = /** @class */ (function (_super) {
    __extends(GetCategorySubscriptionsAlt1Request, _super);
    function GetCategorySubscriptionsAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCategorySubscriptionsAlt1QueryParams)
    ], GetCategorySubscriptionsAlt1Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCategorySubscriptionsAlt1Security)
    ], GetCategorySubscriptionsAlt1Request.prototype, "security", void 0);
    return GetCategorySubscriptionsAlt1Request;
}(SpeakeasyBase));
export { GetCategorySubscriptionsAlt1Request };
var GetCategorySubscriptionsAlt1Response = /** @class */ (function (_super) {
    __extends(GetCategorySubscriptionsAlt1Response, _super);
    function GetCategorySubscriptionsAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCategorySubscriptionsAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCategorySubscriptionsAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Category }),
        __metadata("design:type", Array)
    ], GetCategorySubscriptionsAlt1Response.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetCategorySubscriptionsAlt1Response.prototype, "error", void 0);
    return GetCategorySubscriptionsAlt1Response;
}(SpeakeasyBase));
export { GetCategorySubscriptionsAlt1Response };
