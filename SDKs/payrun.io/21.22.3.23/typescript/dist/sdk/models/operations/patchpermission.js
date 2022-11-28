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
var PatchPermissionPathParams = /** @class */ (function (_super) {
    __extends(PatchPermissionPathParams, _super);
    function PatchPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PermissionId" }),
        __metadata("design:type", String)
    ], PatchPermissionPathParams.prototype, "permissionId", void 0);
    return PatchPermissionPathParams;
}(SpeakeasyBase));
export { PatchPermissionPathParams };
var PatchPermissionHeaders = /** @class */ (function (_super) {
    __extends(PatchPermissionHeaders, _super);
    function PatchPermissionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PatchPermissionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PatchPermissionHeaders.prototype, "authorization", void 0);
    return PatchPermissionHeaders;
}(SpeakeasyBase));
export { PatchPermissionHeaders };
var PatchPermissionRequest = /** @class */ (function (_super) {
    __extends(PatchPermissionRequest, _super);
    function PatchPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchPermissionPathParams)
    ], PatchPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchPermissionHeaders)
    ], PatchPermissionRequest.prototype, "headers", void 0);
    return PatchPermissionRequest;
}(SpeakeasyBase));
export { PatchPermissionRequest };
var PatchPermissionResponse = /** @class */ (function (_super) {
    __extends(PatchPermissionResponse, _super);
    function PatchPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PatchPermissionResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Permission)
    ], PatchPermissionResponse.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchPermissionResponse.prototype, "statusCode", void 0);
    return PatchPermissionResponse;
}(SpeakeasyBase));
export { PatchPermissionResponse };
