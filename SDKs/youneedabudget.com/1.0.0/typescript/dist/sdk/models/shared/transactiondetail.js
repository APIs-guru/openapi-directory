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
import { SubTransaction } from "./subtransaction";
export var TransactionDetailClearedEnum;
(function (TransactionDetailClearedEnum) {
    TransactionDetailClearedEnum["Cleared"] = "cleared";
    TransactionDetailClearedEnum["Uncleared"] = "uncleared";
    TransactionDetailClearedEnum["Reconciled"] = "reconciled";
})(TransactionDetailClearedEnum || (TransactionDetailClearedEnum = {}));
export var TransactionDetailFlagColorEnum;
(function (TransactionDetailFlagColorEnum) {
    TransactionDetailFlagColorEnum["Red"] = "red";
    TransactionDetailFlagColorEnum["Orange"] = "orange";
    TransactionDetailFlagColorEnum["Yellow"] = "yellow";
    TransactionDetailFlagColorEnum["Green"] = "green";
    TransactionDetailFlagColorEnum["Blue"] = "blue";
    TransactionDetailFlagColorEnum["Purple"] = "purple";
})(TransactionDetailFlagColorEnum || (TransactionDetailFlagColorEnum = {}));
var TransactionDetail = /** @class */ (function (_super) {
    __extends(TransactionDetail, _super);
    function TransactionDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_name" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], TransactionDetail.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approved" }),
        __metadata("design:type", Boolean)
    ], TransactionDetail.prototype, "approved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_name" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "categoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cleared" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "cleared", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], TransactionDetail.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], TransactionDetail.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flag_color" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "flagColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=import_id" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "importId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matched_transaction_id" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "matchedTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "memo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_id" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "payeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_name" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "payeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtransactions", elemType: SubTransaction }),
        __metadata("design:type", Array)
    ], TransactionDetail.prototype, "subtransactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer_account_id" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "transferAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer_transaction_id" }),
        __metadata("design:type", String)
    ], TransactionDetail.prototype, "transferTransactionId", void 0);
    return TransactionDetail;
}(SpeakeasyBase));
export { TransactionDetail };
