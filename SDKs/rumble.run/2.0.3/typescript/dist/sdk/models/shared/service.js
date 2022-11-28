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
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses" }),
        __metadata("design:type", Array)
    ], Service.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses_extra" }),
        __metadata("design:type", Array)
    ], Service.prototype, "addressesExtra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agent_name" }),
        __metadata("design:type", String)
    ], Service.prototype, "agentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alive" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "alive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], Service.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], Service.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], Service.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials" }),
        __metadata("design:type", Map)
    ], Service.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detected_by" }),
        __metadata("design:type", String)
    ], Service.prototype, "detectedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domains" }),
        __metadata("design:type", Array)
    ], Service.prototype, "domains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_seen" }),
        __metadata("design:type", Number)
    ], Service.prototype, "firstSeen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hw" }),
        __metadata("design:type", String)
    ], Service.prototype, "hw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Service.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_agent_id" }),
        __metadata("design:type", String)
    ], Service.prototype, "lastAgentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_seen" }),
        __metadata("design:type", Number)
    ], Service.prototype, "lastSeen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_task_id" }),
        __metadata("design:type", String)
    ], Service.prototype, "lastTaskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowest_rtt" }),
        __metadata("design:type", Number)
    ], Service.prototype, "lowestRtt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowest_ttl" }),
        __metadata("design:type", Number)
    ], Service.prototype, "lowestTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_vendors" }),
        __metadata("design:type", Array)
    ], Service.prototype, "macVendors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macs" }),
        __metadata("design:type", Array)
    ], Service.prototype, "macs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names" }),
        __metadata("design:type", Array)
    ], Service.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newest_mac" }),
        __metadata("design:type", String)
    ], Service.prototype, "newestMac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newest_mac_age" }),
        __metadata("design:type", Number)
    ], Service.prototype, "newestMacAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newest_mac_vendor" }),
        __metadata("design:type", String)
    ], Service.prototype, "newestMacVendor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=org_name" }),
        __metadata("design:type", String)
    ], Service.prototype, "orgName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_id" }),
        __metadata("design:type", String)
    ], Service.prototype, "organizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os" }),
        __metadata("design:type", String)
    ], Service.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_version" }),
        __metadata("design:type", String)
    ], Service.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rtts" }),
        __metadata("design:type", Map)
    ], Service.prototype, "rtts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_address" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_asset_id" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceAssetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_count" }),
        __metadata("design:type", Number)
    ], Service.prototype, "serviceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_count_arp" }),
        __metadata("design:type", Number)
    ], Service.prototype, "serviceCountArp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_count_icmp" }),
        __metadata("design:type", Number)
    ], Service.prototype, "serviceCountIcmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_count_tcp" }),
        __metadata("design:type", Number)
    ], Service.prototype, "serviceCountTcp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_count_udp" }),
        __metadata("design:type", Number)
    ], Service.prototype, "serviceCountUdp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_created_at" }),
        __metadata("design:type", Number)
    ], Service.prototype, "serviceCreatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_data" }),
        __metadata("design:type", Map)
    ], Service.prototype, "serviceData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_id" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_link" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_port" }),
        __metadata("design:type", String)
    ], Service.prototype, "servicePort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_ports_products" }),
        __metadata("design:type", Array)
    ], Service.prototype, "servicePortsProducts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_ports_protocols" }),
        __metadata("design:type", Array)
    ], Service.prototype, "servicePortsProtocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_ports_tcp" }),
        __metadata("design:type", Array)
    ], Service.prototype, "servicePortsTcp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_ports_udp" }),
        __metadata("design:type", Array)
    ], Service.prototype, "servicePortsUdp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_protocol" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_screenshot_link" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceScreenshotLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_summary" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_transport" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceTransport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_updated_at" }),
        __metadata("design:type", Number)
    ], Service.prototype, "serviceUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_vhost" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceVhost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services" }),
        __metadata("design:type", Map)
    ], Service.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], Service.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_name" }),
        __metadata("design:type", String)
    ], Service.prototype, "siteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], Service.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Service.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Number)
    ], Service.prototype, "updatedAt", void 0);
    return Service;
}(SpeakeasyBase));
export { Service };
