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
export var LISTUSAGERECORDDAILY_SERVERS = [
    "https://api.twilio.com",
];
var ListUsageRecordDailyPathParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordDailyPathParams, _super);
    function ListUsageRecordDailyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListUsageRecordDailyPathParams.prototype, "accountSid", void 0);
    return ListUsageRecordDailyPathParams;
}(SpeakeasyBase));
export { ListUsageRecordDailyPathParams };
var ListUsageRecordDailyQueryParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordDailyQueryParams, _super);
    function ListUsageRecordDailyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Category" }),
        __metadata("design:type", String)
    ], ListUsageRecordDailyQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordDailyQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" }),
        __metadata("design:type", Boolean)
    ], ListUsageRecordDailyQueryParams.prototype, "includeSubaccounts", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUsageRecordDailyQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordDailyQueryParams.prototype, "startDate", void 0);
    return ListUsageRecordDailyQueryParams;
}(SpeakeasyBase));
export { ListUsageRecordDailyQueryParams };
var ListUsageRecordDailySecurity = /** @class */ (function (_super) {
    __extends(ListUsageRecordDailySecurity, _super);
    function ListUsageRecordDailySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUsageRecordDailySecurity.prototype, "accountSidAuthToken", void 0);
    return ListUsageRecordDailySecurity;
}(SpeakeasyBase));
export { ListUsageRecordDailySecurity };
var ListUsageRecordDailyRequest = /** @class */ (function (_super) {
    __extends(ListUsageRecordDailyRequest, _super);
    function ListUsageRecordDailyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordDailyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordDailyPathParams)
    ], ListUsageRecordDailyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordDailyQueryParams)
    ], ListUsageRecordDailyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordDailySecurity)
    ], ListUsageRecordDailyRequest.prototype, "security", void 0);
    return ListUsageRecordDailyRequest;
}(SpeakeasyBase));
export { ListUsageRecordDailyRequest };
var ListUsageRecordDailyListUsageRecordDailyResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordDailyListUsageRecordDailyResponse, _super);
    function ListUsageRecordDailyListUsageRecordDailyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListUsageRecordDailyListUsageRecordDailyResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordDailyListUsageRecordDailyResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordDailyListUsageRecordDailyResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUsageRecordDailyListUsageRecordDailyResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUsageRecordDailyListUsageRecordDailyResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordDailyListUsageRecordDailyResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListUsageRecordDailyListUsageRecordDailyResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordDailyListUsageRecordDailyResponse.prototype, "uri", void 0);
    __decorate([
        Metadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordDaily }),
        __metadata("design:type", Array)
    ], ListUsageRecordDailyListUsageRecordDailyResponse.prototype, "usageRecords", void 0);
    return ListUsageRecordDailyListUsageRecordDailyResponse;
}(SpeakeasyBase));
export { ListUsageRecordDailyListUsageRecordDailyResponse };
var ListUsageRecordDailyResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordDailyResponse, _super);
    function ListUsageRecordDailyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordDailyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordDailyListUsageRecordDailyResponse)
    ], ListUsageRecordDailyResponse.prototype, "listUsageRecordDailyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUsageRecordDailyResponse.prototype, "statusCode", void 0);
    return ListUsageRecordDailyResponse;
}(SpeakeasyBase));
export { ListUsageRecordDailyResponse };
