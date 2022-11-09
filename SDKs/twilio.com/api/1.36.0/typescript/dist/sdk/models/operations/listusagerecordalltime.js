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
export var LISTUSAGERECORDALLTIME_SERVERS = [
    "https://api.twilio.com",
];
var ListUsageRecordAllTimePathParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordAllTimePathParams, _super);
    function ListUsageRecordAllTimePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListUsageRecordAllTimePathParams.prototype, "accountSid", void 0);
    return ListUsageRecordAllTimePathParams;
}(SpeakeasyBase));
export { ListUsageRecordAllTimePathParams };
var ListUsageRecordAllTimeQueryParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordAllTimeQueryParams, _super);
    function ListUsageRecordAllTimeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Category" }),
        __metadata("design:type", String)
    ], ListUsageRecordAllTimeQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordAllTimeQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" }),
        __metadata("design:type", Boolean)
    ], ListUsageRecordAllTimeQueryParams.prototype, "includeSubaccounts", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUsageRecordAllTimeQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListUsageRecordAllTimeQueryParams.prototype, "startDate", void 0);
    return ListUsageRecordAllTimeQueryParams;
}(SpeakeasyBase));
export { ListUsageRecordAllTimeQueryParams };
var ListUsageRecordAllTimeSecurity = /** @class */ (function (_super) {
    __extends(ListUsageRecordAllTimeSecurity, _super);
    function ListUsageRecordAllTimeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUsageRecordAllTimeSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUsageRecordAllTimeSecurity;
}(SpeakeasyBase));
export { ListUsageRecordAllTimeSecurity };
var ListUsageRecordAllTimeRequest = /** @class */ (function (_super) {
    __extends(ListUsageRecordAllTimeRequest, _super);
    function ListUsageRecordAllTimeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordAllTimeRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordAllTimePathParams)
    ], ListUsageRecordAllTimeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordAllTimeQueryParams)
    ], ListUsageRecordAllTimeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordAllTimeSecurity)
    ], ListUsageRecordAllTimeRequest.prototype, "security", void 0);
    return ListUsageRecordAllTimeRequest;
}(SpeakeasyBase));
export { ListUsageRecordAllTimeRequest };
var ListUsageRecordAllTimeListUsageRecordAllTimeResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordAllTimeListUsageRecordAllTimeResponse, _super);
    function ListUsageRecordAllTimeListUsageRecordAllTimeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListUsageRecordAllTimeListUsageRecordAllTimeResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordAllTimeListUsageRecordAllTimeResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordAllTimeListUsageRecordAllTimeResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUsageRecordAllTimeListUsageRecordAllTimeResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUsageRecordAllTimeListUsageRecordAllTimeResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordAllTimeListUsageRecordAllTimeResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListUsageRecordAllTimeListUsageRecordAllTimeResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListUsageRecordAllTimeListUsageRecordAllTimeResponse.prototype, "uri", void 0);
    __decorate([
        Metadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordAllTime }),
        __metadata("design:type", Array)
    ], ListUsageRecordAllTimeListUsageRecordAllTimeResponse.prototype, "usageRecords", void 0);
    return ListUsageRecordAllTimeListUsageRecordAllTimeResponse;
}(SpeakeasyBase));
export { ListUsageRecordAllTimeListUsageRecordAllTimeResponse };
var ListUsageRecordAllTimeResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordAllTimeResponse, _super);
    function ListUsageRecordAllTimeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsageRecordAllTimeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsageRecordAllTimeListUsageRecordAllTimeResponse)
    ], ListUsageRecordAllTimeResponse.prototype, "listUsageRecordAllTimeResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUsageRecordAllTimeResponse.prototype, "statusCode", void 0);
    return ListUsageRecordAllTimeResponse;
}(SpeakeasyBase));
export { ListUsageRecordAllTimeResponse };
