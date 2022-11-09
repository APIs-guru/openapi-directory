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
import { DependentHostedNumberOrderEnumStatusEnum } from "./dependenthostednumberorderenumstatusenum";
import { DependentHostedNumberOrderEnumVerificationTypeEnum } from "./dependenthostednumberorderenumverificationtypeenum";
// PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities
/**
 * A mapping of phone number capabilities.
**/
var PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities = /** @class */ (function (_super) {
    __extends(PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities, _super);
    function PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=fax" }),
        __metadata("design:type", Boolean)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities.prototype, "fax", void 0);
    __decorate([
        Metadata({ data: "json, name=mms" }),
        __metadata("design:type", Boolean)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities.prototype, "mms", void 0);
    __decorate([
        Metadata({ data: "json, name=sms" }),
        __metadata("design:type", Boolean)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities.prototype, "sms", void 0);
    __decorate([
        Metadata({ data: "json, name=voice" }),
        __metadata("design:type", Boolean)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities.prototype, "voice", void 0);
    return PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities;
}(SpeakeasyBase));
export { PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities };
var PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder = /** @class */ (function (_super) {
    __extends(PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder, _super);
    function PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=address_sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "addressSid", void 0);
    __decorate([
        Metadata({ data: "json, name=call_delay" }),
        __metadata("design:type", Number)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "callDelay", void 0);
    __decorate([
        Metadata({ data: "json, name=capabilities" }),
        __metadata("design:type", PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "capabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=cc_emails" }),
        __metadata("design:type", Array)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "ccEmails", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=extension" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "extension", void 0);
    __decorate([
        Metadata({ data: "json, name=failure_reason" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "failureReason", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=incoming_phone_number_sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "incomingPhoneNumberSid", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=signing_document_sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "signingDocumentSid", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "uniqueName", void 0);
    __decorate([
        Metadata({ data: "json, name=verification_attempts" }),
        __metadata("design:type", Number)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "verificationAttempts", void 0);
    __decorate([
        Metadata({ data: "json, name=verification_call_sids" }),
        __metadata("design:type", Array)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "verificationCallSids", void 0);
    __decorate([
        Metadata({ data: "json, name=verification_code" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "verificationCode", void 0);
    __decorate([
        Metadata({ data: "json, name=verification_document_sid" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "verificationDocumentSid", void 0);
    __decorate([
        Metadata({ data: "json, name=verification_type" }),
        __metadata("design:type", String)
    ], PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder.prototype, "verificationType", void 0);
    return PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder;
}(SpeakeasyBase));
export { PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder };
