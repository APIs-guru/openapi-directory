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
export var CREATEINCOMINGPHONENUMBERASSIGNEDADDON_SERVERS = [
    "https://api.twilio.com",
];
var CreateIncomingPhoneNumberAssignedAddOnPathParams = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberAssignedAddOnPathParams, _super);
    function CreateIncomingPhoneNumberAssignedAddOnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberAssignedAddOnPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberAssignedAddOnPathParams.prototype, "resourceSid", void 0);
    return CreateIncomingPhoneNumberAssignedAddOnPathParams;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberAssignedAddOnPathParams };
var CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest, _super);
    function CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=InstalledAddOnSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest.prototype, "installedAddOnSid", void 0);
    return CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest };
var CreateIncomingPhoneNumberAssignedAddOnSecurity = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberAssignedAddOnSecurity, _super);
    function CreateIncomingPhoneNumberAssignedAddOnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateIncomingPhoneNumberAssignedAddOnSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateIncomingPhoneNumberAssignedAddOnSecurity;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberAssignedAddOnSecurity };
var CreateIncomingPhoneNumberAssignedAddOnRequest = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberAssignedAddOnRequest, _super);
    function CreateIncomingPhoneNumberAssignedAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberAssignedAddOnRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateIncomingPhoneNumberAssignedAddOnPathParams)
    ], CreateIncomingPhoneNumberAssignedAddOnRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest)
    ], CreateIncomingPhoneNumberAssignedAddOnRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateIncomingPhoneNumberAssignedAddOnSecurity)
    ], CreateIncomingPhoneNumberAssignedAddOnRequest.prototype, "security", void 0);
    return CreateIncomingPhoneNumberAssignedAddOnRequest;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberAssignedAddOnRequest };
var CreateIncomingPhoneNumberAssignedAddOnResponse = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberAssignedAddOnResponse, _super);
    function CreateIncomingPhoneNumberAssignedAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberAssignedAddOnResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateIncomingPhoneNumberAssignedAddOnResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn)
    ], CreateIncomingPhoneNumberAssignedAddOnResponse.prototype, "apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn", void 0);
    return CreateIncomingPhoneNumberAssignedAddOnResponse;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberAssignedAddOnResponse };
