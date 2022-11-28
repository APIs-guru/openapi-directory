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
import { Snmp2cConfig } from "./snmp2cconfig";
import { Snmp3Config } from "./snmp3config";
export var SnmpConfigSnmpVersionEnum;
(function (SnmpConfigSnmpVersionEnum) {
    SnmpConfigSnmpVersionEnum["V2c"] = "v2c";
    SnmpConfigSnmpVersionEnum["V3"] = "v3";
})(SnmpConfigSnmpVersionEnum || (SnmpConfigSnmpVersionEnum = {}));
var SnmpConfig = /** @class */ (function (_super) {
    __extends(SnmpConfig, _super);
    function SnmpConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config_snmp_2c" }),
        __metadata("design:type", Snmp2cConfig)
    ], SnmpConfig.prototype, "configSnmp2c", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config_snmp_3" }),
        __metadata("design:type", Snmp3Config)
    ], SnmpConfig.prototype, "configSnmp3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snmp_enabled" }),
        __metadata("design:type", Boolean)
    ], SnmpConfig.prototype, "snmpEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snmp_version" }),
        __metadata("design:type", String)
    ], SnmpConfig.prototype, "snmpVersion", void 0);
    return SnmpConfig;
}(SpeakeasyBase));
export { SnmpConfig };
