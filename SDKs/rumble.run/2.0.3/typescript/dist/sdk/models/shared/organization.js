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
var Organization = /** @class */ (function (_super) {
    __extends(Organization, _super);
    function Organization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=asset_count" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "assetCount", void 0);
    __decorate([
        Metadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], Organization.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=deactivated_at" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "deactivatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Organization.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=download_token" }),
        __metadata("design:type", String)
    ], Organization.prototype, "downloadToken", void 0);
    __decorate([
        Metadata({ data: "json, name=download_token_created_at" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "downloadTokenCreatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=expiration_assets_offline" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "expirationAssetsOffline", void 0);
    __decorate([
        Metadata({ data: "json, name=expiration_assets_stale" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "expirationAssetsStale", void 0);
    __decorate([
        Metadata({ data: "json, name=expiration_scans" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "expirationScans", void 0);
    __decorate([
        Metadata({ data: "json, name=export_token" }),
        __metadata("design:type", String)
    ], Organization.prototype, "exportToken", void 0);
    __decorate([
        Metadata({ data: "json, name=export_token_counter" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "exportTokenCounter", void 0);
    __decorate([
        Metadata({ data: "json, name=export_token_created_at" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "exportTokenCreatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=export_token_last_used_at" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "exportTokenLastUsedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=export_token_last_used_by" }),
        __metadata("design:type", String)
    ], Organization.prototype, "exportTokenLastUsedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Organization.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=inactive" }),
        __metadata("design:type", Boolean)
    ], Organization.prototype, "inactive", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Organization.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=parent_id" }),
        __metadata("design:type", String)
    ], Organization.prototype, "parentId", void 0);
    __decorate([
        Metadata({ data: "json, name=permanent" }),
        __metadata("design:type", Boolean)
    ], Organization.prototype, "permanent", void 0);
    __decorate([
        Metadata({ data: "json, name=project" }),
        __metadata("design:type", Boolean)
    ], Organization.prototype, "project", void 0);
    __decorate([
        Metadata({ data: "json, name=service_count" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "serviceCount", void 0);
    __decorate([
        Metadata({ data: "json, name=service_count_arp" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "serviceCountArp", void 0);
    __decorate([
        Metadata({ data: "json, name=service_count_icmp" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "serviceCountIcmp", void 0);
    __decorate([
        Metadata({ data: "json, name=service_count_tcp" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "serviceCountTcp", void 0);
    __decorate([
        Metadata({ data: "json, name=service_count_udp" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "serviceCountUdp", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "updatedAt", void 0);
    return Organization;
}(SpeakeasyBase));
export { Organization };
