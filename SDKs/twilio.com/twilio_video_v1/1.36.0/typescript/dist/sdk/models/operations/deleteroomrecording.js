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
export var DELETEROOMRECORDING_SERVERS = [
    "https://video.twilio.com",
];
var DeleteRoomRecordingPathParams = /** @class */ (function (_super) {
    __extends(DeleteRoomRecordingPathParams, _super);
    function DeleteRoomRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], DeleteRoomRecordingPathParams.prototype, "roomSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteRoomRecordingPathParams.prototype, "sid", void 0);
    return DeleteRoomRecordingPathParams;
}(SpeakeasyBase));
export { DeleteRoomRecordingPathParams };
var DeleteRoomRecordingSecurity = /** @class */ (function (_super) {
    __extends(DeleteRoomRecordingSecurity, _super);
    function DeleteRoomRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteRoomRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteRoomRecordingSecurity;
}(SpeakeasyBase));
export { DeleteRoomRecordingSecurity };
var DeleteRoomRecordingRequest = /** @class */ (function (_super) {
    __extends(DeleteRoomRecordingRequest, _super);
    function DeleteRoomRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteRoomRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteRoomRecordingPathParams)
    ], DeleteRoomRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteRoomRecordingSecurity)
    ], DeleteRoomRecordingRequest.prototype, "security", void 0);
    return DeleteRoomRecordingRequest;
}(SpeakeasyBase));
export { DeleteRoomRecordingRequest };
var DeleteRoomRecordingResponse = /** @class */ (function (_super) {
    __extends(DeleteRoomRecordingResponse, _super);
    function DeleteRoomRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteRoomRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteRoomRecordingResponse.prototype, "statusCode", void 0);
    return DeleteRoomRecordingResponse;
}(SpeakeasyBase));
export { DeleteRoomRecordingResponse };
