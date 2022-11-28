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
var GetSecurityCsrfTokenSecurity = /** @class */ (function (_super) {
    __extends(GetSecurityCsrfTokenSecurity, _super);
    function GetSecurityCsrfTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetSecurityCsrfTokenSecurity.prototype, "jwt", void 0);
    return GetSecurityCsrfTokenSecurity;
}(SpeakeasyBase));
export { GetSecurityCsrfTokenSecurity };
var GetSecurityCsrfToken200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSecurityCsrfToken200ApplicationJson, _super);
    function GetSecurityCsrfToken200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetSecurityCsrfToken200ApplicationJson.prototype, "result", void 0);
    return GetSecurityCsrfToken200ApplicationJson;
}(SpeakeasyBase));
export { GetSecurityCsrfToken200ApplicationJson };
var GetSecurityCsrfToken401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSecurityCsrfToken401ApplicationJson, _super);
    function GetSecurityCsrfToken401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSecurityCsrfToken401ApplicationJson.prototype, "message", void 0);
    return GetSecurityCsrfToken401ApplicationJson;
}(SpeakeasyBase));
export { GetSecurityCsrfToken401ApplicationJson };
var GetSecurityCsrfToken500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSecurityCsrfToken500ApplicationJson, _super);
    function GetSecurityCsrfToken500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSecurityCsrfToken500ApplicationJson.prototype, "message", void 0);
    return GetSecurityCsrfToken500ApplicationJson;
}(SpeakeasyBase));
export { GetSecurityCsrfToken500ApplicationJson };
var GetSecurityCsrfTokenRequest = /** @class */ (function (_super) {
    __extends(GetSecurityCsrfTokenRequest, _super);
    function GetSecurityCsrfTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSecurityCsrfTokenSecurity)
    ], GetSecurityCsrfTokenRequest.prototype, "security", void 0);
    return GetSecurityCsrfTokenRequest;
}(SpeakeasyBase));
export { GetSecurityCsrfTokenRequest };
var GetSecurityCsrfTokenResponse = /** @class */ (function (_super) {
    __extends(GetSecurityCsrfTokenResponse, _super);
    function GetSecurityCsrfTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSecurityCsrfTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSecurityCsrfToken200ApplicationJson)
    ], GetSecurityCsrfTokenResponse.prototype, "getSecurityCsrfToken200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSecurityCsrfToken401ApplicationJson)
    ], GetSecurityCsrfTokenResponse.prototype, "getSecurityCsrfToken401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSecurityCsrfToken500ApplicationJson)
    ], GetSecurityCsrfTokenResponse.prototype, "getSecurityCsrfToken500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSecurityCsrfTokenResponse.prototype, "statusCode", void 0);
    return GetSecurityCsrfTokenResponse;
}(SpeakeasyBase));
export { GetSecurityCsrfTokenResponse };
