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
export var ListPaymentsAuditV4StatusEnum;
(function (ListPaymentsAuditV4StatusEnum) {
    ListPaymentsAuditV4StatusEnum["Accepted"] = "ACCEPTED";
    ListPaymentsAuditV4StatusEnum["AwaitingFunds"] = "AWAITING_FUNDS";
    ListPaymentsAuditV4StatusEnum["Funded"] = "FUNDED";
    ListPaymentsAuditV4StatusEnum["Unfunded"] = "UNFUNDED";
    ListPaymentsAuditV4StatusEnum["BankPaymentRequested"] = "BANK_PAYMENT_REQUESTED";
    ListPaymentsAuditV4StatusEnum["Rejected"] = "REJECTED";
    ListPaymentsAuditV4StatusEnum["AcceptedByRails"] = "ACCEPTED_BY_RAILS";
    ListPaymentsAuditV4StatusEnum["Confirmed"] = "CONFIRMED";
    ListPaymentsAuditV4StatusEnum["Failed"] = "FAILED";
    ListPaymentsAuditV4StatusEnum["Returned"] = "RETURNED";
    ListPaymentsAuditV4StatusEnum["Withdrawn"] = "WITHDRAWN";
})(ListPaymentsAuditV4StatusEnum || (ListPaymentsAuditV4StatusEnum = {}));
export var ListPaymentsAuditV4TransmissionTypeEnum;
(function (ListPaymentsAuditV4TransmissionTypeEnum) {
    ListPaymentsAuditV4TransmissionTypeEnum["Ach"] = "ACH";
    ListPaymentsAuditV4TransmissionTypeEnum["SameDayAch"] = "SAME_DAY_ACH";
    ListPaymentsAuditV4TransmissionTypeEnum["Wire"] = "WIRE";
})(ListPaymentsAuditV4TransmissionTypeEnum || (ListPaymentsAuditV4TransmissionTypeEnum = {}));
var ListPaymentsAuditV4QueryParams = /** @class */ (function (_super) {
    __extends(ListPaymentsAuditV4QueryParams, _super);
    function ListPaymentsAuditV4QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV4QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV4QueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payeeId" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "payeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentAmountFrom" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV4QueryParams.prototype, "paymentAmountFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentAmountTo" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV4QueryParams.prototype, "paymentAmountTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentCurrency" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "paymentCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentMemo" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "paymentMemo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorName" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "payorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remoteId" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "remoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remoteSystemId" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "remoteSystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" }),
        __metadata("design:type", Boolean)
    ], ListPaymentsAuditV4QueryParams.prototype, "sensitive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceAccountName" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "sourceAccountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceAmountFrom" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV4QueryParams.prototype, "sourceAmountFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceAmountTo" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV4QueryParams.prototype, "sourceAmountTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceCurrency" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "sourceCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" }),
        __metadata("design:type", Date)
    ], ListPaymentsAuditV4QueryParams.prototype, "submittedDateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateTo" }),
        __metadata("design:type", Date)
    ], ListPaymentsAuditV4QueryParams.prototype, "submittedDateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmissionType" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4QueryParams.prototype, "transmissionType", void 0);
    return ListPaymentsAuditV4QueryParams;
}(SpeakeasyBase));
export { ListPaymentsAuditV4QueryParams };
var ListPaymentsAuditV4Request = /** @class */ (function (_super) {
    __extends(ListPaymentsAuditV4Request, _super);
    function ListPaymentsAuditV4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPaymentsAuditV4QueryParams)
    ], ListPaymentsAuditV4Request.prototype, "queryParams", void 0);
    return ListPaymentsAuditV4Request;
}(SpeakeasyBase));
export { ListPaymentsAuditV4Request };
var ListPaymentsAuditV4Response = /** @class */ (function (_super) {
    __extends(ListPaymentsAuditV4Response, _super);
    function ListPaymentsAuditV4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPaymentsAuditV4Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPaymentsResponseV4)
    ], ListPaymentsAuditV4Response.prototype, "listPaymentsResponseV4", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV4Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPaymentsAuditV4Response.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPaymentsAuditV4Response.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPaymentsAuditV4Response.prototype, "inlineResponse403", void 0);
    return ListPaymentsAuditV4Response;
}(SpeakeasyBase));
export { ListPaymentsAuditV4Response };
