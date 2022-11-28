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
var GetPortfoliosPathParams = /** @class */ (function (_super) {
    __extends(GetPortfoliosPathParams, _super);
    function GetPortfoliosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetPortfoliosPathParams.prototype, "userId", void 0);
    return GetPortfoliosPathParams;
}(SpeakeasyBase));
export { GetPortfoliosPathParams };
export var GetPortfoliosDirectionEnum;
(function (GetPortfoliosDirectionEnum) {
    GetPortfoliosDirectionEnum["Asc"] = "asc";
    GetPortfoliosDirectionEnum["Desc"] = "desc";
})(GetPortfoliosDirectionEnum || (GetPortfoliosDirectionEnum = {}));
export var GetPortfoliosSortEnum;
(function (GetPortfoliosSortEnum) {
    GetPortfoliosSortEnum["Alphabetical"] = "alphabetical";
    GetPortfoliosSortEnum["Date"] = "date";
})(GetPortfoliosSortEnum || (GetPortfoliosSortEnum = {}));
var GetPortfoliosQueryParams = /** @class */ (function (_super) {
    __extends(GetPortfoliosQueryParams, _super);
    function GetPortfoliosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetPortfoliosQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPortfoliosQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetPortfoliosQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetPortfoliosQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPortfoliosQueryParams.prototype, "sort", void 0);
    return GetPortfoliosQueryParams;
}(SpeakeasyBase));
export { GetPortfoliosQueryParams };
var GetPortfoliosRequest = /** @class */ (function (_super) {
    __extends(GetPortfoliosRequest, _super);
    function GetPortfoliosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfoliosPathParams)
    ], GetPortfoliosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfoliosQueryParams)
    ], GetPortfoliosRequest.prototype, "queryParams", void 0);
    return GetPortfoliosRequest;
}(SpeakeasyBase));
export { GetPortfoliosRequest };
var GetPortfoliosResponse = /** @class */ (function (_super) {
    __extends(GetPortfoliosResponse, _super);
    function GetPortfoliosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPortfoliosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPortfoliosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Portfolio }),
        __metadata("design:type", Array)
    ], GetPortfoliosResponse.prototype, "portfolios", void 0);
    return GetPortfoliosResponse;
}(SpeakeasyBase));
export { GetPortfoliosResponse };
