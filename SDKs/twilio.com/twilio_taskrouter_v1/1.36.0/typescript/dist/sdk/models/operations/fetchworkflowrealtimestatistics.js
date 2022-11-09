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
export var FETCHWORKFLOWREALTIMESTATISTICS_SERVERS = [
    "https://taskrouter.twilio.com",
];
var FetchWorkflowRealTimeStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkflowRealTimeStatisticsPathParams, _super);
    function FetchWorkflowRealTimeStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkflowSid" }),
        __metadata("design:type", String)
    ], FetchWorkflowRealTimeStatisticsPathParams.prototype, "workflowSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkflowRealTimeStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkflowRealTimeStatisticsPathParams;
}(SpeakeasyBase));
export { FetchWorkflowRealTimeStatisticsPathParams };
var FetchWorkflowRealTimeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkflowRealTimeStatisticsQueryParams, _super);
    function FetchWorkflowRealTimeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkflowRealTimeStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchWorkflowRealTimeStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchWorkflowRealTimeStatisticsQueryParams };
var FetchWorkflowRealTimeStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkflowRealTimeStatisticsSecurity, _super);
    function FetchWorkflowRealTimeStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkflowRealTimeStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkflowRealTimeStatisticsSecurity;
}(SpeakeasyBase));
export { FetchWorkflowRealTimeStatisticsSecurity };
var FetchWorkflowRealTimeStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkflowRealTimeStatisticsRequest, _super);
    function FetchWorkflowRealTimeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWorkflowRealTimeStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkflowRealTimeStatisticsPathParams)
    ], FetchWorkflowRealTimeStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkflowRealTimeStatisticsQueryParams)
    ], FetchWorkflowRealTimeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkflowRealTimeStatisticsSecurity)
    ], FetchWorkflowRealTimeStatisticsRequest.prototype, "security", void 0);
    return FetchWorkflowRealTimeStatisticsRequest;
}(SpeakeasyBase));
export { FetchWorkflowRealTimeStatisticsRequest };
var FetchWorkflowRealTimeStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkflowRealTimeStatisticsResponse, _super);
    function FetchWorkflowRealTimeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWorkflowRealTimeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchWorkflowRealTimeStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics)
    ], FetchWorkflowRealTimeStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics", void 0);
    return FetchWorkflowRealTimeStatisticsResponse;
}(SpeakeasyBase));
export { FetchWorkflowRealTimeStatisticsResponse };
