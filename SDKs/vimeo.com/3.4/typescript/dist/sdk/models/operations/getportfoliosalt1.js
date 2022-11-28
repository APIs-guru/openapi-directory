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
export var GetPortfoliosAlt1DirectionEnum;
(function (GetPortfoliosAlt1DirectionEnum) {
    GetPortfoliosAlt1DirectionEnum["Asc"] = "asc";
    GetPortfoliosAlt1DirectionEnum["Desc"] = "desc";
})(GetPortfoliosAlt1DirectionEnum || (GetPortfoliosAlt1DirectionEnum = {}));
export var GetPortfoliosAlt1SortEnum;
(function (GetPortfoliosAlt1SortEnum) {
    GetPortfoliosAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetPortfoliosAlt1SortEnum["Date"] = "date";
})(GetPortfoliosAlt1SortEnum || (GetPortfoliosAlt1SortEnum = {}));
var GetPortfoliosAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetPortfoliosAlt1QueryParams, _super);
    function GetPortfoliosAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetPortfoliosAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPortfoliosAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetPortfoliosAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetPortfoliosAlt1QueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPortfoliosAlt1QueryParams.prototype, "sort", void 0);
    return GetPortfoliosAlt1QueryParams;
}(SpeakeasyBase));
export { GetPortfoliosAlt1QueryParams };
var GetPortfoliosAlt1Request = /** @class */ (function (_super) {
    __extends(GetPortfoliosAlt1Request, _super);
    function GetPortfoliosAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfoliosAlt1QueryParams)
    ], GetPortfoliosAlt1Request.prototype, "queryParams", void 0);
    return GetPortfoliosAlt1Request;
}(SpeakeasyBase));
export { GetPortfoliosAlt1Request };
var GetPortfoliosAlt1Response = /** @class */ (function (_super) {
    __extends(GetPortfoliosAlt1Response, _super);
    function GetPortfoliosAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPortfoliosAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPortfoliosAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Portfolio }),
        __metadata("design:type", Array)
    ], GetPortfoliosAlt1Response.prototype, "portfolios", void 0);
    return GetPortfoliosAlt1Response;
}(SpeakeasyBase));
export { GetPortfoliosAlt1Response };
