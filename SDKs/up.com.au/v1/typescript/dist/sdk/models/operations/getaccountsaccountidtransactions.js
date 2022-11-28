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
var GetAccountsAccountIdTransactionsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdTransactionsPathParams, _super);
    function GetAccountsAccountIdTransactionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdTransactionsPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdTransactionsPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdTransactionsPathParams };
var GetAccountsAccountIdTransactionsQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdTransactionsQueryParams, _super);
    function GetAccountsAccountIdTransactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[category]" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdTransactionsQueryParams.prototype, "filterCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[since]" }),
        __metadata("design:type", Date)
    ], GetAccountsAccountIdTransactionsQueryParams.prototype, "filterSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[status]" }),
        __metadata("design:type", Object)
    ], GetAccountsAccountIdTransactionsQueryParams.prototype, "filterStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[tag]" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdTransactionsQueryParams.prototype, "filterTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[until]" }),
        __metadata("design:type", Date)
    ], GetAccountsAccountIdTransactionsQueryParams.prototype, "filterUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdTransactionsQueryParams.prototype, "pageSize", void 0);
    return GetAccountsAccountIdTransactionsQueryParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdTransactionsQueryParams };
var GetAccountsAccountIdTransactionsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdTransactionsRequest, _super);
    function GetAccountsAccountIdTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdTransactionsPathParams)
    ], GetAccountsAccountIdTransactionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountIdTransactionsQueryParams)
    ], GetAccountsAccountIdTransactionsRequest.prototype, "queryParams", void 0);
    return GetAccountsAccountIdTransactionsRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdTransactionsRequest };
var GetAccountsAccountIdTransactionsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdTransactionsResponse, _super);
    function GetAccountsAccountIdTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTransactionsResponse)
    ], GetAccountsAccountIdTransactionsResponse.prototype, "listTransactionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdTransactionsResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdTransactionsResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdTransactionsResponse };
