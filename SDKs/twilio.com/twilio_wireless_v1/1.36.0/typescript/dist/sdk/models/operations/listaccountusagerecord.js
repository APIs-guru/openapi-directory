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
export var LISTACCOUNTUSAGERECORD_SERVERS = [
    "https://wireless.twilio.com",
];
var ListAccountUsageRecordQueryParams = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordQueryParams, _super);
    function ListAccountUsageRecordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=End" }),
        __metadata("design:type", Date)
    ], ListAccountUsageRecordQueryParams.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Granularity" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordQueryParams.prototype, "granularity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAccountUsageRecordQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Start" }),
        __metadata("design:type", Date)
    ], ListAccountUsageRecordQueryParams.prototype, "start", void 0);
    return ListAccountUsageRecordQueryParams;
}(SpeakeasyBase));
export { ListAccountUsageRecordQueryParams };
var ListAccountUsageRecordSecurity = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordSecurity, _super);
    function ListAccountUsageRecordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAccountUsageRecordSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAccountUsageRecordSecurity;
}(SpeakeasyBase));
export { ListAccountUsageRecordSecurity };
var ListAccountUsageRecordRequest = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordRequest, _super);
    function ListAccountUsageRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAccountUsageRecordRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAccountUsageRecordQueryParams)
    ], ListAccountUsageRecordRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAccountUsageRecordSecurity)
    ], ListAccountUsageRecordRequest.prototype, "security", void 0);
    return ListAccountUsageRecordRequest;
}(SpeakeasyBase));
export { ListAccountUsageRecordRequest };
var ListAccountUsageRecordListAccountUsageRecordResponseMeta = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordListAccountUsageRecordResponseMeta, _super);
    function ListAccountUsageRecordListAccountUsageRecordResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListAccountUsageRecordListAccountUsageRecordResponseMeta.prototype, "url", void 0);
    return ListAccountUsageRecordListAccountUsageRecordResponseMeta;
}(SpeakeasyBase));
export { ListAccountUsageRecordListAccountUsageRecordResponseMeta };
var ListAccountUsageRecordListAccountUsageRecordResponse = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordListAccountUsageRecordResponse, _super);
    function ListAccountUsageRecordListAccountUsageRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListAccountUsageRecordListAccountUsageRecordResponseMeta)
    ], ListAccountUsageRecordListAccountUsageRecordResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=usage_records", elemType: shared.WirelessV1AccountUsageRecord }),
        __metadata("design:type", Array)
    ], ListAccountUsageRecordListAccountUsageRecordResponse.prototype, "usageRecords", void 0);
    return ListAccountUsageRecordListAccountUsageRecordResponse;
}(SpeakeasyBase));
export { ListAccountUsageRecordListAccountUsageRecordResponse };
var ListAccountUsageRecordResponse = /** @class */ (function (_super) {
    __extends(ListAccountUsageRecordResponse, _super);
    function ListAccountUsageRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAccountUsageRecordResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAccountUsageRecordListAccountUsageRecordResponse)
    ], ListAccountUsageRecordResponse.prototype, "listAccountUsageRecordResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAccountUsageRecordResponse.prototype, "statusCode", void 0);
    return ListAccountUsageRecordResponse;
}(SpeakeasyBase));
export { ListAccountUsageRecordResponse };
