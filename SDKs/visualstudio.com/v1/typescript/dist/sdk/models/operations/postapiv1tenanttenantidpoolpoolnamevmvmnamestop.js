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
var PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams = /** @class */ (function (_super) {
    __extends(PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams, _super);
    function PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams.prototype, "poolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" }),
        __metadata("design:type", String)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vmName" }),
        __metadata("design:type", String)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams.prototype, "vmName", void 0);
    return PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams;
}(SpeakeasyBase));
export { PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams };
var PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopRequest = /** @class */ (function (_super) {
    __extends(PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopRequest, _super);
    function PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopRequest.prototype, "pathParams", void 0);
    return PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopRequest;
}(SpeakeasyBase));
export { PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopRequest };
var PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse = /** @class */ (function (_super) {
    __extends(PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse, _super);
    function PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse.prototype, "statusCode", void 0);
    return PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse;
}(SpeakeasyBase));
export { PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse };
