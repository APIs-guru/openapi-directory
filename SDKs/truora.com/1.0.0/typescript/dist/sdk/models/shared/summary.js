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
import { NameFound } from "./namefound";
export var SummaryGenderEnum;
(function (SummaryGenderEnum) {
    SummaryGenderEnum["Male"] = "male";
    SummaryGenderEnum["Female"] = "female";
})(SummaryGenderEnum || (SummaryGenderEnum = {}));
export var SummaryIdentityStatusEnum;
(function (SummaryIdentityStatusEnum) {
    SummaryIdentityStatusEnum["Found"] = "found";
    SummaryIdentityStatusEnum["NotFound"] = "not_found";
    SummaryIdentityStatusEnum["Dead"] = "dead";
})(SummaryIdentityStatusEnum || (SummaryIdentityStatusEnum = {}));
// Summary
/**
 * Represents a background check summary
**/
var Summary = /** @class */ (function (_super) {
    __extends(Summary, _super);
    function Summary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_of_birth" }),
        __metadata("design:type", Date)
    ], Summary.prototype, "dateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=death_date" }),
        __metadata("design:type", Date)
    ], Summary.prototype, "deathDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drivers_license" }),
        __metadata("design:type", String)
    ], Summary.prototype, "driversLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], Summary.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identity_status" }),
        __metadata("design:type", String)
    ], Summary.prototype, "identityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names_found", elemType: NameFound }),
        __metadata("design:type", Array)
    ], Summary.prototype, "namesFound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nss" }),
        __metadata("design:type", String)
    ], Summary.prototype, "nss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rfc" }),
        __metadata("design:type", String)
    ], Summary.prototype, "rfc", void 0);
    return Summary;
}(SpeakeasyBase));
export { Summary };
