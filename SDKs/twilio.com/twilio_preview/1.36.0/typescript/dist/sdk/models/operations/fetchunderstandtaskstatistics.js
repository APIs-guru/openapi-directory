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
export var FETCHUNDERSTANDTASKSTATISTICS_SERVERS = [
    "https://preview.twilio.com",
];
var FetchUnderstandTaskStatisticsPathParams = /** @class */ (function (_super) {
    __extends(FetchUnderstandTaskStatisticsPathParams, _super);
    function FetchUnderstandTaskStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchUnderstandTaskStatisticsPathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], FetchUnderstandTaskStatisticsPathParams.prototype, "taskSid", void 0);
    return FetchUnderstandTaskStatisticsPathParams;
}(SpeakeasyBase));
export { FetchUnderstandTaskStatisticsPathParams };
var FetchUnderstandTaskStatisticsSecurity = /** @class */ (function (_super) {
    __extends(FetchUnderstandTaskStatisticsSecurity, _super);
    function FetchUnderstandTaskStatisticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchUnderstandTaskStatisticsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchUnderstandTaskStatisticsSecurity;
}(SpeakeasyBase));
export { FetchUnderstandTaskStatisticsSecurity };
var FetchUnderstandTaskStatisticsRequest = /** @class */ (function (_super) {
    __extends(FetchUnderstandTaskStatisticsRequest, _super);
    function FetchUnderstandTaskStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUnderstandTaskStatisticsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUnderstandTaskStatisticsPathParams)
    ], FetchUnderstandTaskStatisticsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUnderstandTaskStatisticsSecurity)
    ], FetchUnderstandTaskStatisticsRequest.prototype, "security", void 0);
    return FetchUnderstandTaskStatisticsRequest;
}(SpeakeasyBase));
export { FetchUnderstandTaskStatisticsRequest };
var FetchUnderstandTaskStatisticsResponse = /** @class */ (function (_super) {
    __extends(FetchUnderstandTaskStatisticsResponse, _super);
    function FetchUnderstandTaskStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUnderstandTaskStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchUnderstandTaskStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantTaskTaskStatistics)
    ], FetchUnderstandTaskStatisticsResponse.prototype, "previewUnderstandAssistantTaskTaskStatistics", void 0);
    return FetchUnderstandTaskStatisticsResponse;
}(SpeakeasyBase));
export { FetchUnderstandTaskStatisticsResponse };
