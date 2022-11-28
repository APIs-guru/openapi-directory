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
// PayStatementDetails
/**
 * The pay statement details model
**/
var PayStatementDetails = /** @class */ (function (_super) {
    __extends(PayStatementDetails, _super);
    function PayStatementDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PayStatementDetails.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkDate" }),
        __metadata("design:type", String)
    ], PayStatementDetails.prototype, "checkDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=det" }),
        __metadata("design:type", String)
    ], PayStatementDetails.prototype, "det", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detCode" }),
        __metadata("design:type", String)
    ], PayStatementDetails.prototype, "detCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detType" }),
        __metadata("design:type", String)
    ], PayStatementDetails.prototype, "detType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eligibleCompensation" }),
        __metadata("design:type", Number)
    ], PayStatementDetails.prototype, "eligibleCompensation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours" }),
        __metadata("design:type", Number)
    ], PayStatementDetails.prototype, "hours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], PayStatementDetails.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionNumber" }),
        __metadata("design:type", Number)
    ], PayStatementDetails.prototype, "transactionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionType" }),
        __metadata("design:type", String)
    ], PayStatementDetails.prototype, "transactionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], PayStatementDetails.prototype, "year", void 0);
    return PayStatementDetails;
}(SpeakeasyBase));
export { PayStatementDetails };
