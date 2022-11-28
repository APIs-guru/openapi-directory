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
export var FetchWorkersRealTimeStatisticsServerList = [
    "https://taskrouter.twilio.com",
];
var FetchWorkersRealTimeStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkersRealTimeStatisticsPathParams, _super);
    function FetchWorkersRealTimeStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkersRealTimeStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkersRealTimeStatisticsPathParams;
}(SpeakeasyBase));
export { FetchWorkersRealTimeStatisticsPathParams };
var FetchWorkersRealTimeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkersRealTimeStatisticsQueryParams, _super);
    function FetchWorkersRealTimeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkersRealTimeStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchWorkersRealTimeStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchWorkersRealTimeStatisticsQueryParams };
var FetchWorkersRealTimeStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkersRealTimeStatisticsSecurity, _super);
    function FetchWorkersRealTimeStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkersRealTimeStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkersRealTimeStatisticsSecurity;
}(SpeakeasyBase));
export { FetchWorkersRealTimeStatisticsSecurity };
var FetchWorkersRealTimeStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkersRealTimeStatisticsRequest, _super);
    function FetchWorkersRealTimeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWorkersRealTimeStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkersRealTimeStatisticsPathParams)
    ], FetchWorkersRealTimeStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkersRealTimeStatisticsQueryParams)
    ], FetchWorkersRealTimeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkersRealTimeStatisticsSecurity)
    ], FetchWorkersRealTimeStatisticsRequest.prototype, "security", void 0);
    return FetchWorkersRealTimeStatisticsRequest;
}(SpeakeasyBase));
export { FetchWorkersRealTimeStatisticsRequest };
var FetchWorkersRealTimeStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkersRealTimeStatisticsResponse, _super);
    function FetchWorkersRealTimeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWorkersRealTimeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchWorkersRealTimeStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics)
    ], FetchWorkersRealTimeStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics", void 0);
    return FetchWorkersRealTimeStatisticsResponse;
}(SpeakeasyBase));
export { FetchWorkersRealTimeStatisticsResponse };
