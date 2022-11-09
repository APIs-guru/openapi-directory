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
export var FETCHWORKFLOWCUMULATIVESTATISTICS_SERVERS = [
    "https://taskrouter.twilio.com",
];
var FetchWorkflowCumulativeStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkflowCumulativeStatisticsPathParams, _super);
    function FetchWorkflowCumulativeStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkflowSid" }),
        __metadata("design:type", String)
    ], FetchWorkflowCumulativeStatisticsPathParams.prototype, "workflowSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkflowCumulativeStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkflowCumulativeStatisticsPathParams;
}(SpeakeasyBase));
export { FetchWorkflowCumulativeStatisticsPathParams };
var FetchWorkflowCumulativeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkflowCumulativeStatisticsQueryParams, _super);
    function FetchWorkflowCumulativeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], FetchWorkflowCumulativeStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], FetchWorkflowCumulativeStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" }),
        __metadata("design:type", String)
    ], FetchWorkflowCumulativeStatisticsQueryParams.prototype, "splitByWaitTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], FetchWorkflowCumulativeStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkflowCumulativeStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchWorkflowCumulativeStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchWorkflowCumulativeStatisticsQueryParams };
var FetchWorkflowCumulativeStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkflowCumulativeStatisticsSecurity, _super);
    function FetchWorkflowCumulativeStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkflowCumulativeStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkflowCumulativeStatisticsSecurity;
}(SpeakeasyBase));
export { FetchWorkflowCumulativeStatisticsSecurity };
var FetchWorkflowCumulativeStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkflowCumulativeStatisticsRequest, _super);
    function FetchWorkflowCumulativeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWorkflowCumulativeStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkflowCumulativeStatisticsPathParams)
    ], FetchWorkflowCumulativeStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkflowCumulativeStatisticsQueryParams)
    ], FetchWorkflowCumulativeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkflowCumulativeStatisticsSecurity)
    ], FetchWorkflowCumulativeStatisticsRequest.prototype, "security", void 0);
    return FetchWorkflowCumulativeStatisticsRequest;
}(SpeakeasyBase));
export { FetchWorkflowCumulativeStatisticsRequest };
var FetchWorkflowCumulativeStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkflowCumulativeStatisticsResponse, _super);
    function FetchWorkflowCumulativeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWorkflowCumulativeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchWorkflowCumulativeStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics)
    ], FetchWorkflowCumulativeStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics", void 0);
    return FetchWorkflowCumulativeStatisticsResponse;
}(SpeakeasyBase));
export { FetchWorkflowCumulativeStatisticsResponse };
