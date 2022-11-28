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
import { HostedNumberOrderEnumStatusEnum } from "./hostednumberorderenumstatusenum";
import { HostedNumberOrderEnumVerificationTypeEnum } from "./hostednumberorderenumverificationtypeenum";
// PreviewHostedNumbersHostedNumberOrderCapabilities
/**
 * A mapping of phone number capabilities.
**/
var PreviewHostedNumbersHostedNumberOrderCapabilities = /** @class */ (function (_super) {
    __extends(PreviewHostedNumbersHostedNumberOrderCapabilities, _super);
    function PreviewHostedNumbersHostedNumberOrderCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", Boolean)
    ], PreviewHostedNumbersHostedNumberOrderCapabilities.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mms" }),
        __metadata("design:type", Boolean)
    ], PreviewHostedNumbersHostedNumberOrderCapabilities.prototype, "mms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms" }),
        __metadata("design:type", Boolean)
    ], PreviewHostedNumbersHostedNumberOrderCapabilities.prototype, "sms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice" }),
        __metadata("design:type", Boolean)
    ], PreviewHostedNumbersHostedNumberOrderCapabilities.prototype, "voice", void 0);
    return PreviewHostedNumbersHostedNumberOrderCapabilities;
}(SpeakeasyBase));
export { PreviewHostedNumbersHostedNumberOrderCapabilities };
var PreviewHostedNumbersHostedNumberOrder = /** @class */ (function (_super) {
    __extends(PreviewHostedNumbersHostedNumberOrder, _super);
    function PreviewHostedNumbersHostedNumberOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "addressSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_delay" }),
        __metadata("design:type", Number)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "callDelay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", PreviewHostedNumbersHostedNumberOrderCapabilities)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cc_emails" }),
        __metadata("design:type", Array)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "ccEmails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extension" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "extension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failure_reason" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incoming_phone_number_sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "incomingPhoneNumberSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signing_document_sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "signingDocumentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "uniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification_attempts" }),
        __metadata("design:type", Number)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "verificationAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification_call_sids" }),
        __metadata("design:type", Array)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "verificationCallSids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification_code" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "verificationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification_document_sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "verificationDocumentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification_type" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersHostedNumberOrder.prototype, "verificationType", void 0);
    return PreviewHostedNumbersHostedNumberOrder;
}(SpeakeasyBase));
export { PreviewHostedNumbersHostedNumberOrder };
