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
export var LISTUSAGERECORDYEARLY_SERVERS = [
    "https://api.twilio.com",
];
var ListUsageRecordYearlyPathParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordYearlyPathParams, _super);
    function ListUsageRecordYearlyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListUsageRecordYearlyPathParams.prototype, "accountSid", void 0);
    return ListUsageRecordYearlyPathParams;
}(SpeakeasyBase));
export { ListUsageRecordYearlyPathParams };
var ListUsageRecordYearlyQueryParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordYearlyQueryParams, _super);
    function ListUsageRecordYearlyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Category" }),
        __metadata("design:type", String)
    ], ListUsageRecordYearlyQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordYearlyQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" }),
        __metadata("design:type", Boolean)
    ], ListUsageRecordYearlyQueryParams.prototype, "includeSubaccounts", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUsageRecordYearlyQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordYearlyQueryParams.prototype, "startDate", void 0);
    return ListUsageRecordYearlyQueryParams;
}(SpeakeasyBase));
export { ListUsageRecordYearlyQueryParams };
var ListUsageRecordYearlySecurity = /** @class */ (function (_super) {
    __extends(ListUsageRecordYearlySecurity, _super);
    function ListUsageRecordYearlySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUsageRecordYearlySecurity.prototype, "accountSidAuthToken", void 0);
    return ListUsageRecordYearlySecurity;
}(SpeakeasyBase));
export { ListUsageRecordYearlySecurity };
var ListUsageRecordYearlyRequest = /** @class */ (function (_super) {
    __extends(ListUsageRecordYearlyRequest, _super);
    function ListUsageRecordYearlyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordYearlyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordYearlyPathParams)
    ], ListUsageRecordYearlyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordYearlyQueryParams)
    ], ListUsageRecordYearlyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordYearlySecurity)
    ], ListUsageRecordYearlyRequest.prototype, "security", void 0);
    return ListUsageRecordYearlyRequest;
}(SpeakeasyBase));
export { ListUsageRecordYearlyRequest };
var ListUsageRecordYearlyListUsageRecordYearlyResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordYearlyListUsageRecordYearlyResponse, _super);
    function ListUsageRecordYearlyListUsageRecordYearlyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListUsageRecordYearlyListUsageRecordYearlyResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordYearlyListUsageRecordYearlyResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordYearlyListUsageRecordYearlyResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUsageRecordYearlyListUsageRecordYearlyResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUsageRecordYearlyListUsageRecordYearlyResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordYearlyListUsageRecordYearlyResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListUsageRecordYearlyListUsageRecordYearlyResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordYearlyListUsageRecordYearlyResponse.prototype, "uri", void 0);
    __decorate([
        Metadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordYearly }),
        __metadata("design:type", Array)
    ], ListUsageRecordYearlyListUsageRecordYearlyResponse.prototype, "usageRecords", void 0);
    return ListUsageRecordYearlyListUsageRecordYearlyResponse;
}(SpeakeasyBase));
export { ListUsageRecordYearlyListUsageRecordYearlyResponse };
var ListUsageRecordYearlyResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordYearlyResponse, _super);
    function ListUsageRecordYearlyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordYearlyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordYearlyListUsageRecordYearlyResponse)
    ], ListUsageRecordYearlyResponse.prototype, "listUsageRecordYearlyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUsageRecordYearlyResponse.prototype, "statusCode", void 0);
    return ListUsageRecordYearlyResponse;
}(SpeakeasyBase));
export { ListUsageRecordYearlyResponse };
