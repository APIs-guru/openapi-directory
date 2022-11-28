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
import { EntityTypeEnum } from "./entitytypeenum";
var Host = /** @class */ (function (_super) {
    __extends(Host, _super);
    function Host() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cluster" }),
        __metadata("design:type", Reference)
    ], Host.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_state" }),
        __metadata("design:type", String)
    ], Host.prototype, "connectionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datastores", elemType: Reference }),
        __metadata("design:type", Array)
    ], Host.prototype, "datastores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_id" }),
        __metadata("design:type", String)
    ], Host.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], Host.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenance_mode" }),
        __metadata("design:type", String)
    ], Host.prototype, "maintenanceMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Host.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsx_manager" }),
        __metadata("design:type", Reference)
    ], Host.prototype, "nsxManager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_tag" }),
        __metadata("design:type", String)
    ], Host.prototype, "serviceTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcenter_manager" }),
        __metadata("design:type", Reference)
    ], Host.prototype, "vcenterManager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendor_id" }),
        __metadata("design:type", String)
    ], Host.prototype, "vendorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vm_count" }),
        __metadata("design:type", Number)
    ], Host.prototype, "vmCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmknics", elemType: Reference }),
        __metadata("design:type", Array)
    ], Host.prototype, "vmknics", void 0);
    return Host;
}(SpeakeasyBase));
export { Host };
