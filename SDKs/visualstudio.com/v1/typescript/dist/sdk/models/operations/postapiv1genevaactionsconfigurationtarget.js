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
var PostApiV1GenevaActionsConfigurationTargetPathParams = /** @class */ (function (_super) {
    __extends(PostApiV1GenevaActionsConfigurationTargetPathParams, _super);
    function PostApiV1GenevaActionsConfigurationTargetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target" }),
        __metadata("design:type", String)
    ], PostApiV1GenevaActionsConfigurationTargetPathParams.prototype, "target", void 0);
    return PostApiV1GenevaActionsConfigurationTargetPathParams;
}(SpeakeasyBase));
export { PostApiV1GenevaActionsConfigurationTargetPathParams };
var PostApiV1GenevaActionsConfigurationTargetRequests = /** @class */ (function (_super) {
    __extends(PostApiV1GenevaActionsConfigurationTargetRequests, _super);
    function PostApiV1GenevaActionsConfigurationTargetRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UpdateSystemConfigurationBody)
    ], PostApiV1GenevaActionsConfigurationTargetRequests.prototype, "updateSystemConfigurationBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateSystemConfigurationBody)
    ], PostApiV1GenevaActionsConfigurationTargetRequests.prototype, "updateSystemConfigurationBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.UpdateSystemConfigurationBody)
    ], PostApiV1GenevaActionsConfigurationTargetRequests.prototype, "updateSystemConfigurationBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateSystemConfigurationBody)
    ], PostApiV1GenevaActionsConfigurationTargetRequests.prototype, "updateSystemConfigurationBody3", void 0);
    return PostApiV1GenevaActionsConfigurationTargetRequests;
}(SpeakeasyBase));
export { PostApiV1GenevaActionsConfigurationTargetRequests };
var PostApiV1GenevaActionsConfigurationTargetRequest = /** @class */ (function (_super) {
    __extends(PostApiV1GenevaActionsConfigurationTargetRequest, _super);
    function PostApiV1GenevaActionsConfigurationTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1GenevaActionsConfigurationTargetPathParams)
    ], PostApiV1GenevaActionsConfigurationTargetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1GenevaActionsConfigurationTargetRequests)
    ], PostApiV1GenevaActionsConfigurationTargetRequest.prototype, "request", void 0);
    return PostApiV1GenevaActionsConfigurationTargetRequest;
}(SpeakeasyBase));
export { PostApiV1GenevaActionsConfigurationTargetRequest };
var PostApiV1GenevaActionsConfigurationTargetResponse = /** @class */ (function (_super) {
    __extends(PostApiV1GenevaActionsConfigurationTargetResponse, _super);
    function PostApiV1GenevaActionsConfigurationTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApiV1GenevaActionsConfigurationTargetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1GenevaActionsConfigurationTargetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostApiV1GenevaActionsConfigurationTargetResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1GenevaActionsConfigurationTargetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SystemConfigurationResponse)
    ], PostApiV1GenevaActionsConfigurationTargetResponse.prototype, "systemConfigurationResponse", void 0);
    return PostApiV1GenevaActionsConfigurationTargetResponse;
}(SpeakeasyBase));
export { PostApiV1GenevaActionsConfigurationTargetResponse };
