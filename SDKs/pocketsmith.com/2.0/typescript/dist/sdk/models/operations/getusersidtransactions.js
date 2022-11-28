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
var GetUsersIdTransactionsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdTransactionsPathParams, _super);
    function GetUsersIdTransactionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetUsersIdTransactionsPathParams.prototype, "id", void 0);
    return GetUsersIdTransactionsPathParams;
}(SpeakeasyBase));
export { GetUsersIdTransactionsPathParams };
export var GetUsersIdTransactionsTypeEnum;
(function (GetUsersIdTransactionsTypeEnum) {
    GetUsersIdTransactionsTypeEnum["Debit"] = "debit";
    GetUsersIdTransactionsTypeEnum["Credit"] = "credit";
})(GetUsersIdTransactionsTypeEnum || (GetUsersIdTransactionsTypeEnum = {}));
var GetUsersIdTransactionsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdTransactionsQueryParams, _super);
    function GetUsersIdTransactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], GetUsersIdTransactionsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=only_uncategorised" }),
        __metadata("design:type", Number)
    ], GetUsersIdTransactionsQueryParams.prototype, "onlyUncategorised", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdTransactionsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetUsersIdTransactionsQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], GetUsersIdTransactionsQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetUsersIdTransactionsQueryParams.prototype, "type", void 0);
    return GetUsersIdTransactionsQueryParams;
}(SpeakeasyBase));
export { GetUsersIdTransactionsQueryParams };
var GetUsersIdTransactionsRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdTransactionsRequest, _super);
    function GetUsersIdTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdTransactionsPathParams)
    ], GetUsersIdTransactionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdTransactionsQueryParams)
    ], GetUsersIdTransactionsRequest.prototype, "queryParams", void 0);
    return GetUsersIdTransactionsRequest;
}(SpeakeasyBase));
export { GetUsersIdTransactionsRequest };
var GetUsersIdTransactionsResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdTransactionsResponse, _super);
    function GetUsersIdTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetUsersIdTransactionsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdTransactionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Transaction }),
        __metadata("design:type", Array)
    ], GetUsersIdTransactionsResponse.prototype, "transactions", void 0);
    return GetUsersIdTransactionsResponse;
}(SpeakeasyBase));
export { GetUsersIdTransactionsResponse };
