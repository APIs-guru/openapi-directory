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
import { RuleSet } from "./ruleset";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
var BaseIpSet = /** @class */ (function (_super) {
    __extends(BaseIpSet, _super);
    function BaseIpSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direct_destination_rules", elemType: RuleSet }),
        __metadata("design:type", Array)
    ], BaseIpSet.prototype, "directDestinationRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direct_source_rules", elemType: RuleSet }),
        __metadata("design:type", Array)
    ], BaseIpSet.prototype, "directSourceRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_id" }),
        __metadata("design:type", String)
    ], BaseIpSet.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], BaseIpSet.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indirect_destination_rules", elemType: RuleSet }),
        __metadata("design:type", Array)
    ], BaseIpSet.prototype, "indirectDestinationRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indirect_source_rules", elemType: RuleSet }),
        __metadata("design:type", Array)
    ], BaseIpSet.prototype, "indirectSourceRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_addresses", elemType: IpV4Address }),
        __metadata("design:type", Array)
    ], BaseIpSet.prototype, "ipAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_numeric_ranges" }),
        __metadata("design:type", Array)
    ], BaseIpSet.prototype, "ipNumericRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_ranges" }),
        __metadata("design:type", Array)
    ], BaseIpSet.prototype, "ipRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BaseIpSet.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_security_groups", elemType: Reference }),
        __metadata("design:type", Array)
    ], BaseIpSet.prototype, "parentSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translated_vm_count" }),
        __metadata("design:type", Number)
    ], BaseIpSet.prototype, "translatedVmCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendor" }),
        __metadata("design:type", String)
    ], BaseIpSet.prototype, "vendor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendor_id" }),
        __metadata("design:type", String)
    ], BaseIpSet.prototype, "vendorId", void 0);
    return BaseIpSet;
}(SpeakeasyBase));
export { BaseIpSet };
