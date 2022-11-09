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
var GetSitePathParams = /** @class */ (function (_super) {
    __extends(GetSitePathParams, _super);
    function GetSitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=site_id" }),
        __metadata("design:type", String)
    ], GetSitePathParams.prototype, "siteId", void 0);
    return GetSitePathParams;
}(SpeakeasyBase));
export { GetSitePathParams };
var GetSiteSecurity = /** @class */ (function (_super) {
    __extends(GetSiteSecurity, _super);
    function GetSiteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetSiteSecurity.prototype, "bearerAuth", void 0);
    return GetSiteSecurity;
}(SpeakeasyBase));
export { GetSiteSecurity };
var GetSiteRequest = /** @class */ (function (_super) {
    __extends(GetSiteRequest, _super);
    function GetSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSitePathParams)
    ], GetSiteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSiteSecurity)
    ], GetSiteRequest.prototype, "security", void 0);
    return GetSiteRequest;
}(SpeakeasyBase));
export { GetSiteRequest };
var GetSiteResponse = /** @class */ (function (_super) {
    __extends(GetSiteResponse, _super);
    function GetSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSiteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Site)
    ], GetSiteResponse.prototype, "site", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSiteResponse.prototype, "statusCode", void 0);
    return GetSiteResponse;
}(SpeakeasyBase));
export { GetSiteResponse };
