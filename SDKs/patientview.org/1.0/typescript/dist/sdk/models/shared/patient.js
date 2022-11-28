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
import { Code } from "./code";
import { FhirAllergy } from "./fhirallergy";
import { FhirCondition } from "./fhircondition";
import { FhirEncounter } from "./fhirencounter";
import { FhirObservation } from "./fhirobservation";
import { FhirPatient } from "./fhirpatient";
import { FhirPractitioner } from "./fhirpractitioner";
import { Group } from "./group";
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: Code }),
        __metadata("design:type", Array)
    ], Patient.prototype, "diagnosisCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: FhirAllergy }),
        __metadata("design:type", Array)
    ], Patient.prototype, "fhirAllergies", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: FhirCondition }),
        __metadata("design:type", Array)
    ], Patient.prototype, "fhirConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: FhirEncounter }),
        __metadata("design:type", Array)
    ], Patient.prototype, "fhirEncounters", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: FhirObservation }),
        __metadata("design:type", Array)
    ], Patient.prototype, "fhirObservations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FhirPatient)
    ], Patient.prototype, "fhirPatient", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: FhirPractitioner }),
        __metadata("design:type", Array)
    ], Patient.prototype, "fhirPractitioners", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Group)
    ], Patient.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Patient.prototype, "id", void 0);
    return Patient;
}(SpeakeasyBase));
export { Patient };
