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
export var FetchIncomingPhoneNumberAssignedAddOnServerList = [
    "https://api.twilio.com",
];
var FetchIncomingPhoneNumberAssignedAddOnPathParams = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnPathParams, _super);
    function FetchIncomingPhoneNumberAssignedAddOnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" }),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnPathParams.prototype, "resourceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnPathParams.prototype, "sid", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnPathParams;
}(SpeakeasyBase));
export { FetchIncomingPhoneNumberAssignedAddOnPathParams };
var FetchIncomingPhoneNumberAssignedAddOnSecurity = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnSecurity, _super);
    function FetchIncomingPhoneNumberAssignedAddOnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchIncomingPhoneNumberAssignedAddOnSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnSecurity;
}(SpeakeasyBase));
export { FetchIncomingPhoneNumberAssignedAddOnSecurity };
var FetchIncomingPhoneNumberAssignedAddOnRequest = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnRequest, _super);
    function FetchIncomingPhoneNumberAssignedAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchIncomingPhoneNumberAssignedAddOnPathParams)
    ], FetchIncomingPhoneNumberAssignedAddOnRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchIncomingPhoneNumberAssignedAddOnSecurity)
    ], FetchIncomingPhoneNumberAssignedAddOnRequest.prototype, "security", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnRequest;
}(SpeakeasyBase));
export { FetchIncomingPhoneNumberAssignedAddOnRequest };
var FetchIncomingPhoneNumberAssignedAddOnResponse = /** @class */ (function (_super) {
    __extends(FetchIncomingPhoneNumberAssignedAddOnResponse, _super);
    function FetchIncomingPhoneNumberAssignedAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchIncomingPhoneNumberAssignedAddOnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchIncomingPhoneNumberAssignedAddOnResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn)
    ], FetchIncomingPhoneNumberAssignedAddOnResponse.prototype, "apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn", void 0);
    return FetchIncomingPhoneNumberAssignedAddOnResponse;
}(SpeakeasyBase));
export { FetchIncomingPhoneNumberAssignedAddOnResponse };
