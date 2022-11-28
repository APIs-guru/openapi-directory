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
var AssetServiceNow = /** @class */ (function (_super) {
    __extends(AssetServiceNow, _super);
    function AssetServiceNow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses_extra" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "addressesExtra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses_scope" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "addressesScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alive" }),
        __metadata("design:type", Boolean)
    ], AssetServiceNow.prototype, "alive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset_id" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "assetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detected_by" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "detectedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domains" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "domains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_discovered" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "firstDiscovered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hw_product" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "hwProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hw_vendor" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "hwVendor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hw_version" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "hwVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_discovered" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "lastDiscovered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowest_rtt" }),
        __metadata("design:type", Number)
    ], AssetServiceNow.prototype, "lowestRtt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowest_ttl" }),
        __metadata("design:type", Number)
    ], AssetServiceNow.prototype, "lowestTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_manufacturer" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "macManufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_vendors" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "macVendors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macs" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "macs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newest_mac_age" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "newestMacAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_product" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "osProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_vendor" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "osVendor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_version" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_count" }),
        __metadata("design:type", Number)
    ], AssetServiceNow.prototype, "serviceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_count_arp" }),
        __metadata("design:type", Number)
    ], AssetServiceNow.prototype, "serviceCountArp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_count_icmp" }),
        __metadata("design:type", Number)
    ], AssetServiceNow.prototype, "serviceCountIcmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_count_tcp" }),
        __metadata("design:type", Number)
    ], AssetServiceNow.prototype, "serviceCountTcp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_count_udp" }),
        __metadata("design:type", Number)
    ], AssetServiceNow.prototype, "serviceCountUdp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sys_class_name" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "sysClassName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AssetServiceNow.prototype, "type", void 0);
    return AssetServiceNow;
}(SpeakeasyBase));
export { AssetServiceNow };
