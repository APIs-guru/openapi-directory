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
export var ListConferenceRecordingServerList = [
    "https://api.twilio.com",
];
var ListConferenceRecordingPathParams = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingPathParams, _super);
    function ListConferenceRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingPathParams.prototype, "conferenceSid", void 0);
    return ListConferenceRecordingPathParams;
}(SpeakeasyBase));
export { ListConferenceRecordingPathParams };
var ListConferenceRecordingQueryParams = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingQueryParams, _super);
    function ListConferenceRecordingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated" }),
        __metadata("design:type", Date)
    ], ListConferenceRecordingQueryParams.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated<" }),
        __metadata("design:type", Date)
    ], ListConferenceRecordingQueryParams.prototype, "dateCreatedLessThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated>" }),
        __metadata("design:type", Date)
    ], ListConferenceRecordingQueryParams.prototype, "dateCreatedGreaterThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConferenceRecordingQueryParams.prototype, "pageSize", void 0);
    return ListConferenceRecordingQueryParams;
}(SpeakeasyBase));
export { ListConferenceRecordingQueryParams };
var ListConferenceRecordingSecurity = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingSecurity, _super);
    function ListConferenceRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConferenceRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConferenceRecordingSecurity;
}(SpeakeasyBase));
export { ListConferenceRecordingSecurity };
var ListConferenceRecordingListConferenceRecordingResponse = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingListConferenceRecordingResponse, _super);
    function ListConferenceRecordingListConferenceRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordings", elemType: shared.ApiV2010AccountConferenceConferenceRecording }),
        __metadata("design:type", Array)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "recordings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListConferenceRecordingListConferenceRecordingResponse.prototype, "uri", void 0);
    return ListConferenceRecordingListConferenceRecordingResponse;
}(SpeakeasyBase));
export { ListConferenceRecordingListConferenceRecordingResponse };
var ListConferenceRecordingRequest = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingRequest, _super);
    function ListConferenceRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListConferenceRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConferenceRecordingPathParams)
    ], ListConferenceRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConferenceRecordingQueryParams)
    ], ListConferenceRecordingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConferenceRecordingSecurity)
    ], ListConferenceRecordingRequest.prototype, "security", void 0);
    return ListConferenceRecordingRequest;
}(SpeakeasyBase));
export { ListConferenceRecordingRequest };
var ListConferenceRecordingResponse = /** @class */ (function (_super) {
    __extends(ListConferenceRecordingResponse, _super);
    function ListConferenceRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListConferenceRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConferenceRecordingListConferenceRecordingResponse)
    ], ListConferenceRecordingResponse.prototype, "listConferenceRecordingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListConferenceRecordingResponse.prototype, "statusCode", void 0);
    return ListConferenceRecordingResponse;
}(SpeakeasyBase));
export { ListConferenceRecordingResponse };
