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
var FhirPractitioner = /** @class */ (function (_super) {
    __extends(FhirPractitioner, _super);
    function FhirPractitioner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], FhirPractitioner.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], FhirPractitioner.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address3" }),
        __metadata("design:type", String)
    ], FhirPractitioner.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address4" }),
        __metadata("design:type", String)
    ], FhirPractitioner.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowInviteGp" }),
        __metadata("design:type", Boolean)
    ], FhirPractitioner.prototype, "allowInviteGp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contacts", elemType: FhirContact }),
        __metadata("design:type", Array)
    ], FhirPractitioner.prototype, "contacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], FhirPractitioner.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupCode" }),
        __metadata("design:type", String)
    ], FhirPractitioner.prototype, "groupCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], FhirPractitioner.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inviteDate" }),
        __metadata("design:type", Date)
    ], FhirPractitioner.prototype, "inviteDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FhirPractitioner.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postcode" }),
        __metadata("design:type", String)
    ], FhirPractitioner.prototype, "postcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], FhirPractitioner.prototype, "role", void 0);
    return FhirPractitioner;
}(SpeakeasyBase));
export { FhirPractitioner };
