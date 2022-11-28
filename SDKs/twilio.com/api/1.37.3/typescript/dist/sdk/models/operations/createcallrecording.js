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
export var CreateCallRecordingServerList = [
    "https://api.twilio.com",
];
var CreateCallRecordingPathParams = /** @class */ (function (_super) {
    __extends(CreateCallRecordingPathParams, _super);
    function CreateCallRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateCallRecordingPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], CreateCallRecordingPathParams.prototype, "callSid", void 0);
    return CreateCallRecordingPathParams;
}(SpeakeasyBase));
export { CreateCallRecordingPathParams };
export var CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum;
(function (CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum) {
    CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum["Get"] = "GET";
    CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum["Post"] = "POST";
    CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum["Put"] = "PUT";
    CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum || (CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum = {}));
var CreateCallRecordingCreateCallRecordingRequest = /** @class */ (function (_super) {
    __extends(CreateCallRecordingCreateCallRecordingRequest, _super);
    function CreateCallRecordingCreateCallRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingChannels;" }),
        __metadata("design:type", String)
    ], CreateCallRecordingCreateCallRecordingRequest.prototype, "recordingChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingStatusCallback;" }),
        __metadata("design:type", String)
    ], CreateCallRecordingCreateCallRecordingRequest.prototype, "recordingStatusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackEvent;" }),
        __metadata("design:type", Array)
    ], CreateCallRecordingCreateCallRecordingRequest.prototype, "recordingStatusCallbackEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateCallRecordingCreateCallRecordingRequest.prototype, "recordingStatusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RecordingTrack;" }),
        __metadata("design:type", String)
    ], CreateCallRecordingCreateCallRecordingRequest.prototype, "recordingTrack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Trim;" }),
        __metadata("design:type", String)
    ], CreateCallRecordingCreateCallRecordingRequest.prototype, "trim", void 0);
    return CreateCallRecordingCreateCallRecordingRequest;
}(SpeakeasyBase));
export { CreateCallRecordingCreateCallRecordingRequest };
var CreateCallRecordingSecurity = /** @class */ (function (_super) {
    __extends(CreateCallRecordingSecurity, _super);
    function CreateCallRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCallRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCallRecordingSecurity;
}(SpeakeasyBase));
export { CreateCallRecordingSecurity };
var CreateCallRecordingRequest = /** @class */ (function (_super) {
    __extends(CreateCallRecordingRequest, _super);
    function CreateCallRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCallRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCallRecordingPathParams)
    ], CreateCallRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCallRecordingCreateCallRecordingRequest)
    ], CreateCallRecordingRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCallRecordingSecurity)
    ], CreateCallRecordingRequest.prototype, "security", void 0);
    return CreateCallRecordingRequest;
}(SpeakeasyBase));
export { CreateCallRecordingRequest };
var CreateCallRecordingResponse = /** @class */ (function (_super) {
    __extends(CreateCallRecordingResponse, _super);
    function CreateCallRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCallRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCallRecordingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountCallCallRecording)
    ], CreateCallRecordingResponse.prototype, "apiV2010AccountCallCallRecording", void 0);
    return CreateCallRecordingResponse;
}(SpeakeasyBase));
export { CreateCallRecordingResponse };
