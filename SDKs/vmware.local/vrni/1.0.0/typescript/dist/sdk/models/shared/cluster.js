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
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_id" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsx_manager" }),
        __metadata("design:type", Reference)
    ], Cluster.prototype, "nsxManager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_cpu_cores" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "numCpuCores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_datastores" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "numDatastores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_hosts" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "numHosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_cpus" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "totalCpus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_memory" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "totalMemory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcenter_manager" }),
        __metadata("design:type", Reference)
    ], Cluster.prototype, "vcenterManager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendor_id" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "vendorId", void 0);
    return Cluster;
}(SpeakeasyBase));
export { Cluster };
