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
var PatchApiV1TenantTenantIdPoolPoolNamePathParams = /** @class */ (function (_super) {
    __extends(PatchApiV1TenantTenantIdPoolPoolNamePathParams, _super);
    function PatchApiV1TenantTenantIdPoolPoolNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], PatchApiV1TenantTenantIdPoolPoolNamePathParams.prototype, "poolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" }),
        __metadata("design:type", String)
    ], PatchApiV1TenantTenantIdPoolPoolNamePathParams.prototype, "tenantId", void 0);
    return PatchApiV1TenantTenantIdPoolPoolNamePathParams;
}(SpeakeasyBase));
export { PatchApiV1TenantTenantIdPoolPoolNamePathParams };
var PatchApiV1TenantTenantIdPoolPoolNameRequests = /** @class */ (function (_super) {
    __extends(PatchApiV1TenantTenantIdPoolPoolNameRequests, _super);
    function PatchApiV1TenantTenantIdPoolPoolNameRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CreateOrUpdatePoolBody)
    ], PatchApiV1TenantTenantIdPoolPoolNameRequests.prototype, "createOrUpdatePoolBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateOrUpdatePoolBody)
    ], PatchApiV1TenantTenantIdPoolPoolNameRequests.prototype, "createOrUpdatePoolBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CreateOrUpdatePoolBody)
    ], PatchApiV1TenantTenantIdPoolPoolNameRequests.prototype, "createOrUpdatePoolBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CreateOrUpdatePoolBody)
    ], PatchApiV1TenantTenantIdPoolPoolNameRequests.prototype, "createOrUpdatePoolBody3", void 0);
    return PatchApiV1TenantTenantIdPoolPoolNameRequests;
}(SpeakeasyBase));
export { PatchApiV1TenantTenantIdPoolPoolNameRequests };
var PatchApiV1TenantTenantIdPoolPoolNameRequest = /** @class */ (function (_super) {
    __extends(PatchApiV1TenantTenantIdPoolPoolNameRequest, _super);
    function PatchApiV1TenantTenantIdPoolPoolNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchApiV1TenantTenantIdPoolPoolNamePathParams)
    ], PatchApiV1TenantTenantIdPoolPoolNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchApiV1TenantTenantIdPoolPoolNameRequests)
    ], PatchApiV1TenantTenantIdPoolPoolNameRequest.prototype, "request", void 0);
    return PatchApiV1TenantTenantIdPoolPoolNameRequest;
}(SpeakeasyBase));
export { PatchApiV1TenantTenantIdPoolPoolNameRequest };
var PatchApiV1TenantTenantIdPoolPoolNameResponse = /** @class */ (function (_super) {
    __extends(PatchApiV1TenantTenantIdPoolPoolNameResponse, _super);
    function PatchApiV1TenantTenantIdPoolPoolNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatchApiV1TenantTenantIdPoolPoolNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchApiV1TenantTenantIdPoolPoolNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PoolResult)
    ], PatchApiV1TenantTenantIdPoolPoolNameResponse.prototype, "poolResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PatchApiV1TenantTenantIdPoolPoolNameResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchApiV1TenantTenantIdPoolPoolNameResponse.prototype, "statusCode", void 0);
    return PatchApiV1TenantTenantIdPoolPoolNameResponse;
}(SpeakeasyBase));
export { PatchApiV1TenantTenantIdPoolPoolNameResponse };
