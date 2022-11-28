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
// OAuth2Permission
/**
 * Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission.
**/
var OAuth2Permission = /** @class */ (function (_super) {
    __extends(OAuth2Permission, _super);
    function OAuth2Permission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminConsentDescription" }),
        __metadata("design:type", String)
    ], OAuth2Permission.prototype, "adminConsentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminConsentDisplayName" }),
        __metadata("design:type", String)
    ], OAuth2Permission.prototype, "adminConsentDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OAuth2Permission.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEnabled" }),
        __metadata("design:type", Boolean)
    ], OAuth2Permission.prototype, "isEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OAuth2Permission.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userConsentDescription" }),
        __metadata("design:type", String)
    ], OAuth2Permission.prototype, "userConsentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userConsentDisplayName" }),
        __metadata("design:type", String)
    ], OAuth2Permission.prototype, "userConsentDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], OAuth2Permission.prototype, "value", void 0);
    return OAuth2Permission;
}(SpeakeasyBase));
export { OAuth2Permission };
