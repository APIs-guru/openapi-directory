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
export var FetchRoomRecordingRuleServerList = [
    "https://video.twilio.com",
];
var FetchRoomRecordingRulePathParams = /** @class */ (function (_super) {
    __extends(FetchRoomRecordingRulePathParams, _super);
    function FetchRoomRecordingRulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], FetchRoomRecordingRulePathParams.prototype, "roomSid", void 0);
    return FetchRoomRecordingRulePathParams;
}(SpeakeasyBase));
export { FetchRoomRecordingRulePathParams };
var FetchRoomRecordingRuleSecurity = /** @class */ (function (_super) {
    __extends(FetchRoomRecordingRuleSecurity, _super);
    function FetchRoomRecordingRuleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchRoomRecordingRuleSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchRoomRecordingRuleSecurity;
}(SpeakeasyBase));
export { FetchRoomRecordingRuleSecurity };
var FetchRoomRecordingRuleRequest = /** @class */ (function (_super) {
    __extends(FetchRoomRecordingRuleRequest, _super);
    function FetchRoomRecordingRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchRoomRecordingRuleRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchRoomRecordingRulePathParams)
    ], FetchRoomRecordingRuleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchRoomRecordingRuleSecurity)
    ], FetchRoomRecordingRuleRequest.prototype, "security", void 0);
    return FetchRoomRecordingRuleRequest;
}(SpeakeasyBase));
export { FetchRoomRecordingRuleRequest };
var FetchRoomRecordingRuleResponse = /** @class */ (function (_super) {
    __extends(FetchRoomRecordingRuleResponse, _super);
    function FetchRoomRecordingRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchRoomRecordingRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchRoomRecordingRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VideoV1RoomRoomRecordingRule)
    ], FetchRoomRecordingRuleResponse.prototype, "videoV1RoomRoomRecordingRule", void 0);
    return FetchRoomRecordingRuleResponse;
}(SpeakeasyBase));
export { FetchRoomRecordingRuleResponse };
