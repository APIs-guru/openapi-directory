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
export var UPDATEPARTICIPANT_SERVERS = [
    "https://api.twilio.com",
];
var UpdateParticipantPathParams = /** @class */ (function (_super) {
    __extends(UpdateParticipantPathParams, _super);
    function UpdateParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateParticipantPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], UpdateParticipantPathParams.prototype, "callSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], UpdateParticipantPathParams.prototype, "conferenceSid", void 0);
    return UpdateParticipantPathParams;
}(SpeakeasyBase));
export { UpdateParticipantPathParams };
export var UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum;
(function (UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum) {
    UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum["Head"] = "HEAD";
    UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum["Get"] = "GET";
    UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum["Post"] = "POST";
    UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum["Patch"] = "PATCH";
    UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum["Put"] = "PUT";
    UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum["Delete"] = "DELETE";
})(UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum || (UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum = {}));
export var UpdateParticipantUpdateParticipantRequestHoldMethodEnum;
(function (UpdateParticipantUpdateParticipantRequestHoldMethodEnum) {
    UpdateParticipantUpdateParticipantRequestHoldMethodEnum["Head"] = "HEAD";
    UpdateParticipantUpdateParticipantRequestHoldMethodEnum["Get"] = "GET";
    UpdateParticipantUpdateParticipantRequestHoldMethodEnum["Post"] = "POST";
    UpdateParticipantUpdateParticipantRequestHoldMethodEnum["Patch"] = "PATCH";
    UpdateParticipantUpdateParticipantRequestHoldMethodEnum["Put"] = "PUT";
    UpdateParticipantUpdateParticipantRequestHoldMethodEnum["Delete"] = "DELETE";
})(UpdateParticipantUpdateParticipantRequestHoldMethodEnum || (UpdateParticipantUpdateParticipantRequestHoldMethodEnum = {}));
export var UpdateParticipantUpdateParticipantRequestWaitMethodEnum;
(function (UpdateParticipantUpdateParticipantRequestWaitMethodEnum) {
    UpdateParticipantUpdateParticipantRequestWaitMethodEnum["Head"] = "HEAD";
    UpdateParticipantUpdateParticipantRequestWaitMethodEnum["Get"] = "GET";
    UpdateParticipantUpdateParticipantRequestWaitMethodEnum["Post"] = "POST";
    UpdateParticipantUpdateParticipantRequestWaitMethodEnum["Patch"] = "PATCH";
    UpdateParticipantUpdateParticipantRequestWaitMethodEnum["Put"] = "PUT";
    UpdateParticipantUpdateParticipantRequestWaitMethodEnum["Delete"] = "DELETE";
})(UpdateParticipantUpdateParticipantRequestWaitMethodEnum || (UpdateParticipantUpdateParticipantRequestWaitMethodEnum = {}));
var UpdateParticipantUpdateParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateParticipantUpdateParticipantRequest, _super);
    function UpdateParticipantUpdateParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AnnounceMethod;" }),
        __metadata("design:type", String)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "announceMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=AnnounceUrl;" }),
        __metadata("design:type", String)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "announceUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=BeepOnExit;" }),
        __metadata("design:type", Boolean)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "beepOnExit", void 0);
    __decorate([
        Metadata({ data: "form, name=CallSidToCoach;" }),
        __metadata("design:type", String)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "callSidToCoach", void 0);
    __decorate([
        Metadata({ data: "form, name=Coaching;" }),
        __metadata("design:type", Boolean)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "coaching", void 0);
    __decorate([
        Metadata({ data: "form, name=EndConferenceOnExit;" }),
        __metadata("design:type", Boolean)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "endConferenceOnExit", void 0);
    __decorate([
        Metadata({ data: "form, name=Hold;" }),
        __metadata("design:type", Boolean)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "hold", void 0);
    __decorate([
        Metadata({ data: "form, name=HoldMethod;" }),
        __metadata("design:type", String)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "holdMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=HoldUrl;" }),
        __metadata("design:type", String)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "holdUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=Muted;" }),
        __metadata("design:type", Boolean)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "muted", void 0);
    __decorate([
        Metadata({ data: "form, name=WaitMethod;" }),
        __metadata("design:type", String)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "waitMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=WaitUrl;" }),
        __metadata("design:type", String)
    ], UpdateParticipantUpdateParticipantRequest.prototype, "waitUrl", void 0);
    return UpdateParticipantUpdateParticipantRequest;
}(SpeakeasyBase));
export { UpdateParticipantUpdateParticipantRequest };
var UpdateParticipantSecurity = /** @class */ (function (_super) {
    __extends(UpdateParticipantSecurity, _super);
    function UpdateParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateParticipantSecurity;
}(SpeakeasyBase));
export { UpdateParticipantSecurity };
var UpdateParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateParticipantRequest, _super);
    function UpdateParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateParticipantPathParams)
    ], UpdateParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateParticipantUpdateParticipantRequest)
    ], UpdateParticipantRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateParticipantSecurity)
    ], UpdateParticipantRequest.prototype, "security", void 0);
    return UpdateParticipantRequest;
}(SpeakeasyBase));
export { UpdateParticipantRequest };
var UpdateParticipantResponse = /** @class */ (function (_super) {
    __extends(UpdateParticipantResponse, _super);
    function UpdateParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountConferenceParticipant)
    ], UpdateParticipantResponse.prototype, "apiV2010AccountConferenceParticipant", void 0);
    return UpdateParticipantResponse;
}(SpeakeasyBase));
export { UpdateParticipantResponse };
