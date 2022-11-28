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
var PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests = /** @class */ (function (_super) {
    __extends(PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests, _super);
    function PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.RefreshProfileTelemetryPropertiesRequest)
    ], PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests.prototype, "refreshProfileTelemetryPropertiesRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RefreshProfileTelemetryPropertiesRequest)
    ], PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests.prototype, "refreshProfileTelemetryPropertiesRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.RefreshProfileTelemetryPropertiesRequest)
    ], PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests.prototype, "refreshProfileTelemetryPropertiesRequest2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.RefreshProfileTelemetryPropertiesRequest)
    ], PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests.prototype, "refreshProfileTelemetryPropertiesRequest3", void 0);
    return PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests;
}(SpeakeasyBase));
export { PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests };
var PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest = /** @class */ (function (_super) {
    __extends(PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest, _super);
    function PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests)
    ], PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest.prototype, "request", void 0);
    return PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest;
}(SpeakeasyBase));
export { PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest };
var PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse = /** @class */ (function (_super) {
    __extends(PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse, _super);
    function PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RefreshProfileTelemetryPropertiesResponse)
    ], PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse.prototype, "refreshProfileTelemetryPropertiesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse.prototype, "statusCode", void 0);
    return PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse;
}(SpeakeasyBase));
export { PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse };
