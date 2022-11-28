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
var GetDashboardIdOrSlugPathParams = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugPathParams, _super);
    function GetDashboardIdOrSlugPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id_or_slug" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugPathParams.prototype, "idOrSlug", void 0);
    return GetDashboardIdOrSlugPathParams;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugPathParams };
var GetDashboardIdOrSlugSecurity = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugSecurity, _super);
    function GetDashboardIdOrSlugSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDashboardIdOrSlugSecurity.prototype, "jwt", void 0);
    return GetDashboardIdOrSlugSecurity;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugSecurity };
var GetDashboardIdOrSlug200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlug200ApplicationJson, _super);
    function GetDashboardIdOrSlug200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.DashboardGetResponseSchema)
    ], GetDashboardIdOrSlug200ApplicationJson.prototype, "result", void 0);
    return GetDashboardIdOrSlug200ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlug200ApplicationJson };
var GetDashboardIdOrSlug400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlug400ApplicationJson, _super);
    function GetDashboardIdOrSlug400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlug400ApplicationJson.prototype, "message", void 0);
    return GetDashboardIdOrSlug400ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlug400ApplicationJson };
var GetDashboardIdOrSlug401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlug401ApplicationJson, _super);
    function GetDashboardIdOrSlug401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlug401ApplicationJson.prototype, "message", void 0);
    return GetDashboardIdOrSlug401ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlug401ApplicationJson };
var GetDashboardIdOrSlug404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlug404ApplicationJson, _super);
    function GetDashboardIdOrSlug404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlug404ApplicationJson.prototype, "message", void 0);
    return GetDashboardIdOrSlug404ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlug404ApplicationJson };
var GetDashboardIdOrSlugRequest = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugRequest, _super);
    function GetDashboardIdOrSlugRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugPathParams)
    ], GetDashboardIdOrSlugRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugSecurity)
    ], GetDashboardIdOrSlugRequest.prototype, "security", void 0);
    return GetDashboardIdOrSlugRequest;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugRequest };
var GetDashboardIdOrSlugResponse = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugResponse, _super);
    function GetDashboardIdOrSlugResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlug200ApplicationJson)
    ], GetDashboardIdOrSlugResponse.prototype, "getDashboardIdOrSlug200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlug400ApplicationJson)
    ], GetDashboardIdOrSlugResponse.prototype, "getDashboardIdOrSlug400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlug401ApplicationJson)
    ], GetDashboardIdOrSlugResponse.prototype, "getDashboardIdOrSlug401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlug404ApplicationJson)
    ], GetDashboardIdOrSlugResponse.prototype, "getDashboardIdOrSlug404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDashboardIdOrSlugResponse.prototype, "statusCode", void 0);
    return GetDashboardIdOrSlugResponse;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugResponse };
