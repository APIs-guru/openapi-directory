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
export var FetchIncomingPhoneNumberAssignedAddOnExtensionServerList = [
    "https://api.twilio.com",
];
var FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams, _super);
    function FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssignedAddOnSid" }),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams.prototype, "assignedAddOnSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" }),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams.prototype, "resourceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams.prototype, "sid", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams;
}(SpeakeasyBase));
export { FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams };
var FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity, _super);
    function FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity;
}(SpeakeasyBase));
export { FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity };
var FetchIncomingPhoneNumberAssignedAddOnExtensionRequest = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnExtensionRequest, _super);
    function FetchIncomingPhoneNumberAssignedAddOnExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionRequest.prototype, "security", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnExtensionRequest;
}(SpeakeasyBase));
export { FetchIncomingPhoneNumberAssignedAddOnExtensionRequest };
var FetchIncomingPhoneNumberAssignedAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnExtensionResponse, _super);
    function FetchIncomingPhoneNumberAssignedAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension)
    ], FetchIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnExtensionResponse;
}(SpeakeasyBase));
export { FetchIncomingPhoneNumberAssignedAddOnExtensionResponse };
