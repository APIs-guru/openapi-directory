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
export var FETCHROOMPARTICIPANT_SERVERS = [
    "https://video.twilio.com",
];
var FetchRoomParticipantPathParams = /** @class */ (function (_super) {
    __extends(FetchRoomParticipantPathParams, _super);
    function FetchRoomParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], FetchRoomParticipantPathParams.prototype, "roomSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchRoomParticipantPathParams.prototype, "sid", void 0);
    return FetchRoomParticipantPathParams;
}(SpeakeasyBase));
export { FetchRoomParticipantPathParams };
var FetchRoomParticipantSecurity = /** @class */ (function (_super) {
    __extends(FetchRoomParticipantSecurity, _super);
    function FetchRoomParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchRoomParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchRoomParticipantSecurity;
}(SpeakeasyBase));
export { FetchRoomParticipantSecurity };
var FetchRoomParticipantRequest = /** @class */ (function (_super) {
    __extends(FetchRoomParticipantRequest, _super);
    function FetchRoomParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchRoomParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchRoomParticipantPathParams)
    ], FetchRoomParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchRoomParticipantSecurity)
    ], FetchRoomParticipantRequest.prototype, "security", void 0);
    return FetchRoomParticipantRequest;
}(SpeakeasyBase));
export { FetchRoomParticipantRequest };
var FetchRoomParticipantResponse = /** @class */ (function (_super) {
    __extends(FetchRoomParticipantResponse, _super);
    function FetchRoomParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchRoomParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchRoomParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VideoV1RoomRoomParticipant)
    ], FetchRoomParticipantResponse.prototype, "videoV1RoomRoomParticipant", void 0);
    return FetchRoomParticipantResponse;
}(SpeakeasyBase));
export { FetchRoomParticipantResponse };
