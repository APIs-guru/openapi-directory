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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AchClassEnum } from "./achclassenum";
import { BankTransferNetworkEnum } from "./banktransfernetworkenum";
import { BankTransferTypeEnum } from "./banktransfertypeenum";
// BankTransferCreateRequest
/**
 * BankTransferCreateRequest defines the request schema for `/bank_transfer/create`
**/
var BankTransferCreateRequest = /** @class */ (function (_super) {
    __extends(BankTransferCreateRequest, _super);
    function BankTransferCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "json, name=ach_class" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "achClass", void 0);
    __decorate([
        Metadata({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "json, name=custom_tag" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "customTag", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=idempotency_key" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "idempotencyKey", void 0);
    __decorate([
        Metadata({ data: "json, name=iso_currency_code" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "isoCurrencyCode", void 0);
    __decorate([
        Metadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], BankTransferCreateRequest.prototype, "metadata", void 0);
    __decorate([
        Metadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "network", void 0);
    __decorate([
        Metadata({ data: "json, name=origination_account_id" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "originationAccountId", void 0);
    __decorate([
        Metadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "secret", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BankTransferCreateRequest.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=user" }),
        __metadata("design:type", Map)
    ], BankTransferCreateRequest.prototype, "user", void 0);
    return BankTransferCreateRequest;
}(SpeakeasyBase));
export { BankTransferCreateRequest };
