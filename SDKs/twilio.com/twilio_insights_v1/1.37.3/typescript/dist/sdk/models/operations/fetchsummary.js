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
export var FetchSummaryServerList = [
    "https://insights.twilio.com",
];
var FetchSummaryPathParams = /** @class */ (function (_super) {
    __extends(FetchSummaryPathParams, _super);
    function FetchSummaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], FetchSummaryPathParams.prototype, "callSid", void 0);
    return FetchSummaryPathParams;
}(SpeakeasyBase));
export { FetchSummaryPathParams };
var FetchSummaryQueryParams = /** @class */ (function (_super) {
    __extends(FetchSummaryQueryParams, _super);
    function FetchSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ProcessingState" }),
        __metadata("design:type", String)
    ], FetchSummaryQueryParams.prototype, "processingState", void 0);
    return FetchSummaryQueryParams;
}(SpeakeasyBase));
export { FetchSummaryQueryParams };
var FetchSummarySecurity = /** @class */ (function (_super) {
    __extends(FetchSummarySecurity, _super);
    function FetchSummarySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSummarySecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSummarySecurity;
}(SpeakeasyBase));
export { FetchSummarySecurity };
var FetchSummaryRequest = /** @class */ (function (_super) {
    __extends(FetchSummaryRequest, _super);
    function FetchSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSummaryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSummaryPathParams)
    ], FetchSummaryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSummaryQueryParams)
    ], FetchSummaryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSummarySecurity)
    ], FetchSummaryRequest.prototype, "security", void 0);
    return FetchSummaryRequest;
}(SpeakeasyBase));
export { FetchSummaryRequest };
var FetchSummaryResponse = /** @class */ (function (_super) {
    __extends(FetchSummaryResponse, _super);
    function FetchSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSummaryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InsightsV1CallSummary)
    ], FetchSummaryResponse.prototype, "insightsV1CallSummary", void 0);
    return FetchSummaryResponse;
}(SpeakeasyBase));
export { FetchSummaryResponse };
