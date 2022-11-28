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
import { LookupType } from "./lookuptype";
export var ContactPointTypeValueEnum;
(function (ContactPointTypeValueEnum) {
    ContactPointTypeValueEnum["UnitWebAddress"] = "UNIT_WEB_ADDRESS";
    ContactPointTypeValueEnum["TrustWebAddress"] = "TRUST_WEB_ADDRESS";
    ContactPointTypeValueEnum["PvAdminName"] = "PV_ADMIN_NAME";
    ContactPointTypeValueEnum["PvAdminPhone"] = "PV_ADMIN_PHONE";
    ContactPointTypeValueEnum["PvAdminEmail"] = "PV_ADMIN_EMAIL";
    ContactPointTypeValueEnum["UnitEnquiriesPhone"] = "UNIT_ENQUIRIES_PHONE";
    ContactPointTypeValueEnum["UnitEnquiriesEmail"] = "UNIT_ENQUIRIES_EMAIL";
    ContactPointTypeValueEnum["AppointmentPhone"] = "APPOINTMENT_PHONE";
    ContactPointTypeValueEnum["AppointmentEmail"] = "APPOINTMENT_EMAIL";
    ContactPointTypeValueEnum["OutOfHoursInfo"] = "OUT_OF_HOURS_INFO";
})(ContactPointTypeValueEnum || (ContactPointTypeValueEnum = {}));
var ContactPointType = /** @class */ (function (_super) {
    __extends(ContactPointType, _super);
    function ContactPointType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ContactPointType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ContactPointType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lookupType" }),
        __metadata("design:type", LookupType)
    ], ContactPointType.prototype, "lookupType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ContactPointType.prototype, "value", void 0);
    return ContactPointType;
}(SpeakeasyBase));
export { ContactPointType };
