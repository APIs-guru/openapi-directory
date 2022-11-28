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
var PostApiV1AgentTelemetryRequests = /** @class */ (function (_super) {
    __extends(PostApiV1AgentTelemetryRequests, _super);
    function PostApiV1AgentTelemetryRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.TelemetryData }),
        __metadata("design:type", Array)
    ], PostApiV1AgentTelemetryRequests.prototype, "telemetryData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.TelemetryData }),
        __metadata("design:type", Array)
    ], PostApiV1AgentTelemetryRequests.prototype, "telemetryData1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.TelemetryData }),
        __metadata("design:type", Array)
    ], PostApiV1AgentTelemetryRequests.prototype, "telemetryData2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.TelemetryData }),
        __metadata("design:type", Array)
    ], PostApiV1AgentTelemetryRequests.prototype, "telemetryData3", void 0);
    return PostApiV1AgentTelemetryRequests;
}(SpeakeasyBase));
export { PostApiV1AgentTelemetryRequests };
var PostApiV1AgentTelemetryRequest = /** @class */ (function (_super) {
    __extends(PostApiV1AgentTelemetryRequest, _super);
    function PostApiV1AgentTelemetryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1AgentTelemetryRequests)
    ], PostApiV1AgentTelemetryRequest.prototype, "request", void 0);
    return PostApiV1AgentTelemetryRequest;
}(SpeakeasyBase));
export { PostApiV1AgentTelemetryRequest };
var PostApiV1AgentTelemetryResponse = /** @class */ (function (_super) {
    __extends(PostApiV1AgentTelemetryResponse, _super);
    function PostApiV1AgentTelemetryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApiV1AgentTelemetryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1AgentTelemetryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostApiV1AgentTelemetryResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1AgentTelemetryResponse.prototype, "statusCode", void 0);
    return PostApiV1AgentTelemetryResponse;
}(SpeakeasyBase));
export { PostApiV1AgentTelemetryResponse };
