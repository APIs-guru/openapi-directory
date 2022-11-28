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
var GetTransactionAccountsIdTransactionsPathParams = /** @class */ (function (_super) {
    __extends(GetTransactionAccountsIdTransactionsPathParams, _super);
    function GetTransactionAccountsIdTransactionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetTransactionAccountsIdTransactionsPathParams.prototype, "id", void 0);
    return GetTransactionAccountsIdTransactionsPathParams;
}(SpeakeasyBase));
export { GetTransactionAccountsIdTransactionsPathParams };
export var GetTransactionAccountsIdTransactionsTypeEnum;
(function (GetTransactionAccountsIdTransactionsTypeEnum) {
    GetTransactionAccountsIdTransactionsTypeEnum["Debit"] = "debit";
    GetTransactionAccountsIdTransactionsTypeEnum["Credit"] = "credit";
})(GetTransactionAccountsIdTransactionsTypeEnum || (GetTransactionAccountsIdTransactionsTypeEnum = {}));
var GetTransactionAccountsIdTransactionsQueryParams = /** @class */ (function (_super) {
    __extends(GetTransactionAccountsIdTransactionsQueryParams, _super);
    function GetTransactionAccountsIdTransactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], GetTransactionAccountsIdTransactionsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=only_uncategorised" }),
        __metadata("design:type", Number)
    ], GetTransactionAccountsIdTransactionsQueryParams.prototype, "onlyUncategorised", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTransactionAccountsIdTransactionsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetTransactionAccountsIdTransactionsQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], GetTransactionAccountsIdTransactionsQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetTransactionAccountsIdTransactionsQueryParams.prototype, "type", void 0);
    return GetTransactionAccountsIdTransactionsQueryParams;
}(SpeakeasyBase));
export { GetTransactionAccountsIdTransactionsQueryParams };
var GetTransactionAccountsIdTransactionsRequest = /** @class */ (function (_super) {
    __extends(GetTransactionAccountsIdTransactionsRequest, _super);
    function GetTransactionAccountsIdTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionAccountsIdTransactionsPathParams)
    ], GetTransactionAccountsIdTransactionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionAccountsIdTransactionsQueryParams)
    ], GetTransactionAccountsIdTransactionsRequest.prototype, "queryParams", void 0);
    return GetTransactionAccountsIdTransactionsRequest;
}(SpeakeasyBase));
export { GetTransactionAccountsIdTransactionsRequest };
var GetTransactionAccountsIdTransactionsResponse = /** @class */ (function (_super) {
    __extends(GetTransactionAccountsIdTransactionsResponse, _super);
    function GetTransactionAccountsIdTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTransactionAccountsIdTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetTransactionAccountsIdTransactionsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTransactionAccountsIdTransactionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Transaction }),
        __metadata("design:type", Array)
    ], GetTransactionAccountsIdTransactionsResponse.prototype, "transactions", void 0);
    return GetTransactionAccountsIdTransactionsResponse;
}(SpeakeasyBase));
export { GetTransactionAccountsIdTransactionsResponse };
