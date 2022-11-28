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
var PostApiV1SecretsQueryParams = /** @class */ (function (_super) {
    __extends(PostApiV1SecretsQueryParams, _super);
    function PostApiV1SecretsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=planId" }),
        __metadata("design:type", String)
    ], PostApiV1SecretsQueryParams.prototype, "planId", void 0);
    return PostApiV1SecretsQueryParams;
}(SpeakeasyBase));
export { PostApiV1SecretsQueryParams };
var PostApiV1SecretsRequests = /** @class */ (function (_super) {
    __extends(PostApiV1SecretsRequests, _super);
    function PostApiV1SecretsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ScopedCreateSecretBody)
    ], PostApiV1SecretsRequests.prototype, "scopedCreateSecretBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ScopedCreateSecretBody)
    ], PostApiV1SecretsRequests.prototype, "scopedCreateSecretBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ScopedCreateSecretBody)
    ], PostApiV1SecretsRequests.prototype, "scopedCreateSecretBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ScopedCreateSecretBody)
    ], PostApiV1SecretsRequests.prototype, "scopedCreateSecretBody3", void 0);
    return PostApiV1SecretsRequests;
}(SpeakeasyBase));
export { PostApiV1SecretsRequests };
var PostApiV1SecretsRequest = /** @class */ (function (_super) {
    __extends(PostApiV1SecretsRequest, _super);
    function PostApiV1SecretsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1SecretsQueryParams)
    ], PostApiV1SecretsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1SecretsRequests)
    ], PostApiV1SecretsRequest.prototype, "request", void 0);
    return PostApiV1SecretsRequest;
}(SpeakeasyBase));
export { PostApiV1SecretsRequest };
var PostApiV1SecretsResponse = /** @class */ (function (_super) {
    __extends(PostApiV1SecretsResponse, _super);
    function PostApiV1SecretsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApiV1SecretsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1SecretsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostApiV1SecretsResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScopedSecretResultBody)
    ], PostApiV1SecretsResponse.prototype, "scopedSecretResultBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1SecretsResponse.prototype, "statusCode", void 0);
    return PostApiV1SecretsResponse;
}(SpeakeasyBase));
export { PostApiV1SecretsResponse };
