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
export var CreateWirelessRatePlanServerList = [
    "https://preview.twilio.com",
];
var CreateWirelessRatePlanCreateWirelessRatePlanRequest = /** @class */ (function (_super) {
    __extends(CreateWirelessRatePlanCreateWirelessRatePlanRequest, _super);
    function CreateWirelessRatePlanCreateWirelessRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CommandsEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "commandsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DataEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "dataEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DataLimit;" }),
        __metadata("design:type", Number)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "dataLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DataMetering;" }),
        __metadata("design:type", String)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "dataMetering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=InternationalRoaming;" }),
        __metadata("design:type", Array)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "internationalRoaming", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MessagingEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "messagingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=NationalRoamingEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "nationalRoamingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "uniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateWirelessRatePlanCreateWirelessRatePlanRequest.prototype, "voiceEnabled", void 0);
    return CreateWirelessRatePlanCreateWirelessRatePlanRequest;
}(SpeakeasyBase));
export { CreateWirelessRatePlanCreateWirelessRatePlanRequest };
var CreateWirelessRatePlanSecurity = /** @class */ (function (_super) {
    __extends(CreateWirelessRatePlanSecurity, _super);
    function CreateWirelessRatePlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateWirelessRatePlanSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateWirelessRatePlanSecurity;
}(SpeakeasyBase));
export { CreateWirelessRatePlanSecurity };
var CreateWirelessRatePlanRequest = /** @class */ (function (_super) {
    __extends(CreateWirelessRatePlanRequest, _super);
    function CreateWirelessRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWirelessRatePlanRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateWirelessRatePlanCreateWirelessRatePlanRequest)
    ], CreateWirelessRatePlanRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateWirelessRatePlanSecurity)
    ], CreateWirelessRatePlanRequest.prototype, "security", void 0);
    return CreateWirelessRatePlanRequest;
}(SpeakeasyBase));
export { CreateWirelessRatePlanRequest };
var CreateWirelessRatePlanResponse = /** @class */ (function (_super) {
    __extends(CreateWirelessRatePlanResponse, _super);
    function CreateWirelessRatePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWirelessRatePlanResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateWirelessRatePlanResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewWirelessRatePlan)
    ], CreateWirelessRatePlanResponse.prototype, "previewWirelessRatePlan", void 0);
    return CreateWirelessRatePlanResponse;
}(SpeakeasyBase));
export { CreateWirelessRatePlanResponse };
