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
export var AccountStatusEnum;
(function (AccountStatusEnum) {
    AccountStatusEnum["Pending"] = "PENDING";
    AccountStatusEnum["Active"] = "ACTIVE";
    AccountStatusEnum["Deleted"] = "DELETED";
    AccountStatusEnum["Archived"] = "ARCHIVED";
})(AccountStatusEnum || (AccountStatusEnum = {}));
var AccountUcisHealth = /** @class */ (function (_super) {
    __extends(AccountUcisHealth, _super);
    function AccountUcisHealth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AccountUcisHealth.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountUcisHealth.prototype, "status", void 0);
    return AccountUcisHealth;
}(SpeakeasyBase));
export { AccountUcisHealth };
var AccountUcis = /** @class */ (function (_super) {
    __extends(AccountUcis, _super);
    function AccountUcis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health" }),
        __metadata("design:type", AccountUcisHealth)
    ], AccountUcis.prototype, "health", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AccountUcis.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountUcis.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ucpAccountId" }),
        __metadata("design:type", String)
    ], AccountUcis.prototype, "ucpAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ucpLabel" }),
        __metadata("design:type", String)
    ], AccountUcis.prototype, "ucpLabel", void 0);
    return AccountUcis;
}(SpeakeasyBase));
export { AccountUcis };
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Account.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Account.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], Account.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Account.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ucis", elemType: AccountUcis }),
        __metadata("design:type", Array)
    ], Account.prototype, "ucis", void 0);
    return Account;
}(SpeakeasyBase));
export { Account };
