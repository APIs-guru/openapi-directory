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
var PostAlertsCloseMultipleRequests = /** @class */ (function (_super) {
    __extends(PostAlertsCloseMultipleRequests, _super);
    function PostAlertsCloseMultipleRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ChangeAlertStatusMultipleInfo)
    ], PostAlertsCloseMultipleRequests.prototype, "changeAlertStatusMultipleInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChangeAlertStatusMultipleInfo)
    ], PostAlertsCloseMultipleRequests.prototype, "changeAlertStatusMultipleInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ChangeAlertStatusMultipleInfo)
    ], PostAlertsCloseMultipleRequests.prototype, "changeAlertStatusMultipleInfo2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ChangeAlertStatusMultipleInfo)
    ], PostAlertsCloseMultipleRequests.prototype, "changeAlertStatusMultipleInfo3", void 0);
    return PostAlertsCloseMultipleRequests;
}(SpeakeasyBase));
export { PostAlertsCloseMultipleRequests };
var PostAlertsCloseMultipleRequest = /** @class */ (function (_super) {
    __extends(PostAlertsCloseMultipleRequest, _super);
    function PostAlertsCloseMultipleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsCloseMultipleRequests)
    ], PostAlertsCloseMultipleRequest.prototype, "request", void 0);
    return PostAlertsCloseMultipleRequest;
}(SpeakeasyBase));
export { PostAlertsCloseMultipleRequest };
var PostAlertsCloseMultipleResponse = /** @class */ (function (_super) {
    __extends(PostAlertsCloseMultipleResponse, _super);
    function PostAlertsCloseMultipleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAlertsCloseMultipleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAlertsCloseMultipleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostAlertsCloseMultipleResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAlertsCloseMultipleResponse.prototype, "statusCode", void 0);
    return PostAlertsCloseMultipleResponse;
}(SpeakeasyBase));
export { PostAlertsCloseMultipleResponse };
