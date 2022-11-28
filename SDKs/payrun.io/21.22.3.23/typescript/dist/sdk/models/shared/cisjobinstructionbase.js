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
// CisJobInstructionBaseCisJobInstructionBaseEmployer
/**
 * The cis job instruction bases' employer
**/
var CisJobInstructionBaseCisJobInstructionBaseEmployer = /** @class */ (function (_super) {
    __extends(CisJobInstructionBaseCisJobInstructionBaseEmployer, _super);
    function CisJobInstructionBaseCisJobInstructionBaseEmployer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], CisJobInstructionBaseCisJobInstructionBaseEmployer.prototype, "atHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], CisJobInstructionBaseCisJobInstructionBaseEmployer.prototype, "atRel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], CisJobInstructionBaseCisJobInstructionBaseEmployer.prototype, "atTitle", void 0);
    return CisJobInstructionBaseCisJobInstructionBaseEmployer;
}(SpeakeasyBase));
export { CisJobInstructionBaseCisJobInstructionBaseEmployer };
// CisJobInstructionBaseCisJobInstructionBaseSubContractor
/**
 * The cis job instruction bases' sub contractors
**/
var CisJobInstructionBaseCisJobInstructionBaseSubContractor = /** @class */ (function (_super) {
    __extends(CisJobInstructionBaseCisJobInstructionBaseSubContractor, _super);
    function CisJobInstructionBaseCisJobInstructionBaseSubContractor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubContractor" }),
        __metadata("design:type", Array)
    ], CisJobInstructionBaseCisJobInstructionBaseSubContractor.prototype, "subContractor", void 0);
    return CisJobInstructionBaseCisJobInstructionBaseSubContractor;
}(SpeakeasyBase));
export { CisJobInstructionBaseCisJobInstructionBaseSubContractor };
var CisJobInstructionBaseCisJobInstructionBase = /** @class */ (function (_super) {
    __extends(CisJobInstructionBaseCisJobInstructionBase, _super);
    function CisJobInstructionBaseCisJobInstructionBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Employer" }),
        __metadata("design:type", CisJobInstructionBaseCisJobInstructionBaseEmployer)
    ], CisJobInstructionBaseCisJobInstructionBase.prototype, "employer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HoldingDate" }),
        __metadata("design:type", Date)
    ], CisJobInstructionBaseCisJobInstructionBase.prototype, "holdingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubContractors" }),
        __metadata("design:type", CisJobInstructionBaseCisJobInstructionBaseSubContractor)
    ], CisJobInstructionBaseCisJobInstructionBase.prototype, "subContractors", void 0);
    return CisJobInstructionBaseCisJobInstructionBase;
}(SpeakeasyBase));
export { CisJobInstructionBaseCisJobInstructionBase };
var CisJobInstructionBase = /** @class */ (function (_super) {
    __extends(CisJobInstructionBase, _super);
    function CisJobInstructionBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CisJobInstructionBase" }),
        __metadata("design:type", CisJobInstructionBaseCisJobInstructionBase)
    ], CisJobInstructionBase.prototype, "cisJobInstructionBase", void 0);
    return CisJobInstructionBase;
}(SpeakeasyBase));
export { CisJobInstructionBase };
