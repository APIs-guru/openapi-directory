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
var PostApiV1PrebuildsTemplatesRequests = /** @class */ (function (_super) {
    __extends(PostApiV1PrebuildsTemplatesRequests, _super);
    function PostApiV1PrebuildsTemplatesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CreateCloudEnvironmentBody)
    ], PostApiV1PrebuildsTemplatesRequests.prototype, "createCloudEnvironmentBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateCloudEnvironmentBody)
    ], PostApiV1PrebuildsTemplatesRequests.prototype, "createCloudEnvironmentBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CreateCloudEnvironmentBody)
    ], PostApiV1PrebuildsTemplatesRequests.prototype, "createCloudEnvironmentBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CreateCloudEnvironmentBody)
    ], PostApiV1PrebuildsTemplatesRequests.prototype, "createCloudEnvironmentBody3", void 0);
    return PostApiV1PrebuildsTemplatesRequests;
}(SpeakeasyBase));
export { PostApiV1PrebuildsTemplatesRequests };
var PostApiV1PrebuildsTemplatesRequest = /** @class */ (function (_super) {
    __extends(PostApiV1PrebuildsTemplatesRequest, _super);
    function PostApiV1PrebuildsTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1PrebuildsTemplatesRequests)
    ], PostApiV1PrebuildsTemplatesRequest.prototype, "request", void 0);
    return PostApiV1PrebuildsTemplatesRequest;
}(SpeakeasyBase));
export { PostApiV1PrebuildsTemplatesRequest };
var PostApiV1PrebuildsTemplatesResponse = /** @class */ (function (_super) {
    __extends(PostApiV1PrebuildsTemplatesResponse, _super);
    function PostApiV1PrebuildsTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApiV1PrebuildsTemplatesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CloudEnvironmentResult)
    ], PostApiV1PrebuildsTemplatesResponse.prototype, "cloudEnvironmentResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1PrebuildsTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1PrebuildsTemplatesResponse.prototype, "messageCodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostApiV1PrebuildsTemplatesResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1PrebuildsTemplatesResponse.prototype, "statusCode", void 0);
    return PostApiV1PrebuildsTemplatesResponse;
}(SpeakeasyBase));
export { PostApiV1PrebuildsTemplatesResponse };
