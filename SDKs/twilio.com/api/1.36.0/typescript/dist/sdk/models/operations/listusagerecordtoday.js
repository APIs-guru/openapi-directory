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
export var LISTUSAGERECORDTODAY_SERVERS = [
    "https://api.twilio.com",
];
var ListUsageRecordTodayPathParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordTodayPathParams, _super);
    function ListUsageRecordTodayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListUsageRecordTodayPathParams.prototype, "accountSid", void 0);
    return ListUsageRecordTodayPathParams;
}(SpeakeasyBase));
export { ListUsageRecordTodayPathParams };
var ListUsageRecordTodayQueryParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordTodayQueryParams, _super);
    function ListUsageRecordTodayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Category" }),
        __metadata("design:type", String)
    ], ListUsageRecordTodayQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordTodayQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" }),
        __metadata("design:type", Boolean)
    ], ListUsageRecordTodayQueryParams.prototype, "includeSubaccounts", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUsageRecordTodayQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordTodayQueryParams.prototype, "startDate", void 0);
    return ListUsageRecordTodayQueryParams;
}(SpeakeasyBase));
export { ListUsageRecordTodayQueryParams };
var ListUsageRecordTodaySecurity = /** @class */ (function (_super) {
    __extends(ListUsageRecordTodaySecurity, _super);
    function ListUsageRecordTodaySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUsageRecordTodaySecurity.prototype, "accountSidAuthToken", void 0);
    return ListUsageRecordTodaySecurity;
}(SpeakeasyBase));
export { ListUsageRecordTodaySecurity };
var ListUsageRecordTodayRequest = /** @class */ (function (_super) {
    __extends(ListUsageRecordTodayRequest, _super);
    function ListUsageRecordTodayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordTodayRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordTodayPathParams)
    ], ListUsageRecordTodayRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordTodayQueryParams)
    ], ListUsageRecordTodayRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordTodaySecurity)
    ], ListUsageRecordTodayRequest.prototype, "security", void 0);
    return ListUsageRecordTodayRequest;
}(SpeakeasyBase));
export { ListUsageRecordTodayRequest };
var ListUsageRecordTodayListUsageRecordTodayResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordTodayListUsageRecordTodayResponse, _super);
    function ListUsageRecordTodayListUsageRecordTodayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListUsageRecordTodayListUsageRecordTodayResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordTodayListUsageRecordTodayResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordTodayListUsageRecordTodayResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUsageRecordTodayListUsageRecordTodayResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUsageRecordTodayListUsageRecordTodayResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordTodayListUsageRecordTodayResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListUsageRecordTodayListUsageRecordTodayResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordTodayListUsageRecordTodayResponse.prototype, "uri", void 0);
    __decorate([
        Metadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordToday }),
        __metadata("design:type", Array)
    ], ListUsageRecordTodayListUsageRecordTodayResponse.prototype, "usageRecords", void 0);
    return ListUsageRecordTodayListUsageRecordTodayResponse;
}(SpeakeasyBase));
export { ListUsageRecordTodayListUsageRecordTodayResponse };
var ListUsageRecordTodayResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordTodayResponse, _super);
    function ListUsageRecordTodayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordTodayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordTodayListUsageRecordTodayResponse)
    ], ListUsageRecordTodayResponse.prototype, "listUsageRecordTodayResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUsageRecordTodayResponse.prototype, "statusCode", void 0);
    return ListUsageRecordTodayResponse;
}(SpeakeasyBase));
export { ListUsageRecordTodayResponse };
