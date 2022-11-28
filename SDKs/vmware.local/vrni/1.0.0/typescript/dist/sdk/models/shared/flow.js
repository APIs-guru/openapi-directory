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
import { Reference } from "./reference";
import { IpV4Address } from "./ipv4address";
import { EntityTypeEnum } from "./entitytypeenum";
import { FirewallActionEnum } from "./firewallactionenum";
import { PortRange } from "./portrange";
import { ProtocolEnum } from "./protocolenum";
import { FlowTrafficTypeEnum } from "./flowtraffictypeenum";
var Flow = /** @class */ (function (_super) {
    __extends(Flow, _super);
    function Flow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_cluster" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "destinationCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_datacenter" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "destinationDatacenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_folders", elemType: Reference }),
        __metadata("design:type", Array)
    ], Flow.prototype, "destinationFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_host" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "destinationHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_ip" }),
        __metadata("design:type", IpV4Address)
    ], Flow.prototype, "destinationIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_ip_sets", elemType: Reference }),
        __metadata("design:type", Array)
    ], Flow.prototype, "destinationIpSets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_l2_network" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "destinationL2Network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_resource_pool" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "destinationResourcePool", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_security_groups", elemType: Reference }),
        __metadata("design:type", Array)
    ], Flow.prototype, "destinationSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_security_tags", elemType: Reference }),
        __metadata("design:type", Array)
    ], Flow.prototype, "destinationSecurityTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_vm" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "destinationVm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_vm_tags" }),
        __metadata("design:type", Array)
    ], Flow.prototype, "destinationVmTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_vnic" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "destinationVnic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_vpc" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "destinationVpc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_id" }),
        __metadata("design:type", String)
    ], Flow.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], Flow.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewall_action" }),
        __metadata("design:type", String)
    ], Flow.prototype, "firewallAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flow_tag" }),
        __metadata("design:type", Array)
    ], Flow.prototype, "flowTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Flow.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", PortRange)
    ], Flow.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], Flow.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_cluster" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "sourceCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_datacenter" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "sourceDatacenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_folders", elemType: Reference }),
        __metadata("design:type", Array)
    ], Flow.prototype, "sourceFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_host" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "sourceHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_ip" }),
        __metadata("design:type", IpV4Address)
    ], Flow.prototype, "sourceIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_ip_sets", elemType: Reference }),
        __metadata("design:type", Array)
    ], Flow.prototype, "sourceIpSets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_l2_network" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "sourceL2Network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_resource_pool" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "sourceResourcePool", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_security_groups", elemType: Reference }),
        __metadata("design:type", Array)
    ], Flow.prototype, "sourceSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_security_tags", elemType: Reference }),
        __metadata("design:type", Array)
    ], Flow.prototype, "sourceSecurityTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_vm" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "sourceVm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_vm_tags" }),
        __metadata("design:type", Array)
    ], Flow.prototype, "sourceVmTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_vnic" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "sourceVnic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_vpc" }),
        __metadata("design:type", Reference)
    ], Flow.prototype, "sourceVpc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traffic_type" }),
        __metadata("design:type", String)
    ], Flow.prototype, "trafficType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=within_host" }),
        __metadata("design:type", Boolean)
    ], Flow.prototype, "withinHost", void 0);
    return Flow;
}(SpeakeasyBase));
export { Flow };
