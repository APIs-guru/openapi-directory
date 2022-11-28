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
var PostAlertsUndoCloseMultipleRequests = /** @class */ (function (_super) {
    __extends(PostAlertsUndoCloseMultipleRequests, _super);
    function PostAlertsUndoCloseMultipleRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ChangeAlertStatusMultipleInfo)
    ], PostAlertsUndoCloseMultipleRequests.prototype, "changeAlertStatusMultipleInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChangeAlertStatusMultipleInfo)
    ], PostAlertsUndoCloseMultipleRequests.prototype, "changeAlertStatusMultipleInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ChangeAlertStatusMultipleInfo)
    ], PostAlertsUndoCloseMultipleRequests.prototype, "changeAlertStatusMultipleInfo2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ChangeAlertStatusMultipleInfo)
    ], PostAlertsUndoCloseMultipleRequests.prototype, "changeAlertStatusMultipleInfo3", void 0);
    return PostAlertsUndoCloseMultipleRequests;
}(SpeakeasyBase));
export { PostAlertsUndoCloseMultipleRequests };
var PostAlertsUndoCloseMultipleRequest = /** @class */ (function (_super) {
    __extends(PostAlertsUndoCloseMultipleRequest, _super);
    function PostAlertsUndoCloseMultipleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsUndoCloseMultipleRequests)
    ], PostAlertsUndoCloseMultipleRequest.prototype, "request", void 0);
    return PostAlertsUndoCloseMultipleRequest;
}(SpeakeasyBase));
export { PostAlertsUndoCloseMultipleRequest };
var PostAlertsUndoCloseMultipleResponse = /** @class */ (function (_super) {
    __extends(PostAlertsUndoCloseMultipleResponse, _super);
    function PostAlertsUndoCloseMultipleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAlertsUndoCloseMultipleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAlertsUndoCloseMultipleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostAlertsUndoCloseMultipleResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAlertsUndoCloseMultipleResponse.prototype, "statusCode", void 0);
    return PostAlertsUndoCloseMultipleResponse;
}(SpeakeasyBase));
export { PostAlertsUndoCloseMultipleResponse };
