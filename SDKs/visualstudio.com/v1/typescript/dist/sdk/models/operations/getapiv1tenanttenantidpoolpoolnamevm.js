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
var GetApiV1TenantTenantIdPoolPoolNameVmPathParams = /** @class */ (function (_super) {
    __extends(GetApiV1TenantTenantIdPoolPoolNameVmPathParams, _super);
    function GetApiV1TenantTenantIdPoolPoolNameVmPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], GetApiV1TenantTenantIdPoolPoolNameVmPathParams.prototype, "poolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" }),
        __metadata("design:type", String)
    ], GetApiV1TenantTenantIdPoolPoolNameVmPathParams.prototype, "tenantId", void 0);
    return GetApiV1TenantTenantIdPoolPoolNameVmPathParams;
}(SpeakeasyBase));
export { GetApiV1TenantTenantIdPoolPoolNameVmPathParams };
var GetApiV1TenantTenantIdPoolPoolNameVmRequest = /** @class */ (function (_super) {
    __extends(GetApiV1TenantTenantIdPoolPoolNameVmRequest, _super);
    function GetApiV1TenantTenantIdPoolPoolNameVmRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1TenantTenantIdPoolPoolNameVmPathParams)
    ], GetApiV1TenantTenantIdPoolPoolNameVmRequest.prototype, "pathParams", void 0);
    return GetApiV1TenantTenantIdPoolPoolNameVmRequest;
}(SpeakeasyBase));
export { GetApiV1TenantTenantIdPoolPoolNameVmRequest };
var GetApiV1TenantTenantIdPoolPoolNameVmResponse = /** @class */ (function (_super) {
    __extends(GetApiV1TenantTenantIdPoolPoolNameVmResponse, _super);
    function GetApiV1TenantTenantIdPoolPoolNameVmResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiV1TenantTenantIdPoolPoolNameVmResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV1TenantTenantIdPoolPoolNameVmResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiV1TenantTenantIdPoolPoolNameVmResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV1TenantTenantIdPoolPoolNameVmResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.VmResult }),
        __metadata("design:type", Array)
    ], GetApiV1TenantTenantIdPoolPoolNameVmResponse.prototype, "vmResults", void 0);
    return GetApiV1TenantTenantIdPoolPoolNameVmResponse;
}(SpeakeasyBase));
export { GetApiV1TenantTenantIdPoolPoolNameVmResponse };
