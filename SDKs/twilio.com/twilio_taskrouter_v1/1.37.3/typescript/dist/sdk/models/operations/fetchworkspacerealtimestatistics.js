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
export var FetchWorkspaceRealTimeStatisticsServerList = [
    "https://taskrouter.twilio.com",
];
var FetchWorkspaceRealTimeStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchWorkspaceRealTimeStatisticsPathParams, _super);
    function FetchWorkspaceRealTimeStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchWorkspaceRealTimeStatisticsPathParams.prototype, "workspaceSid", void 0);
    return FetchWorkspaceRealTimeStatisticsPathParams;
}(SpeakeasyBase));
export { FetchWorkspaceRealTimeStatisticsPathParams };
var FetchWorkspaceRealTimeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(FetchWorkspaceRealTimeStatisticsQueryParams, _super);
    function FetchWorkspaceRealTimeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], FetchWorkspaceRealTimeStatisticsQueryParams.prototype, "taskChannel", void 0);
    return FetchWorkspaceRealTimeStatisticsQueryParams;
}(SpeakeasyBase));
export { FetchWorkspaceRealTimeStatisticsQueryParams };
var FetchWorkspaceRealTimeStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchWorkspaceRealTimeStatisticsSecurity, _super);
    function FetchWorkspaceRealTimeStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWorkspaceRealTimeStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWorkspaceRealTimeStatisticsSecurity;
}(SpeakeasyBase));
export { FetchWorkspaceRealTimeStatisticsSecurity };
var FetchWorkspaceRealTimeStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchWorkspaceRealTimeStatisticsRequest, _super);
    function FetchWorkspaceRealTimeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWorkspaceRealTimeStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkspaceRealTimeStatisticsPathParams)
    ], FetchWorkspaceRealTimeStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkspaceRealTimeStatisticsQueryParams)
    ], FetchWorkspaceRealTimeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWorkspaceRealTimeStatisticsSecurity)
    ], FetchWorkspaceRealTimeStatisticsRequest.prototype, "security", void 0);
    return FetchWorkspaceRealTimeStatisticsRequest;
}(SpeakeasyBase));
export { FetchWorkspaceRealTimeStatisticsRequest };
var FetchWorkspaceRealTimeStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchWorkspaceRealTimeStatisticsResponse, _super);
    function FetchWorkspaceRealTimeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWorkspaceRealTimeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchWorkspaceRealTimeStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics)
    ], FetchWorkspaceRealTimeStatisticsResponse.prototype, "taskrouterV1WorkspaceWorkspaceRealTimeStatistics", void 0);
    return FetchWorkspaceRealTimeStatisticsResponse;
}(SpeakeasyBase));
export { FetchWorkspaceRealTimeStatisticsResponse };
