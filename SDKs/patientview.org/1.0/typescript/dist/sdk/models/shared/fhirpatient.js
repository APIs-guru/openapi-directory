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
import { FhirContact } from "./fhircontact";
import { Group } from "./group";
import { FhirIdentifier } from "./fhiridentifier";
import { FhirPractitioner } from "./fhirpractitioner";
var FhirPatient = /** @class */ (function (_super) {
    __extends(FhirPatient, _super);
    function FhirPatient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], FhirPatient.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], FhirPatient.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address3" }),
        __metadata("design:type", String)
    ], FhirPatient.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address4" }),
        __metadata("design:type", String)
    ], FhirPatient.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contacts", elemType: FhirContact }),
        __metadata("design:type", Array)
    ], FhirPatient.prototype, "contacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateOfBirth" }),
        __metadata("design:type", Date)
    ], FhirPatient.prototype, "dateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateOfBirthNoTime" }),
        __metadata("design:type", String)
    ], FhirPatient.prototype, "dateOfBirthNoTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forename" }),
        __metadata("design:type", String)
    ], FhirPatient.prototype, "forename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], FhirPatient.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", Group)
    ], FhirPatient.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupCode" }),
        __metadata("design:type", String)
    ], FhirPatient.prototype, "groupCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], FhirPatient.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifiers", elemType: FhirIdentifier }),
        __metadata("design:type", Array)
    ], FhirPatient.prototype, "identifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postcode" }),
        __metadata("design:type", String)
    ], FhirPatient.prototype, "postcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=practitioners", elemType: FhirPractitioner }),
        __metadata("design:type", Array)
    ], FhirPatient.prototype, "practitioners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surname" }),
        __metadata("design:type", String)
    ], FhirPatient.prototype, "surname", void 0);
    return FhirPatient;
}(SpeakeasyBase));
export { FhirPatient };
