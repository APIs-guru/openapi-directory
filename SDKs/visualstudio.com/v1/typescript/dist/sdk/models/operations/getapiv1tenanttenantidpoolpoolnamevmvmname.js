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
var GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams = /** @class */ (function (_super) {
    __extends(GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams, _super);
    function GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams.prototype, "poolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" }),
        __metadata("design:type", String)
    ], GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vmName" }),
        __metadata("design:type", String)
    ], GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams.prototype, "vmName", void 0);
    return GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams;
}(SpeakeasyBase));
export { GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams };
var GetApiV1TenantTenantIdPoolPoolNameVmVmNameRequest = /** @class */ (function (_super) {
    __extends(GetApiV1TenantTenantIdPoolPoolNameVmVmNameRequest, _super);
    function GetApiV1TenantTenantIdPoolPoolNameVmVmNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams)
    ], GetApiV1TenantTenantIdPoolPoolNameVmVmNameRequest.prototype, "pathParams", void 0);
    return GetApiV1TenantTenantIdPoolPoolNameVmVmNameRequest;
}(SpeakeasyBase));
export { GetApiV1TenantTenantIdPoolPoolNameVmVmNameRequest };
var GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse = /** @class */ (function (_super) {
    __extends(GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse, _super);
    function GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VmResult)
    ], GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse.prototype, "vmResult", void 0);
    return GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse;
}(SpeakeasyBase));
export { GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse };
