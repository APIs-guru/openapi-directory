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
var AbsenceEntitlementValueAttributes = /** @class */ (function (_super) {
    __extends(AbsenceEntitlementValueAttributes, _super);
    function AbsenceEntitlementValueAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entitlement" }),
        __metadata("design:type", Number)
    ], AbsenceEntitlementValueAttributes.prototype, "entitlement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AbsenceEntitlementValueAttributes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AbsenceEntitlementValueAttributes.prototype, "name", void 0);
    return AbsenceEntitlementValueAttributes;
}(SpeakeasyBase));
export { AbsenceEntitlementValueAttributes };
export var AbsenceEntitlementValueTypeEnum;
(function (AbsenceEntitlementValueTypeEnum) {
    AbsenceEntitlementValueTypeEnum["TimeOffType"] = "TimeOffType";
})(AbsenceEntitlementValueTypeEnum || (AbsenceEntitlementValueTypeEnum = {}));
var AbsenceEntitlementValue = /** @class */ (function (_super) {
    __extends(AbsenceEntitlementValue, _super);
    function AbsenceEntitlementValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", AbsenceEntitlementValueAttributes)
    ], AbsenceEntitlementValue.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AbsenceEntitlementValue.prototype, "type", void 0);
    return AbsenceEntitlementValue;
}(SpeakeasyBase));
export { AbsenceEntitlementValue };
var AbsenceEntitlement = /** @class */ (function (_super) {
    __extends(AbsenceEntitlement, _super);
    function AbsenceEntitlement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], AbsenceEntitlement.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value", elemType: AbsenceEntitlementValue }),
        __metadata("design:type", Array)
    ], AbsenceEntitlement.prototype, "value", void 0);
    return AbsenceEntitlement;
}(SpeakeasyBase));
export { AbsenceEntitlement };
