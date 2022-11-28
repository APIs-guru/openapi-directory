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
export var FetchRoomRecordingServerList = [
    "https://video.twilio.com",
];
var FetchRoomRecordingPathParams = /** @class */ (function (_super) {
    __extends(FetchRoomRecordingPathParams, _super);
    function FetchRoomRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], FetchRoomRecordingPathParams.prototype, "roomSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchRoomRecordingPathParams.prototype, "sid", void 0);
    return FetchRoomRecordingPathParams;
}(SpeakeasyBase));
export { FetchRoomRecordingPathParams };
var FetchRoomRecordingSecurity = /** @class */ (function (_super) {
    __extends(FetchRoomRecordingSecurity, _super);
    function FetchRoomRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchRoomRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchRoomRecordingSecurity;
}(SpeakeasyBase));
export { FetchRoomRecordingSecurity };
var FetchRoomRecordingRequest = /** @class */ (function (_super) {
    __extends(FetchRoomRecordingRequest, _super);
    function FetchRoomRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchRoomRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchRoomRecordingPathParams)
    ], FetchRoomRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchRoomRecordingSecurity)
    ], FetchRoomRecordingRequest.prototype, "security", void 0);
    return FetchRoomRecordingRequest;
}(SpeakeasyBase));
export { FetchRoomRecordingRequest };
var FetchRoomRecordingResponse = /** @class */ (function (_super) {
    __extends(FetchRoomRecordingResponse, _super);
    function FetchRoomRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchRoomRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchRoomRecordingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VideoV1RoomRoomRecording)
    ], FetchRoomRecordingResponse.prototype, "videoV1RoomRoomRecording", void 0);
    return FetchRoomRecordingResponse;
}(SpeakeasyBase));
export { FetchRoomRecordingResponse };
