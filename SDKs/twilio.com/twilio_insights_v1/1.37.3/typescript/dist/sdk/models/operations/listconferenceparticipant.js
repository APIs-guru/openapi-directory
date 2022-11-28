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
export var ListConferenceParticipantServerList = [
    "https://insights.twilio.com",
];
var ListConferenceParticipantPathParams = /** @class */ (function (_super) {
    __extends(ListConferenceParticipantPathParams, _super);
    function ListConferenceParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], ListConferenceParticipantPathParams.prototype, "conferenceSid", void 0);
    return ListConferenceParticipantPathParams;
}(SpeakeasyBase));
export { ListConferenceParticipantPathParams };
var ListConferenceParticipantQueryParams = /** @class */ (function (_super) {
    __extends(ListConferenceParticipantQueryParams, _super);
    function ListConferenceParticipantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Events" }),
        __metadata("design:type", String)
    ], ListConferenceParticipantQueryParams.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Label" }),
        __metadata("design:type", String)
    ], ListConferenceParticipantQueryParams.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConferenceParticipantQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ParticipantSid" }),
        __metadata("design:type", String)
    ], ListConferenceParticipantQueryParams.prototype, "participantSid", void 0);
    return ListConferenceParticipantQueryParams;
}(SpeakeasyBase));
export { ListConferenceParticipantQueryParams };
var ListConferenceParticipantSecurity = /** @class */ (function (_super) {
    __extends(ListConferenceParticipantSecurity, _super);
    function ListConferenceParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConferenceParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConferenceParticipantSecurity;
}(SpeakeasyBase));
export { ListConferenceParticipantSecurity };
var ListConferenceParticipantListConferenceParticipantResponseMeta = /** @class */ (function (_super) {
    __extends(ListConferenceParticipantListConferenceParticipantResponseMeta, _super);
    function ListConferenceParticipantListConferenceParticipantResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListConferenceParticipantListConferenceParticipantResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListConferenceParticipantListConferenceParticipantResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListConferenceParticipantListConferenceParticipantResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConferenceParticipantListConferenceParticipantResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConferenceParticipantListConferenceParticipantResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListConferenceParticipantListConferenceParticipantResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListConferenceParticipantListConferenceParticipantResponseMeta.prototype, "url", void 0);
    return ListConferenceParticipantListConferenceParticipantResponseMeta;
}(SpeakeasyBase));
export { ListConferenceParticipantListConferenceParticipantResponseMeta };
var ListConferenceParticipantListConferenceParticipantResponse = /** @class */ (function (_super) {
    __extends(ListConferenceParticipantListConferenceParticipantResponse, _super);
    function ListConferenceParticipantListConferenceParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListConferenceParticipantListConferenceParticipantResponseMeta)
    ], ListConferenceParticipantListConferenceParticipantResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participants", elemType: shared.InsightsV1ConferenceConferenceParticipant }),
        __metadata("design:type", Array)
    ], ListConferenceParticipantListConferenceParticipantResponse.prototype, "participants", void 0);
    return ListConferenceParticipantListConferenceParticipantResponse;
}(SpeakeasyBase));
export { ListConferenceParticipantListConferenceParticipantResponse };
var ListConferenceParticipantRequest = /** @class */ (function (_super) {
    __extends(ListConferenceParticipantRequest, _super);
    function ListConferenceParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListConferenceParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConferenceParticipantPathParams)
    ], ListConferenceParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConferenceParticipantQueryParams)
    ], ListConferenceParticipantRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConferenceParticipantSecurity)
    ], ListConferenceParticipantRequest.prototype, "security", void 0);
    return ListConferenceParticipantRequest;
}(SpeakeasyBase));
export { ListConferenceParticipantRequest };
var ListConferenceParticipantResponse = /** @class */ (function (_super) {
    __extends(ListConferenceParticipantResponse, _super);
    function ListConferenceParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListConferenceParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConferenceParticipantListConferenceParticipantResponse)
    ], ListConferenceParticipantResponse.prototype, "listConferenceParticipantResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListConferenceParticipantResponse.prototype, "statusCode", void 0);
    return ListConferenceParticipantResponse;
}(SpeakeasyBase));
export { ListConferenceParticipantResponse };
