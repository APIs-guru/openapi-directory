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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ExtensionCtrlGetAccountExtensionByIdPathParams = /** @class */ (function (_super) {
    __extends(ExtensionCtrlGetAccountExtensionByIdPathParams, _super);
    function ExtensionCtrlGetAccountExtensionByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" }),
        __metadata("design:type", String)
    ], ExtensionCtrlGetAccountExtensionByIdPathParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=extension_number" }),
        __metadata("design:type", Number)
    ], ExtensionCtrlGetAccountExtensionByIdPathParams.prototype, "extensionNumber", void 0);
    return ExtensionCtrlGetAccountExtensionByIdPathParams;
}(SpeakeasyBase));
export { ExtensionCtrlGetAccountExtensionByIdPathParams };
var ExtensionCtrlGetAccountExtensionByIdSecurity = /** @class */ (function (_super) {
    __extends(ExtensionCtrlGetAccountExtensionByIdSecurity, _super);
    function ExtensionCtrlGetAccountExtensionByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ExtensionCtrlGetAccountExtensionByIdSecurity.prototype, "bearerAuth", void 0);
    return ExtensionCtrlGetAccountExtensionByIdSecurity;
}(SpeakeasyBase));
export { ExtensionCtrlGetAccountExtensionByIdSecurity };
var ExtensionCtrlGetAccountExtensionByIdRequest = /** @class */ (function (_super) {
    __extends(ExtensionCtrlGetAccountExtensionByIdRequest, _super);
    function ExtensionCtrlGetAccountExtensionByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ExtensionCtrlGetAccountExtensionByIdPathParams)
    ], ExtensionCtrlGetAccountExtensionByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ExtensionCtrlGetAccountExtensionByIdSecurity)
    ], ExtensionCtrlGetAccountExtensionByIdRequest.prototype, "security", void 0);
    return ExtensionCtrlGetAccountExtensionByIdRequest;
}(SpeakeasyBase));
export { ExtensionCtrlGetAccountExtensionByIdRequest };
var ExtensionCtrlGetAccountExtensionByIdResponse = /** @class */ (function (_super) {
    __extends(ExtensionCtrlGetAccountExtensionByIdResponse, _super);
    function ExtensionCtrlGetAccountExtensionByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ExtensionCtrlGetAccountExtensionByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.EndUserRouteHalResponse)
    ], ExtensionCtrlGetAccountExtensionByIdResponse.prototype, "endUserRouteHalResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], ExtensionCtrlGetAccountExtensionByIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ExtensionCtrlGetAccountExtensionByIdResponse.prototype, "statusCode", void 0);
    return ExtensionCtrlGetAccountExtensionByIdResponse;
}(SpeakeasyBase));
export { ExtensionCtrlGetAccountExtensionByIdResponse };
