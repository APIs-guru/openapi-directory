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
export var LISTUSAGERECORDLASTMONTH_SERVERS = [
    "https://api.twilio.com",
];
var ListUsageRecordLastMonthPathParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordLastMonthPathParams, _super);
    function ListUsageRecordLastMonthPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListUsageRecordLastMonthPathParams.prototype, "accountSid", void 0);
    return ListUsageRecordLastMonthPathParams;
}(SpeakeasyBase));
export { ListUsageRecordLastMonthPathParams };
var ListUsageRecordLastMonthQueryParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordLastMonthQueryParams, _super);
    function ListUsageRecordLastMonthQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Category" }),
        __metadata("design:type", String)
    ], ListUsageRecordLastMonthQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordLastMonthQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" }),
        __metadata("design:type", Boolean)
    ], ListUsageRecordLastMonthQueryParams.prototype, "includeSubaccounts", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUsageRecordLastMonthQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordLastMonthQueryParams.prototype, "startDate", void 0);
    return ListUsageRecordLastMonthQueryParams;
}(SpeakeasyBase));
export { ListUsageRecordLastMonthQueryParams };
var ListUsageRecordLastMonthSecurity = /** @class */ (function (_super) {
    __extends(ListUsageRecordLastMonthSecurity, _super);
    function ListUsageRecordLastMonthSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUsageRecordLastMonthSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUsageRecordLastMonthSecurity;
}(SpeakeasyBase));
export { ListUsageRecordLastMonthSecurity };
var ListUsageRecordLastMonthRequest = /** @class */ (function (_super) {
    __extends(ListUsageRecordLastMonthRequest, _super);
    function ListUsageRecordLastMonthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordLastMonthRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordLastMonthPathParams)
    ], ListUsageRecordLastMonthRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordLastMonthQueryParams)
    ], ListUsageRecordLastMonthRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordLastMonthSecurity)
    ], ListUsageRecordLastMonthRequest.prototype, "security", void 0);
    return ListUsageRecordLastMonthRequest;
}(SpeakeasyBase));
export { ListUsageRecordLastMonthRequest };
var ListUsageRecordLastMonthListUsageRecordLastMonthResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordLastMonthListUsageRecordLastMonthResponse, _super);
    function ListUsageRecordLastMonthListUsageRecordLastMonthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListUsageRecordLastMonthListUsageRecordLastMonthResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordLastMonthListUsageRecordLastMonthResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordLastMonthListUsageRecordLastMonthResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUsageRecordLastMonthListUsageRecordLastMonthResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUsageRecordLastMonthListUsageRecordLastMonthResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordLastMonthListUsageRecordLastMonthResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListUsageRecordLastMonthListUsageRecordLastMonthResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordLastMonthListUsageRecordLastMonthResponse.prototype, "uri", void 0);
    __decorate([
        Metadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordLastMonth }),
        __metadata("design:type", Array)
    ], ListUsageRecordLastMonthListUsageRecordLastMonthResponse.prototype, "usageRecords", void 0);
    return ListUsageRecordLastMonthListUsageRecordLastMonthResponse;
}(SpeakeasyBase));
export { ListUsageRecordLastMonthListUsageRecordLastMonthResponse };
var ListUsageRecordLastMonthResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordLastMonthResponse, _super);
    function ListUsageRecordLastMonthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordLastMonthResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordLastMonthListUsageRecordLastMonthResponse)
    ], ListUsageRecordLastMonthResponse.prototype, "listUsageRecordLastMonthResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUsageRecordLastMonthResponse.prototype, "statusCode", void 0);
    return ListUsageRecordLastMonthResponse;
}(SpeakeasyBase));
export { ListUsageRecordLastMonthResponse };
