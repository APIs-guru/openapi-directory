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
var ExtensionCtrlGetAccountExtensionsPathParams = /** @class */ (function (_super) {
    __extends(ExtensionCtrlGetAccountExtensionsPathParams, _super);
    function ExtensionCtrlGetAccountExtensionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" }),
        __metadata("design:type", String)
    ], ExtensionCtrlGetAccountExtensionsPathParams.prototype, "accountId", void 0);
    return ExtensionCtrlGetAccountExtensionsPathParams;
}(SpeakeasyBase));
export { ExtensionCtrlGetAccountExtensionsPathParams };
var ExtensionCtrlGetAccountExtensionsQueryParams = /** @class */ (function (_super) {
    __extends(ExtensionCtrlGetAccountExtensionsQueryParams, _super);
    function ExtensionCtrlGetAccountExtensionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], ExtensionCtrlGetAccountExtensionsQueryParams.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=location_id" }),
        __metadata("design:type", Number)
    ], ExtensionCtrlGetAccountExtensionsQueryParams.prototype, "locationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=login_name" }),
        __metadata("design:type", String)
    ], ExtensionCtrlGetAccountExtensionsQueryParams.prototype, "loginName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ExtensionCtrlGetAccountExtensionsQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ExtensionCtrlGetAccountExtensionsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=phone_number" }),
        __metadata("design:type", String)
    ], ExtensionCtrlGetAccountExtensionsQueryParams.prototype, "phoneNumber", void 0);
    return ExtensionCtrlGetAccountExtensionsQueryParams;
}(SpeakeasyBase));
export { ExtensionCtrlGetAccountExtensionsQueryParams };
var ExtensionCtrlGetAccountExtensionsSecurity = /** @class */ (function (_super) {
    __extends(ExtensionCtrlGetAccountExtensionsSecurity, _super);
    function ExtensionCtrlGetAccountExtensionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ExtensionCtrlGetAccountExtensionsSecurity.prototype, "bearerAuth", void 0);
    return ExtensionCtrlGetAccountExtensionsSecurity;
}(SpeakeasyBase));
export { ExtensionCtrlGetAccountExtensionsSecurity };
var ExtensionCtrlGetAccountExtensionsRequest = /** @class */ (function (_super) {
    __extends(ExtensionCtrlGetAccountExtensionsRequest, _super);
    function ExtensionCtrlGetAccountExtensionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ExtensionCtrlGetAccountExtensionsPathParams)
    ], ExtensionCtrlGetAccountExtensionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ExtensionCtrlGetAccountExtensionsQueryParams)
    ], ExtensionCtrlGetAccountExtensionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ExtensionCtrlGetAccountExtensionsSecurity)
    ], ExtensionCtrlGetAccountExtensionsRequest.prototype, "security", void 0);
    return ExtensionCtrlGetAccountExtensionsRequest;
}(SpeakeasyBase));
export { ExtensionCtrlGetAccountExtensionsRequest };
var ExtensionCtrlGetAccountExtensionsResponse = /** @class */ (function (_super) {
    __extends(ExtensionCtrlGetAccountExtensionsResponse, _super);
    function ExtensionCtrlGetAccountExtensionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ExtensionCtrlGetAccountExtensionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.EndUserRouteHalResponse)
    ], ExtensionCtrlGetAccountExtensionsResponse.prototype, "endUserRouteHalResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ExtensionCtrlGetAccountExtensionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ValidationErrorsResponse)
    ], ExtensionCtrlGetAccountExtensionsResponse.prototype, "validationErrorsResponse", void 0);
    return ExtensionCtrlGetAccountExtensionsResponse;
}(SpeakeasyBase));
export { ExtensionCtrlGetAccountExtensionsResponse };
