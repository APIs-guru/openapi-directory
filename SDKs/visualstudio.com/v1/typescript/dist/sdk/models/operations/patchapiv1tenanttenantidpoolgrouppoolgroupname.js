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
var PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams = /** @class */ (function (_super) {
    __extends(PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams, _super);
    function PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolGroupName" }),
        __metadata("design:type", String)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams.prototype, "poolGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" }),
        __metadata("design:type", String)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams.prototype, "tenantId", void 0);
    return PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;
}(SpeakeasyBase));
export { PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams };
var PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests = /** @class */ (function (_super) {
    __extends(PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests, _super);
    function PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UpdatePoolGroupBody)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests.prototype, "updatePoolGroupBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdatePoolGroupBody)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests.prototype, "updatePoolGroupBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.UpdatePoolGroupBody)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests.prototype, "updatePoolGroupBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdatePoolGroupBody)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests.prototype, "updatePoolGroupBody3", void 0);
    return PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests;
}(SpeakeasyBase));
export { PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests };
var PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest = /** @class */ (function (_super) {
    __extends(PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest, _super);
    function PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest.prototype, "request", void 0);
    return PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest;
}(SpeakeasyBase));
export { PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest };
var PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse = /** @class */ (function (_super) {
    __extends(PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse, _super);
    function PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse.prototype, "statusCode", void 0);
    return PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse;
}(SpeakeasyBase));
export { PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse };
