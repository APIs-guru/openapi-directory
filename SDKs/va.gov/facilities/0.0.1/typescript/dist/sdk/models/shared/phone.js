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
var Phone = /** @class */ (function (_super) {
    __extends(Phone, _super);
    function Phone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=after_hours" }),
        __metadata("design:type", String)
    ], Phone.prototype, "afterHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enrollment_coordinator" }),
        __metadata("design:type", String)
    ], Phone.prototype, "enrollmentCoordinator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], Phone.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=main" }),
        __metadata("design:type", String)
    ], Phone.prototype, "main", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mental_health_clinic" }),
        __metadata("design:type", String)
    ], Phone.prototype, "mentalHealthClinic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patient_advocate" }),
        __metadata("design:type", String)
    ], Phone.prototype, "patientAdvocate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pharmacy" }),
        __metadata("design:type", String)
    ], Phone.prototype, "pharmacy", void 0);
    return Phone;
}(SpeakeasyBase));
export { Phone };
