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
export var FetchVideoParticipantSummaryServerList = [
    "https://insights.twilio.com",
];
var FetchVideoParticipantSummaryPathParams = /** @class */ (function (_super) {
    __extends(FetchVideoParticipantSummaryPathParams, _super);
    function FetchVideoParticipantSummaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" }),
        __metadata("design:type", String)
    ], FetchVideoParticipantSummaryPathParams.prototype, "participantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], FetchVideoParticipantSummaryPathParams.prototype, "roomSid", void 0);
    return FetchVideoParticipantSummaryPathParams;
}(SpeakeasyBase));
export { FetchVideoParticipantSummaryPathParams };
var FetchVideoParticipantSummarySecurity = /** @class */ (function (_super) {
    __extends(FetchVideoParticipantSummarySecurity, _super);
    function FetchVideoParticipantSummarySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchVideoParticipantSummarySecurity.prototype, "accountSidAuthToken", void 0);
    return FetchVideoParticipantSummarySecurity;
}(SpeakeasyBase));
export { FetchVideoParticipantSummarySecurity };
var FetchVideoParticipantSummaryRequest = /** @class */ (function (_super) {
    __extends(FetchVideoParticipantSummaryRequest, _super);
    function FetchVideoParticipantSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchVideoParticipantSummaryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchVideoParticipantSummaryPathParams)
    ], FetchVideoParticipantSummaryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchVideoParticipantSummarySecurity)
    ], FetchVideoParticipantSummaryRequest.prototype, "security", void 0);
    return FetchVideoParticipantSummaryRequest;
}(SpeakeasyBase));
export { FetchVideoParticipantSummaryRequest };
var FetchVideoParticipantSummaryResponse = /** @class */ (function (_super) {
    __extends(FetchVideoParticipantSummaryResponse, _super);
    function FetchVideoParticipantSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchVideoParticipantSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchVideoParticipantSummaryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InsightsV1VideoRoomSummaryVideoParticipantSummary)
    ], FetchVideoParticipantSummaryResponse.prototype, "insightsV1VideoRoomSummaryVideoParticipantSummary", void 0);
    return FetchVideoParticipantSummaryResponse;
}(SpeakeasyBase));
export { FetchVideoParticipantSummaryResponse };
