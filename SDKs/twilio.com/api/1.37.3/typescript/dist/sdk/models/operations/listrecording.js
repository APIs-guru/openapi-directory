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
export var ListRecordingServerList = [
    "https://api.twilio.com",
];
var ListRecordingPathParams = /** @class */ (function (_super) {
    __extends(ListRecordingPathParams, _super);
    function ListRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListRecordingPathParams.prototype, "accountSid", void 0);
    return ListRecordingPathParams;
}(SpeakeasyBase));
export { ListRecordingPathParams };
var ListRecordingQueryParams = /** @class */ (function (_super) {
    __extends(ListRecordingQueryParams, _super);
    function ListRecordingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CallSid" }),
        __metadata("design:type", String)
    ], ListRecordingQueryParams.prototype, "callSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], ListRecordingQueryParams.prototype, "conferenceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated" }),
        __metadata("design:type", Date)
    ], ListRecordingQueryParams.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated<" }),
        __metadata("design:type", Date)
    ], ListRecordingQueryParams.prototype, "dateCreatedLessThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated>" }),
        __metadata("design:type", Date)
    ], ListRecordingQueryParams.prototype, "dateCreatedGreaterThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeSoftDeleted" }),
        __metadata("design:type", Boolean)
    ], ListRecordingQueryParams.prototype, "includeSoftDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRecordingQueryParams.prototype, "pageSize", void 0);
    return ListRecordingQueryParams;
}(SpeakeasyBase));
export { ListRecordingQueryParams };
var ListRecordingSecurity = /** @class */ (function (_super) {
    __extends(ListRecordingSecurity, _super);
    function ListRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRecordingSecurity;
}(SpeakeasyBase));
export { ListRecordingSecurity };
var ListRecordingListRecordingResponse = /** @class */ (function (_super) {
    __extends(ListRecordingListRecordingResponse, _super);
    function ListRecordingListRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListRecordingListRecordingResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingListRecordingResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingListRecordingResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRecordingListRecordingResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRecordingListRecordingResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingListRecordingResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordings", elemType: shared.ApiV2010AccountRecording }),
        __metadata("design:type", Array)
    ], ListRecordingListRecordingResponse.prototype, "recordings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListRecordingListRecordingResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListRecordingListRecordingResponse.prototype, "uri", void 0);
    return ListRecordingListRecordingResponse;
}(SpeakeasyBase));
export { ListRecordingListRecordingResponse };
var ListRecordingRequest = /** @class */ (function (_super) {
    __extends(ListRecordingRequest, _super);
    function ListRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRecordingPathParams)
    ], ListRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRecordingQueryParams)
    ], ListRecordingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRecordingSecurity)
    ], ListRecordingRequest.prototype, "security", void 0);
    return ListRecordingRequest;
}(SpeakeasyBase));
export { ListRecordingRequest };
var ListRecordingResponse = /** @class */ (function (_super) {
    __extends(ListRecordingResponse, _super);
    function ListRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRecordingListRecordingResponse)
    ], ListRecordingResponse.prototype, "listRecordingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListRecordingResponse.prototype, "statusCode", void 0);
    return ListRecordingResponse;
}(SpeakeasyBase));
export { ListRecordingResponse };
