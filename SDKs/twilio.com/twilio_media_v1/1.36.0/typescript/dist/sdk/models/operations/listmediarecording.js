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
export var LISTMEDIARECORDING_SERVERS = [
    "https://media.twilio.com",
];
var ListMediaRecordingQueryParams = /** @class */ (function (_super) {
    __extends(ListMediaRecordingQueryParams, _super);
    function ListMediaRecordingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListMediaRecordingQueryParams.prototype, "order", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMediaRecordingQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ProcessorSid" }),
        __metadata("design:type", String)
    ], ListMediaRecordingQueryParams.prototype, "processorSid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceSid" }),
        __metadata("design:type", String)
    ], ListMediaRecordingQueryParams.prototype, "sourceSid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListMediaRecordingQueryParams.prototype, "status", void 0);
    return ListMediaRecordingQueryParams;
}(SpeakeasyBase));
export { ListMediaRecordingQueryParams };
var ListMediaRecordingSecurity = /** @class */ (function (_super) {
    __extends(ListMediaRecordingSecurity, _super);
    function ListMediaRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMediaRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMediaRecordingSecurity;
}(SpeakeasyBase));
export { ListMediaRecordingSecurity };
var ListMediaRecordingRequest = /** @class */ (function (_super) {
    __extends(ListMediaRecordingRequest, _super);
    function ListMediaRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListMediaRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMediaRecordingQueryParams)
    ], ListMediaRecordingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMediaRecordingSecurity)
    ], ListMediaRecordingRequest.prototype, "security", void 0);
    return ListMediaRecordingRequest;
}(SpeakeasyBase));
export { ListMediaRecordingRequest };
var ListMediaRecordingListMediaRecordingResponseMeta = /** @class */ (function (_super) {
    __extends(ListMediaRecordingListMediaRecordingResponseMeta, _super);
    function ListMediaRecordingListMediaRecordingResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMediaRecordingListMediaRecordingResponseMeta.prototype, "url", void 0);
    return ListMediaRecordingListMediaRecordingResponseMeta;
}(SpeakeasyBase));
export { ListMediaRecordingListMediaRecordingResponseMeta };
var ListMediaRecordingListMediaRecordingResponse = /** @class */ (function (_super) {
    __extends(ListMediaRecordingListMediaRecordingResponse, _super);
    function ListMediaRecordingListMediaRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=media_recordings", elemType: shared.MediaV1MediaRecording }),
        __metadata("design:type", Array)
    ], ListMediaRecordingListMediaRecordingResponse.prototype, "mediaRecordings", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListMediaRecordingListMediaRecordingResponseMeta)
    ], ListMediaRecordingListMediaRecordingResponse.prototype, "meta", void 0);
    return ListMediaRecordingListMediaRecordingResponse;
}(SpeakeasyBase));
export { ListMediaRecordingListMediaRecordingResponse };
var ListMediaRecordingResponse = /** @class */ (function (_super) {
    __extends(ListMediaRecordingResponse, _super);
    function ListMediaRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListMediaRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMediaRecordingListMediaRecordingResponse)
    ], ListMediaRecordingResponse.prototype, "listMediaRecordingResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListMediaRecordingResponse.prototype, "statusCode", void 0);
    return ListMediaRecordingResponse;
}(SpeakeasyBase));
export { ListMediaRecordingResponse };
