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
import { SuperFundTypeEnum } from "./superfundtypeenum";
import { ValidationError } from "./validationerror";
var SuperFund = /** @class */ (function (_super) {
    __extends(SuperFund, _super);
    function SuperFund() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ABN" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "abn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountName" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountNumber" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BSB" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "bsb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElectronicServiceAddress" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "electronicServiceAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployerNumber" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "employerNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SPIN" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "spin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuperFundID" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "superFundId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USI" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "usi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" }),
        __metadata("design:type", String)
    ], SuperFund.prototype, "updatedDateUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError }),
        __metadata("design:type", Array)
    ], SuperFund.prototype, "validationErrors", void 0);
    return SuperFund;
}(SpeakeasyBase));
export { SuperFund };
var SuperFundInput = /** @class */ (function (_super) {
    __extends(SuperFundInput, _super);
    function SuperFundInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ABN" }),
        __metadata("design:type", String)
    ], SuperFundInput.prototype, "abn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountName" }),
        __metadata("design:type", String)
    ], SuperFundInput.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountNumber" }),
        __metadata("design:type", String)
    ], SuperFundInput.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BSB" }),
        __metadata("design:type", String)
    ], SuperFundInput.prototype, "bsb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElectronicServiceAddress" }),
        __metadata("design:type", String)
    ], SuperFundInput.prototype, "electronicServiceAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployerNumber" }),
        __metadata("design:type", String)
    ], SuperFundInput.prototype, "employerNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], SuperFundInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SPIN" }),
        __metadata("design:type", String)
    ], SuperFundInput.prototype, "spin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuperFundID" }),
        __metadata("design:type", String)
    ], SuperFundInput.prototype, "superFundId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], SuperFundInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USI" }),
        __metadata("design:type", String)
    ], SuperFundInput.prototype, "usi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError }),
        __metadata("design:type", Array)
    ], SuperFundInput.prototype, "validationErrors", void 0);
    return SuperFundInput;
}(SpeakeasyBase));
export { SuperFundInput };
