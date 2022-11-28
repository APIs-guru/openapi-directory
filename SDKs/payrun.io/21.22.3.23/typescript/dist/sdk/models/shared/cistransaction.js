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
export var CisTransactionCisTransactionCisMessageTypeEnum;
(function (CisTransactionCisTransactionCisMessageTypeEnum) {
    CisTransactionCisTransactionCisMessageTypeEnum["Verification"] = "Verification";
    CisTransactionCisTransactionCisMessageTypeEnum["Return"] = "Return";
})(CisTransactionCisTransactionCisMessageTypeEnum || (CisTransactionCisTransactionCisMessageTypeEnum = {}));
// CisTransactionCisTransactionEmployerCore
/**
 * The cis transactions' employer core
**/
var CisTransactionCisTransactionEmployerCore = /** @class */ (function (_super) {
    __extends(CisTransactionCisTransactionEmployerCore, _super);
    function CisTransactionCisTransactionEmployerCore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], CisTransactionCisTransactionEmployerCore.prototype, "atHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], CisTransactionCisTransactionEmployerCore.prototype, "atRel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], CisTransactionCisTransactionEmployerCore.prototype, "atTitle", void 0);
    return CisTransactionCisTransactionEmployerCore;
}(SpeakeasyBase));
export { CisTransactionCisTransactionEmployerCore };
export var CisTransactionCisTransactionTransactionStatusEnum;
(function (CisTransactionCisTransactionTransactionStatusEnum) {
    CisTransactionCisTransactionTransactionStatusEnum["New"] = "New";
    CisTransactionCisTransactionTransactionStatusEnum["RequestGenerated"] = "RequestGenerated";
    CisTransactionCisTransactionTransactionStatusEnum["CompletedWithError"] = "CompletedWithError";
    CisTransactionCisTransactionTransactionStatusEnum["CompletedWithSuccess"] = "CompletedWithSuccess";
    CisTransactionCisTransactionTransactionStatusEnum["TimeOut"] = "TimeOut";
})(CisTransactionCisTransactionTransactionStatusEnum || (CisTransactionCisTransactionTransactionStatusEnum = {}));
var CisTransactionCisTransaction = /** @class */ (function (_super) {
    __extends(CisTransactionCisTransaction, _super);
    function CisTransactionCisTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CisMessageType" }),
        __metadata("design:type", String)
    ], CisTransactionCisTransaction.prototype, "cisMessageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployerCore" }),
        __metadata("design:type", CisTransactionCisTransactionEmployerCore)
    ], CisTransactionCisTransaction.prototype, "employerCore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestData" }),
        __metadata("design:type", String)
    ], CisTransactionCisTransaction.prototype, "requestData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResponseData" }),
        __metadata("design:type", String)
    ], CisTransactionCisTransaction.prototype, "responseData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxYear" }),
        __metadata("design:type", Number)
    ], CisTransactionCisTransaction.prototype, "taxYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timestamp" }),
        __metadata("design:type", Date)
    ], CisTransactionCisTransaction.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransactionStatus" }),
        __metadata("design:type", String)
    ], CisTransactionCisTransaction.prototype, "transactionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransmissionDate" }),
        __metadata("design:type", Date)
    ], CisTransactionCisTransaction.prototype, "transmissionDate", void 0);
    return CisTransactionCisTransaction;
}(SpeakeasyBase));
export { CisTransactionCisTransaction };
var CisTransaction = /** @class */ (function (_super) {
    __extends(CisTransaction, _super);
    function CisTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CisTransaction" }),
        __metadata("design:type", CisTransactionCisTransaction)
    ], CisTransaction.prototype, "cisTransaction", void 0);
    return CisTransaction;
}(SpeakeasyBase));
export { CisTransaction };
