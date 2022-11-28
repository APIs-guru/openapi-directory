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
var PostApiV1EnvironmentsQueryParams = /** @class */ (function (_super) {
    __extends(PostApiV1EnvironmentsQueryParams, _super);
    function PostApiV1EnvironmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access" }),
        __metadata("design:type", Boolean)
    ], PostApiV1EnvironmentsQueryParams.prototype, "access", void 0);
    return PostApiV1EnvironmentsQueryParams;
}(SpeakeasyBase));
export { PostApiV1EnvironmentsQueryParams };
var PostApiV1EnvironmentsRequests = /** @class */ (function (_super) {
    __extends(PostApiV1EnvironmentsRequests, _super);
    function PostApiV1EnvironmentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CreateCloudEnvironmentBody)
    ], PostApiV1EnvironmentsRequests.prototype, "createCloudEnvironmentBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateCloudEnvironmentBody)
    ], PostApiV1EnvironmentsRequests.prototype, "createCloudEnvironmentBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CreateCloudEnvironmentBody)
    ], PostApiV1EnvironmentsRequests.prototype, "createCloudEnvironmentBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CreateCloudEnvironmentBody)
    ], PostApiV1EnvironmentsRequests.prototype, "createCloudEnvironmentBody3", void 0);
    return PostApiV1EnvironmentsRequests;
}(SpeakeasyBase));
export { PostApiV1EnvironmentsRequests };
var PostApiV1EnvironmentsRequest = /** @class */ (function (_super) {
    __extends(PostApiV1EnvironmentsRequest, _super);
    function PostApiV1EnvironmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1EnvironmentsQueryParams)
    ], PostApiV1EnvironmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1EnvironmentsRequests)
    ], PostApiV1EnvironmentsRequest.prototype, "request", void 0);
    return PostApiV1EnvironmentsRequest;
}(SpeakeasyBase));
export { PostApiV1EnvironmentsRequest };
var PostApiV1EnvironmentsResponse = /** @class */ (function (_super) {
    __extends(PostApiV1EnvironmentsResponse, _super);
    function PostApiV1EnvironmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApiV1EnvironmentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CloudEnvironmentResult)
    ], PostApiV1EnvironmentsResponse.prototype, "cloudEnvironmentResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1EnvironmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1EnvironmentsResponse.prototype, "messageCodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostApiV1EnvironmentsResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1EnvironmentsResponse.prototype, "statusCode", void 0);
    return PostApiV1EnvironmentsResponse;
}(SpeakeasyBase));
export { PostApiV1EnvironmentsResponse };
