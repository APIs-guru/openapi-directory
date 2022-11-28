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
import { Category } from "./category";
import { TransactionAccount } from "./transactionaccount";
export var TransactionStatusEnum;
(function (TransactionStatusEnum) {
    TransactionStatusEnum["Pending"] = "pending";
    TransactionStatusEnum["Posted"] = "posted";
})(TransactionStatusEnum || (TransactionStatusEnum = {}));
export var TransactionTypeEnum;
(function (TransactionTypeEnum) {
    TransactionTypeEnum["Debit"] = "debit";
    TransactionTypeEnum["Credit"] = "credit";
})(TransactionTypeEnum || (TransactionTypeEnum = {}));
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], Transaction.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", Category)
    ], Transaction.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cheque_number" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "chequeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closing_balance" }),
        __metadata("design:type", Number)
    ], Transaction.prototype, "closingBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Transaction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_transfer" }),
        __metadata("design:type", Boolean)
    ], Transaction.prototype, "isTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], Transaction.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "memo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_payee" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "originalPayee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "payee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_account" }),
        __metadata("design:type", TransactionAccount)
    ], Transaction.prototype, "transactionAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload_source" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "uploadSource", void 0);
    return Transaction;
}(SpeakeasyBase));
export { Transaction };
