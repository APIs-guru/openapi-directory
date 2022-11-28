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
var PostAlertsAlertIdAcknowledgePathParams = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdAcknowledgePathParams, _super);
    function PostAlertsAlertIdAcknowledgePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" }),
        __metadata("design:type", String)
    ], PostAlertsAlertIdAcknowledgePathParams.prototype, "alertId", void 0);
    return PostAlertsAlertIdAcknowledgePathParams;
}(SpeakeasyBase));
export { PostAlertsAlertIdAcknowledgePathParams };
var PostAlertsAlertIdAcknowledgeRequests = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdAcknowledgeRequests, _super);
    function PostAlertsAlertIdAcknowledgeRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdAcknowledgeRequests.prototype, "changeAlertStatusInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdAcknowledgeRequests.prototype, "changeAlertStatusInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdAcknowledgeRequests.prototype, "changeAlertStatusInfo2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdAcknowledgeRequests.prototype, "changeAlertStatusInfo3", void 0);
    return PostAlertsAlertIdAcknowledgeRequests;
}(SpeakeasyBase));
export { PostAlertsAlertIdAcknowledgeRequests };
var PostAlertsAlertIdAcknowledgeRequest = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdAcknowledgeRequest, _super);
    function PostAlertsAlertIdAcknowledgeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsAlertIdAcknowledgePathParams)
    ], PostAlertsAlertIdAcknowledgeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsAlertIdAcknowledgeRequests)
    ], PostAlertsAlertIdAcknowledgeRequest.prototype, "request", void 0);
    return PostAlertsAlertIdAcknowledgeRequest;
}(SpeakeasyBase));
export { PostAlertsAlertIdAcknowledgeRequest };
var PostAlertsAlertIdAcknowledgeResponse = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdAcknowledgeResponse, _super);
    function PostAlertsAlertIdAcknowledgeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AlertInfo)
    ], PostAlertsAlertIdAcknowledgeResponse.prototype, "alertInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAlertsAlertIdAcknowledgeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAlertsAlertIdAcknowledgeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostAlertsAlertIdAcknowledgeResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAlertsAlertIdAcknowledgeResponse.prototype, "statusCode", void 0);
    return PostAlertsAlertIdAcknowledgeResponse;
}(SpeakeasyBase));
export { PostAlertsAlertIdAcknowledgeResponse };
