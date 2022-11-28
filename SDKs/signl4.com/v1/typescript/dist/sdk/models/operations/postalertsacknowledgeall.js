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
var PostAlertsAcknowledgeAllQueryParams = /** @class */ (function (_super) {
    __extends(PostAlertsAcknowledgeAllQueryParams, _super);
    function PostAlertsAcknowledgeAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], PostAlertsAcknowledgeAllQueryParams.prototype, "userId", void 0);
    return PostAlertsAcknowledgeAllQueryParams;
}(SpeakeasyBase));
export { PostAlertsAcknowledgeAllQueryParams };
var PostAlertsAcknowledgeAllRequests = /** @class */ (function (_super) {
    __extends(PostAlertsAcknowledgeAllRequests, _super);
    function PostAlertsAcknowledgeAllRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ChangeAlertStatusFilterInfo)
    ], PostAlertsAcknowledgeAllRequests.prototype, "changeAlertStatusFilterInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChangeAlertStatusFilterInfo)
    ], PostAlertsAcknowledgeAllRequests.prototype, "changeAlertStatusFilterInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ChangeAlertStatusFilterInfo)
    ], PostAlertsAcknowledgeAllRequests.prototype, "changeAlertStatusFilterInfo2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ChangeAlertStatusFilterInfo)
    ], PostAlertsAcknowledgeAllRequests.prototype, "changeAlertStatusFilterInfo3", void 0);
    return PostAlertsAcknowledgeAllRequests;
}(SpeakeasyBase));
export { PostAlertsAcknowledgeAllRequests };
var PostAlertsAcknowledgeAllRequest = /** @class */ (function (_super) {
    __extends(PostAlertsAcknowledgeAllRequest, _super);
    function PostAlertsAcknowledgeAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsAcknowledgeAllQueryParams)
    ], PostAlertsAcknowledgeAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsAcknowledgeAllRequests)
    ], PostAlertsAcknowledgeAllRequest.prototype, "request", void 0);
    return PostAlertsAcknowledgeAllRequest;
}(SpeakeasyBase));
export { PostAlertsAcknowledgeAllRequest };
var PostAlertsAcknowledgeAllResponse = /** @class */ (function (_super) {
    __extends(PostAlertsAcknowledgeAllResponse, _super);
    function PostAlertsAcknowledgeAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAlertsAcknowledgeAllResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAlertsAcknowledgeAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostAlertsAcknowledgeAllResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAlertsAcknowledgeAllResponse.prototype, "statusCode", void 0);
    return PostAlertsAcknowledgeAllResponse;
}(SpeakeasyBase));
export { PostAlertsAcknowledgeAllResponse };
