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
export var UpdateTaskReservationServerList = [
    "https://taskrouter.twilio.com",
];
var UpdateTaskReservationPathParams = /** @class */ (function (_super) {
    __extends(UpdateTaskReservationPathParams, _super);
    function UpdateTaskReservationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationPathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationPathParams.prototype, "taskSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationPathParams.prototype, "workspaceSid", void 0);
    return UpdateTaskReservationPathParams;
}(SpeakeasyBase));
export { UpdateTaskReservationPathParams };
var UpdateTaskReservationHeaders = /** @class */ (function (_super) {
    __extends(UpdateTaskReservationHeaders, _super);
    function UpdateTaskReservationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationHeaders.prototype, "ifMatch", void 0);
    return UpdateTaskReservationHeaders;
}(SpeakeasyBase));
export { UpdateTaskReservationHeaders };
export var UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum;
(function (UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum) {
    UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum["Get"] = "GET";
    UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum["Post"] = "POST";
    UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum || (UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum = {}));
export var UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum;
(function (UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum) {
    UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum["Get"] = "GET";
    UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum["Post"] = "POST";
    UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum || (UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum = {}));
export var UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum;
(function (UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum) {
    UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum["Get"] = "GET";
    UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum["Post"] = "POST";
    UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum || (UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum = {}));
export var UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum;
(function (UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum) {
    UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum["Get"] = "GET";
    UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum["Post"] = "POST";
    UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum || (UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum = {}));
export var UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum;
(function (UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum) {
    UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum["Head"] = "HEAD";
    UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum["Get"] = "GET";
    UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum["Post"] = "POST";
    UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum["Patch"] = "PATCH";
    UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum["Put"] = "PUT";
    UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum["Delete"] = "DELETE";
})(UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum || (UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum = {}));
var UpdateTaskReservationUpdateTaskReservationRequest = /** @class */ (function (_super) {
    __extends(UpdateTaskReservationUpdateTaskReservationRequest, _super);
    function UpdateTaskReservationUpdateTaskReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Beep;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "beep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BeepOnCustomerEntrance;" }),
        __metadata("design:type", Boolean)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "beepOnCustomerEntrance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallAccept;" }),
        __metadata("design:type", Boolean)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "callAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallFrom;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "callFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallRecord;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "callRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallStatusCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "callStatusCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallTimeout;" }),
        __metadata("design:type", Number)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "callTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallTo;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "callTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallUrl;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "callUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceRecord;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "conferenceRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceRecordingStatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "conferenceRecordingStatusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceRecordingStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "conferenceRecordingStatusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "conferenceStatusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "conferenceStatusCallbackEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "conferenceStatusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConferenceTrim;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "conferenceTrim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueFrom;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "dequeueFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeuePostWorkActivitySid;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "dequeuePostWorkActivitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueRecord;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "dequeueRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueStatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "dequeueStatusCallbackEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueStatusCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "dequeueStatusCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueTimeout;" }),
        __metadata("design:type", Number)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "dequeueTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DequeueTo;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "dequeueTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EarlyMedia;" }),
        __metadata("design:type", Boolean)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "earlyMedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EndConferenceOnCustomerExit;" }),
        __metadata("design:type", Boolean)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "endConferenceOnCustomerExit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EndConferenceOnExit;" }),
        __metadata("design:type", Boolean)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "endConferenceOnExit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=From;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Instruction;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "instruction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MaxParticipants;" }),
        __metadata("design:type", Number)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "maxParticipants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Muted;" }),
        __metadata("design:type", Boolean)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "muted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PostWorkActivitySid;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "postWorkActivitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Record;" }),
        __metadata("design:type", Boolean)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "record", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingChannels;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "recordingChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingStatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "recordingStatusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "recordingStatusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RedirectAccept;" }),
        __metadata("design:type", Boolean)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "redirectAccept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RedirectCallSid;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "redirectCallSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RedirectUrl;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Region;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ReservationStatus;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "reservationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SipAuthPassword;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "sipAuthPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SipAuthUsername;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "sipAuthUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StartConferenceOnEnter;" }),
        __metadata("design:type", Boolean)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "startConferenceOnEnter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "statusCallbackEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Supervisor;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "supervisor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SupervisorMode;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "supervisorMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Timeout;" }),
        __metadata("design:type", Number)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=To;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=WaitMethod;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "waitMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=WaitUrl;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "waitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=WorkerActivitySid;" }),
        __metadata("design:type", String)
    ], UpdateTaskReservationUpdateTaskReservationRequest.prototype, "workerActivitySid", void 0);
    return UpdateTaskReservationUpdateTaskReservationRequest;
}(SpeakeasyBase));
export { UpdateTaskReservationUpdateTaskReservationRequest };
var UpdateTaskReservationSecurity = /** @class */ (function (_super) {
    __extends(UpdateTaskReservationSecurity, _super);
    function UpdateTaskReservationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateTaskReservationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateTaskReservationSecurity;
}(SpeakeasyBase));
export { UpdateTaskReservationSecurity };
var UpdateTaskReservationRequest = /** @class */ (function (_super) {
    __extends(UpdateTaskReservationRequest, _super);
    function UpdateTaskReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTaskReservationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTaskReservationPathParams)
    ], UpdateTaskReservationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTaskReservationHeaders)
    ], UpdateTaskReservationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateTaskReservationUpdateTaskReservationRequest)
    ], UpdateTaskReservationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTaskReservationSecurity)
    ], UpdateTaskReservationRequest.prototype, "security", void 0);
    return UpdateTaskReservationRequest;
}(SpeakeasyBase));
export { UpdateTaskReservationRequest };
var UpdateTaskReservationResponse = /** @class */ (function (_super) {
    __extends(UpdateTaskReservationResponse, _super);
    function UpdateTaskReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTaskReservationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateTaskReservationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTaskTaskReservation)
    ], UpdateTaskReservationResponse.prototype, "taskrouterV1WorkspaceTaskTaskReservation", void 0);
    return UpdateTaskReservationResponse;
}(SpeakeasyBase));
export { UpdateTaskReservationResponse };
