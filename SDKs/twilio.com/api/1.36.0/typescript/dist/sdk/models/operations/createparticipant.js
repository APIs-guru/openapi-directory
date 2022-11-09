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
export var CREATEPARTICIPANT_SERVERS = [
    "https://api.twilio.com",
];
var CreateParticipantPathParams = /** @class */ (function (_super) {
    __extends(CreateParticipantPathParams, _super);
    function CreateParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateParticipantPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], CreateParticipantPathParams.prototype, "conferenceSid", void 0);
    return CreateParticipantPathParams;
}(SpeakeasyBase));
export { CreateParticipantPathParams };
export var CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum;
(function (CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum) {
    CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum["Get"] = "GET";
    CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum["Post"] = "POST";
    CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum["Put"] = "PUT";
    CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum || (CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum = {}));
export var CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum;
(function (CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum) {
    CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum["Get"] = "GET";
    CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum["Post"] = "POST";
    CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum["Put"] = "PUT";
    CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum || (CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum = {}));
export var CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum;
(function (CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum) {
    CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum["Get"] = "GET";
    CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum["Post"] = "POST";
    CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum["Put"] = "PUT";
    CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum || (CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum = {}));
export var CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum;
(function (CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum) {
    CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum["Get"] = "GET";
    CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum["Post"] = "POST";
    CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum["Put"] = "PUT";
    CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum || (CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum = {}));
export var CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum;
(function (CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum) {
    CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum || (CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum = {}));
export var CreateParticipantCreateParticipantRequestWaitMethodEnum;
(function (CreateParticipantCreateParticipantRequestWaitMethodEnum) {
    CreateParticipantCreateParticipantRequestWaitMethodEnum["Head"] = "HEAD";
    CreateParticipantCreateParticipantRequestWaitMethodEnum["Get"] = "GET";
    CreateParticipantCreateParticipantRequestWaitMethodEnum["Post"] = "POST";
    CreateParticipantCreateParticipantRequestWaitMethodEnum["Patch"] = "PATCH";
    CreateParticipantCreateParticipantRequestWaitMethodEnum["Put"] = "PUT";
    CreateParticipantCreateParticipantRequestWaitMethodEnum["Delete"] = "DELETE";
})(CreateParticipantCreateParticipantRequestWaitMethodEnum || (CreateParticipantCreateParticipantRequestWaitMethodEnum = {}));
var CreateParticipantCreateParticipantRequest = /** @class */ (function (_super) {
    __extends(CreateParticipantCreateParticipantRequest, _super);
    function CreateParticipantCreateParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AmdStatusCallback;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "amdStatusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=AmdStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "amdStatusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=Beep;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "beep", void 0);
    __decorate([
        Metadata({ data: "form, name=Byoc;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "byoc", void 0);
    __decorate([
        Metadata({ data: "form, name=CallReason;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "callReason", void 0);
    __decorate([
        Metadata({ data: "form, name=CallSidToCoach;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "callSidToCoach", void 0);
    __decorate([
        Metadata({ data: "form, name=CallerId;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "callerId", void 0);
    __decorate([
        Metadata({ data: "form, name=Coaching;" }),
        __metadata("design:type", Boolean)
    ], CreateParticipantCreateParticipantRequest.prototype, "coaching", void 0);
    __decorate([
        Metadata({ data: "form, name=ConferenceRecord;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "conferenceRecord", void 0);
    __decorate([
        Metadata({ data: "form, name=ConferenceRecordingStatusCallback;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "conferenceRecordingStatusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=ConferenceRecordingStatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], CreateParticipantCreateParticipantRequest.prototype, "conferenceRecordingStatusCallbackEvent", void 0);
    __decorate([
        Metadata({ data: "form, name=ConferenceRecordingStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "conferenceRecordingStatusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=ConferenceStatusCallback;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "conferenceStatusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=ConferenceStatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], CreateParticipantCreateParticipantRequest.prototype, "conferenceStatusCallbackEvent", void 0);
    __decorate([
        Metadata({ data: "form, name=ConferenceStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "conferenceStatusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=ConferenceTrim;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "conferenceTrim", void 0);
    __decorate([
        Metadata({ data: "form, name=EarlyMedia;" }),
        __metadata("design:type", Boolean)
    ], CreateParticipantCreateParticipantRequest.prototype, "earlyMedia", void 0);
    __decorate([
        Metadata({ data: "form, name=EndConferenceOnExit;" }),
        __metadata("design:type", Boolean)
    ], CreateParticipantCreateParticipantRequest.prototype, "endConferenceOnExit", void 0);
    __decorate([
        Metadata({ data: "form, name=From;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "form, name=JitterBufferSize;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "jitterBufferSize", void 0);
    __decorate([
        Metadata({ data: "form, name=Label;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "label", void 0);
    __decorate([
        Metadata({ data: "form, name=MachineDetection;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "machineDetection", void 0);
    __decorate([
        Metadata({ data: "form, name=MachineDetectionSilenceTimeout;" }),
        __metadata("design:type", Number)
    ], CreateParticipantCreateParticipantRequest.prototype, "machineDetectionSilenceTimeout", void 0);
    __decorate([
        Metadata({ data: "form, name=MachineDetectionSpeechEndThreshold;" }),
        __metadata("design:type", Number)
    ], CreateParticipantCreateParticipantRequest.prototype, "machineDetectionSpeechEndThreshold", void 0);
    __decorate([
        Metadata({ data: "form, name=MachineDetectionSpeechThreshold;" }),
        __metadata("design:type", Number)
    ], CreateParticipantCreateParticipantRequest.prototype, "machineDetectionSpeechThreshold", void 0);
    __decorate([
        Metadata({ data: "form, name=MachineDetectionTimeout;" }),
        __metadata("design:type", Number)
    ], CreateParticipantCreateParticipantRequest.prototype, "machineDetectionTimeout", void 0);
    __decorate([
        Metadata({ data: "form, name=MaxParticipants;" }),
        __metadata("design:type", Number)
    ], CreateParticipantCreateParticipantRequest.prototype, "maxParticipants", void 0);
    __decorate([
        Metadata({ data: "form, name=Muted;" }),
        __metadata("design:type", Boolean)
    ], CreateParticipantCreateParticipantRequest.prototype, "muted", void 0);
    __decorate([
        Metadata({ data: "form, name=Record;" }),
        __metadata("design:type", Boolean)
    ], CreateParticipantCreateParticipantRequest.prototype, "record", void 0);
    __decorate([
        Metadata({ data: "form, name=RecordingChannels;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "recordingChannels", void 0);
    __decorate([
        Metadata({ data: "form, name=RecordingStatusCallback;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "recordingStatusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=RecordingStatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], CreateParticipantCreateParticipantRequest.prototype, "recordingStatusCallbackEvent", void 0);
    __decorate([
        Metadata({ data: "form, name=RecordingStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "recordingStatusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=RecordingTrack;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "recordingTrack", void 0);
    __decorate([
        Metadata({ data: "form, name=Region;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "region", void 0);
    __decorate([
        Metadata({ data: "form, name=SipAuthPassword;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "sipAuthPassword", void 0);
    __decorate([
        Metadata({ data: "form, name=SipAuthUsername;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "sipAuthUsername", void 0);
    __decorate([
        Metadata({ data: "form, name=StartConferenceOnEnter;" }),
        __metadata("design:type", Boolean)
    ], CreateParticipantCreateParticipantRequest.prototype, "startConferenceOnEnter", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], CreateParticipantCreateParticipantRequest.prototype, "statusCallbackEvent", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=TimeLimit;" }),
        __metadata("design:type", Number)
    ], CreateParticipantCreateParticipantRequest.prototype, "timeLimit", void 0);
    __decorate([
        Metadata({ data: "form, name=Timeout;" }),
        __metadata("design:type", Number)
    ], CreateParticipantCreateParticipantRequest.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "form, name=To;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "to", void 0);
    __decorate([
        Metadata({ data: "form, name=WaitMethod;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "waitMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=WaitUrl;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "waitUrl", void 0);
    return CreateParticipantCreateParticipantRequest;
}(SpeakeasyBase));
export { CreateParticipantCreateParticipantRequest };
var CreateParticipantSecurity = /** @class */ (function (_super) {
    __extends(CreateParticipantSecurity, _super);
    function CreateParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateParticipantSecurity;
}(SpeakeasyBase));
export { CreateParticipantSecurity };
var CreateParticipantRequest = /** @class */ (function (_super) {
    __extends(CreateParticipantRequest, _super);
    function CreateParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateParticipantPathParams)
    ], CreateParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateParticipantCreateParticipantRequest)
    ], CreateParticipantRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateParticipantSecurity)
    ], CreateParticipantRequest.prototype, "security", void 0);
    return CreateParticipantRequest;
}(SpeakeasyBase));
export { CreateParticipantRequest };
var CreateParticipantResponse = /** @class */ (function (_super) {
    __extends(CreateParticipantResponse, _super);
    function CreateParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountConferenceParticipant)
    ], CreateParticipantResponse.prototype, "apiV2010AccountConferenceParticipant", void 0);
    return CreateParticipantResponse;
}(SpeakeasyBase));
export { CreateParticipantResponse };
