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
export var FetchConferenceParticipantServerList = [
    "https://insights.twilio.com",
];
var FetchConferenceParticipantPathParams = /** @class */ (function (_super) {
    __extends(FetchConferenceParticipantPathParams, _super);
    function FetchConferenceParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], FetchConferenceParticipantPathParams.prototype, "conferenceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" }),
        __metadata("design:type", String)
    ], FetchConferenceParticipantPathParams.prototype, "participantSid", void 0);
    return FetchConferenceParticipantPathParams;
}(SpeakeasyBase));
export { FetchConferenceParticipantPathParams };
var FetchConferenceParticipantQueryParams = /** @class */ (function (_super) {
    __extends(FetchConferenceParticipantQueryParams, _super);
    function FetchConferenceParticipantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Events" }),
        __metadata("design:type", String)
    ], FetchConferenceParticipantQueryParams.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Metrics" }),
        __metadata("design:type", String)
    ], FetchConferenceParticipantQueryParams.prototype, "metrics", void 0);
    return FetchConferenceParticipantQueryParams;
}(SpeakeasyBase));
export { FetchConferenceParticipantQueryParams };
var FetchConferenceParticipantSecurity = /** @class */ (function (_super) {
    __extends(FetchConferenceParticipantSecurity, _super);
    function FetchConferenceParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchConferenceParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchConferenceParticipantSecurity;
}(SpeakeasyBase));
export { FetchConferenceParticipantSecurity };
var FetchConferenceParticipantRequest = /** @class */ (function (_super) {
    __extends(FetchConferenceParticipantRequest, _super);
    function FetchConferenceParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchConferenceParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchConferenceParticipantPathParams)
    ], FetchConferenceParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchConferenceParticipantQueryParams)
    ], FetchConferenceParticipantRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchConferenceParticipantSecurity)
    ], FetchConferenceParticipantRequest.prototype, "security", void 0);
    return FetchConferenceParticipantRequest;
}(SpeakeasyBase));
export { FetchConferenceParticipantRequest };
var FetchConferenceParticipantResponse = /** @class */ (function (_super) {
    __extends(FetchConferenceParticipantResponse, _super);
    function FetchConferenceParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchConferenceParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchConferenceParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InsightsV1ConferenceConferenceParticipant)
    ], FetchConferenceParticipantResponse.prototype, "insightsV1ConferenceConferenceParticipant", void 0);
    return FetchConferenceParticipantResponse;
}(SpeakeasyBase));
export { FetchConferenceParticipantResponse };
