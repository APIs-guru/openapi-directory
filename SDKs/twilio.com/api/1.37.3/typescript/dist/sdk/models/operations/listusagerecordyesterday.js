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
export var ListUsageRecordYesterdayServerList = [
    "https://api.twilio.com",
];
var ListUsageRecordYesterdayPathParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordYesterdayPathParams, _super);
    function ListUsageRecordYesterdayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListUsageRecordYesterdayPathParams.prototype, "accountSid", void 0);
    return ListUsageRecordYesterdayPathParams;
}(SpeakeasyBase));
export { ListUsageRecordYesterdayPathParams };
var ListUsageRecordYesterdayQueryParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordYesterdayQueryParams, _super);
    function ListUsageRecordYesterdayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Category" }),
        __metadata("design:type", String)
    ], ListUsageRecordYesterdayQueryParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordYesterdayQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" }),
        __metadata("design:type", Boolean)
    ], ListUsageRecordYesterdayQueryParams.prototype, "includeSubaccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUsageRecordYesterdayQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordYesterdayQueryParams.prototype, "startDate", void 0);
    return ListUsageRecordYesterdayQueryParams;
}(SpeakeasyBase));
export { ListUsageRecordYesterdayQueryParams };
var ListUsageRecordYesterdaySecurity = /** @class */ (function (_super) {
    __extends(ListUsageRecordYesterdaySecurity, _super);
    function ListUsageRecordYesterdaySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUsageRecordYesterdaySecurity.prototype, "accountSidAuthToken", void 0);
    return ListUsageRecordYesterdaySecurity;
}(SpeakeasyBase));
export { ListUsageRecordYesterdaySecurity };
var ListUsageRecordYesterdayListUsageRecordYesterdayResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordYesterdayListUsageRecordYesterdayResponse, _super);
    function ListUsageRecordYesterdayListUsageRecordYesterdayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListUsageRecordYesterdayListUsageRecordYesterdayResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordYesterdayListUsageRecordYesterdayResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordYesterdayListUsageRecordYesterdayResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUsageRecordYesterdayListUsageRecordYesterdayResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUsageRecordYesterdayListUsageRecordYesterdayResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordYesterdayListUsageRecordYesterdayResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListUsageRecordYesterdayListUsageRecordYesterdayResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordYesterdayListUsageRecordYesterdayResponse.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordYesterday }),
        __metadata("design:type", Array)
    ], ListUsageRecordYesterdayListUsageRecordYesterdayResponse.prototype, "usageRecords", void 0);
    return ListUsageRecordYesterdayListUsageRecordYesterdayResponse;
}(SpeakeasyBase));
export { ListUsageRecordYesterdayListUsageRecordYesterdayResponse };
var ListUsageRecordYesterdayRequest = /** @class */ (function (_super) {
    __extends(ListUsageRecordYesterdayRequest, _super);
    function ListUsageRecordYesterdayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUsageRecordYesterdayRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordYesterdayPathParams)
    ], ListUsageRecordYesterdayRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordYesterdayQueryParams)
    ], ListUsageRecordYesterdayRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordYesterdaySecurity)
    ], ListUsageRecordYesterdayRequest.prototype, "security", void 0);
    return ListUsageRecordYesterdayRequest;
}(SpeakeasyBase));
export { ListUsageRecordYesterdayRequest };
var ListUsageRecordYesterdayResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordYesterdayResponse, _super);
    function ListUsageRecordYesterdayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUsageRecordYesterdayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordYesterdayListUsageRecordYesterdayResponse)
    ], ListUsageRecordYesterdayResponse.prototype, "listUsageRecordYesterdayResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListUsageRecordYesterdayResponse.prototype, "statusCode", void 0);
    return ListUsageRecordYesterdayResponse;
}(SpeakeasyBase));
export { ListUsageRecordYesterdayResponse };
