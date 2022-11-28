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
export var CreateCallServerList = [
    "https://api.twilio.com",
];
var CreateCallPathParams = /** @class */ (function (_super) {
    __extends(CreateCallPathParams, _super);
    function CreateCallPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateCallPathParams.prototype, "accountSid", void 0);
    return CreateCallPathParams;
}(SpeakeasyBase));
export { CreateCallPathParams };
export var CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum;
(function (CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum) {
    CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum["Get"] = "GET";
    CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum["Post"] = "POST";
    CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum["Put"] = "PUT";
    CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum || (CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum = {}));
export var CreateCallCreateCallRequestFallbackMethodEnum;
(function (CreateCallCreateCallRequestFallbackMethodEnum) {
    CreateCallCreateCallRequestFallbackMethodEnum["Head"] = "HEAD";
    CreateCallCreateCallRequestFallbackMethodEnum["Get"] = "GET";
    CreateCallCreateCallRequestFallbackMethodEnum["Post"] = "POST";
    CreateCallCreateCallRequestFallbackMethodEnum["Patch"] = "PATCH";
    CreateCallCreateCallRequestFallbackMethodEnum["Put"] = "PUT";
    CreateCallCreateCallRequestFallbackMethodEnum["Delete"] = "DELETE";
})(CreateCallCreateCallRequestFallbackMethodEnum || (CreateCallCreateCallRequestFallbackMethodEnum = {}));
export var CreateCallCreateCallRequestMethodEnum;
(function (CreateCallCreateCallRequestMethodEnum) {
    CreateCallCreateCallRequestMethodEnum["Head"] = "HEAD";
    CreateCallCreateCallRequestMethodEnum["Get"] = "GET";
    CreateCallCreateCallRequestMethodEnum["Post"] = "POST";
    CreateCallCreateCallRequestMethodEnum["Patch"] = "PATCH";
    CreateCallCreateCallRequestMethodEnum["Put"] = "PUT";
    CreateCallCreateCallRequestMethodEnum["Delete"] = "DELETE";
})(CreateCallCreateCallRequestMethodEnum || (CreateCallCreateCallRequestMethodEnum = {}));
export var CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum;
(function (CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum) {
    CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum["Get"] = "GET";
    CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum["Post"] = "POST";
    CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum["Put"] = "PUT";
    CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum || (CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum = {}));
export var CreateCallCreateCallRequestStatusCallbackMethodEnum;
(function (CreateCallCreateCallRequestStatusCallbackMethodEnum) {
    CreateCallCreateCallRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateCallCreateCallRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateCallCreateCallRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateCallCreateCallRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateCallCreateCallRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateCallCreateCallRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateCallCreateCallRequestStatusCallbackMethodEnum || (CreateCallCreateCallRequestStatusCallbackMethodEnum = {}));
var CreateCallCreateCallRequest = /** @class */ (function (_super) {
    __extends(CreateCallCreateCallRequest, _super);
    function CreateCallCreateCallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ApplicationSid;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "applicationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AsyncAmd;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "asyncAmd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AsyncAmdStatusCallback;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "asyncAmdStatusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AsyncAmdStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "asyncAmdStatusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Byoc;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "byoc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallReason;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "callReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallToken;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "callToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallerId;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "callerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "fallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "fallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=From;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MachineDetection;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "machineDetection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MachineDetectionSilenceTimeout;" }),
        __metadata("design:type", Number)
    ], CreateCallCreateCallRequest.prototype, "machineDetectionSilenceTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MachineDetectionSpeechEndThreshold;" }),
        __metadata("design:type", Number)
    ], CreateCallCreateCallRequest.prototype, "machineDetectionSpeechEndThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MachineDetectionSpeechThreshold;" }),
        __metadata("design:type", Number)
    ], CreateCallCreateCallRequest.prototype, "machineDetectionSpeechThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MachineDetectionTimeout;" }),
        __metadata("design:type", Number)
    ], CreateCallCreateCallRequest.prototype, "machineDetectionTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Method;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Record;" }),
        __metadata("design:type", Boolean)
    ], CreateCallCreateCallRequest.prototype, "record", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingChannels;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "recordingChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingStatusCallback;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "recordingStatusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], CreateCallCreateCallRequest.prototype, "recordingStatusCallbackEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "recordingStatusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingTrack;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "recordingTrack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SendDigits;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "sendDigits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SipAuthPassword;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "sipAuthPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SipAuthUsername;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "sipAuthUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], CreateCallCreateCallRequest.prototype, "statusCallbackEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TimeLimit;" }),
        __metadata("design:type", Number)
    ], CreateCallCreateCallRequest.prototype, "timeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Timeout;" }),
        __metadata("design:type", Number)
    ], CreateCallCreateCallRequest.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=To;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Trim;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Twiml;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "twiml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Url;" }),
        __metadata("design:type", String)
    ], CreateCallCreateCallRequest.prototype, "url", void 0);
    return CreateCallCreateCallRequest;
}(SpeakeasyBase));
export { CreateCallCreateCallRequest };
var CreateCallSecurity = /** @class */ (function (_super) {
    __extends(CreateCallSecurity, _super);
    function CreateCallSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCallSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCallSecurity;
}(SpeakeasyBase));
export { CreateCallSecurity };
var CreateCallRequest = /** @class */ (function (_super) {
    __extends(CreateCallRequest, _super);
    function CreateCallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCallRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCallPathParams)
    ], CreateCallRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCallCreateCallRequest)
    ], CreateCallRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCallSecurity)
    ], CreateCallRequest.prototype, "security", void 0);
    return CreateCallRequest;
}(SpeakeasyBase));
export { CreateCallRequest };
var CreateCallResponse = /** @class */ (function (_super) {
    __extends(CreateCallResponse, _super);
    function CreateCallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCallResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCallResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountCall)
    ], CreateCallResponse.prototype, "apiV2010AccountCall", void 0);
    return CreateCallResponse;
}(SpeakeasyBase));
export { CreateCallResponse };
