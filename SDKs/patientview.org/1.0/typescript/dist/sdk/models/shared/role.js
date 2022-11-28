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
export var RoleNameEnum;
(function (RoleNameEnum) {
    RoleNameEnum["Patient"] = "PATIENT";
    RoleNameEnum["UnitAdmin"] = "UNIT_ADMIN";
    RoleNameEnum["StaffAdmin"] = "STAFF_ADMIN";
    RoleNameEnum["DiseaseGroupAdmin"] = "DISEASE_GROUP_ADMIN";
    RoleNameEnum["SpecialtyAdmin"] = "SPECIALTY_ADMIN";
    RoleNameEnum["GlobalAdmin"] = "GLOBAL_ADMIN";
    RoleNameEnum["GpAdmin"] = "GP_ADMIN";
    RoleNameEnum["Member"] = "MEMBER";
    RoleNameEnum["Public"] = "PUBLIC";
    RoleNameEnum["UnitAdminApi"] = "UNIT_ADMIN_API";
    RoleNameEnum["Importer"] = "IMPORTER";
})(RoleNameEnum || (RoleNameEnum = {}));
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Role.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Role.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Role.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Role.prototype, "visible", void 0);
    return Role;
}(SpeakeasyBase));
export { Role };
