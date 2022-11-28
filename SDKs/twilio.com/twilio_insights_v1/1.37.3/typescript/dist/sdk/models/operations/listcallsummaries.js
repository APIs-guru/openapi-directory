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
export var ListCallSummariesServerList = [
    "https://insights.twilio.com",
];
var ListCallSummariesQueryParams = /** @class */ (function (_super) {
    __extends(ListCallSummariesQueryParams, _super);
    function ListCallSummariesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AbnormalSession" }),
        __metadata("design:type", Boolean)
    ], ListCallSummariesQueryParams.prototype, "abnormalSession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Branded" }),
        __metadata("design:type", Boolean)
    ], ListCallSummariesQueryParams.prototype, "branded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CallState" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "callState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CallType" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "callType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Direction" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=From" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FromCarrier" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "fromCarrier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FromCountryCode" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "fromCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HasTag" }),
        __metadata("design:type", Boolean)
    ], ListCallSummariesQueryParams.prototype, "hasTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCallSummariesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ProcessingState" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "processingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SortBy" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Subaccount" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "subaccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=To" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ToCarrier" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "toCarrier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ToCountryCode" }),
        __metadata("design:type", String)
    ], ListCallSummariesQueryParams.prototype, "toCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VerifiedCaller" }),
        __metadata("design:type", Boolean)
    ], ListCallSummariesQueryParams.prototype, "verifiedCaller", void 0);
    return ListCallSummariesQueryParams;
}(SpeakeasyBase));
export { ListCallSummariesQueryParams };
var ListCallSummariesSecurity = /** @class */ (function (_super) {
    __extends(ListCallSummariesSecurity, _super);
    function ListCallSummariesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCallSummariesSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCallSummariesSecurity;
}(SpeakeasyBase));
export { ListCallSummariesSecurity };
var ListCallSummariesListCallSummariesResponseMeta = /** @class */ (function (_super) {
    __extends(ListCallSummariesListCallSummariesResponseMeta, _super);
    function ListCallSummariesListCallSummariesResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListCallSummariesListCallSummariesResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListCallSummariesListCallSummariesResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListCallSummariesListCallSummariesResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCallSummariesListCallSummariesResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCallSummariesListCallSummariesResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListCallSummariesListCallSummariesResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListCallSummariesListCallSummariesResponseMeta.prototype, "url", void 0);
    return ListCallSummariesListCallSummariesResponseMeta;
}(SpeakeasyBase));
export { ListCallSummariesListCallSummariesResponseMeta };
var ListCallSummariesListCallSummariesResponse = /** @class */ (function (_super) {
    __extends(ListCallSummariesListCallSummariesResponse, _super);
    function ListCallSummariesListCallSummariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_summaries", elemType: shared.InsightsV1CallSummaries }),
        __metadata("design:type", Array)
    ], ListCallSummariesListCallSummariesResponse.prototype, "callSummaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListCallSummariesListCallSummariesResponseMeta)
    ], ListCallSummariesListCallSummariesResponse.prototype, "meta", void 0);
    return ListCallSummariesListCallSummariesResponse;
}(SpeakeasyBase));
export { ListCallSummariesListCallSummariesResponse };
var ListCallSummariesRequest = /** @class */ (function (_super) {
    __extends(ListCallSummariesRequest, _super);
    function ListCallSummariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCallSummariesRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCallSummariesQueryParams)
    ], ListCallSummariesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCallSummariesSecurity)
    ], ListCallSummariesRequest.prototype, "security", void 0);
    return ListCallSummariesRequest;
}(SpeakeasyBase));
export { ListCallSummariesRequest };
var ListCallSummariesResponse = /** @class */ (function (_super) {
    __extends(ListCallSummariesResponse, _super);
    function ListCallSummariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCallSummariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCallSummariesListCallSummariesResponse)
    ], ListCallSummariesResponse.prototype, "listCallSummariesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListCallSummariesResponse.prototype, "statusCode", void 0);
    return ListCallSummariesResponse;
}(SpeakeasyBase));
export { ListCallSummariesResponse };
