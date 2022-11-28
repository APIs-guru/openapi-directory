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
export var FetchWorkflowStatisticsServerList = [
    "https://taskrouter.twilio.com",
];
var FetchWorkflowStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkflowStatisticsPathParams, _super);
    function FetchWorkflowStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkflowSid" }),
        __metadata("design:type", String)
    ], FetchWorkflowStatisticsPathParams.prototype, "workflowSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkflowStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkflowStatisticsPathParams;
}(SpeakeasyBase));
export { FetchWorkflowStatisticsPathParams };
var FetchWorkflowStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkflowStatisticsQueryParams, _super);
    function FetchWorkflowStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], FetchWorkflowStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], FetchWorkflowStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" }),
        __metadata("design:type", String)
    ], FetchWorkflowStatisticsQueryParams.prototype, "splitByWaitTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], FetchWorkflowStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkflowStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchWorkflowStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchWorkflowStatisticsQueryParams };
var FetchWorkflowStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkflowStatisticsSecurity, _super);
    function FetchWorkflowStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkflowStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkflowStatisticsSecurity;
}(SpeakeasyBase));
export { FetchWorkflowStatisticsSecurity };
var FetchWorkflowStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkflowStatisticsRequest, _super);
    function FetchWorkflowStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWorkflowStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkflowStatisticsPathParams)
    ], FetchWorkflowStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkflowStatisticsQueryParams)
    ], FetchWorkflowStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkflowStatisticsSecurity)
    ], FetchWorkflowStatisticsRequest.prototype, "security", void 0);
    return FetchWorkflowStatisticsRequest;
}(SpeakeasyBase));
export { FetchWorkflowStatisticsRequest };
var FetchWorkflowStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkflowStatisticsResponse, _super);
    function FetchWorkflowStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWorkflowStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchWorkflowStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkflowWorkflowStatistics)
    ], FetchWorkflowStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkflowWorkflowStatistics", void 0);
    return FetchWorkflowStatisticsResponse;
}(SpeakeasyBase));
export { FetchWorkflowStatisticsResponse };
