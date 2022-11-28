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
var OAuth2PermissionGrantCreatePathParams = /** @class */ (function (_super) {
    __extends(OAuth2PermissionGrantCreatePathParams, _super);
    function OAuth2PermissionGrantCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], OAuth2PermissionGrantCreatePathParams.prototype, "tenantId", void 0);
    return OAuth2PermissionGrantCreatePathParams;
}(SpeakeasyBase));
export { OAuth2PermissionGrantCreatePathParams };
var OAuth2PermissionGrantCreateQueryParams = /** @class */ (function (_super) {
    __extends(OAuth2PermissionGrantCreateQueryParams, _super);
    function OAuth2PermissionGrantCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], OAuth2PermissionGrantCreateQueryParams.prototype, "apiVersion", void 0);
    return OAuth2PermissionGrantCreateQueryParams;
}(SpeakeasyBase));
export { OAuth2PermissionGrantCreateQueryParams };
var OAuth2PermissionGrantCreateRequest = /** @class */ (function (_super) {
    __extends(OAuth2PermissionGrantCreateRequest, _super);
    function OAuth2PermissionGrantCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OAuth2PermissionGrantCreatePathParams)
    ], OAuth2PermissionGrantCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OAuth2PermissionGrantCreateQueryParams)
    ], OAuth2PermissionGrantCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], OAuth2PermissionGrantCreateRequest.prototype, "request", void 0);
    return OAuth2PermissionGrantCreateRequest;
}(SpeakeasyBase));
export { OAuth2PermissionGrantCreateRequest };
var OAuth2PermissionGrantCreateResponse = /** @class */ (function (_super) {
    __extends(OAuth2PermissionGrantCreateResponse, _super);
    function OAuth2PermissionGrantCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OAuth2PermissionGrantCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OAuth2PermissionGrantCreateResponse.prototype, "oAuth2PermissionGrant", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OAuth2PermissionGrantCreateResponse.prototype, "statusCode", void 0);
    return OAuth2PermissionGrantCreateResponse;
}(SpeakeasyBase));
export { OAuth2PermissionGrantCreateResponse };
