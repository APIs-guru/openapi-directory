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
import * as shared from "../shared";
export var CreateTollfreeVerificationServerList = [
    "https://messaging.twilio.com",
];
var CreateTollfreeVerificationCreateTollfreeVerificationRequest = /** @class */ (function (_super) {
    __extends(CreateTollfreeVerificationCreateTollfreeVerificationRequest, _super);
    function CreateTollfreeVerificationCreateTollfreeVerificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AdditionalInformation;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "additionalInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessCity;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessContactEmail;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessContactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessContactFirstName;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessContactFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessContactLastName;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessContactLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessContactPhone;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessContactPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessCountry;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessName;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessPostalCode;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessPostalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessStateProvinceRegion;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessStateProvinceRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessStreetAddress;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessStreetAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessStreetAddress2;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessStreetAddress2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BusinessWebsite;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "businessWebsite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CustomerProfileSid;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "customerProfileSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MessageVolume;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "messageVolume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=NotificationEmail;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "notificationEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=OptInImageUrls;" }),
        __metadata("design:type", Array)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "optInImageUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=OptInType;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "optInType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ProductionMessageSample;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "productionMessageSample", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TollfreePhoneNumberSid;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "tollfreePhoneNumberSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UseCaseCategories;" }),
        __metadata("design:type", Array)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "useCaseCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UseCaseSummary;" }),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationCreateTollfreeVerificationRequest.prototype, "useCaseSummary", void 0);
    return CreateTollfreeVerificationCreateTollfreeVerificationRequest;
}(SpeakeasyBase));
export { CreateTollfreeVerificationCreateTollfreeVerificationRequest };
var CreateTollfreeVerificationSecurity = /** @class */ (function (_super) {
    __extends(CreateTollfreeVerificationSecurity, _super);
    function CreateTollfreeVerificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTollfreeVerificationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTollfreeVerificationSecurity;
}(SpeakeasyBase));
export { CreateTollfreeVerificationSecurity };
var CreateTollfreeVerificationRequest = /** @class */ (function (_super) {
    __extends(CreateTollfreeVerificationRequest, _super);
    function CreateTollfreeVerificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTollfreeVerificationCreateTollfreeVerificationRequest)
    ], CreateTollfreeVerificationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTollfreeVerificationSecurity)
    ], CreateTollfreeVerificationRequest.prototype, "security", void 0);
    return CreateTollfreeVerificationRequest;
}(SpeakeasyBase));
export { CreateTollfreeVerificationRequest };
var CreateTollfreeVerificationResponse = /** @class */ (function (_super) {
    __extends(CreateTollfreeVerificationResponse, _super);
    function CreateTollfreeVerificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTollfreeVerificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTollfreeVerificationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessagingV1TollfreeVerification)
    ], CreateTollfreeVerificationResponse.prototype, "messagingV1TollfreeVerification", void 0);
    return CreateTollfreeVerificationResponse;
}(SpeakeasyBase));
export { CreateTollfreeVerificationResponse };
