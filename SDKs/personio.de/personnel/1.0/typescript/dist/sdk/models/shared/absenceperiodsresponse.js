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
var AbsencePeriodsResponseDataAttributesCertificate = /** @class */ (function (_super) {
    __extends(AbsencePeriodsResponseDataAttributesCertificate, _super);
    function AbsencePeriodsResponseDataAttributesCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseDataAttributesCertificate.prototype, "status", void 0);
    return AbsencePeriodsResponseDataAttributesCertificate;
}(SpeakeasyBase));
export { AbsencePeriodsResponseDataAttributesCertificate };
var AbsencePeriodsResponseDataAttributesEmployeeAttributes = /** @class */ (function (_super) {
    __extends(AbsencePeriodsResponseDataAttributesEmployeeAttributes, _super);
    function AbsencePeriodsResponseDataAttributesEmployeeAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseDataAttributesEmployeeAttributes.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseDataAttributesEmployeeAttributes.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AbsencePeriodsResponseDataAttributesEmployeeAttributes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseDataAttributesEmployeeAttributes.prototype, "lastName", void 0);
    return AbsencePeriodsResponseDataAttributesEmployeeAttributes;
}(SpeakeasyBase));
export { AbsencePeriodsResponseDataAttributesEmployeeAttributes };
var AbsencePeriodsResponseDataAttributesEmployee = /** @class */ (function (_super) {
    __extends(AbsencePeriodsResponseDataAttributesEmployee, _super);
    function AbsencePeriodsResponseDataAttributesEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: AbsencePeriodsResponseDataAttributesEmployeeAttributes }),
        __metadata("design:type", Array)
    ], AbsencePeriodsResponseDataAttributesEmployee.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseDataAttributesEmployee.prototype, "type", void 0);
    return AbsencePeriodsResponseDataAttributesEmployee;
}(SpeakeasyBase));
export { AbsencePeriodsResponseDataAttributesEmployee };
var AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes = /** @class */ (function (_super) {
    __extends(AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes, _super);
    function AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes.prototype, "name", void 0);
    return AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes;
}(SpeakeasyBase));
export { AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes };
var AbsencePeriodsResponseDataAttributesTimeOffType = /** @class */ (function (_super) {
    __extends(AbsencePeriodsResponseDataAttributesTimeOffType, _super);
    function AbsencePeriodsResponseDataAttributesTimeOffType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes }),
        __metadata("design:type", Array)
    ], AbsencePeriodsResponseDataAttributesTimeOffType.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseDataAttributesTimeOffType.prototype, "type", void 0);
    return AbsencePeriodsResponseDataAttributesTimeOffType;
}(SpeakeasyBase));
export { AbsencePeriodsResponseDataAttributesTimeOffType };
var AbsencePeriodsResponseDataAttributes = /** @class */ (function (_super) {
    __extends(AbsencePeriodsResponseDataAttributes, _super);
    function AbsencePeriodsResponseDataAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", AbsencePeriodsResponseDataAttributesCertificate)
    ], AbsencePeriodsResponseDataAttributes.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseDataAttributes.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=days_count" }),
        __metadata("design:type", Number)
    ], AbsencePeriodsResponseDataAttributes.prototype, "daysCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee" }),
        __metadata("design:type", AbsencePeriodsResponseDataAttributesEmployee)
    ], AbsencePeriodsResponseDataAttributes.prototype, "employee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseDataAttributes.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=half_day_end" }),
        __metadata("design:type", Number)
    ], AbsencePeriodsResponseDataAttributes.prototype, "halfDayEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=half_day_start" }),
        __metadata("design:type", Number)
    ], AbsencePeriodsResponseDataAttributes.prototype, "halfDayStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AbsencePeriodsResponseDataAttributes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseDataAttributes.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseDataAttributes.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_off_type" }),
        __metadata("design:type", AbsencePeriodsResponseDataAttributesTimeOffType)
    ], AbsencePeriodsResponseDataAttributes.prototype, "timeOffType", void 0);
    return AbsencePeriodsResponseDataAttributes;
}(SpeakeasyBase));
export { AbsencePeriodsResponseDataAttributes };
var AbsencePeriodsResponseData = /** @class */ (function (_super) {
    __extends(AbsencePeriodsResponseData, _super);
    function AbsencePeriodsResponseData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: AbsencePeriodsResponseDataAttributes }),
        __metadata("design:type", Array)
    ], AbsencePeriodsResponseData.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AbsencePeriodsResponseData.prototype, "type", void 0);
    return AbsencePeriodsResponseData;
}(SpeakeasyBase));
export { AbsencePeriodsResponseData };
var AbsencePeriodsResponse = /** @class */ (function (_super) {
    __extends(AbsencePeriodsResponse, _super);
    function AbsencePeriodsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", AbsencePeriodsResponseData)
    ], AbsencePeriodsResponse.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], AbsencePeriodsResponse.prototype, "success", void 0);
    return AbsencePeriodsResponse;
}(SpeakeasyBase));
export { AbsencePeriodsResponse };
