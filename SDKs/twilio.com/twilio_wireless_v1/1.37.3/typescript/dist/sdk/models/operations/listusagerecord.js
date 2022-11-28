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
export var ListUsageRecordServerList = [
    "https://wireless.twilio.com",
];
var ListUsageRecordPathParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordPathParams, _super);
    function ListUsageRecordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SimSid" }),
        __metadata("design:type", String)
    ], ListUsageRecordPathParams.prototype, "simSid", void 0);
    return ListUsageRecordPathParams;
}(SpeakeasyBase));
export { ListUsageRecordPathParams };
var ListUsageRecordQueryParams = /** @class */ (function (_super) {
    __extends(ListUsageRecordQueryParams, _super);
    function ListUsageRecordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=End" }),
        __metadata("design:type", Date)
    ], ListUsageRecordQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Granularity" }),
        __metadata("design:type", String)
    ], ListUsageRecordQueryParams.prototype, "granularity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUsageRecordQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Start" }),
        __metadata("design:type", Date)
    ], ListUsageRecordQueryParams.prototype, "start", void 0);
    return ListUsageRecordQueryParams;
}(SpeakeasyBase));
export { ListUsageRecordQueryParams };
var ListUsageRecordSecurity = /** @class */ (function (_super) {
    __extends(ListUsageRecordSecurity, _super);
    function ListUsageRecordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUsageRecordSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUsageRecordSecurity;
}(SpeakeasyBase));
export { ListUsageRecordSecurity };
var ListUsageRecordListUsageRecordResponseMeta = /** @class */ (function (_super) {
    __extends(ListUsageRecordListUsageRecordResponseMeta, _super);
    function ListUsageRecordListUsageRecordResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUsageRecordListUsageRecordResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUsageRecordListUsageRecordResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUsageRecordListUsageRecordResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUsageRecordListUsageRecordResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUsageRecordListUsageRecordResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUsageRecordListUsageRecordResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUsageRecordListUsageRecordResponseMeta.prototype, "url", void 0);
    return ListUsageRecordListUsageRecordResponseMeta;
}(SpeakeasyBase));
export { ListUsageRecordListUsageRecordResponseMeta };
var ListUsageRecordListUsageRecordResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordListUsageRecordResponse, _super);
    function ListUsageRecordListUsageRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListUsageRecordListUsageRecordResponseMeta)
    ], ListUsageRecordListUsageRecordResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage_records", elemType: shared.WirelessV1SimUsageRecord }),
        __metadata("design:type", Array)
    ], ListUsageRecordListUsageRecordResponse.prototype, "usageRecords", void 0);
    return ListUsageRecordListUsageRecordResponse;
}(SpeakeasyBase));
export { ListUsageRecordListUsageRecordResponse };
var ListUsageRecordRequest = /** @class */ (function (_super) {
    __extends(ListUsageRecordRequest, _super);
    function ListUsageRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUsageRecordRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordPathParams)
    ], ListUsageRecordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordQueryParams)
    ], ListUsageRecordRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordSecurity)
    ], ListUsageRecordRequest.prototype, "security", void 0);
    return ListUsageRecordRequest;
}(SpeakeasyBase));
export { ListUsageRecordRequest };
var ListUsageRecordResponse = /** @class */ (function (_super) {
    __extends(ListUsageRecordResponse, _super);
    function ListUsageRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUsageRecordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUsageRecordListUsageRecordResponse)
    ], ListUsageRecordResponse.prototype, "listUsageRecordResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListUsageRecordResponse.prototype, "statusCode", void 0);
    return ListUsageRecordResponse;
}(SpeakeasyBase));
export { ListUsageRecordResponse };
