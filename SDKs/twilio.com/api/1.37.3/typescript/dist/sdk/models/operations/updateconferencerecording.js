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
export var UpdateConferenceRecordingServerList = [
    "https://api.twilio.com",
];
var UpdateConferenceRecordingPathParams = /** @class */ (function (_super) {
    __extends(UpdateConferenceRecordingPathParams, _super);
    function UpdateConferenceRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateConferenceRecordingPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], UpdateConferenceRecordingPathParams.prototype, "conferenceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateConferenceRecordingPathParams.prototype, "sid", void 0);
    return UpdateConferenceRecordingPathParams;
}(SpeakeasyBase));
export { UpdateConferenceRecordingPathParams };
var UpdateConferenceRecordingUpdateConferenceRecordingRequest = /** @class */ (function (_super) {
    __extends(UpdateConferenceRecordingUpdateConferenceRecordingRequest, _super);
    function UpdateConferenceRecordingUpdateConferenceRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PauseBehavior;" }),
        __metadata("design:type", String)
    ], UpdateConferenceRecordingUpdateConferenceRecordingRequest.prototype, "pauseBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateConferenceRecordingUpdateConferenceRecordingRequest.prototype, "status", void 0);
    return UpdateConferenceRecordingUpdateConferenceRecordingRequest;
}(SpeakeasyBase));
export { UpdateConferenceRecordingUpdateConferenceRecordingRequest };
var UpdateConferenceRecordingSecurity = /** @class */ (function (_super) {
    __extends(UpdateConferenceRecordingSecurity, _super);
    function UpdateConferenceRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateConferenceRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateConferenceRecordingSecurity;
}(SpeakeasyBase));
export { UpdateConferenceRecordingSecurity };
var UpdateConferenceRecordingRequest = /** @class */ (function (_super) {
    __extends(UpdateConferenceRecordingRequest, _super);
    function UpdateConferenceRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateConferenceRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateConferenceRecordingPathParams)
    ], UpdateConferenceRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateConferenceRecordingUpdateConferenceRecordingRequest)
    ], UpdateConferenceRecordingRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateConferenceRecordingSecurity)
    ], UpdateConferenceRecordingRequest.prototype, "security", void 0);
    return UpdateConferenceRecordingRequest;
}(SpeakeasyBase));
export { UpdateConferenceRecordingRequest };
var UpdateConferenceRecordingResponse = /** @class */ (function (_super) {
    __extends(UpdateConferenceRecordingResponse, _super);
    function UpdateConferenceRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateConferenceRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateConferenceRecordingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountConferenceConferenceRecording)
    ], UpdateConferenceRecordingResponse.prototype, "apiV2010AccountConferenceConferenceRecording", void 0);
    return UpdateConferenceRecordingResponse;
}(SpeakeasyBase));
export { UpdateConferenceRecordingResponse };
