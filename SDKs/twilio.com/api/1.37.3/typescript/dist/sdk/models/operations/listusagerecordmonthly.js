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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var ListUsageRecordMonthlyServerList = [
    "https://api.twilio.com",
];
var ListUsageRecordMonthlyPathParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordMonthlyPathParams, _super);
    function ListUsageRecordMonthlyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListUsageRecordMonthlyPathParams.prototype, "accountSid", void 0);
    return ListUsageRecordMonthlyPathParams;
}(SpeakeasyBase));
export { ListUsageRecordMonthlyPathParams };
var ListUsageRecordMonthlyQueryParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordMonthlyQueryParams, _super);
    function ListUsageRecordMonthlyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Category" }),
        __metadata("design:type", String)
    ], ListUsageRecordMonthlyQueryParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordMonthlyQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" }),
        __metadata("design:type", Boolean)
    ], ListUsageRecordMonthlyQueryParams.prototype, "includeSubaccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUsageRecordMonthlyQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordMonthlyQueryParams.prototype, "startDate", void 0);
    return ListUsageRecordMonthlyQueryParams;
}(SpeakeasyBase));
export { ListUsageRecordMonthlyQueryParams };
var ListUsageRecordMonthlySecurity = /** @class */ (function (_super) {
    __extends(ListUsageRecordMonthlySecurity, _super);
    function ListUsageRecordMonthlySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUsageRecordMonthlySecurity.prototype, "accountSidAuthToken", void 0);
    return ListUsageRecordMonthlySecurity;
}(SpeakeasyBase));
export { ListUsageRecordMonthlySecurity };
var ListUsageRecordMonthlyListUsageRecordMonthlyResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordMonthlyListUsageRecordMonthlyResponse, _super);
    function ListUsageRecordMonthlyListUsageRecordMonthlyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListUsageRecordMonthlyListUsageRecordMonthlyResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordMonthlyListUsageRecordMonthlyResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordMonthlyListUsageRecordMonthlyResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUsageRecordMonthlyListUsageRecordMonthlyResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUsageRecordMonthlyListUsageRecordMonthlyResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordMonthlyListUsageRecordMonthlyResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListUsageRecordMonthlyListUsageRecordMonthlyResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordMonthlyListUsageRecordMonthlyResponse.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordMonthly }),
        __metadata("design:type", Array)
    ], ListUsageRecordMonthlyListUsageRecordMonthlyResponse.prototype, "usageRecords", void 0);
    return ListUsageRecordMonthlyListUsageRecordMonthlyResponse;
}(SpeakeasyBase));
export { ListUsageRecordMonthlyListUsageRecordMonthlyResponse };
var ListUsageRecordMonthlyRequest = /** @class */ (function (_super) {
    __extends(ListUsageRecordMonthlyRequest, _super);
    function ListUsageRecordMonthlyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUsageRecordMonthlyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordMonthlyPathParams)
    ], ListUsageRecordMonthlyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordMonthlyQueryParams)
    ], ListUsageRecordMonthlyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordMonthlySecurity)
    ], ListUsageRecordMonthlyRequest.prototype, "security", void 0);
    return ListUsageRecordMonthlyRequest;
}(SpeakeasyBase));
export { ListUsageRecordMonthlyRequest };
var ListUsageRecordMonthlyResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordMonthlyResponse, _super);
    function ListUsageRecordMonthlyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUsageRecordMonthlyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordMonthlyListUsageRecordMonthlyResponse)
    ], ListUsageRecordMonthlyResponse.prototype, "listUsageRecordMonthlyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListUsageRecordMonthlyResponse.prototype, "statusCode", void 0);
    return ListUsageRecordMonthlyResponse;
}(SpeakeasyBase));
export { ListUsageRecordMonthlyResponse };
