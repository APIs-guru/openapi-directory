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
import { ApiKey } from "./apikey";
import { GroupRole } from "./grouprole";
import { BaseGroup } from "./basegroup";
import { UserFeature } from "./userfeature";
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiKey)
    ], User.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], User.prototype, "canSwitchUser", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], User.prototype, "changePassword", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], User.prototype, "contactNumber", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], User.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], User.prototype, "currentLogin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], User.prototype, "currentLoginIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], User.prototype, "dateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], User.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], User.prototype, "dummy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], User.prototype, "emailVerified", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], User.prototype, "forename", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GroupRole }),
        __metadata("design:type", Array)
    ], User.prototype, "groupRoles", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], User.prototype, "hideSecretWordNotification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], User.prototype, "identifiers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], User.prototype, "lastLogin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], User.prototype, "lastLoginIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaseGroup)
    ], User.prototype, "latestDataReceivedBy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], User.prototype, "latestDataReceivedDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], User.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], User.prototype, "picture", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], User.prototype, "roleDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], User.prototype, "secretWordIsSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], User.prototype, "surname", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: UserFeature }),
        __metadata("design:type", Array)
    ], User.prototype, "userFeatures", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    return User;
}(SpeakeasyBase));
export { User };
