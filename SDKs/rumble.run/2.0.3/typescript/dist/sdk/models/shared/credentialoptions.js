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
export var CredentialOptionsTypeEnum;
(function (CredentialOptionsTypeEnum) {
    CredentialOptionsTypeEnum["MiradoreApiKeyV1"] = "miradore_api_key_v1";
    CredentialOptionsTypeEnum["AwsAccessSecret"] = "aws_access_secret";
})(CredentialOptionsTypeEnum || (CredentialOptionsTypeEnum = {}));
var CredentialOptions = /** @class */ (function (_super) {
    __extends(CredentialOptions, _super);
    function CredentialOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acl" }),
        __metadata("design:type", Map)
    ], CredentialOptions.prototype, "acl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cidrs" }),
        __metadata("design:type", String)
    ], CredentialOptions.prototype, "cidrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=global" }),
        __metadata("design:type", Boolean)
    ], CredentialOptions.prototype, "global", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CredentialOptions.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", Map)
    ], CredentialOptions.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CredentialOptions.prototype, "type", void 0);
    return CredentialOptions;
}(SpeakeasyBase));
export { CredentialOptions };
