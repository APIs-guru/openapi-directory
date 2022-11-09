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
var UpdateSitePathParams = /** @class */ (function (_super) {
    __extends(UpdateSitePathParams, _super);
    function UpdateSitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=site_id" }),
        __metadata("design:type", String)
    ], UpdateSitePathParams.prototype, "siteId", void 0);
    return UpdateSitePathParams;
}(SpeakeasyBase));
export { UpdateSitePathParams };
var UpdateSiteSecurity = /** @class */ (function (_super) {
    __extends(UpdateSiteSecurity, _super);
    function UpdateSiteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], UpdateSiteSecurity.prototype, "bearerAuth", void 0);
    return UpdateSiteSecurity;
}(SpeakeasyBase));
export { UpdateSiteSecurity };
var UpdateSiteRequest = /** @class */ (function (_super) {
    __extends(UpdateSiteRequest, _super);
    function UpdateSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSitePathParams)
    ], UpdateSiteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SiteOptions)
    ], UpdateSiteRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSiteSecurity)
    ], UpdateSiteRequest.prototype, "security", void 0);
    return UpdateSiteRequest;
}(SpeakeasyBase));
export { UpdateSiteRequest };
var UpdateSiteResponse = /** @class */ (function (_super) {
    __extends(UpdateSiteResponse, _super);
    function UpdateSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSiteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Site)
    ], UpdateSiteResponse.prototype, "site", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSiteResponse.prototype, "statusCode", void 0);
    return UpdateSiteResponse;
}(SpeakeasyBase));
export { UpdateSiteResponse };
