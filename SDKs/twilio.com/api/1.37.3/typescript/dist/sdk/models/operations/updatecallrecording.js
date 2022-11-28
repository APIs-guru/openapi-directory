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
export var UpdateCallRecordingServerList = [
    "https://api.twilio.com",
];
var UpdateCallRecordingPathParams = /** @class */ (function (_super) {
    __extends(UpdateCallRecordingPathParams, _super);
    function UpdateCallRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateCallRecordingPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], UpdateCallRecordingPathParams.prototype, "callSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateCallRecordingPathParams.prototype, "sid", void 0);
    return UpdateCallRecordingPathParams;
}(SpeakeasyBase));
export { UpdateCallRecordingPathParams };
var UpdateCallRecordingUpdateCallRecordingRequest = /** @class */ (function (_super) {
    __extends(UpdateCallRecordingUpdateCallRecordingRequest, _super);
    function UpdateCallRecordingUpdateCallRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PauseBehavior;" }),
        __metadata("design:type", String)
    ], UpdateCallRecordingUpdateCallRecordingRequest.prototype, "pauseBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateCallRecordingUpdateCallRecordingRequest.prototype, "status", void 0);
    return UpdateCallRecordingUpdateCallRecordingRequest;
}(SpeakeasyBase));
export { UpdateCallRecordingUpdateCallRecordingRequest };
var UpdateCallRecordingSecurity = /** @class */ (function (_super) {
    __extends(UpdateCallRecordingSecurity, _super);
    function UpdateCallRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateCallRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateCallRecordingSecurity;
}(SpeakeasyBase));
export { UpdateCallRecordingSecurity };
var UpdateCallRecordingRequest = /** @class */ (function (_super) {
    __extends(UpdateCallRecordingRequest, _super);
    function UpdateCallRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCallRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCallRecordingPathParams)
    ], UpdateCallRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateCallRecordingUpdateCallRecordingRequest)
    ], UpdateCallRecordingRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCallRecordingSecurity)
    ], UpdateCallRecordingRequest.prototype, "security", void 0);
    return UpdateCallRecordingRequest;
}(SpeakeasyBase));
export { UpdateCallRecordingRequest };
var UpdateCallRecordingResponse = /** @class */ (function (_super) {
    __extends(UpdateCallRecordingResponse, _super);
    function UpdateCallRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCallRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCallRecordingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountCallCallRecording)
    ], UpdateCallRecordingResponse.prototype, "apiV2010AccountCallCallRecording", void 0);
    return UpdateCallRecordingResponse;
}(SpeakeasyBase));
export { UpdateCallRecordingResponse };
