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
export var UPDATEROOMRECORDINGRULE_SERVERS = [
    "https://video.twilio.com",
];
var UpdateRoomRecordingRulePathParams = /** @class */ (function (_super) {
    __extends(UpdateRoomRecordingRulePathParams, _super);
    function UpdateRoomRecordingRulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], UpdateRoomRecordingRulePathParams.prototype, "roomSid", void 0);
    return UpdateRoomRecordingRulePathParams;
}(SpeakeasyBase));
export { UpdateRoomRecordingRulePathParams };
var UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest = /** @class */ (function (_super) {
    __extends(UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest, _super);
    function UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Rules;" }),
        __metadata("design:type", Object)
    ], UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest.prototype, "rules", void 0);
    return UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest;
}(SpeakeasyBase));
export { UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest };
var UpdateRoomRecordingRuleSecurity = /** @class */ (function (_super) {
    __extends(UpdateRoomRecordingRuleSecurity, _super);
    function UpdateRoomRecordingRuleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateRoomRecordingRuleSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateRoomRecordingRuleSecurity;
}(SpeakeasyBase));
export { UpdateRoomRecordingRuleSecurity };
var UpdateRoomRecordingRuleRequest = /** @class */ (function (_super) {
    __extends(UpdateRoomRecordingRuleRequest, _super);
    function UpdateRoomRecordingRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRoomRecordingRuleRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRoomRecordingRulePathParams)
    ], UpdateRoomRecordingRuleRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest)
    ], UpdateRoomRecordingRuleRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRoomRecordingRuleSecurity)
    ], UpdateRoomRecordingRuleRequest.prototype, "security", void 0);
    return UpdateRoomRecordingRuleRequest;
}(SpeakeasyBase));
export { UpdateRoomRecordingRuleRequest };
var UpdateRoomRecordingRuleResponse = /** @class */ (function (_super) {
    __extends(UpdateRoomRecordingRuleResponse, _super);
    function UpdateRoomRecordingRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRoomRecordingRuleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateRoomRecordingRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VideoV1RoomRoomRecordingRule)
    ], UpdateRoomRecordingRuleResponse.prototype, "videoV1RoomRoomRecordingRule", void 0);
    return UpdateRoomRecordingRuleResponse;
}(SpeakeasyBase));
export { UpdateRoomRecordingRuleResponse };
