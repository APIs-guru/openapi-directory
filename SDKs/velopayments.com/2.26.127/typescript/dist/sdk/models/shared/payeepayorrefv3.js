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
import { InvitationStatus2Enum } from "./invitationstatus2enum";
import { PayableIssue } from "./payableissue";
var PayeePayorRefV3 = /** @class */ (function (_super) {
    __extends(PayeePayorRefV3, _super);
    function PayeePayorRefV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invitationStatus" }),
        __metadata("design:type", String)
    ], PayeePayorRefV3.prototype, "invitationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invitationStatusTimestamp" }),
        __metadata("design:type", Date)
    ], PayeePayorRefV3.prototype, "invitationStatusTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payableIssues", elemType: PayableIssue }),
        __metadata("design:type", Array)
    ], PayeePayorRefV3.prototype, "payableIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payableStatus" }),
        __metadata("design:type", Boolean)
    ], PayeePayorRefV3.prototype, "payableStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelId" }),
        __metadata("design:type", String)
    ], PayeePayorRefV3.prototype, "paymentChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorId" }),
        __metadata("design:type", String)
    ], PayeePayorRefV3.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteId" }),
        __metadata("design:type", String)
    ], PayeePayorRefV3.prototype, "remoteId", void 0);
    return PayeePayorRefV3;
}(SpeakeasyBase));
export { PayeePayorRefV3 };
