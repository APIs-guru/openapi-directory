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
export var FETCHCONFERENCERECORDING_SERVERS = [
    "https://api.twilio.com",
];
var FetchConferenceRecordingPathParams = /** @class */ (function (_super) {
    __extends(FetchConferenceRecordingPathParams, _super);
    function FetchConferenceRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchConferenceRecordingPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], FetchConferenceRecordingPathParams.prototype, "conferenceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchConferenceRecordingPathParams.prototype, "sid", void 0);
    return FetchConferenceRecordingPathParams;
}(SpeakeasyBase));
export { FetchConferenceRecordingPathParams };
var FetchConferenceRecordingSecurity = /** @class */ (function (_super) {
    __extends(FetchConferenceRecordingSecurity, _super);
    function FetchConferenceRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchConferenceRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchConferenceRecordingSecurity;
}(SpeakeasyBase));
export { FetchConferenceRecordingSecurity };
var FetchConferenceRecordingRequest = /** @class */ (function (_super) {
    __extends(FetchConferenceRecordingRequest, _super);
    function FetchConferenceRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchConferenceRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchConferenceRecordingPathParams)
    ], FetchConferenceRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchConferenceRecordingSecurity)
    ], FetchConferenceRecordingRequest.prototype, "security", void 0);
    return FetchConferenceRecordingRequest;
}(SpeakeasyBase));
export { FetchConferenceRecordingRequest };
var FetchConferenceRecordingResponse = /** @class */ (function (_super) {
    __extends(FetchConferenceRecordingResponse, _super);
    function FetchConferenceRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchConferenceRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchConferenceRecordingResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountConferenceConferenceRecording)
    ], FetchConferenceRecordingResponse.prototype, "apiV2010AccountConferenceConferenceRecording", void 0);
    return FetchConferenceRecordingResponse;
}(SpeakeasyBase));
export { FetchConferenceRecordingResponse };
