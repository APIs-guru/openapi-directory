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
var PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams = /** @class */ (function (_super) {
    __extends(PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams, _super);
    function PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams.prototype, "poolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" }),
        __metadata("design:type", String)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vmName" }),
        __metadata("design:type", String)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams.prototype, "vmName", void 0);
    return PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams;
}(SpeakeasyBase));
export { PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams };
var PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartRequest = /** @class */ (function (_super) {
    __extends(PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartRequest, _super);
    function PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartRequest.prototype, "pathParams", void 0);
    return PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartRequest;
}(SpeakeasyBase));
export { PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartRequest };
var PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse = /** @class */ (function (_super) {
    __extends(PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse, _super);
    function PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse.prototype, "statusCode", void 0);
    return PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse;
}(SpeakeasyBase));
export { PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse };
