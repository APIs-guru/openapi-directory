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
var PutApiV1TenantTenantIdPathParams = /** @class */ (function (_super) {
    __extends(PutApiV1TenantTenantIdPathParams, _super);
    function PutApiV1TenantTenantIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" }),
        __metadata("design:type", String)
    ], PutApiV1TenantTenantIdPathParams.prototype, "tenantId", void 0);
    return PutApiV1TenantTenantIdPathParams;
}(SpeakeasyBase));
export { PutApiV1TenantTenantIdPathParams };
var PutApiV1TenantTenantIdRequest = /** @class */ (function (_super) {
    __extends(PutApiV1TenantTenantIdRequest, _super);
    function PutApiV1TenantTenantIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutApiV1TenantTenantIdPathParams)
    ], PutApiV1TenantTenantIdRequest.prototype, "pathParams", void 0);
    return PutApiV1TenantTenantIdRequest;
}(SpeakeasyBase));
export { PutApiV1TenantTenantIdRequest };
var PutApiV1TenantTenantIdResponse = /** @class */ (function (_super) {
    __extends(PutApiV1TenantTenantIdResponse, _super);
    function PutApiV1TenantTenantIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutApiV1TenantTenantIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutApiV1TenantTenantIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutApiV1TenantTenantIdResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutApiV1TenantTenantIdResponse.prototype, "statusCode", void 0);
    return PutApiV1TenantTenantIdResponse;
}(SpeakeasyBase));
export { PutApiV1TenantTenantIdResponse };
