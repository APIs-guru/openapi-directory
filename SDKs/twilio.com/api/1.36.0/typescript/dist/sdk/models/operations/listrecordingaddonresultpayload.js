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
export var LISTRECORDINGADDONRESULTPAYLOAD_SERVERS = [
    "https://api.twilio.com",
];
var ListRecordingAddOnResultPayloadPathParams = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultPayloadPathParams, _super);
    function ListRecordingAddOnResultPayloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultPayloadPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AddOnResultSid" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultPayloadPathParams.prototype, "addOnResultSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ReferenceSid" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultPayloadPathParams.prototype, "referenceSid", void 0);
    return ListRecordingAddOnResultPayloadPathParams;
}(SpeakeasyBase));
export { ListRecordingAddOnResultPayloadPathParams };
var ListRecordingAddOnResultPayloadQueryParams = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultPayloadQueryParams, _super);
    function ListRecordingAddOnResultPayloadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultPayloadQueryParams.prototype, "pageSize", void 0);
    return ListRecordingAddOnResultPayloadQueryParams;
}(SpeakeasyBase));
export { ListRecordingAddOnResultPayloadQueryParams };
var ListRecordingAddOnResultPayloadSecurity = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultPayloadSecurity, _super);
    function ListRecordingAddOnResultPayloadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRecordingAddOnResultPayloadSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRecordingAddOnResultPayloadSecurity;
}(SpeakeasyBase));
export { ListRecordingAddOnResultPayloadSecurity };
var ListRecordingAddOnResultPayloadRequest = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultPayloadRequest, _super);
    function ListRecordingAddOnResultPayloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultPayloadRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRecordingAddOnResultPayloadPathParams)
    ], ListRecordingAddOnResultPayloadRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRecordingAddOnResultPayloadQueryParams)
    ], ListRecordingAddOnResultPayloadRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRecordingAddOnResultPayloadSecurity)
    ], ListRecordingAddOnResultPayloadRequest.prototype, "security", void 0);
    return ListRecordingAddOnResultPayloadRequest;
}(SpeakeasyBase));
export { ListRecordingAddOnResultPayloadRequest };
var ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse, _super);
    function ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=payloads", elemType: shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload }),
        __metadata("design:type", Array)
    ], ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse.prototype, "payloads", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse.prototype, "uri", void 0);
    return ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse;
}(SpeakeasyBase));
export { ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse };
var ListRecordingAddOnResultPayloadResponse = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultPayloadResponse, _super);
    function ListRecordingAddOnResultPayloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultPayloadResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse)
    ], ListRecordingAddOnResultPayloadResponse.prototype, "listRecordingAddOnResultPayloadResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultPayloadResponse.prototype, "statusCode", void 0);
    return ListRecordingAddOnResultPayloadResponse;
}(SpeakeasyBase));
export { ListRecordingAddOnResultPayloadResponse };
