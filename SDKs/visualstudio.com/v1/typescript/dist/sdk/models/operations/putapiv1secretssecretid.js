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
var PutApiV1SecretsSecretIdPathParams = /** @class */ (function (_super) {
    __extends(PutApiV1SecretsSecretIdPathParams, _super);
    function PutApiV1SecretsSecretIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secretId" }),
        __metadata("design:type", String)
    ], PutApiV1SecretsSecretIdPathParams.prototype, "secretId", void 0);
    return PutApiV1SecretsSecretIdPathParams;
}(SpeakeasyBase));
export { PutApiV1SecretsSecretIdPathParams };
var PutApiV1SecretsSecretIdQueryParams = /** @class */ (function (_super) {
    __extends(PutApiV1SecretsSecretIdQueryParams, _super);
    function PutApiV1SecretsSecretIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=planId" }),
        __metadata("design:type", String)
    ], PutApiV1SecretsSecretIdQueryParams.prototype, "planId", void 0);
    return PutApiV1SecretsSecretIdQueryParams;
}(SpeakeasyBase));
export { PutApiV1SecretsSecretIdQueryParams };
var PutApiV1SecretsSecretIdRequests = /** @class */ (function (_super) {
    __extends(PutApiV1SecretsSecretIdRequests, _super);
    function PutApiV1SecretsSecretIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ScopedUpdateSecretBody)
    ], PutApiV1SecretsSecretIdRequests.prototype, "scopedUpdateSecretBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ScopedUpdateSecretBody)
    ], PutApiV1SecretsSecretIdRequests.prototype, "scopedUpdateSecretBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ScopedUpdateSecretBody)
    ], PutApiV1SecretsSecretIdRequests.prototype, "scopedUpdateSecretBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ScopedUpdateSecretBody)
    ], PutApiV1SecretsSecretIdRequests.prototype, "scopedUpdateSecretBody3", void 0);
    return PutApiV1SecretsSecretIdRequests;
}(SpeakeasyBase));
export { PutApiV1SecretsSecretIdRequests };
var PutApiV1SecretsSecretIdRequest = /** @class */ (function (_super) {
    __extends(PutApiV1SecretsSecretIdRequest, _super);
    function PutApiV1SecretsSecretIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutApiV1SecretsSecretIdPathParams)
    ], PutApiV1SecretsSecretIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutApiV1SecretsSecretIdQueryParams)
    ], PutApiV1SecretsSecretIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutApiV1SecretsSecretIdRequests)
    ], PutApiV1SecretsSecretIdRequest.prototype, "request", void 0);
    return PutApiV1SecretsSecretIdRequest;
}(SpeakeasyBase));
export { PutApiV1SecretsSecretIdRequest };
var PutApiV1SecretsSecretIdResponse = /** @class */ (function (_super) {
    __extends(PutApiV1SecretsSecretIdResponse, _super);
    function PutApiV1SecretsSecretIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutApiV1SecretsSecretIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutApiV1SecretsSecretIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutApiV1SecretsSecretIdResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScopedSecretResultBody)
    ], PutApiV1SecretsSecretIdResponse.prototype, "scopedSecretResultBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutApiV1SecretsSecretIdResponse.prototype, "statusCode", void 0);
    return PutApiV1SecretsSecretIdResponse;
}(SpeakeasyBase));
export { PutApiV1SecretsSecretIdResponse };
