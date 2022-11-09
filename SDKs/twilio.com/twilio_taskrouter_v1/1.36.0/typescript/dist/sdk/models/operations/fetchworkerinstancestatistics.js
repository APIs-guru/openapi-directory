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
export var FETCHWORKERINSTANCESTATISTICS_SERVERS = [
    "https://taskrouter.twilio.com",
];
var FetchWorkerInstanceStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkerInstanceStatisticsPathParams, _super);
    function FetchWorkerInstanceStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkerSid" }),
        __metadata("design:type", String)
    ], FetchWorkerInstanceStatisticsPathParams.prototype, "workerSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkerInstanceStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkerInstanceStatisticsPathParams;
}(SpeakeasyBase));
export { FetchWorkerInstanceStatisticsPathParams };
var FetchWorkerInstanceStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkerInstanceStatisticsQueryParams, _super);
    function FetchWorkerInstanceStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], FetchWorkerInstanceStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], FetchWorkerInstanceStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], FetchWorkerInstanceStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkerInstanceStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchWorkerInstanceStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchWorkerInstanceStatisticsQueryParams };
var FetchWorkerInstanceStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkerInstanceStatisticsSecurity, _super);
    function FetchWorkerInstanceStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkerInstanceStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkerInstanceStatisticsSecurity;
}(SpeakeasyBase));
export { FetchWorkerInstanceStatisticsSecurity };
var FetchWorkerInstanceStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkerInstanceStatisticsRequest, _super);
    function FetchWorkerInstanceStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWorkerInstanceStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkerInstanceStatisticsPathParams)
    ], FetchWorkerInstanceStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkerInstanceStatisticsQueryParams)
    ], FetchWorkerInstanceStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkerInstanceStatisticsSecurity)
    ], FetchWorkerInstanceStatisticsRequest.prototype, "security", void 0);
    return FetchWorkerInstanceStatisticsRequest;
}(SpeakeasyBase));
export { FetchWorkerInstanceStatisticsRequest };
var FetchWorkerInstanceStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkerInstanceStatisticsResponse, _super);
    function FetchWorkerInstanceStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWorkerInstanceStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchWorkerInstanceStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics)
    ], FetchWorkerInstanceStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkerWorkerInstanceStatistics", void 0);
    return FetchWorkerInstanceStatisticsResponse;
}(SpeakeasyBase));
export { FetchWorkerInstanceStatisticsResponse };
