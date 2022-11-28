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
import { Role } from "./role";
export var UserResponseMfaStatusEnum;
(function (UserResponseMfaStatusEnum) {
    UserResponseMfaStatusEnum["Registered"] = "REGISTERED";
    UserResponseMfaStatusEnum["Unregistered"] = "UNREGISTERED";
})(UserResponseMfaStatusEnum || (UserResponseMfaStatusEnum = {}));
export var UserResponseMfaTypeEnum;
(function (UserResponseMfaTypeEnum) {
    UserResponseMfaTypeEnum["Sms"] = "SMS";
    UserResponseMfaTypeEnum["Yubikey"] = "YUBIKEY";
    UserResponseMfaTypeEnum["Totp"] = "TOTP";
})(UserResponseMfaTypeEnum || (UserResponseMfaTypeEnum = {}));
export var UserResponseStatusEnum;
(function (UserResponseStatusEnum) {
    UserResponseStatusEnum["Enabled"] = "ENABLED";
    UserResponseStatusEnum["Disabled"] = "DISABLED";
    UserResponseStatusEnum["Pending"] = "PENDING";
})(UserResponseStatusEnum || (UserResponseStatusEnum = {}));
var UserResponse = /** @class */ (function (_super) {
    __extends(UserResponse, _super);
    function UserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserResponse.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityId" }),
        __metadata("design:type", String)
    ], UserResponse.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], UserResponse.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], UserResponse.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockedOut" }),
        __metadata("design:type", Boolean)
    ], UserResponse.prototype, "lockedOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockedOutTimestamp" }),
        __metadata("design:type", Date)
    ], UserResponse.prototype, "lockedOutTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mfaStatus" }),
        __metadata("design:type", String)
    ], UserResponse.prototype, "mfaStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mfaType" }),
        __metadata("design:type", String)
    ], UserResponse.prototype, "mfaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryContactNumber" }),
        __metadata("design:type", String)
    ], UserResponse.prototype, "primaryContactNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles", elemType: Role }),
        __metadata("design:type", Array)
    ], UserResponse.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryContactNumber" }),
        __metadata("design:type", String)
    ], UserResponse.prototype, "secondaryContactNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smsNumber" }),
        __metadata("design:type", String)
    ], UserResponse.prototype, "smsNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UserResponse.prototype, "status", void 0);
    return UserResponse;
}(SpeakeasyBase));
export { UserResponse };
