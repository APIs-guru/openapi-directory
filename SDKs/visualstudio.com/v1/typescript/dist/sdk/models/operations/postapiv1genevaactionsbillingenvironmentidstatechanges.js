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
var PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams = /** @class */ (function (_super) {
    __extends(PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams, _super);
    function PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams.prototype, "environmentId", void 0);
    return PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams;
}(SpeakeasyBase));
export { PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams };
var PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests = /** @class */ (function (_super) {
    __extends(PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests, _super);
    function PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CreateEnvironmentStateChangeBody)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests.prototype, "createEnvironmentStateChangeBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateEnvironmentStateChangeBody)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests.prototype, "createEnvironmentStateChangeBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CreateEnvironmentStateChangeBody)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests.prototype, "createEnvironmentStateChangeBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CreateEnvironmentStateChangeBody)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests.prototype, "createEnvironmentStateChangeBody3", void 0);
    return PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests;
}(SpeakeasyBase));
export { PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests };
var PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest = /** @class */ (function (_super) {
    __extends(PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest, _super);
    function PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest.prototype, "request", void 0);
    return PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest;
}(SpeakeasyBase));
export { PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest };
var PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse = /** @class */ (function (_super) {
    __extends(PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse, _super);
    function PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EnvironmentStateChange)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse.prototype, "environmentStateChange", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse.prototype, "statusCode", void 0);
    return PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse;
}(SpeakeasyBase));
export { PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse };
