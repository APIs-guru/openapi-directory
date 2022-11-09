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
export var LISTTRANSCRIPTION_SERVERS = [
    "https://api.twilio.com",
];
var ListTranscriptionPathParams = /** @class */ (function (_super) {
    __extends(ListTranscriptionPathParams, _super);
    function ListTranscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListTranscriptionPathParams.prototype, "accountSid", void 0);
    return ListTranscriptionPathParams;
}(SpeakeasyBase));
export { ListTranscriptionPathParams };
var ListTranscriptionQueryParams = /** @class */ (function (_super) {
    __extends(ListTranscriptionQueryParams, _super);
    function ListTranscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTranscriptionQueryParams.prototype, "pageSize", void 0);
    return ListTranscriptionQueryParams;
}(SpeakeasyBase));
export { ListTranscriptionQueryParams };
var ListTranscriptionSecurity = /** @class */ (function (_super) {
    __extends(ListTranscriptionSecurity, _super);
    function ListTranscriptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTranscriptionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTranscriptionSecurity;
}(SpeakeasyBase));
export { ListTranscriptionSecurity };
var ListTranscriptionRequest = /** @class */ (function (_super) {
    __extends(ListTranscriptionRequest, _super);
    function ListTranscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTranscriptionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTranscriptionPathParams)
    ], ListTranscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTranscriptionQueryParams)
    ], ListTranscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTranscriptionSecurity)
    ], ListTranscriptionRequest.prototype, "security", void 0);
    return ListTranscriptionRequest;
}(SpeakeasyBase));
export { ListTranscriptionRequest };
var ListTranscriptionListTranscriptionResponse = /** @class */ (function (_super) {
    __extends(ListTranscriptionListTranscriptionResponse, _super);
    function ListTranscriptionListTranscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListTranscriptionListTranscriptionResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListTranscriptionListTranscriptionResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListTranscriptionListTranscriptionResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTranscriptionListTranscriptionResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTranscriptionListTranscriptionResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListTranscriptionListTranscriptionResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListTranscriptionListTranscriptionResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=transcriptions", elemType: shared.ApiV2010AccountTranscription }),
        __metadata("design:type", Array)
    ], ListTranscriptionListTranscriptionResponse.prototype, "transcriptions", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListTranscriptionListTranscriptionResponse.prototype, "uri", void 0);
    return ListTranscriptionListTranscriptionResponse;
}(SpeakeasyBase));
export { ListTranscriptionListTranscriptionResponse };
var ListTranscriptionResponse = /** @class */ (function (_super) {
    __extends(ListTranscriptionResponse, _super);
    function ListTranscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTranscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTranscriptionListTranscriptionResponse)
    ], ListTranscriptionResponse.prototype, "listTranscriptionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTranscriptionResponse.prototype, "statusCode", void 0);
    return ListTranscriptionResponse;
}(SpeakeasyBase));
export { ListTranscriptionResponse };
