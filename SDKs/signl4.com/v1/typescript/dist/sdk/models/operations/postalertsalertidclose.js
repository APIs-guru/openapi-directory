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
var PostAlertsAlertIdClosePathParams = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdClosePathParams, _super);
    function PostAlertsAlertIdClosePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" }),
        __metadata("design:type", String)
    ], PostAlertsAlertIdClosePathParams.prototype, "alertId", void 0);
    return PostAlertsAlertIdClosePathParams;
}(SpeakeasyBase));
export { PostAlertsAlertIdClosePathParams };
var PostAlertsAlertIdCloseRequests = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdCloseRequests, _super);
    function PostAlertsAlertIdCloseRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdCloseRequests.prototype, "changeAlertStatusInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdCloseRequests.prototype, "changeAlertStatusInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdCloseRequests.prototype, "changeAlertStatusInfo2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ChangeAlertStatusInfo)
    ], PostAlertsAlertIdCloseRequests.prototype, "changeAlertStatusInfo3", void 0);
    return PostAlertsAlertIdCloseRequests;
}(SpeakeasyBase));
export { PostAlertsAlertIdCloseRequests };
var PostAlertsAlertIdCloseRequest = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdCloseRequest, _super);
    function PostAlertsAlertIdCloseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsAlertIdClosePathParams)
    ], PostAlertsAlertIdCloseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsAlertIdCloseRequests)
    ], PostAlertsAlertIdCloseRequest.prototype, "request", void 0);
    return PostAlertsAlertIdCloseRequest;
}(SpeakeasyBase));
export { PostAlertsAlertIdCloseRequest };
var PostAlertsAlertIdCloseResponse = /** @class */ (function (_super) {
    __extends(PostAlertsAlertIdCloseResponse, _super);
    function PostAlertsAlertIdCloseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AlertInfo)
    ], PostAlertsAlertIdCloseResponse.prototype, "alertInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAlertsAlertIdCloseResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAlertsAlertIdCloseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostAlertsAlertIdCloseResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAlertsAlertIdCloseResponse.prototype, "statusCode", void 0);
    return PostAlertsAlertIdCloseResponse;
}(SpeakeasyBase));
export { PostAlertsAlertIdCloseResponse };
