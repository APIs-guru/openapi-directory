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
import * as shared from "../shared";
export var DELETEINCOMINGPHONENUMBERASSIGNEDADDON_SERVERS = [
    "https://api.twilio.com",
];
var DeleteIncomingPhoneNumberAssignedAddOnPathParams = /** @class */ (function (_super) {
    __extends(DeleteIncomingPhoneNumberAssignedAddOnPathParams, _super);
    function DeleteIncomingPhoneNumberAssignedAddOnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], DeleteIncomingPhoneNumberAssignedAddOnPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" }),
        __metadata("design:type", String)
    ], DeleteIncomingPhoneNumberAssignedAddOnPathParams.prototype, "resourceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteIncomingPhoneNumberAssignedAddOnPathParams.prototype, "sid", void 0);
    return DeleteIncomingPhoneNumberAssignedAddOnPathParams;
}(SpeakeasyBase));
export { DeleteIncomingPhoneNumberAssignedAddOnPathParams };
var DeleteIncomingPhoneNumberAssignedAddOnSecurity = /** @class */ (function (_super) {
    __extends(DeleteIncomingPhoneNumberAssignedAddOnSecurity, _super);
    function DeleteIncomingPhoneNumberAssignedAddOnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteIncomingPhoneNumberAssignedAddOnSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteIncomingPhoneNumberAssignedAddOnSecurity;
}(SpeakeasyBase));
export { DeleteIncomingPhoneNumberAssignedAddOnSecurity };
var DeleteIncomingPhoneNumberAssignedAddOnRequest = /** @class */ (function (_super) {
    __extends(DeleteIncomingPhoneNumberAssignedAddOnRequest, _super);
    function DeleteIncomingPhoneNumberAssignedAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteIncomingPhoneNumberAssignedAddOnRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteIncomingPhoneNumberAssignedAddOnPathParams)
    ], DeleteIncomingPhoneNumberAssignedAddOnRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteIncomingPhoneNumberAssignedAddOnSecurity)
    ], DeleteIncomingPhoneNumberAssignedAddOnRequest.prototype, "security", void 0);
    return DeleteIncomingPhoneNumberAssignedAddOnRequest;
}(SpeakeasyBase));
export { DeleteIncomingPhoneNumberAssignedAddOnRequest };
var DeleteIncomingPhoneNumberAssignedAddOnResponse = /** @class */ (function (_super) {
    __extends(DeleteIncomingPhoneNumberAssignedAddOnResponse, _super);
    function DeleteIncomingPhoneNumberAssignedAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteIncomingPhoneNumberAssignedAddOnResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteIncomingPhoneNumberAssignedAddOnResponse.prototype, "statusCode", void 0);
    return DeleteIncomingPhoneNumberAssignedAddOnResponse;
}(SpeakeasyBase));
export { DeleteIncomingPhoneNumberAssignedAddOnResponse };
