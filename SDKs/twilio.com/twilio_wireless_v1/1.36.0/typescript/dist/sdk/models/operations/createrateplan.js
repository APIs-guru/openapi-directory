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
export var CREATERATEPLAN_SERVERS = [
    "https://wireless.twilio.com",
];
var CreateRatePlanCreateRatePlanRequest = /** @class */ (function (_super) {
    __extends(CreateRatePlanCreateRatePlanRequest, _super);
    function CreateRatePlanCreateRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=DataEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "dataEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=DataLimit;" }),
        __metadata("design:type", Number)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "dataLimit", void 0);
    __decorate([
        Metadata({ data: "form, name=DataMetering;" }),
        __metadata("design:type", String)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "dataMetering", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=InternationalRoaming;" }),
        __metadata("design:type", Array)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "internationalRoaming", void 0);
    __decorate([
        Metadata({ data: "form, name=InternationalRoamingDataLimit;" }),
        __metadata("design:type", Number)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "internationalRoamingDataLimit", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "messagingEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=NationalRoamingDataLimit;" }),
        __metadata("design:type", Number)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "nationalRoamingDataLimit", void 0);
    __decorate([
        Metadata({ data: "form, name=NationalRoamingEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "nationalRoamingEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "uniqueName", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateRatePlanCreateRatePlanRequest.prototype, "voiceEnabled", void 0);
    return CreateRatePlanCreateRatePlanRequest;
}(SpeakeasyBase));
export { CreateRatePlanCreateRatePlanRequest };
var CreateRatePlanSecurity = /** @class */ (function (_super) {
    __extends(CreateRatePlanSecurity, _super);
    function CreateRatePlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateRatePlanSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateRatePlanSecurity;
}(SpeakeasyBase));
export { CreateRatePlanSecurity };
var CreateRatePlanRequest = /** @class */ (function (_super) {
    __extends(CreateRatePlanRequest, _super);
    function CreateRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateRatePlanRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateRatePlanCreateRatePlanRequest)
    ], CreateRatePlanRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateRatePlanSecurity)
    ], CreateRatePlanRequest.prototype, "security", void 0);
    return CreateRatePlanRequest;
}(SpeakeasyBase));
export { CreateRatePlanRequest };
var CreateRatePlanResponse = /** @class */ (function (_super) {
    __extends(CreateRatePlanResponse, _super);
    function CreateRatePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateRatePlanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateRatePlanResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.WirelessV1RatePlan)
    ], CreateRatePlanResponse.prototype, "wirelessV1RatePlan", void 0);
    return CreateRatePlanResponse;
}(SpeakeasyBase));
export { CreateRatePlanResponse };
