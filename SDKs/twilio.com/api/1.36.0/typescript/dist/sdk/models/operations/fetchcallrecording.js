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
export var FETCHCALLRECORDING_SERVERS = [
    "https://api.twilio.com",
];
var FetchCallRecordingPathParams = /** @class */ (function (_super) {
    __extends(FetchCallRecordingPathParams, _super);
    function FetchCallRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchCallRecordingPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], FetchCallRecordingPathParams.prototype, "callSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchCallRecordingPathParams.prototype, "sid", void 0);
    return FetchCallRecordingPathParams;
}(SpeakeasyBase));
export { FetchCallRecordingPathParams };
var FetchCallRecordingSecurity = /** @class */ (function (_super) {
    __extends(FetchCallRecordingSecurity, _super);
    function FetchCallRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchCallRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchCallRecordingSecurity;
}(SpeakeasyBase));
export { FetchCallRecordingSecurity };
var FetchCallRecordingRequest = /** @class */ (function (_super) {
    __extends(FetchCallRecordingRequest, _super);
    function FetchCallRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchCallRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchCallRecordingPathParams)
    ], FetchCallRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchCallRecordingSecurity)
    ], FetchCallRecordingRequest.prototype, "security", void 0);
    return FetchCallRecordingRequest;
}(SpeakeasyBase));
export { FetchCallRecordingRequest };
var FetchCallRecordingResponse = /** @class */ (function (_super) {
    __extends(FetchCallRecordingResponse, _super);
    function FetchCallRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchCallRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchCallRecordingResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountCallCallRecording)
    ], FetchCallRecordingResponse.prototype, "apiV2010AccountCallCallRecording", void 0);
    return FetchCallRecordingResponse;
}(SpeakeasyBase));
export { FetchCallRecordingResponse };
