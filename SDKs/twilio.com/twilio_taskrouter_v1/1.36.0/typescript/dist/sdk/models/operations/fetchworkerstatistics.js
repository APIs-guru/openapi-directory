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
export var FETCHWORKERSTATISTICS_SERVERS = [
    "https://taskrouter.twilio.com",
];
var FetchWorkerStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkerStatisticsPathParams, _super);
    function FetchWorkerStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkerStatisticsPathParams;
}(SpeakeasyBase));
export { FetchWorkerStatisticsPathParams };
var FetchWorkerStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkerStatisticsQueryParams, _super);
    function FetchWorkerStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], FetchWorkerStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], FetchWorkerStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], FetchWorkerStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsQueryParams.prototype, "taskChannel", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaskQueueName" }),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsQueryParams.prototype, "taskQueueName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" }),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsQueryParams.prototype, "taskQueueSid", void 0);
    return FetchWorkerStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchWorkerStatisticsQueryParams };
var FetchWorkerStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkerStatisticsSecurity, _super);
    function FetchWorkerStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkerStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkerStatisticsSecurity;
}(SpeakeasyBase));
export { FetchWorkerStatisticsSecurity };
var FetchWorkerStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkerStatisticsRequest, _super);
    function FetchWorkerStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkerStatisticsPathParams)
    ], FetchWorkerStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkerStatisticsQueryParams)
    ], FetchWorkerStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkerStatisticsSecurity)
    ], FetchWorkerStatisticsRequest.prototype, "security", void 0);
    return FetchWorkerStatisticsRequest;
}(SpeakeasyBase));
export { FetchWorkerStatisticsRequest };
var FetchWorkerStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkerStatisticsResponse, _super);
    function FetchWorkerStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWorkerStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchWorkerStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkerWorkerStatistics)
    ], FetchWorkerStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkerWorkerStatistics", void 0);
    return FetchWorkerStatisticsResponse;
}(SpeakeasyBase));
export { FetchWorkerStatisticsResponse };
