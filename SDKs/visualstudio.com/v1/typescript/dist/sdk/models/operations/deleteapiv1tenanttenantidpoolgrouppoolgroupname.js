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
var DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams = /** @class */ (function (_super) {
    __extends(DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams, _super);
    function DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolGroupName" }),
        __metadata("design:type", String)
    ], DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams.prototype, "poolGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" }),
        __metadata("design:type", String)
    ], DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams.prototype, "tenantId", void 0);
    return DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;
}(SpeakeasyBase));
export { DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams };
var DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameRequest = /** @class */ (function (_super) {
    __extends(DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameRequest, _super);
    function DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams)
    ], DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameRequest.prototype, "pathParams", void 0);
    return DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameRequest;
}(SpeakeasyBase));
export { DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameRequest };
var DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse = /** @class */ (function (_super) {
    __extends(DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse, _super);
    function DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse.prototype, "statusCode", void 0);
    return DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse;
}(SpeakeasyBase));
export { DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse };
