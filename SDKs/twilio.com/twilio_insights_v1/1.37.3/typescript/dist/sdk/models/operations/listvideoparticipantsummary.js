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
export var ListVideoParticipantSummaryServerList = [
    "https://insights.twilio.com",
];
var ListVideoParticipantSummaryPathParams = /** @class */ (function (_super) {
    __extends(ListVideoParticipantSummaryPathParams, _super);
    function ListVideoParticipantSummaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], ListVideoParticipantSummaryPathParams.prototype, "roomSid", void 0);
    return ListVideoParticipantSummaryPathParams;
}(SpeakeasyBase));
export { ListVideoParticipantSummaryPathParams };
var ListVideoParticipantSummaryQueryParams = /** @class */ (function (_super) {
    __extends(ListVideoParticipantSummaryQueryParams, _super);
    function ListVideoParticipantSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListVideoParticipantSummaryQueryParams.prototype, "pageSize", void 0);
    return ListVideoParticipantSummaryQueryParams;
}(SpeakeasyBase));
export { ListVideoParticipantSummaryQueryParams };
var ListVideoParticipantSummarySecurity = /** @class */ (function (_super) {
    __extends(ListVideoParticipantSummarySecurity, _super);
    function ListVideoParticipantSummarySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListVideoParticipantSummarySecurity.prototype, "accountSidAuthToken", void 0);
    return ListVideoParticipantSummarySecurity;
}(SpeakeasyBase));
export { ListVideoParticipantSummarySecurity };
var ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta = /** @class */ (function (_super) {
    __extends(ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta, _super);
    function ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta.prototype, "url", void 0);
    return ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta;
}(SpeakeasyBase));
export { ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta };
var ListVideoParticipantSummaryListVideoParticipantSummaryResponse = /** @class */ (function (_super) {
    __extends(ListVideoParticipantSummaryListVideoParticipantSummaryResponse, _super);
    function ListVideoParticipantSummaryListVideoParticipantSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta)
    ], ListVideoParticipantSummaryListVideoParticipantSummaryResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participants", elemType: shared.InsightsV1VideoRoomSummaryVideoParticipantSummary }),
        __metadata("design:type", Array)
    ], ListVideoParticipantSummaryListVideoParticipantSummaryResponse.prototype, "participants", void 0);
    return ListVideoParticipantSummaryListVideoParticipantSummaryResponse;
}(SpeakeasyBase));
export { ListVideoParticipantSummaryListVideoParticipantSummaryResponse };
var ListVideoParticipantSummaryRequest = /** @class */ (function (_super) {
    __extends(ListVideoParticipantSummaryRequest, _super);
    function ListVideoParticipantSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListVideoParticipantSummaryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVideoParticipantSummaryPathParams)
    ], ListVideoParticipantSummaryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVideoParticipantSummaryQueryParams)
    ], ListVideoParticipantSummaryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVideoParticipantSummarySecurity)
    ], ListVideoParticipantSummaryRequest.prototype, "security", void 0);
    return ListVideoParticipantSummaryRequest;
}(SpeakeasyBase));
export { ListVideoParticipantSummaryRequest };
var ListVideoParticipantSummaryResponse = /** @class */ (function (_super) {
    __extends(ListVideoParticipantSummaryResponse, _super);
    function ListVideoParticipantSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListVideoParticipantSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVideoParticipantSummaryListVideoParticipantSummaryResponse)
    ], ListVideoParticipantSummaryResponse.prototype, "listVideoParticipantSummaryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListVideoParticipantSummaryResponse.prototype, "statusCode", void 0);
    return ListVideoParticipantSummaryResponse;
}(SpeakeasyBase));
export { ListVideoParticipantSummaryResponse };
