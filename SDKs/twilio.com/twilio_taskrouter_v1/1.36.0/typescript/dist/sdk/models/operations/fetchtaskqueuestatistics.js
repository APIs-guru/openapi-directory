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
export var FETCHTASKQUEUESTATISTICS_SERVERS = [
    "https://taskrouter.twilio.com",
];
var FetchTaskQueueStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchTaskQueueStatisticsPathParams, _super);
    function FetchTaskQueueStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TaskQueueSid" }),
        __metadata("design:type", String)
    ], FetchTaskQueueStatisticsPathParams.prototype, "taskQueueSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchTaskQueueStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchTaskQueueStatisticsPathParams;
}(SpeakeasyBase));
export { FetchTaskQueueStatisticsPathParams };
var FetchTaskQueueStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchTaskQueueStatisticsQueryParams, _super);
    function FetchTaskQueueStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], FetchTaskQueueStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], FetchTaskQueueStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" }),
        __metadata("design:type", String)
    ], FetchTaskQueueStatisticsQueryParams.prototype, "splitByWaitTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], FetchTaskQueueStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchTaskQueueStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchTaskQueueStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchTaskQueueStatisticsQueryParams };
var FetchTaskQueueStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchTaskQueueStatisticsSecurity, _super);
    function FetchTaskQueueStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTaskQueueStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTaskQueueStatisticsSecurity;
}(SpeakeasyBase));
export { FetchTaskQueueStatisticsSecurity };
var FetchTaskQueueStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchTaskQueueStatisticsRequest, _super);
    function FetchTaskQueueStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchTaskQueueStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTaskQueueStatisticsPathParams)
    ], FetchTaskQueueStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTaskQueueStatisticsQueryParams)
    ], FetchTaskQueueStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTaskQueueStatisticsSecurity)
    ], FetchTaskQueueStatisticsRequest.prototype, "security", void 0);
    return FetchTaskQueueStatisticsRequest;
}(SpeakeasyBase));
export { FetchTaskQueueStatisticsRequest };
var FetchTaskQueueStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchTaskQueueStatisticsResponse, _super);
    function FetchTaskQueueStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchTaskQueueStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchTaskQueueStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics)
    ], FetchTaskQueueStatisticsResponse.prototype, "taskrouterV1WorkspaceTaskQueueTaskQueueStatistics", void 0);
    return FetchTaskQueueStatisticsResponse;
}(SpeakeasyBase));
export { FetchTaskQueueStatisticsResponse };
