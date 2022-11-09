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
export var LISTRECORDINGTRANSCRIPTION_SERVERS = [
    "https://api.twilio.com",
];
var ListRecordingTranscriptionPathParams = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionPathParams, _super);
    function ListRecordingTranscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RecordingSid" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionPathParams.prototype, "recordingSid", void 0);
    return ListRecordingTranscriptionPathParams;
}(SpeakeasyBase));
export { ListRecordingTranscriptionPathParams };
var ListRecordingTranscriptionQueryParams = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionQueryParams, _super);
    function ListRecordingTranscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionQueryParams.prototype, "pageSize", void 0);
    return ListRecordingTranscriptionQueryParams;
}(SpeakeasyBase));
export { ListRecordingTranscriptionQueryParams };
var ListRecordingTranscriptionSecurity = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionSecurity, _super);
    function ListRecordingTranscriptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRecordingTranscriptionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRecordingTranscriptionSecurity;
}(SpeakeasyBase));
export { ListRecordingTranscriptionSecurity };
var ListRecordingTranscriptionRequest = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionRequest, _super);
    function ListRecordingTranscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRecordingTranscriptionPathParams)
    ], ListRecordingTranscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRecordingTranscriptionQueryParams)
    ], ListRecordingTranscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRecordingTranscriptionSecurity)
    ], ListRecordingTranscriptionRequest.prototype, "security", void 0);
    return ListRecordingTranscriptionRequest;
}(SpeakeasyBase));
export { ListRecordingTranscriptionRequest };
var ListRecordingTranscriptionListRecordingTranscriptionResponse = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionListRecordingTranscriptionResponse, _super);
    function ListRecordingTranscriptionListRecordingTranscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=transcriptions", elemType: shared.ApiV2010AccountRecordingRecordingTranscription }),
        __metadata("design:type", Array)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "transcriptions", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionListRecordingTranscriptionResponse.prototype, "uri", void 0);
    return ListRecordingTranscriptionListRecordingTranscriptionResponse;
}(SpeakeasyBase));
export { ListRecordingTranscriptionListRecordingTranscriptionResponse };
var ListRecordingTranscriptionResponse = /** @class */ (function (_super) {
    __extends(ListRecordingTranscriptionResponse, _super);
    function ListRecordingTranscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRecordingTranscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRecordingTranscriptionListRecordingTranscriptionResponse)
    ], ListRecordingTranscriptionResponse.prototype, "listRecordingTranscriptionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListRecordingTranscriptionResponse.prototype, "statusCode", void 0);
    return ListRecordingTranscriptionResponse;
}(SpeakeasyBase));
export { ListRecordingTranscriptionResponse };
