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
var RemoveSitePathParams = /** @class */ (function (_super) {
    __extends(RemoveSitePathParams, _super);
    function RemoveSitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=site_id" }),
        __metadata("design:type", String)
    ], RemoveSitePathParams.prototype, "siteId", void 0);
    return RemoveSitePathParams;
}(SpeakeasyBase));
export { RemoveSitePathParams };
var RemoveSiteSecurity = /** @class */ (function (_super) {
    __extends(RemoveSiteSecurity, _super);
    function RemoveSiteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], RemoveSiteSecurity.prototype, "bearerAuth", void 0);
    return RemoveSiteSecurity;
}(SpeakeasyBase));
export { RemoveSiteSecurity };
var RemoveSiteRequest = /** @class */ (function (_super) {
    __extends(RemoveSiteRequest, _super);
    function RemoveSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RemoveSitePathParams)
    ], RemoveSiteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RemoveSiteSecurity)
    ], RemoveSiteRequest.prototype, "security", void 0);
    return RemoveSiteRequest;
}(SpeakeasyBase));
export { RemoveSiteRequest };
var RemoveSiteResponse = /** @class */ (function (_super) {
    __extends(RemoveSiteResponse, _super);
    function RemoveSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RemoveSiteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RemoveSiteResponse.prototype, "statusCode", void 0);
    return RemoveSiteResponse;
}(SpeakeasyBase));
export { RemoveSiteResponse };
