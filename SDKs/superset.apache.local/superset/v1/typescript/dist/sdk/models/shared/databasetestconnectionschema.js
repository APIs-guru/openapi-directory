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
var DatabaseTestConnectionSchema = /** @class */ (function (_super) {
    __extends(DatabaseTestConnectionSchema, _super);
    function DatabaseTestConnectionSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration_method" }),
        __metadata("design:type", Object)
    ], DatabaseTestConnectionSchema.prototype, "configurationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database_name" }),
        __metadata("design:type", String)
    ], DatabaseTestConnectionSchema.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encrypted_extra" }),
        __metadata("design:type", String)
    ], DatabaseTestConnectionSchema.prototype, "encryptedExtra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engine" }),
        __metadata("design:type", String)
    ], DatabaseTestConnectionSchema.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extra" }),
        __metadata("design:type", String)
    ], DatabaseTestConnectionSchema.prototype, "extra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impersonate_user" }),
        __metadata("design:type", Boolean)
    ], DatabaseTestConnectionSchema.prototype, "impersonateUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], DatabaseTestConnectionSchema.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_cert" }),
        __metadata("design:type", String)
    ], DatabaseTestConnectionSchema.prototype, "serverCert", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sqlalchemy_uri" }),
        __metadata("design:type", String)
    ], DatabaseTestConnectionSchema.prototype, "sqlalchemyUri", void 0);
    return DatabaseTestConnectionSchema;
}(SpeakeasyBase));
export { DatabaseTestConnectionSchema };
