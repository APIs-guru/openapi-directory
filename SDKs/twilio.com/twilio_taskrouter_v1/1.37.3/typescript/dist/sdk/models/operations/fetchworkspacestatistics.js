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
export var FetchWorkspaceStatisticsServerList = [
    "https://taskrouter.twilio.com",
];
var FetchWorkspaceStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkspaceStatisticsPathParams, _super);
    function FetchWorkspaceStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkspaceStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkspaceStatisticsPathParams;
}(SpeakeasyBase));
export { FetchWorkspaceStatisticsPathParams };
var FetchWorkspaceStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkspaceStatisticsQueryParams, _super);
    function FetchWorkspaceStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], FetchWorkspaceStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], FetchWorkspaceStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" }),
        __metadata("design:type", String)
    ], FetchWorkspaceStatisticsQueryParams.prototype, "splitByWaitTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], FetchWorkspaceStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkspaceStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchWorkspaceStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchWorkspaceStatisticsQueryParams };
var FetchWorkspaceStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkspaceStatisticsSecurity, _super);
    function FetchWorkspaceStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkspaceStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkspaceStatisticsSecurity;
}(SpeakeasyBase));
export { FetchWorkspaceStatisticsSecurity };
var FetchWorkspaceStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkspaceStatisticsRequest, _super);
    function FetchWorkspaceStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWorkspaceStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkspaceStatisticsPathParams)
    ], FetchWorkspaceStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkspaceStatisticsQueryParams)
    ], FetchWorkspaceStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkspaceStatisticsSecurity)
    ], FetchWorkspaceStatisticsRequest.prototype, "security", void 0);
    return FetchWorkspaceStatisticsRequest;
}(SpeakeasyBase));
export { FetchWorkspaceStatisticsRequest };
var FetchWorkspaceStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkspaceStatisticsResponse, _super);
    function FetchWorkspaceStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWorkspaceStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchWorkspaceStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkspaceStatistics)
    ], FetchWorkspaceStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkspaceStatistics", void 0);
    return FetchWorkspaceStatisticsResponse;
}(SpeakeasyBase));
export { FetchWorkspaceStatisticsResponse };
