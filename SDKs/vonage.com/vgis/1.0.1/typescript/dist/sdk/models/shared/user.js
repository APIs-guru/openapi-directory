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
var UserRoles = /** @class */ (function (_super) {
    __extends(UserRoles, _super);
    function UserRoles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UserRoles.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserRoles.prototype, "name", void 0);
    return UserRoles;
}(SpeakeasyBase));
export { UserRoles };
export var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum["Pending"] = "PENDING";
    UserStatusEnum["Active"] = "ACTIVE";
    UserStatusEnum["Deleted"] = "DELETED";
    UserStatusEnum["Archived"] = "ARCHIVED";
})(UserStatusEnum || (UserStatusEnum = {}));
var UserUcisHealth = /** @class */ (function (_super) {
    __extends(UserUcisHealth, _super);
    function UserUcisHealth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UserUcisHealth.prototype, "message", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UserUcisHealth.prototype, "status", void 0);
    return UserUcisHealth;
}(SpeakeasyBase));
export { UserUcisHealth };
var UserUcis = /** @class */ (function (_super) {
    __extends(UserUcis, _super);
    function UserUcis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=health" }),
        __metadata("design:type", UserUcisHealth)
    ], UserUcis.prototype, "health", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UserUcis.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserUcis.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=ucpLabel" }),
        __metadata("design:type", String)
    ], UserUcis.prototype, "ucpLabel", void 0);
    return UserUcis;
}(SpeakeasyBase));
export { UserUcis };
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], User.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "json, name=acountLabel" }),
        __metadata("design:type", String)
    ], User.prototype, "acountLabel", void 0);
    __decorate([
        Metadata({ data: "json, name=contactNumber" }),
        __metadata("design:type", String)
    ], User.prototype, "contactNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], User.prototype, "emailAddress", void 0);
    __decorate([
        Metadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        Metadata({ data: "json, name=roles", elemType: shared.UserRoles }),
        __metadata("design:type", Array)
    ], User.prototype, "roles", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], User.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=ucis", elemType: shared.UserUcis }),
        __metadata("design:type", Array)
    ], User.prototype, "ucis", void 0);
    return User;
}(SpeakeasyBase));
export { User };
