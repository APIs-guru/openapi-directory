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
export var ListTaskQueuesStatisticsServerList = [
    "https://taskrouter.twilio.com",
];
var ListTaskQueuesStatisticsPathParams = /** @class */ (function (_super) {
    __extends(ListTaskQueuesStatisticsPathParams, _super);
    function ListTaskQueuesStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListTaskQueuesStatisticsPathParams.prototype, "workspaceSid", void 0);
    return ListTaskQueuesStatisticsPathParams;
}(SpeakeasyBase));
export { ListTaskQueuesStatisticsPathParams };
var ListTaskQueuesStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(ListTaskQueuesStatisticsQueryParams, _super);
    function ListTaskQueuesStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListTaskQueuesStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListTaskQueuesStatisticsQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], ListTaskQueuesStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTaskQueuesStatisticsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" }),
        __metadata("design:type", String)
    ], ListTaskQueuesStatisticsQueryParams.prototype, "splitByWaitTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListTaskQueuesStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], ListTaskQueuesStatisticsQueryParams.prototype, "taskChannel", void 0);
    return ListTaskQueuesStatisticsQueryParams;
}(SpeakeasyBase));
export { ListTaskQueuesStatisticsQueryParams };
var ListTaskQueuesStatisticsSecurity = /** @class */ (function (_super) {
    __extends(ListTaskQueuesStatisticsSecurity, _super);
    function ListTaskQueuesStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTaskQueuesStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTaskQueuesStatisticsSecurity;
}(SpeakeasyBase));
export { ListTaskQueuesStatisticsSecurity };
var ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta = /** @class */ (function (_super) {
    __extends(ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta, _super);
    function ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta.prototype, "url", void 0);
    return ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta;
}(SpeakeasyBase));
export { ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta };
var ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse = /** @class */ (function (_super) {
    __extends(ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse, _super);
    function ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta)
    ], ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task_queues_statistics", elemType: shared.TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics }),
        __metadata("design:type", Array)
    ], ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse.prototype, "taskQueuesStatistics", void 0);
    return ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse;
}(SpeakeasyBase));
export { ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse };
var ListTaskQueuesStatisticsRequest = /** @class */ (function (_super) {
    __extends(ListTaskQueuesStatisticsRequest, _super);
    function ListTaskQueuesStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTaskQueuesStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTaskQueuesStatisticsPathParams)
    ], ListTaskQueuesStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTaskQueuesStatisticsQueryParams)
    ], ListTaskQueuesStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTaskQueuesStatisticsSecurity)
    ], ListTaskQueuesStatisticsRequest.prototype, "security", void 0);
    return ListTaskQueuesStatisticsRequest;
}(SpeakeasyBase));
export { ListTaskQueuesStatisticsRequest };
var ListTaskQueuesStatisticsResponse = /** @class */ (function (_super) {
    __extends(ListTaskQueuesStatisticsResponse, _super);
    function ListTaskQueuesStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTaskQueuesStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse)
    ], ListTaskQueuesStatisticsResponse.prototype, "listTaskQueuesStatisticsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTaskQueuesStatisticsResponse.prototype, "statusCode", void 0);
    return ListTaskQueuesStatisticsResponse;
}(SpeakeasyBase));
export { ListTaskQueuesStatisticsResponse };
