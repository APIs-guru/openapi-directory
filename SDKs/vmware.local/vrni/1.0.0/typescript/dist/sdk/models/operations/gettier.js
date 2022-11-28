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
var GetTierPathParams = /** @class */ (function (_super) {
    __extends(GetTierPathParams, _super);
    function GetTierPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tier-id" }),
        __metadata("design:type", String)
    ], GetTierPathParams.prototype, "tierId", void 0);
    return GetTierPathParams;
}(SpeakeasyBase));
export { GetTierPathParams };
var GetTierHeaders = /** @class */ (function (_super) {
    __extends(GetTierHeaders, _super);
    function GetTierHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetTierHeaders.prototype, "authorization", void 0);
    return GetTierHeaders;
}(SpeakeasyBase));
export { GetTierHeaders };
var GetTierSecurity = /** @class */ (function (_super) {
    __extends(GetTierSecurity, _super);
    function GetTierSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetTierSecurity.prototype, "apiKeyAuth", void 0);
    return GetTierSecurity;
}(SpeakeasyBase));
export { GetTierSecurity };
var GetTierRequest = /** @class */ (function (_super) {
    __extends(GetTierRequest, _super);
    function GetTierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTierPathParams)
    ], GetTierRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTierHeaders)
    ], GetTierRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTierSecurity)
    ], GetTierRequest.prototype, "security", void 0);
    return GetTierRequest;
}(SpeakeasyBase));
export { GetTierRequest };
var GetTierResponse = /** @class */ (function (_super) {
    __extends(GetTierResponse, _super);
    function GetTierResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTierResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTierResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tier)
    ], GetTierResponse.prototype, "tier", void 0);
    return GetTierResponse;
}(SpeakeasyBase));
export { GetTierResponse };
