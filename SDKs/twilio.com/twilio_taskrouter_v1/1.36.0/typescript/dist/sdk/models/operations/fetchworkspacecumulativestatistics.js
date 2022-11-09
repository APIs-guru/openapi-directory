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
export var FETCHWORKSPACECUMULATIVESTATISTICS_SERVERS = [
    "https://taskrouter.twilio.com",
];
var FetchWorkspaceCumulativeStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkspaceCumulativeStatisticsPathParams, _super);
    function FetchWorkspaceCumulativeStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkspaceCumulativeStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkspaceCumulativeStatisticsPathParams;
}(SpeakeasyBase));
export { FetchWorkspaceCumulativeStatisticsPathParams };
var FetchWorkspaceCumulativeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkspaceCumulativeStatisticsQueryParams, _super);
    function FetchWorkspaceCumulativeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], FetchWorkspaceCumulativeStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], FetchWorkspaceCumulativeStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" }),
        __metadata("design:type", String)
    ], FetchWorkspaceCumulativeStatisticsQueryParams.prototype, "splitByWaitTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], FetchWorkspaceCumulativeStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkspaceCumulativeStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchWorkspaceCumulativeStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchWorkspaceCumulativeStatisticsQueryParams };
var FetchWorkspaceCumulativeStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkspaceCumulativeStatisticsSecurity, _super);
    function FetchWorkspaceCumulativeStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkspaceCumulativeStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkspaceCumulativeStatisticsSecurity;
}(SpeakeasyBase));
export { FetchWorkspaceCumulativeStatisticsSecurity };
var FetchWorkspaceCumulativeStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkspaceCumulativeStatisticsRequest, _super);
    function FetchWorkspaceCumulativeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWorkspaceCumulativeStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkspaceCumulativeStatisticsPathParams)
    ], FetchWorkspaceCumulativeStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkspaceCumulativeStatisticsQueryParams)
    ], FetchWorkspaceCumulativeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWorkspaceCumulativeStatisticsSecurity)
    ], FetchWorkspaceCumulativeStatisticsRequest.prototype, "security", void 0);
    return FetchWorkspaceCumulativeStatisticsRequest;
}(SpeakeasyBase));
export { FetchWorkspaceCumulativeStatisticsRequest };
var FetchWorkspaceCumulativeStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkspaceCumulativeStatisticsResponse, _super);
    function FetchWorkspaceCumulativeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWorkspaceCumulativeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchWorkspaceCumulativeStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkspaceCumulativeStatistics)
    ], FetchWorkspaceCumulativeStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkspaceCumulativeStatistics", void 0);
    return FetchWorkspaceCumulativeStatisticsResponse;
}(SpeakeasyBase));
export { FetchWorkspaceCumulativeStatisticsResponse };
