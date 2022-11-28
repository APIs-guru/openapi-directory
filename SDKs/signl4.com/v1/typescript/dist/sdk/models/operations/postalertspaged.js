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
var PostAlertsPagedQueryParams = /** @class */ (function (_super) {
    __extends(PostAlertsPagedQueryParams, _super);
    function PostAlertsPagedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], PostAlertsPagedQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], PostAlertsPagedQueryParams.prototype, "userId", void 0);
    return PostAlertsPagedQueryParams;
}(SpeakeasyBase));
export { PostAlertsPagedQueryParams };
var PostAlertsPagedRequests = /** @class */ (function (_super) {
    __extends(PostAlertsPagedRequests, _super);
    function PostAlertsPagedRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.AlertFilterPublic)
    ], PostAlertsPagedRequests.prototype, "alertFilterPublic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AlertFilterPublic)
    ], PostAlertsPagedRequests.prototype, "alertFilterPublic1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.AlertFilterPublic)
    ], PostAlertsPagedRequests.prototype, "alertFilterPublic2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AlertFilterPublic)
    ], PostAlertsPagedRequests.prototype, "alertFilterPublic3", void 0);
    return PostAlertsPagedRequests;
}(SpeakeasyBase));
export { PostAlertsPagedRequests };
var PostAlertsPagedRequest = /** @class */ (function (_super) {
    __extends(PostAlertsPagedRequest, _super);
    function PostAlertsPagedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsPagedQueryParams)
    ], PostAlertsPagedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAlertsPagedRequests)
    ], PostAlertsPagedRequest.prototype, "request", void 0);
    return PostAlertsPagedRequest;
}(SpeakeasyBase));
export { PostAlertsPagedRequest };
var PostAlertsPagedResponse = /** @class */ (function (_super) {
    __extends(PostAlertsPagedResponse, _super);
    function PostAlertsPagedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAlertsPagedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAlertsPagedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostAlertsPagedResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OverviewAlertPagedResultsPublic)
    ], PostAlertsPagedResponse.prototype, "overviewAlertPagedResultsPublic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAlertsPagedResponse.prototype, "statusCode", void 0);
    return PostAlertsPagedResponse;
}(SpeakeasyBase));
export { PostAlertsPagedResponse };
