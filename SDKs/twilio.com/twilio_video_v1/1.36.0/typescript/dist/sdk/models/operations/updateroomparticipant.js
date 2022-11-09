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
export var UPDATEROOMPARTICIPANT_SERVERS = [
    "https://video.twilio.com",
];
var UpdateRoomParticipantPathParams = /** @class */ (function (_super) {
    __extends(UpdateRoomParticipantPathParams, _super);
    function UpdateRoomParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], UpdateRoomParticipantPathParams.prototype, "roomSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateRoomParticipantPathParams.prototype, "sid", void 0);
    return UpdateRoomParticipantPathParams;
}(SpeakeasyBase));
export { UpdateRoomParticipantPathParams };
var UpdateRoomParticipantUpdateRoomParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateRoomParticipantUpdateRoomParticipantRequest, _super);
    function UpdateRoomParticipantUpdateRoomParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateRoomParticipantUpdateRoomParticipantRequest.prototype, "status", void 0);
    return UpdateRoomParticipantUpdateRoomParticipantRequest;
}(SpeakeasyBase));
export { UpdateRoomParticipantUpdateRoomParticipantRequest };
var UpdateRoomParticipantSecurity = /** @class */ (function (_super) {
    __extends(UpdateRoomParticipantSecurity, _super);
    function UpdateRoomParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateRoomParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateRoomParticipantSecurity;
}(SpeakeasyBase));
export { UpdateRoomParticipantSecurity };
var UpdateRoomParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateRoomParticipantRequest, _super);
    function UpdateRoomParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRoomParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRoomParticipantPathParams)
    ], UpdateRoomParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateRoomParticipantUpdateRoomParticipantRequest)
    ], UpdateRoomParticipantRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRoomParticipantSecurity)
    ], UpdateRoomParticipantRequest.prototype, "security", void 0);
    return UpdateRoomParticipantRequest;
}(SpeakeasyBase));
export { UpdateRoomParticipantRequest };
var UpdateRoomParticipantResponse = /** @class */ (function (_super) {
    __extends(UpdateRoomParticipantResponse, _super);
    function UpdateRoomParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRoomParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateRoomParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VideoV1RoomRoomParticipant)
    ], UpdateRoomParticipantResponse.prototype, "videoV1RoomRoomParticipant", void 0);
    return UpdateRoomParticipantResponse;
}(SpeakeasyBase));
export { UpdateRoomParticipantResponse };
