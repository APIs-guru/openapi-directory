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
var PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams = /** @class */ (function (_super) {
    __extends(PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams, _super);
    function PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams.prototype, "poolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" }),
        __metadata("design:type", String)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vmName" }),
        __metadata("design:type", String)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams.prototype, "vmName", void 0);
    return PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams;
}(SpeakeasyBase));
export { PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams };
var PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests = /** @class */ (function (_super) {
    __extends(PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests, _super);
    function PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ClaimVmBody)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests.prototype, "claimVmBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ClaimVmBody)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests.prototype, "claimVmBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ClaimVmBody)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests.prototype, "claimVmBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ClaimVmBody)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests.prototype, "claimVmBody3", void 0);
    return PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests;
}(SpeakeasyBase));
export { PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests };
var PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest = /** @class */ (function (_super) {
    __extends(PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest, _super);
    function PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest.prototype, "request", void 0);
    return PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest;
}(SpeakeasyBase));
export { PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest };
var PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse = /** @class */ (function (_super) {
    __extends(PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse, _super);
    function PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VmResult)
    ], PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse.prototype, "vmResult", void 0);
    return PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse;
}(SpeakeasyBase));
export { PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse };
