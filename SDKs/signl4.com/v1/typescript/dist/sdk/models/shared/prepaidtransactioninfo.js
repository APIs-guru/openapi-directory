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
var PrepaidTransactionInfo = /** @class */ (function (_super) {
    __extends(PrepaidTransactionInfo, _super);
    function PrepaidTransactionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoTopUpId" }),
        __metadata("design:type", String)
    ], PrepaidTransactionInfo.prototype, "autoTopUpId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], PrepaidTransactionInfo.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], PrepaidTransactionInfo.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credits" }),
        __metadata("design:type", Number)
    ], PrepaidTransactionInfo.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PrepaidTransactionInfo.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified" }),
        __metadata("design:type", Date)
    ], PrepaidTransactionInfo.prototype, "modified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageCode" }),
        __metadata("design:type", String)
    ], PrepaidTransactionInfo.prototype, "packageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PrepaidTransactionInfo.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusCode" }),
        __metadata("design:type", Number)
    ], PrepaidTransactionInfo.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptionId" }),
        __metadata("design:type", String)
    ], PrepaidTransactionInfo.prototype, "subscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionId" }),
        __metadata("design:type", String)
    ], PrepaidTransactionInfo.prototype, "transactionId", void 0);
    return PrepaidTransactionInfo;
}(SpeakeasyBase));
export { PrepaidTransactionInfo };
