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
var Wireless = /** @class */ (function (_super) {
    __extends(Wireless, _super);
    function Wireless() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agent_name" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "agentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "authentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bssid" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "bssid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], Wireless.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], Wireless.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryption" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "encryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=essid" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "essid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=family" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "family", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interface" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "interface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_agent_id" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "lastAgentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_seen" }),
        __metadata("design:type", Number)
    ], Wireless.prototype, "lastSeen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_task_id" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "lastTaskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=org_name" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "orgName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_id" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "organizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signal" }),
        __metadata("design:type", Number)
    ], Wireless.prototype, "signal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_name" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "siteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendor" }),
        __metadata("design:type", String)
    ], Wireless.prototype, "vendor", void 0);
    return Wireless;
}(SpeakeasyBase));
export { Wireless };
