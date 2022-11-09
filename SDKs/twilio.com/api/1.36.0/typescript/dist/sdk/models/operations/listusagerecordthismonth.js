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
export var LISTUSAGERECORDTHISMONTH_SERVERS = [
    "https://api.twilio.com",
];
var ListUsageRecordThisMonthPathParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordThisMonthPathParams, _super);
    function ListUsageRecordThisMonthPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListUsageRecordThisMonthPathParams.prototype, "accountSid", void 0);
    return ListUsageRecordThisMonthPathParams;
}(SpeakeasyBase));
export { ListUsageRecordThisMonthPathParams };
var ListUsageRecordThisMonthQueryParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordThisMonthQueryParams, _super);
    function ListUsageRecordThisMonthQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Category" }),
        __metadata("design:type", String)
    ], ListUsageRecordThisMonthQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordThisMonthQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" }),
        __metadata("design:type", Boolean)
    ], ListUsageRecordThisMonthQueryParams.prototype, "includeSubaccounts", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUsageRecordThisMonthQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordThisMonthQueryParams.prototype, "startDate", void 0);
    return ListUsageRecordThisMonthQueryParams;
}(SpeakeasyBase));
export { ListUsageRecordThisMonthQueryParams };
var ListUsageRecordThisMonthSecurity = /** @class */ (function (_super) {
    __extends(ListUsageRecordThisMonthSecurity, _super);
    function ListUsageRecordThisMonthSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUsageRecordThisMonthSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUsageRecordThisMonthSecurity;
}(SpeakeasyBase));
export { ListUsageRecordThisMonthSecurity };
var ListUsageRecordThisMonthRequest = /** @class */ (function (_super) {
    __extends(ListUsageRecordThisMonthRequest, _super);
    function ListUsageRecordThisMonthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordThisMonthRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordThisMonthPathParams)
    ], ListUsageRecordThisMonthRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordThisMonthQueryParams)
    ], ListUsageRecordThisMonthRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordThisMonthSecurity)
    ], ListUsageRecordThisMonthRequest.prototype, "security", void 0);
    return ListUsageRecordThisMonthRequest;
}(SpeakeasyBase));
export { ListUsageRecordThisMonthRequest };
var ListUsageRecordThisMonthListUsageRecordThisMonthResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordThisMonthListUsageRecordThisMonthResponse, _super);
    function ListUsageRecordThisMonthListUsageRecordThisMonthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListUsageRecordThisMonthListUsageRecordThisMonthResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordThisMonthListUsageRecordThisMonthResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordThisMonthListUsageRecordThisMonthResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUsageRecordThisMonthListUsageRecordThisMonthResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUsageRecordThisMonthListUsageRecordThisMonthResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordThisMonthListUsageRecordThisMonthResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListUsageRecordThisMonthListUsageRecordThisMonthResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordThisMonthListUsageRecordThisMonthResponse.prototype, "uri", void 0);
    __decorate([
        Metadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordThisMonth }),
        __metadata("design:type", Array)
    ], ListUsageRecordThisMonthListUsageRecordThisMonthResponse.prototype, "usageRecords", void 0);
    return ListUsageRecordThisMonthListUsageRecordThisMonthResponse;
}(SpeakeasyBase));
export { ListUsageRecordThisMonthListUsageRecordThisMonthResponse };
var ListUsageRecordThisMonthResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordThisMonthResponse, _super);
    function ListUsageRecordThisMonthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordThisMonthResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordThisMonthListUsageRecordThisMonthResponse)
    ], ListUsageRecordThisMonthResponse.prototype, "listUsageRecordThisMonthResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUsageRecordThisMonthResponse.prototype, "statusCode", void 0);
    return ListUsageRecordThisMonthResponse;
}(SpeakeasyBase));
export { ListUsageRecordThisMonthResponse };
