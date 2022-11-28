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
var GetPaymentsForPayoutV3PathParams = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutV3PathParams, _super);
    function GetPaymentsForPayoutV3PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payoutId" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV3PathParams.prototype, "payoutId", void 0);
    return GetPaymentsForPayoutV3PathParams;
}(SpeakeasyBase));
export { GetPaymentsForPayoutV3PathParams };
export var GetPaymentsForPayoutV3StatusEnum;
(function (GetPaymentsForPayoutV3StatusEnum) {
    GetPaymentsForPayoutV3StatusEnum["Accepted"] = "ACCEPTED";
    GetPaymentsForPayoutV3StatusEnum["Rejected"] = "REJECTED";
    GetPaymentsForPayoutV3StatusEnum["Withdrawn"] = "WITHDRAWN";
    GetPaymentsForPayoutV3StatusEnum["Withdrawable"] = "WITHDRAWABLE";
})(GetPaymentsForPayoutV3StatusEnum || (GetPaymentsForPayoutV3StatusEnum = {}));
export var GetPaymentsForPayoutV3TransmissionTypeEnum;
(function (GetPaymentsForPayoutV3TransmissionTypeEnum) {
    GetPaymentsForPayoutV3TransmissionTypeEnum["Ach"] = "ACH";
    GetPaymentsForPayoutV3TransmissionTypeEnum["SameDayAch"] = "SAME_DAY_ACH";
    GetPaymentsForPayoutV3TransmissionTypeEnum["Wire"] = "WIRE";
})(GetPaymentsForPayoutV3TransmissionTypeEnum || (GetPaymentsForPayoutV3TransmissionTypeEnum = {}));
var GetPaymentsForPayoutV3QueryParams = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutV3QueryParams, _super);
    function GetPaymentsForPayoutV3QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutV3QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutV3QueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentMemo" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV3QueryParams.prototype, "paymentMemo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorPaymentId" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV3QueryParams.prototype, "payorPaymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remoteId" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV3QueryParams.prototype, "remoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceAccountName" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV3QueryParams.prototype, "sourceAccountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV3QueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmissionType" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV3QueryParams.prototype, "transmissionType", void 0);
    return GetPaymentsForPayoutV3QueryParams;
}(SpeakeasyBase));
export { GetPaymentsForPayoutV3QueryParams };
var GetPaymentsForPayoutV3Request = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutV3Request, _super);
    function GetPaymentsForPayoutV3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentsForPayoutV3PathParams)
    ], GetPaymentsForPayoutV3Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentsForPayoutV3QueryParams)
    ], GetPaymentsForPayoutV3Request.prototype, "queryParams", void 0);
    return GetPaymentsForPayoutV3Request;
}(SpeakeasyBase));
export { GetPaymentsForPayoutV3Request };
var GetPaymentsForPayoutV3Response = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutV3Response, _super);
    function GetPaymentsForPayoutV3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV3Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PagedPaymentsResponseV3)
    ], GetPaymentsForPayoutV3Response.prototype, "pagedPaymentsResponseV3", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutV3Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPaymentsForPayoutV3Response.prototype, "inlineResponse404", void 0);
    return GetPaymentsForPayoutV3Response;
}(SpeakeasyBase));
export { GetPaymentsForPayoutV3Response };
