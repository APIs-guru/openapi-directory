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
import { PayorAddressV2 } from "./payoraddressv2";
import { KycStateEnum } from "./kycstateenum";
import { PaymentRailsEnum } from "./paymentrailsenum";
import { TransmissionTypes2 } from "./transmissiontypes2";
export var PayorV2LanguageEnum;
(function (PayorV2LanguageEnum) {
    PayorV2LanguageEnum["En"] = "EN";
    PayorV2LanguageEnum["Fr"] = "FR";
})(PayorV2LanguageEnum || (PayorV2LanguageEnum = {}));
var PayorV2 = /** @class */ (function (_super) {
    __extends(PayorV2, _super);
    function PayorV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PayorAddressV2)
    ], PayorV2.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowsLanguageChoice" }),
        __metadata("design:type", Boolean)
    ], PayorV2.prototype, "allowsLanguageChoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectiveAlias" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "collectiveAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dbaName" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "dbaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includesReports" }),
        __metadata("design:type", Boolean)
    ], PayorV2.prototype, "includesReports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kycState" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "kycState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manualLockout" }),
        __metadata("design:type", Boolean)
    ], PayorV2.prototype, "manualLockout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxMasterPayorAdmins" }),
        __metadata("design:type", Number)
    ], PayorV2.prototype, "maxMasterPayorAdmins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeGracePeriodDays" }),
        __metadata("design:type", Number)
    ], PayorV2.prototype, "payeeGracePeriodDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeGracePeriodProcessingEnabled" }),
        __metadata("design:type", Boolean)
    ], PayorV2.prototype, "payeeGracePeriodProcessingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentRails" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "paymentRails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorId" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorName" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "payorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorXid" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "payorXid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryContactEmail" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "primaryContactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryContactName" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "primaryContactName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryContactPhone" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "primaryContactPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reminderEmailsOptOut" }),
        __metadata("design:type", Boolean)
    ], PayorV2.prototype, "reminderEmailsOptOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteSystemIds" }),
        __metadata("design:type", Array)
    ], PayorV2.prototype, "remoteSystemIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportContact" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "supportContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transmissionTypes" }),
        __metadata("design:type", TransmissionTypes2)
    ], PayorV2.prototype, "transmissionTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wuCustomerId" }),
        __metadata("design:type", String)
    ], PayorV2.prototype, "wuCustomerId", void 0);
    return PayorV2;
}(SpeakeasyBase));
export { PayorV2 };
