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
import { MoneyObject } from "./moneyobject";
var AccountResourceAttributes = /** @class */ (function (_super) {
    __extends(AccountResourceAttributes, _super);
    function AccountResourceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountType" }),
        __metadata("design:type", Object)
    ], AccountResourceAttributes.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", MoneyObject)
    ], AccountResourceAttributes.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], AccountResourceAttributes.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AccountResourceAttributes.prototype, "displayName", void 0);
    return AccountResourceAttributes;
}(SpeakeasyBase));
export { AccountResourceAttributes };
var AccountResourceLinks = /** @class */ (function (_super) {
    __extends(AccountResourceLinks, _super);
    function AccountResourceLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], AccountResourceLinks.prototype, "self", void 0);
    return AccountResourceLinks;
}(SpeakeasyBase));
export { AccountResourceLinks };
var AccountResourceRelationshipsTransactionsLinks = /** @class */ (function (_super) {
    __extends(AccountResourceRelationshipsTransactionsLinks, _super);
    function AccountResourceRelationshipsTransactionsLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related" }),
        __metadata("design:type", String)
    ], AccountResourceRelationshipsTransactionsLinks.prototype, "related", void 0);
    return AccountResourceRelationshipsTransactionsLinks;
}(SpeakeasyBase));
export { AccountResourceRelationshipsTransactionsLinks };
var AccountResourceRelationshipsTransactions = /** @class */ (function (_super) {
    __extends(AccountResourceRelationshipsTransactions, _super);
    function AccountResourceRelationshipsTransactions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", AccountResourceRelationshipsTransactionsLinks)
    ], AccountResourceRelationshipsTransactions.prototype, "links", void 0);
    return AccountResourceRelationshipsTransactions;
}(SpeakeasyBase));
export { AccountResourceRelationshipsTransactions };
var AccountResourceRelationships = /** @class */ (function (_super) {
    __extends(AccountResourceRelationships, _super);
    function AccountResourceRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactions" }),
        __metadata("design:type", AccountResourceRelationshipsTransactions)
    ], AccountResourceRelationships.prototype, "transactions", void 0);
    return AccountResourceRelationships;
}(SpeakeasyBase));
export { AccountResourceRelationships };
// AccountResource
/**
 * Provides information about an Up bank account.
 *
**/
var AccountResource = /** @class */ (function (_super) {
    __extends(AccountResource, _super);
    function AccountResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", AccountResourceAttributes)
    ], AccountResource.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountResource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", AccountResourceLinks)
    ], AccountResource.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationships" }),
        __metadata("design:type", AccountResourceRelationships)
    ], AccountResource.prototype, "relationships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountResource.prototype, "type", void 0);
    return AccountResource;
}(SpeakeasyBase));
export { AccountResource };
