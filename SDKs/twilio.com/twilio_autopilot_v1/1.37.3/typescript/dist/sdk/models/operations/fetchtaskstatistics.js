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
export var FetchTaskStatisticsServerList = [
    "https://autopilot.twilio.com",
];
var FetchTaskStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchTaskStatisticsPathParams, _super);
    function FetchTaskStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchTaskStatisticsPathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], FetchTaskStatisticsPathParams.prototype, "taskSid", void 0);
    return FetchTaskStatisticsPathParams;
}(SpeakeasyBase));
export { FetchTaskStatisticsPathParams };
var FetchTaskStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchTaskStatisticsSecurity, _super);
    function FetchTaskStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTaskStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTaskStatisticsSecurity;
}(SpeakeasyBase));
export { FetchTaskStatisticsSecurity };
var FetchTaskStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchTaskStatisticsRequest, _super);
    function FetchTaskStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTaskStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTaskStatisticsPathParams)
    ], FetchTaskStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTaskStatisticsSecurity)
    ], FetchTaskStatisticsRequest.prototype, "security", void 0);
    return FetchTaskStatisticsRequest;
}(SpeakeasyBase));
export { FetchTaskStatisticsRequest };
var FetchTaskStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchTaskStatisticsResponse, _super);
    function FetchTaskStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTaskStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchTaskStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantTaskTaskStatistics)
    ], FetchTaskStatisticsResponse.prototype, "autopilotV1AssistantTaskTaskStatistics", void 0);
    return FetchTaskStatisticsResponse;
}(SpeakeasyBase));
export { FetchTaskStatisticsResponse };
