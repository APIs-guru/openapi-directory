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
var PostAlertsAlertIdUndoClosePathParams = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdUndoClosePathParams, _super);
    function PostAlertsAlertIdUndoClosePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" }),
        __metadata("design:type", String)
    ], PostAlertsAlertIdUndoClosePathParams.prototype, "alertId", void 0);
    return PostAlertsAlertIdUndoClosePathParams;
}(SpeakeasyBase));
export { PostAlertsAlertIdUndoClosePathParams };
var PostAlertsAlertIdUndoCloseRequests = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdUndoCloseRequests, _super);
    function PostAlertsAlertIdUndoCloseRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdUndoCloseRequests.prototype, "changeAlertStatusInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdUndoCloseRequests.prototype, "changeAlertStatusInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdUndoCloseRequests.prototype, "changeAlertStatusInfo2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdUndoCloseRequests.prototype, "changeAlertStatusInfo3", void 0);
    return PostAlertsAlertIdUndoCloseRequests;
}(SpeakeasyBase));
export { PostAlertsAlertIdUndoCloseRequests };
var PostAlertsAlertIdUndoCloseRequest = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdUndoCloseRequest, _super);
    function PostAlertsAlertIdUndoCloseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsAlertIdUndoClosePathParams)
    ], PostAlertsAlertIdUndoCloseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsAlertIdUndoCloseRequests)
    ], PostAlertsAlertIdUndoCloseRequest.prototype, "request", void 0);
    return PostAlertsAlertIdUndoCloseRequest;
}(SpeakeasyBase));
export { PostAlertsAlertIdUndoCloseRequest };
var PostAlertsAlertIdUndoCloseResponse = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdUndoCloseResponse, _super);
    function PostAlertsAlertIdUndoCloseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAlertsAlertIdUndoCloseResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAlertsAlertIdUndoCloseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostAlertsAlertIdUndoCloseResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OverviewAlert)
    ], PostAlertsAlertIdUndoCloseResponse.prototype, "overviewAlert", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAlertsAlertIdUndoCloseResponse.prototype, "statusCode", void 0);
    return PostAlertsAlertIdUndoCloseResponse;
}(SpeakeasyBase));
export { PostAlertsAlertIdUndoCloseResponse };
