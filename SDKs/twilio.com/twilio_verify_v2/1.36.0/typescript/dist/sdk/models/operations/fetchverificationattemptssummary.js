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
export var FETCHVERIFICATIONATTEMPTSSUMMARY_SERVERS = [
    "https://verify.twilio.com",
];
var FetchVerificationAttemptsSummaryQueryParams = /** @class */ (function (_super) {
    __extends(FetchVerificationAttemptsSummaryQueryParams, _super);
    function FetchVerificationAttemptsSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Channel" }),
        __metadata("design:type", String)
    ], FetchVerificationAttemptsSummaryQueryParams.prototype, "channel", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Country" }),
        __metadata("design:type", String)
    ], FetchVerificationAttemptsSummaryQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" }),
        __metadata("design:type", Date)
    ], FetchVerificationAttemptsSummaryQueryParams.prototype, "dateCreatedAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" }),
        __metadata("design:type", Date)
    ], FetchVerificationAttemptsSummaryQueryParams.prototype, "dateCreatedBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DestinationPrefix" }),
        __metadata("design:type", String)
    ], FetchVerificationAttemptsSummaryQueryParams.prototype, "destinationPrefix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VerifyServiceSid" }),
        __metadata("design:type", String)
    ], FetchVerificationAttemptsSummaryQueryParams.prototype, "verifyServiceSid", void 0);
    return FetchVerificationAttemptsSummaryQueryParams;
}(SpeakeasyBase));
export { FetchVerificationAttemptsSummaryQueryParams };
var FetchVerificationAttemptsSummarySecurity = /** @class */ (function (_super) {
    __extends(FetchVerificationAttemptsSummarySecurity, _super);
    function FetchVerificationAttemptsSummarySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchVerificationAttemptsSummarySecurity.prototype, "accountSidAuthToken", void 0);
    return FetchVerificationAttemptsSummarySecurity;
}(SpeakeasyBase));
export { FetchVerificationAttemptsSummarySecurity };
var FetchVerificationAttemptsSummaryRequest = /** @class */ (function (_super) {
    __extends(FetchVerificationAttemptsSummaryRequest, _super);
    function FetchVerificationAttemptsSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchVerificationAttemptsSummaryRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchVerificationAttemptsSummaryQueryParams)
    ], FetchVerificationAttemptsSummaryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchVerificationAttemptsSummarySecurity)
    ], FetchVerificationAttemptsSummaryRequest.prototype, "security", void 0);
    return FetchVerificationAttemptsSummaryRequest;
}(SpeakeasyBase));
export { FetchVerificationAttemptsSummaryRequest };
var FetchVerificationAttemptsSummaryResponse = /** @class */ (function (_super) {
    __extends(FetchVerificationAttemptsSummaryResponse, _super);
    function FetchVerificationAttemptsSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchVerificationAttemptsSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchVerificationAttemptsSummaryResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2VerificationAttemptsSummary)
    ], FetchVerificationAttemptsSummaryResponse.prototype, "verifyV2VerificationAttemptsSummary", void 0);
    return FetchVerificationAttemptsSummaryResponse;
}(SpeakeasyBase));
export { FetchVerificationAttemptsSummaryResponse };
