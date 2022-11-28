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
var PostEventsPagedQueryParams = /** @class */ (function (_super) {
    __extends(PostEventsPagedQueryParams, _super);
    function PostEventsPagedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], PostEventsPagedQueryParams.prototype, "maxResults", void 0);
    return PostEventsPagedQueryParams;
}(SpeakeasyBase));
export { PostEventsPagedQueryParams };
var PostEventsPagedRequests = /** @class */ (function (_super) {
    __extends(PostEventsPagedRequests, _super);
    function PostEventsPagedRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.EventFilter)
    ], PostEventsPagedRequests.prototype, "eventFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EventFilter)
    ], PostEventsPagedRequests.prototype, "eventFilter1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.EventFilter)
    ], PostEventsPagedRequests.prototype, "eventFilter2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.EventFilter)
    ], PostEventsPagedRequests.prototype, "eventFilter3", void 0);
    return PostEventsPagedRequests;
}(SpeakeasyBase));
export { PostEventsPagedRequests };
var PostEventsPagedRequest = /** @class */ (function (_super) {
    __extends(PostEventsPagedRequest, _super);
    function PostEventsPagedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostEventsPagedQueryParams)
    ], PostEventsPagedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostEventsPagedRequests)
    ], PostEventsPagedRequest.prototype, "request", void 0);
    return PostEventsPagedRequest;
}(SpeakeasyBase));
export { PostEventsPagedRequest };
var PostEventsPagedResponse = /** @class */ (function (_super) {
    __extends(PostEventsPagedResponse, _super);
    function PostEventsPagedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostEventsPagedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostEventsPagedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostEventsPagedResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OverviewEventPagedResultsPublic)
    ], PostEventsPagedResponse.prototype, "overviewEventPagedResultsPublic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostEventsPagedResponse.prototype, "statusCode", void 0);
    return PostEventsPagedResponse;
}(SpeakeasyBase));
export { PostEventsPagedResponse };
