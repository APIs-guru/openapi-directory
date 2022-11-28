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
import { ExternalStandard } from "./externalstandard";
import { Feature } from "./feature";
import { Role } from "./role";
import { Route } from "./route";
import { User } from "./user";
import { BaseGroup } from "./basegroup";
var UserToken = /** @class */ (function (_super) {
    __extends(UserToken, _super);
    function UserToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], UserToken.prototype, "auditActions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], UserToken.prototype, "checkSecretWord", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], UserToken.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], UserToken.prototype, "expiration", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ExternalStandard }),
        __metadata("design:type", Array)
    ], UserToken.prototype, "externalStandards", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Feature }),
        __metadata("design:type", Array)
    ], UserToken.prototype, "groupFeatures", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], UserToken.prototype, "groupMessagingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], UserToken.prototype, "mustSetSecretWord", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Feature }),
        __metadata("design:type", Array)
    ], UserToken.prototype, "patientFeatures", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], UserToken.prototype, "patientMessagingFeatureTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Role }),
        __metadata("design:type", Array)
    ], UserToken.prototype, "patientRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Route }),
        __metadata("design:type", Array)
    ], UserToken.prototype, "routes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserToken.prototype, "secretWord", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UserToken.prototype, "secretWordChoices", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], UserToken.prototype, "secretWordIndexes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserToken.prototype, "secretWordSalt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserToken.prototype, "secretWordToken", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Role }),
        __metadata("design:type", Array)
    ], UserToken.prototype, "securityRoles", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], UserToken.prototype, "shouldEnterCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Feature }),
        __metadata("design:type", Array)
    ], UserToken.prototype, "staffFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Role }),
        __metadata("design:type", Array)
    ], UserToken.prototype, "staffRoles", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserToken.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", User)
    ], UserToken.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Feature }),
        __metadata("design:type", Array)
    ], UserToken.prototype, "userFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: BaseGroup }),
        __metadata("design:type", Array)
    ], UserToken.prototype, "userGroups", void 0);
    return UserToken;
}(SpeakeasyBase));
export { UserToken };
