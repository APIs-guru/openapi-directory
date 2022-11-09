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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var Asset = /** @class */ (function (_super) {
    __extends(Asset, _super);
    function Asset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=addresses" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "addresses", void 0);
    __decorate([
        Metadata({ data: "json, name=addresses_extra" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "addressesExtra", void 0);
    __decorate([
        Metadata({ data: "json, name=agent_name" }),
        __metadata("design:type", String)
    ], Asset.prototype, "agentName", void 0);
    __decorate([
        Metadata({ data: "json, name=alive" }),
        __metadata("design:type", Boolean)
    ], Asset.prototype, "alive", void 0);
    __decorate([
        Metadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], Asset.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], Asset.prototype, "comments", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=credentials" }),
        __metadata("design:type", Map)
    ], Asset.prototype, "credentials", void 0);
    __decorate([
        Metadata({ data: "json, name=detected_by" }),
        __metadata("design:type", String)
    ], Asset.prototype, "detectedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=domains" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "domains", void 0);
    __decorate([
        Metadata({ data: "json, name=first_seen" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "firstSeen", void 0);
    __decorate([
        Metadata({ data: "json, name=hw" }),
        __metadata("design:type", String)
    ], Asset.prototype, "hw", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Asset.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=last_agent_id" }),
        __metadata("design:type", String)
    ], Asset.prototype, "lastAgentId", void 0);
    __decorate([
        Metadata({ data: "json, name=last_seen" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "lastSeen", void 0);
    __decorate([
        Metadata({ data: "json, name=last_task_id" }),
        __metadata("design:type", String)
    ], Asset.prototype, "lastTaskId", void 0);
    __decorate([
        Metadata({ data: "json, name=lowest_rtt" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "lowestRtt", void 0);
    __decorate([
        Metadata({ data: "json, name=lowest_ttl" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "lowestTtl", void 0);
    __decorate([
        Metadata({ data: "json, name=mac_vendors" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "macVendors", void 0);
    __decorate([
        Metadata({ data: "json, name=macs" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "macs", void 0);
    __decorate([
        Metadata({ data: "json, name=names" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "names", void 0);
    __decorate([
        Metadata({ data: "json, name=newest_mac" }),
        __metadata("design:type", String)
    ], Asset.prototype, "newestMac", void 0);
    __decorate([
        Metadata({ data: "json, name=newest_mac_age" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "newestMacAge", void 0);
    __decorate([
        Metadata({ data: "json, name=newest_mac_vendor" }),
        __metadata("design:type", String)
    ], Asset.prototype, "newestMacVendor", void 0);
    __decorate([
        Metadata({ data: "json, name=org_name" }),
        __metadata("design:type", String)
    ], Asset.prototype, "orgName", void 0);
    __decorate([
        Metadata({ data: "json, name=organization_id" }),
        __metadata("design:type", String)
    ], Asset.prototype, "organizationId", void 0);
    __decorate([
        Metadata({ data: "json, name=os" }),
        __metadata("design:type", String)
    ], Asset.prototype, "os", void 0);
    __decorate([
        Metadata({ data: "json, name=os_version" }),
        __metadata("design:type", String)
    ], Asset.prototype, "osVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=rtts" }),
        __metadata("design:type", Map)
    ], Asset.prototype, "rtts", void 0);
    __decorate([
        Metadata({ data: "json, name=service_count" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "serviceCount", void 0);
    __decorate([
        Metadata({ data: "json, name=service_count_arp" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "serviceCountArp", void 0);
    __decorate([
        Metadata({ data: "json, name=service_count_icmp" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "serviceCountIcmp", void 0);
    __decorate([
        Metadata({ data: "json, name=service_count_tcp" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "serviceCountTcp", void 0);
    __decorate([
        Metadata({ data: "json, name=service_count_udp" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "serviceCountUdp", void 0);
    __decorate([
        Metadata({ data: "json, name=service_ports_products" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "servicePortsProducts", void 0);
    __decorate([
        Metadata({ data: "json, name=service_ports_protocols" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "servicePortsProtocols", void 0);
    __decorate([
        Metadata({ data: "json, name=service_ports_tcp" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "servicePortsTcp", void 0);
    __decorate([
        Metadata({ data: "json, name=service_ports_udp" }),
        __metadata("design:type", Array)
    ], Asset.prototype, "servicePortsUdp", void 0);
    __decorate([
        Metadata({ data: "json, name=services" }),
        __metadata("design:type", Map)
    ], Asset.prototype, "services", void 0);
    __decorate([
        Metadata({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], Asset.prototype, "siteId", void 0);
    __decorate([
        Metadata({ data: "json, name=site_name" }),
        __metadata("design:type", String)
    ], Asset.prototype, "siteName", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], Asset.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Asset.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Number)
    ], Asset.prototype, "updatedAt", void 0);
    return Asset;
}(SpeakeasyBase));
export { Asset };
