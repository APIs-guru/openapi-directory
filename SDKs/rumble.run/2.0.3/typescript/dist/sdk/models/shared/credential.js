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
export var CredentialTypeEnum;
(function (CredentialTypeEnum) {
    CredentialTypeEnum["MiradoreApiKeyV1"] = "miradore_api_key_v1";
    CredentialTypeEnum["AwsAccessSecret"] = "aws_access_secret";
})(CredentialTypeEnum || (CredentialTypeEnum = {}));
var Credential = /** @class */ (function (_super) {
    __extends(Credential, _super);
    function Credential() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acl" }),
        __metadata("design:type", Map)
    ], Credential.prototype, "acl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cidrs" }),
        __metadata("design:type", Array)
    ], Credential.prototype, "cidrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], Credential.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], Credential.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by_email" }),
        __metadata("design:type", String)
    ], Credential.prototype, "createdByEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by_id" }),
        __metadata("design:type", String)
    ], Credential.prototype, "createdById", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=global" }),
        __metadata("design:type", Boolean)
    ], Credential.prototype, "global", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Credential.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_used_at" }),
        __metadata("design:type", Number)
    ], Credential.prototype, "lastUsedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_used_by_id" }),
        __metadata("design:type", String)
    ], Credential.prototype, "lastUsedById", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Credential.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Credential.prototype, "type", void 0);
    return Credential;
}(SpeakeasyBase));
export { Credential };
