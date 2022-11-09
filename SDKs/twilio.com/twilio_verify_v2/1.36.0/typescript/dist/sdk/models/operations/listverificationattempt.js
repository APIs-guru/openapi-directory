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
export var LISTVERIFICATIONATTEMPT_SERVERS = [
    "https://verify.twilio.com",
];
var ListVerificationAttemptQueryParams = /** @class */ (function (_super) {
    __extends(ListVerificationAttemptQueryParams, _super);
    function ListVerificationAttemptQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Channel" }),
        __metadata("design:type", String)
    ], ListVerificationAttemptQueryParams.prototype, "channel", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ChannelData.To" }),
        __metadata("design:type", String)
    ], ListVerificationAttemptQueryParams.prototype, "channelDataTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Country" }),
        __metadata("design:type", String)
    ], ListVerificationAttemptQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" }),
        __metadata("design:type", Date)
    ], ListVerificationAttemptQueryParams.prototype, "dateCreatedAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" }),
        __metadata("design:type", Date)
    ], ListVerificationAttemptQueryParams.prototype, "dateCreatedBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListVerificationAttemptQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListVerificationAttemptQueryParams.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VerificationSid" }),
        __metadata("design:type", String)
    ], ListVerificationAttemptQueryParams.prototype, "verificationSid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VerifyServiceSid" }),
        __metadata("design:type", String)
    ], ListVerificationAttemptQueryParams.prototype, "verifyServiceSid", void 0);
    return ListVerificationAttemptQueryParams;
}(SpeakeasyBase));
export { ListVerificationAttemptQueryParams };
var ListVerificationAttemptSecurity = /** @class */ (function (_super) {
    __extends(ListVerificationAttemptSecurity, _super);
    function ListVerificationAttemptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListVerificationAttemptSecurity.prototype, "accountSidAuthToken", void 0);
    return ListVerificationAttemptSecurity;
}(SpeakeasyBase));
export { ListVerificationAttemptSecurity };
var ListVerificationAttemptRequest = /** @class */ (function (_super) {
    __extends(ListVerificationAttemptRequest, _super);
    function ListVerificationAttemptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListVerificationAttemptRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListVerificationAttemptQueryParams)
    ], ListVerificationAttemptRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListVerificationAttemptSecurity)
    ], ListVerificationAttemptRequest.prototype, "security", void 0);
    return ListVerificationAttemptRequest;
}(SpeakeasyBase));
export { ListVerificationAttemptRequest };
var ListVerificationAttemptListVerificationAttemptResponseMeta = /** @class */ (function (_super) {
    __extends(ListVerificationAttemptListVerificationAttemptResponseMeta, _super);
    function ListVerificationAttemptListVerificationAttemptResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListVerificationAttemptListVerificationAttemptResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListVerificationAttemptListVerificationAttemptResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListVerificationAttemptListVerificationAttemptResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListVerificationAttemptListVerificationAttemptResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListVerificationAttemptListVerificationAttemptResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListVerificationAttemptListVerificationAttemptResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListVerificationAttemptListVerificationAttemptResponseMeta.prototype, "url", void 0);
    return ListVerificationAttemptListVerificationAttemptResponseMeta;
}(SpeakeasyBase));
export { ListVerificationAttemptListVerificationAttemptResponseMeta };
var ListVerificationAttemptListVerificationAttemptResponse = /** @class */ (function (_super) {
    __extends(ListVerificationAttemptListVerificationAttemptResponse, _super);
    function ListVerificationAttemptListVerificationAttemptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=attempts", elemType: shared.VerifyV2VerificationAttempt }),
        __metadata("design:type", Array)
    ], ListVerificationAttemptListVerificationAttemptResponse.prototype, "attempts", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListVerificationAttemptListVerificationAttemptResponseMeta)
    ], ListVerificationAttemptListVerificationAttemptResponse.prototype, "meta", void 0);
    return ListVerificationAttemptListVerificationAttemptResponse;
}(SpeakeasyBase));
export { ListVerificationAttemptListVerificationAttemptResponse };
var ListVerificationAttemptResponse = /** @class */ (function (_super) {
    __extends(ListVerificationAttemptResponse, _super);
    function ListVerificationAttemptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListVerificationAttemptResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListVerificationAttemptListVerificationAttemptResponse)
    ], ListVerificationAttemptResponse.prototype, "listVerificationAttemptResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListVerificationAttemptResponse.prototype, "statusCode", void 0);
    return ListVerificationAttemptResponse;
}(SpeakeasyBase));
export { ListVerificationAttemptResponse };
