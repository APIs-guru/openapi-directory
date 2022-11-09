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
export var FETCHTASKQUEUEREALTIMESTATISTICS_SERVERS = [
    "https://taskrouter.twilio.com",
];
var FetchTaskQueueRealTimeStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchTaskQueueRealTimeStatisticsPathParams, _super);
    function FetchTaskQueueRealTimeStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TaskQueueSid" }),
        __metadata("design:type", String)
    ], FetchTaskQueueRealTimeStatisticsPathParams.prototype, "taskQueueSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchTaskQueueRealTimeStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchTaskQueueRealTimeStatisticsPathParams;
}(SpeakeasyBase));
export { FetchTaskQueueRealTimeStatisticsPathParams };
var FetchTaskQueueRealTimeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchTaskQueueRealTimeStatisticsQueryParams, _super);
    function FetchTaskQueueRealTimeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchTaskQueueRealTimeStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchTaskQueueRealTimeStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchTaskQueueRealTimeStatisticsQueryParams };
var FetchTaskQueueRealTimeStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchTaskQueueRealTimeStatisticsSecurity, _super);
    function FetchTaskQueueRealTimeStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTaskQueueRealTimeStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTaskQueueRealTimeStatisticsSecurity;
}(SpeakeasyBase));
export { FetchTaskQueueRealTimeStatisticsSecurity };
var FetchTaskQueueRealTimeStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchTaskQueueRealTimeStatisticsRequest, _super);
    function FetchTaskQueueRealTimeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchTaskQueueRealTimeStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTaskQueueRealTimeStatisticsPathParams)
    ], FetchTaskQueueRealTimeStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTaskQueueRealTimeStatisticsQueryParams)
    ], FetchTaskQueueRealTimeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTaskQueueRealTimeStatisticsSecurity)
    ], FetchTaskQueueRealTimeStatisticsRequest.prototype, "security", void 0);
    return FetchTaskQueueRealTimeStatisticsRequest;
}(SpeakeasyBase));
export { FetchTaskQueueRealTimeStatisticsRequest };
var FetchTaskQueueRealTimeStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchTaskQueueRealTimeStatisticsResponse, _super);
    function FetchTaskQueueRealTimeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchTaskQueueRealTimeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchTaskQueueRealTimeStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics)
    ], FetchTaskQueueRealTimeStatisticsResponse.prototype, "taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics", void 0);
    return FetchTaskQueueRealTimeStatisticsResponse;
}(SpeakeasyBase));
export { FetchTaskQueueRealTimeStatisticsResponse };
