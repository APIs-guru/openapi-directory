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
import { AppRole } from "./approle";
import { GroupMembershipClaimsEnum } from "./groupmembershipclaimsenum";
import { InformationalUrl } from "./informationalurl";
import { OAuth2Permission } from "./oauth2permission";
import { OptionalClaims } from "./optionalclaims";
import { PreAuthorizedApplication } from "./preauthorizedapplication";
// ApplicationCreateParameters
/**
 * Request parameters for creating a new application.
**/
var ApplicationCreateParameters = /** @class */ (function (_super) {
    __extends(ApplicationCreateParameters, _super);
    function ApplicationCreateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowGuestsSignIn" }),
        __metadata("design:type", Boolean)
    ], ApplicationCreateParameters.prototype, "allowGuestsSignIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowPassthroughUsers" }),
        __metadata("design:type", Boolean)
    ], ApplicationCreateParameters.prototype, "allowPassthroughUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appLogoUrl" }),
        __metadata("design:type", String)
    ], ApplicationCreateParameters.prototype, "appLogoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appPermissions" }),
        __metadata("design:type", Array)
    ], ApplicationCreateParameters.prototype, "appPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appRoles", elemType: AppRole }),
        __metadata("design:type", Array)
    ], ApplicationCreateParameters.prototype, "appRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableToOtherTenants" }),
        __metadata("design:type", Boolean)
    ], ApplicationCreateParameters.prototype, "availableToOtherTenants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ApplicationCreateParameters.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorUrl" }),
        __metadata("design:type", String)
    ], ApplicationCreateParameters.prototype, "errorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupMembershipClaims" }),
        __metadata("design:type", String)
    ], ApplicationCreateParameters.prototype, "groupMembershipClaims", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], ApplicationCreateParameters.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifierUris" }),
        __metadata("design:type", Array)
    ], ApplicationCreateParameters.prototype, "identifierUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=informationalUrls" }),
        __metadata("design:type", InformationalUrl)
    ], ApplicationCreateParameters.prototype, "informationalUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDeviceOnlyAuthSupported" }),
        __metadata("design:type", Boolean)
    ], ApplicationCreateParameters.prototype, "isDeviceOnlyAuthSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyCredentials" }),
        __metadata("design:type", Array)
    ], ApplicationCreateParameters.prototype, "keyCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=knownClientApplications" }),
        __metadata("design:type", Array)
    ], ApplicationCreateParameters.prototype, "knownClientApplications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logoutUrl" }),
        __metadata("design:type", String)
    ], ApplicationCreateParameters.prototype, "logoutUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2AllowImplicitFlow" }),
        __metadata("design:type", Boolean)
    ], ApplicationCreateParameters.prototype, "oauth2AllowImplicitFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2AllowUrlPathMatching" }),
        __metadata("design:type", Boolean)
    ], ApplicationCreateParameters.prototype, "oauth2AllowUrlPathMatching", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2Permissions", elemType: OAuth2Permission }),
        __metadata("design:type", Array)
    ], ApplicationCreateParameters.prototype, "oauth2Permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2RequirePostResponse" }),
        __metadata("design:type", Boolean)
    ], ApplicationCreateParameters.prototype, "oauth2RequirePostResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optionalClaims" }),
        __metadata("design:type", OptionalClaims)
    ], ApplicationCreateParameters.prototype, "optionalClaims", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgRestrictions" }),
        __metadata("design:type", Array)
    ], ApplicationCreateParameters.prototype, "orgRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordCredentials" }),
        __metadata("design:type", Array)
    ], ApplicationCreateParameters.prototype, "passwordCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preAuthorizedApplications", elemType: PreAuthorizedApplication }),
        __metadata("design:type", Array)
    ], ApplicationCreateParameters.prototype, "preAuthorizedApplications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicClient" }),
        __metadata("design:type", Boolean)
    ], ApplicationCreateParameters.prototype, "publicClient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherDomain" }),
        __metadata("design:type", String)
    ], ApplicationCreateParameters.prototype, "publisherDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replyUrls" }),
        __metadata("design:type", Array)
    ], ApplicationCreateParameters.prototype, "replyUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredResourceAccess" }),
        __metadata("design:type", Array)
    ], ApplicationCreateParameters.prototype, "requiredResourceAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samlMetadataUrl" }),
        __metadata("design:type", String)
    ], ApplicationCreateParameters.prototype, "samlMetadataUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signInAudience" }),
        __metadata("design:type", String)
    ], ApplicationCreateParameters.prototype, "signInAudience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wwwHomepage" }),
        __metadata("design:type", String)
    ], ApplicationCreateParameters.prototype, "wwwHomepage", void 0);
    return ApplicationCreateParameters;
}(SpeakeasyBase));
export { ApplicationCreateParameters };
