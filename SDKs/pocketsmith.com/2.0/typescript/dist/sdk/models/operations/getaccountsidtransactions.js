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
var GetAccountsIdTransactionsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsIdTransactionsPathParams, _super);
    function GetAccountsIdTransactionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetAccountsIdTransactionsPathParams.prototype, "id", void 0);
    return GetAccountsIdTransactionsPathParams;
}(SpeakeasyBase));
export { GetAccountsIdTransactionsPathParams };
export var GetAccountsIdTransactionsTypeEnum;
(function (GetAccountsIdTransactionsTypeEnum) {
    GetAccountsIdTransactionsTypeEnum["Debit"] = "debit";
    GetAccountsIdTransactionsTypeEnum["Credit"] = "credit";
})(GetAccountsIdTransactionsTypeEnum || (GetAccountsIdTransactionsTypeEnum = {}));
var GetAccountsIdTransactionsQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountsIdTransactionsQueryParams, _super);
    function GetAccountsIdTransactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], GetAccountsIdTransactionsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=only_uncategorised" }),
        __metadata("design:type", Number)
    ], GetAccountsIdTransactionsQueryParams.prototype, "onlyUncategorised", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAccountsIdTransactionsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetAccountsIdTransactionsQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], GetAccountsIdTransactionsQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetAccountsIdTransactionsQueryParams.prototype, "type", void 0);
    return GetAccountsIdTransactionsQueryParams;
}(SpeakeasyBase));
export { GetAccountsIdTransactionsQueryParams };
var GetAccountsIdTransactionsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsIdTransactionsRequest, _super);
    function GetAccountsIdTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsIdTransactionsPathParams)
    ], GetAccountsIdTransactionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsIdTransactionsQueryParams)
    ], GetAccountsIdTransactionsRequest.prototype, "queryParams", void 0);
    return GetAccountsIdTransactionsRequest;
}(SpeakeasyBase));
export { GetAccountsIdTransactionsRequest };
var GetAccountsIdTransactionsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsIdTransactionsResponse, _super);
    function GetAccountsIdTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsIdTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetAccountsIdTransactionsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsIdTransactionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Transaction }),
        __metadata("design:type", Array)
    ], GetAccountsIdTransactionsResponse.prototype, "transactions", void 0);
    return GetAccountsIdTransactionsResponse;
}(SpeakeasyBase));
export { GetAccountsIdTransactionsResponse };
