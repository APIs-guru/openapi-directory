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
var SubscriptionInfo = /** @class */ (function (_super) {
    __extends(SubscriptionInfo, _super);
    function SubscriptionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branchId" }),
        __metadata("design:type", String)
    ], SubscriptionInfo.prototype, "branchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], SubscriptionInfo.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], SubscriptionInfo.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalAccountId" }),
        __metadata("design:type", String)
    ], SubscriptionInfo.prototype, "externalAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SubscriptionInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SubscriptionInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextBilling" }),
        __metadata("design:type", Date)
    ], SubscriptionInfo.prototype, "nextBilling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerId" }),
        __metadata("design:type", String)
    ], SubscriptionInfo.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planCode" }),
        __metadata("design:type", String)
    ], SubscriptionInfo.prototype, "planCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planState" }),
        __metadata("design:type", Number)
    ], SubscriptionInfo.prototype, "planState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referralEnabled" }),
        __metadata("design:type", Boolean)
    ], SubscriptionInfo.prototype, "referralEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], SubscriptionInfo.prototype, "status", void 0);
    return SubscriptionInfo;
}(SpeakeasyBase));
export { SubscriptionInfo };
