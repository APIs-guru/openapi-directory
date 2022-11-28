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
export var FetchTaskQueueCumulativeStatisticsServerList = [
    "https://taskrouter.twilio.com",
];
var FetchTaskQueueCumulativeStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchTaskQueueCumulativeStatisticsPathParams, _super);
    function FetchTaskQueueCumulativeStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskQueueSid" }),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsPathParams.prototype, "taskQueueSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchTaskQueueCumulativeStatisticsPathParams;
}(SpeakeasyBase));
export { FetchTaskQueueCumulativeStatisticsPathParams };
var FetchTaskQueueCumulativeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchTaskQueueCumulativeStatisticsQueryParams, _super);
    function FetchTaskQueueCumulativeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], FetchTaskQueueCumulativeStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], FetchTaskQueueCumulativeStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" }),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsQueryParams.prototype, "splitByWaitTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], FetchTaskQueueCumulativeStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchTaskQueueCumulativeStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchTaskQueueCumulativeStatisticsQueryParams };
var FetchTaskQueueCumulativeStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchTaskQueueCumulativeStatisticsSecurity, _super);
    function FetchTaskQueueCumulativeStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTaskQueueCumulativeStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTaskQueueCumulativeStatisticsSecurity;
}(SpeakeasyBase));
export { FetchTaskQueueCumulativeStatisticsSecurity };
var FetchTaskQueueCumulativeStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchTaskQueueCumulativeStatisticsRequest, _super);
    function FetchTaskQueueCumulativeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTaskQueueCumulativeStatisticsPathParams)
    ], FetchTaskQueueCumulativeStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTaskQueueCumulativeStatisticsQueryParams)
    ], FetchTaskQueueCumulativeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTaskQueueCumulativeStatisticsSecurity)
    ], FetchTaskQueueCumulativeStatisticsRequest.prototype, "security", void 0);
    return FetchTaskQueueCumulativeStatisticsRequest;
}(SpeakeasyBase));
export { FetchTaskQueueCumulativeStatisticsRequest };
var FetchTaskQueueCumulativeStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchTaskQueueCumulativeStatisticsResponse, _super);
    function FetchTaskQueueCumulativeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTaskQueueCumulativeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchTaskQueueCumulativeStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics)
    ], FetchTaskQueueCumulativeStatisticsResponse.prototype, "taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics", void 0);
    return FetchTaskQueueCumulativeStatisticsResponse;
}(SpeakeasyBase));
export { FetchTaskQueueCumulativeStatisticsResponse };
