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
export var CREATEROOM_SERVERS = [
    "https://video.twilio.com",
];
export var CreateRoomCreateRoomRequestStatusCallbackMethodEnum;
(function (CreateRoomCreateRoomRequestStatusCallbackMethodEnum) {
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateRoomCreateRoomRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateRoomCreateRoomRequestStatusCallbackMethodEnum || (CreateRoomCreateRoomRequestStatusCallbackMethodEnum = {}));
var CreateRoomCreateRoomRequest = /** @class */ (function (_super) {
    __extends(CreateRoomCreateRoomRequest, _super);
    function CreateRoomCreateRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AudioOnly;" }),
        __metadata("design:type", Boolean)
    ], CreateRoomCreateRoomRequest.prototype, "audioOnly", void 0);
    __decorate([
        Metadata({ data: "form, name=EmptyRoomTimeout;" }),
        __metadata("design:type", Number)
    ], CreateRoomCreateRoomRequest.prototype, "emptyRoomTimeout", void 0);
    __decorate([
        Metadata({ data: "form, name=EnableTurn;" }),
        __metadata("design:type", Boolean)
    ], CreateRoomCreateRoomRequest.prototype, "enableTurn", void 0);
    __decorate([
        Metadata({ data: "form, name=LargeRoom;" }),
        __metadata("design:type", Boolean)
    ], CreateRoomCreateRoomRequest.prototype, "largeRoom", void 0);
    __decorate([
        Metadata({ data: "form, name=MaxParticipantDuration;" }),
        __metadata("design:type", Number)
    ], CreateRoomCreateRoomRequest.prototype, "maxParticipantDuration", void 0);
    __decorate([
        Metadata({ data: "form, name=MaxParticipants;" }),
        __metadata("design:type", Number)
    ], CreateRoomCreateRoomRequest.prototype, "maxParticipants", void 0);
    __decorate([
        Metadata({ data: "form, name=MediaRegion;" }),
        __metadata("design:type", String)
    ], CreateRoomCreateRoomRequest.prototype, "mediaRegion", void 0);
    __decorate([
        Metadata({ data: "form, name=RecordParticipantsOnConnect;" }),
        __metadata("design:type", Boolean)
    ], CreateRoomCreateRoomRequest.prototype, "recordParticipantsOnConnect", void 0);
    __decorate([
        Metadata({ data: "form, name=RecordingRules;" }),
        __metadata("design:type", Object)
    ], CreateRoomCreateRoomRequest.prototype, "recordingRules", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateRoomCreateRoomRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateRoomCreateRoomRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=Type;" }),
        __metadata("design:type", String)
    ], CreateRoomCreateRoomRequest.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateRoomCreateRoomRequest.prototype, "uniqueName", void 0);
    __decorate([
        Metadata({ data: "form, name=UnusedRoomTimeout;" }),
        __metadata("design:type", Number)
    ], CreateRoomCreateRoomRequest.prototype, "unusedRoomTimeout", void 0);
    __decorate([
        Metadata({ data: "form, name=VideoCodecs;" }),
        __metadata("design:type", Array)
    ], CreateRoomCreateRoomRequest.prototype, "videoCodecs", void 0);
    return CreateRoomCreateRoomRequest;
}(SpeakeasyBase));
export { CreateRoomCreateRoomRequest };
var CreateRoomSecurity = /** @class */ (function (_super) {
    __extends(CreateRoomSecurity, _super);
    function CreateRoomSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateRoomSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateRoomSecurity;
}(SpeakeasyBase));
export { CreateRoomSecurity };
var CreateRoomRequest = /** @class */ (function (_super) {
    __extends(CreateRoomRequest, _super);
    function CreateRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateRoomRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateRoomCreateRoomRequest)
    ], CreateRoomRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateRoomSecurity)
    ], CreateRoomRequest.prototype, "security", void 0);
    return CreateRoomRequest;
}(SpeakeasyBase));
export { CreateRoomRequest };
var CreateRoomResponse = /** @class */ (function (_super) {
    __extends(CreateRoomResponse, _super);
    function CreateRoomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateRoomResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateRoomResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VideoV1Room)
    ], CreateRoomResponse.prototype, "videoV1Room", void 0);
    return CreateRoomResponse;
}(SpeakeasyBase));
export { CreateRoomResponse };
