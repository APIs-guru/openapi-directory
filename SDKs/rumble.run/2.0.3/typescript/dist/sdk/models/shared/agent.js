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
var Agent = /** @class */ (function (_super) {
    __extends(Agent, _super);
    function Agent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arch" }),
        __metadata("design:type", String)
    ], Agent.prototype, "arch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], Agent.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connected" }),
        __metadata("design:type", Boolean)
    ], Agent.prototype, "connected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], Agent.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deactivated_at" }),
        __metadata("design:type", Number)
    ], Agent.prototype, "deactivatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_ip" }),
        __metadata("design:type", String)
    ], Agent.prototype, "externalIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host_id" }),
        __metadata("design:type", String)
    ], Agent.prototype, "hostId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hub_id" }),
        __metadata("design:type", String)
    ], Agent.prototype, "hubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Agent.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inactive" }),
        __metadata("design:type", Boolean)
    ], Agent.prototype, "inactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internal_ip" }),
        __metadata("design:type", String)
    ], Agent.prototype, "internalIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_checkin" }),
        __metadata("design:type", Number)
    ], Agent.prototype, "lastCheckin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Agent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_id" }),
        __metadata("design:type", String)
    ], Agent.prototype, "organizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os" }),
        __metadata("design:type", String)
    ], Agent.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], Agent.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=system_info" }),
        __metadata("design:type", Map)
    ], Agent.prototype, "systemInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Number)
    ], Agent.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Agent.prototype, "version", void 0);
    return Agent;
}(SpeakeasyBase));
export { Agent };
