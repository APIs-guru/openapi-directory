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
// DirectDepositAdditionalDirectDeposit
/**
 * The additional direct deposit model
**/
var DirectDepositAdditionalDirectDeposit = /** @class */ (function (_super) {
    __extends(DirectDepositAdditionalDirectDeposit, _super);
    function DirectDepositAdditionalDirectDeposit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], DirectDepositAdditionalDirectDeposit.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], DirectDepositAdditionalDirectDeposit.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], DirectDepositAdditionalDirectDeposit.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountType" }),
        __metadata("design:type", String)
    ], DirectDepositAdditionalDirectDeposit.prototype, "amountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockSpecial" }),
        __metadata("design:type", Boolean)
    ], DirectDepositAdditionalDirectDeposit.prototype, "blockSpecial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSkipPreNote" }),
        __metadata("design:type", Boolean)
    ], DirectDepositAdditionalDirectDeposit.prototype, "isSkipPreNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameOnAccount" }),
        __metadata("design:type", String)
    ], DirectDepositAdditionalDirectDeposit.prototype, "nameOnAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preNoteDate" }),
        __metadata("design:type", String)
    ], DirectDepositAdditionalDirectDeposit.prototype, "preNoteDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], DirectDepositAdditionalDirectDeposit.prototype, "routingNumber", void 0);
    return DirectDepositAdditionalDirectDeposit;
}(SpeakeasyBase));
export { DirectDepositAdditionalDirectDeposit };
// DirectDepositMainDirectDeposit
/**
 * The main Direct Deposit account.
**/
var DirectDepositMainDirectDeposit = /** @class */ (function (_super) {
    __extends(DirectDepositMainDirectDeposit, _super);
    function DirectDepositMainDirectDeposit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], DirectDepositMainDirectDeposit.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], DirectDepositMainDirectDeposit.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockSpecial" }),
        __metadata("design:type", Boolean)
    ], DirectDepositMainDirectDeposit.prototype, "blockSpecial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSkipPreNote" }),
        __metadata("design:type", Boolean)
    ], DirectDepositMainDirectDeposit.prototype, "isSkipPreNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameOnAccount" }),
        __metadata("design:type", String)
    ], DirectDepositMainDirectDeposit.prototype, "nameOnAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preNoteDate" }),
        __metadata("design:type", String)
    ], DirectDepositMainDirectDeposit.prototype, "preNoteDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], DirectDepositMainDirectDeposit.prototype, "routingNumber", void 0);
    return DirectDepositMainDirectDeposit;
}(SpeakeasyBase));
export { DirectDepositMainDirectDeposit };
// DirectDeposit
/**
 * The Direct Deposit model
**/
var DirectDeposit = /** @class */ (function (_super) {
    __extends(DirectDeposit, _super);
    function DirectDeposit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalDirectDeposit", elemType: DirectDepositAdditionalDirectDeposit }),
        __metadata("design:type", Array)
    ], DirectDeposit.prototype, "additionalDirectDeposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainDirectDeposit" }),
        __metadata("design:type", DirectDepositMainDirectDeposit)
    ], DirectDeposit.prototype, "mainDirectDeposit", void 0);
    return DirectDeposit;
}(SpeakeasyBase));
export { DirectDeposit };
