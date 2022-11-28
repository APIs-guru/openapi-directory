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
export var UpdateWorkerReservationServerList = [
    "https://taskrouter.twilio.com",
];
var UpdateWorkerReservationPathParams = /** @class */ (function (_super) {
    __extends(UpdateWorkerReservationPathParams, _super);
    function UpdateWorkerReservationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationPathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkerSid" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationPathParams.prototype, "workerSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationPathParams.prototype, "workspaceSid", void 0);
    return UpdateWorkerReservationPathParams;
}(SpeakeasyBase));
export { UpdateWorkerReservationPathParams };
var UpdateWorkerReservationHeaders = /** @class */ (function (_super) {
    __extends(UpdateWorkerReservationHeaders, _super);
    function UpdateWorkerReservationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationHeaders.prototype, "ifMatch", void 0);
    return UpdateWorkerReservationHeaders;
}(SpeakeasyBase));
export { UpdateWorkerReservationHeaders };
export var UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum;
(function (UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum) {
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum["Get"] = "GET";
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum["Post"] = "POST";
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum || (UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum = {}));
export var UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum;
(function (UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum) {
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum["Get"] = "GET";
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum["Post"] = "POST";
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum || (UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum = {}));
export var UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum;
(function (UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum) {
    UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum["Get"] = "GET";
    UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum["Post"] = "POST";
    UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum || (UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum = {}));
export var UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum;
(function (UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum) {
    UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum["Get"] = "GET";
    UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum["Post"] = "POST";
    UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum || (UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum = {}));
export var UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum;
(function (UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum) {
    UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum["Head"] = "HEAD";
    UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum["Get"] = "GET";
    UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum["Post"] = "POST";
    UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum["Patch"] = "PATCH";
    UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum["Put"] = "PUT";
    UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum["Delete"] = "DELETE";
})(UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum || (UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum = {}));
var UpdateWorkerReservationUpdateWorkerReservationRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkerReservationUpdateWorkerReservationRequest, _super);
    function UpdateWorkerReservationUpdateWorkerReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Beep;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "beep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BeepOnCustomerEntrance;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "beepOnCustomerEntrance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallAccept;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "callAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallFrom;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "callFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallRecord;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "callRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallStatusCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "callStatusCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallTimeout;" }),
        __metadata("design:type", Number)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "callTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallTo;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "callTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallUrl;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "callUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceRecord;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "conferenceRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceRecordingStatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "conferenceRecordingStatusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceRecordingStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "conferenceRecordingStatusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "conferenceStatusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "conferenceStatusCallbackEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "conferenceStatusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceTrim;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "conferenceTrim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueFrom;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "dequeueFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeuePostWorkActivitySid;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "dequeuePostWorkActivitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueRecord;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "dequeueRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueStatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "dequeueStatusCallbackEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueStatusCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "dequeueStatusCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueTimeout;" }),
        __metadata("design:type", Number)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "dequeueTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueTo;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "dequeueTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EarlyMedia;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "earlyMedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EndConferenceOnCustomerExit;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "endConferenceOnCustomerExit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EndConferenceOnExit;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "endConferenceOnExit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=From;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Instruction;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "instruction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MaxParticipants;" }),
        __metadata("design:type", Number)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "maxParticipants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Muted;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "muted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PostWorkActivitySid;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "postWorkActivitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Record;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "record", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingChannels;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "recordingChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingStatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "recordingStatusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "recordingStatusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RedirectAccept;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "redirectAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RedirectCallSid;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "redirectCallSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RedirectUrl;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Region;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ReservationStatus;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "reservationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SipAuthPassword;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "sipAuthPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SipAuthUsername;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "sipAuthUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StartConferenceOnEnter;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "startConferenceOnEnter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "statusCallbackEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Timeout;" }),
        __metadata("design:type", Number)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=To;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=WaitMethod;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "waitMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=WaitUrl;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "waitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=WorkerActivitySid;" }),
        __metadata("design:type", String)
    ], UpdateWorkerReservationUpdateWorkerReservationRequest.prototype, "workerActivitySid", void 0);
    return UpdateWorkerReservationUpdateWorkerReservationRequest;
}(SpeakeasyBase));
export { UpdateWorkerReservationUpdateWorkerReservationRequest };
var UpdateWorkerReservationSecurity = /** @class */ (function (_super) {
    __extends(UpdateWorkerReservationSecurity, _super);
    function UpdateWorkerReservationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateWorkerReservationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateWorkerReservationSecurity;
}(SpeakeasyBase));
export { UpdateWorkerReservationSecurity };
var UpdateWorkerReservationRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkerReservationRequest, _super);
    function UpdateWorkerReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWorkerReservationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkerReservationPathParams)
    ], UpdateWorkerReservationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkerReservationHeaders)
    ], UpdateWorkerReservationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateWorkerReservationUpdateWorkerReservationRequest)
    ], UpdateWorkerReservationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkerReservationSecurity)
    ], UpdateWorkerReservationRequest.prototype, "security", void 0);
    return UpdateWorkerReservationRequest;
}(SpeakeasyBase));
export { UpdateWorkerReservationRequest };
var UpdateWorkerReservationResponse = /** @class */ (function (_super) {
    __extends(UpdateWorkerReservationResponse, _super);
    function UpdateWorkerReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWorkerReservationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateWorkerReservationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkerWorkerReservation)
    ], UpdateWorkerReservationResponse.prototype, "taskrouterV1WorkspaceWorkerWorkerReservation", void 0);
    return UpdateWorkerReservationResponse;
}(SpeakeasyBase));
export { UpdateWorkerReservationResponse };
