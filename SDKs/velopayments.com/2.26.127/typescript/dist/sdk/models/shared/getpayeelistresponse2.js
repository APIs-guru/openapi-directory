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
import { GetPayeeListResponseCompany2 } from "./getpayeelistresponsecompany2";
import { GetPayeeListResponseIndividual2 } from "./getpayeelistresponseindividual2";
import { OnboardedStatusEnum } from "./onboardedstatusenum";
import { PayeeTypeEnum } from "./payeetypeenum";
import { PayeePayorRef } from "./payeepayorref";
import { WatchlistStatus2Enum } from "./watchliststatus2enum";
var GetPayeeListResponse2 = /** @class */ (function (_super) {
    __extends(GetPayeeListResponse2, _super);
    function GetPayeeListResponse2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", GetPayeeListResponseCompany2)
    ], GetPayeeListResponse2.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse2.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], GetPayeeListResponse2.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], GetPayeeListResponse2.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabledComment" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse2.prototype, "disabledComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabledUpdatedTimestamp" }),
        __metadata("design:type", Date)
    ], GetPayeeListResponse2.prototype, "disabledUpdatedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse2.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse2.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual" }),
        __metadata("design:type", GetPayeeListResponseIndividual2)
    ], GetPayeeListResponse2.prototype, "individual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse2.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onboardedStatus" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse2.prototype, "onboardedStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeId" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse2.prototype, "payeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeType" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse2.prototype, "payeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorRefs", elemType: PayeePayorRef }),
        __metadata("design:type", Array)
    ], GetPayeeListResponse2.prototype, "payorRefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlistOverrideComment" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse2.prototype, "watchlistOverrideComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlistStatus" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse2.prototype, "watchlistStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlistStatusUpdatedTimestamp" }),
        __metadata("design:type", String)
    ], GetPayeeListResponse2.prototype, "watchlistStatusUpdatedTimestamp", void 0);
    return GetPayeeListResponse2;
}(SpeakeasyBase));
export { GetPayeeListResponse2 };
