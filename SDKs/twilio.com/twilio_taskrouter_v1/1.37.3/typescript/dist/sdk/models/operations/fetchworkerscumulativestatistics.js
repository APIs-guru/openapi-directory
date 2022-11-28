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
export var FetchWorkersCumulativeStatisticsServerList = [
    "https://taskrouter.twilio.com",
];
var FetchWorkersCumulativeStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkersCumulativeStatisticsPathParams, _super);
    function FetchWorkersCumulativeStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkersCumulativeStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkersCumulativeStatisticsPathParams;
}(SpeakeasyBase));
export { FetchWorkersCumulativeStatisticsPathParams };
var FetchWorkersCumulativeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkersCumulativeStatisticsQueryParams, _super);
    function FetchWorkersCumulativeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], FetchWorkersCumulativeStatisticsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], FetchWorkersCumulativeStatisticsQueryParams.prototype, "minutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], FetchWorkersCumulativeStatisticsQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkersCumulativeStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchWorkersCumulativeStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchWorkersCumulativeStatisticsQueryParams };
var FetchWorkersCumulativeStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkersCumulativeStatisticsSecurity, _super);
    function FetchWorkersCumulativeStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkersCumulativeStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkersCumulativeStatisticsSecurity;
}(SpeakeasyBase));
export { FetchWorkersCumulativeStatisticsSecurity };
var FetchWorkersCumulativeStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkersCumulativeStatisticsRequest, _super);
    function FetchWorkersCumulativeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWorkersCumulativeStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkersCumulativeStatisticsPathParams)
    ], FetchWorkersCumulativeStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkersCumulativeStatisticsQueryParams)
    ], FetchWorkersCumulativeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkersCumulativeStatisticsSecurity)
    ], FetchWorkersCumulativeStatisticsRequest.prototype, "security", void 0);
    return FetchWorkersCumulativeStatisticsRequest;
}(SpeakeasyBase));
export { FetchWorkersCumulativeStatisticsRequest };
var FetchWorkersCumulativeStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkersCumulativeStatisticsResponse, _super);
    function FetchWorkersCumulativeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWorkersCumulativeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchWorkersCumulativeStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics)
    ], FetchWorkersCumulativeStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics", void 0);
    return FetchWorkersCumulativeStatisticsResponse;
}(SpeakeasyBase));
export { FetchWorkersCumulativeStatisticsResponse };
