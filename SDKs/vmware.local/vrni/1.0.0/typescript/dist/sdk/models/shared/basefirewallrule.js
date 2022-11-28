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
import { FirewallActionEnum } from "./firewallactionenum";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { PortRange } from "./portrange";
var BaseFirewallRule = /** @class */ (function (_super) {
    __extends(BaseFirewallRule, _super);
    function BaseFirewallRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], BaseFirewallRule.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_any" }),
        __metadata("design:type", Boolean)
    ], BaseFirewallRule.prototype, "destinationAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_inversion" }),
        __metadata("design:type", Boolean)
    ], BaseFirewallRule.prototype, "destinationInversion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinations", elemType: Reference }),
        __metadata("design:type", Array)
    ], BaseFirewallRule.prototype, "destinations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], BaseFirewallRule.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_id" }),
        __metadata("design:type", String)
    ], BaseFirewallRule.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], BaseFirewallRule.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BaseFirewallRule.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port_ranges", elemType: PortRange }),
        __metadata("design:type", Array)
    ], BaseFirewallRule.prototype, "portRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rule_id" }),
        __metadata("design:type", String)
    ], BaseFirewallRule.prototype, "ruleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=section_id" }),
        __metadata("design:type", String)
    ], BaseFirewallRule.prototype, "sectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=section_name" }),
        __metadata("design:type", String)
    ], BaseFirewallRule.prototype, "sectionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequence_number" }),
        __metadata("design:type", Number)
    ], BaseFirewallRule.prototype, "sequenceNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_any" }),
        __metadata("design:type", Boolean)
    ], BaseFirewallRule.prototype, "serviceAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services", elemType: Reference }),
        __metadata("design:type", Array)
    ], BaseFirewallRule.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_any" }),
        __metadata("design:type", Boolean)
    ], BaseFirewallRule.prototype, "sourceAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_inversion" }),
        __metadata("design:type", Boolean)
    ], BaseFirewallRule.prototype, "sourceInversion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sources", elemType: Reference }),
        __metadata("design:type", Array)
    ], BaseFirewallRule.prototype, "sources", void 0);
    return BaseFirewallRule;
}(SpeakeasyBase));
export { BaseFirewallRule };
