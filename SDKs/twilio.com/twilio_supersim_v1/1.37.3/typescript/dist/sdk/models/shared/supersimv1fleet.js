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
import { FleetEnumDataMeteringEnum } from "./fleetenumdatameteringenum";
export var SupersimV1FleetIpCommandsMethodEnum;
(function (SupersimV1FleetIpCommandsMethodEnum) {
    SupersimV1FleetIpCommandsMethodEnum["Head"] = "HEAD";
    SupersimV1FleetIpCommandsMethodEnum["Get"] = "GET";
    SupersimV1FleetIpCommandsMethodEnum["Post"] = "POST";
    SupersimV1FleetIpCommandsMethodEnum["Patch"] = "PATCH";
    SupersimV1FleetIpCommandsMethodEnum["Put"] = "PUT";
    SupersimV1FleetIpCommandsMethodEnum["Delete"] = "DELETE";
})(SupersimV1FleetIpCommandsMethodEnum || (SupersimV1FleetIpCommandsMethodEnum = {}));
export var SupersimV1FleetSmsCommandsMethodEnum;
(function (SupersimV1FleetSmsCommandsMethodEnum) {
    SupersimV1FleetSmsCommandsMethodEnum["Head"] = "HEAD";
    SupersimV1FleetSmsCommandsMethodEnum["Get"] = "GET";
    SupersimV1FleetSmsCommandsMethodEnum["Post"] = "POST";
    SupersimV1FleetSmsCommandsMethodEnum["Patch"] = "PATCH";
    SupersimV1FleetSmsCommandsMethodEnum["Put"] = "PUT";
    SupersimV1FleetSmsCommandsMethodEnum["Delete"] = "DELETE";
})(SupersimV1FleetSmsCommandsMethodEnum || (SupersimV1FleetSmsCommandsMethodEnum = {}));
var SupersimV1Fleet = /** @class */ (function (_super) {
    __extends(SupersimV1Fleet, _super);
    function SupersimV1Fleet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], SupersimV1Fleet.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_enabled" }),
        __metadata("design:type", Boolean)
    ], SupersimV1Fleet.prototype, "dataEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_limit" }),
        __metadata("design:type", Number)
    ], SupersimV1Fleet.prototype, "dataLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_metering" }),
        __metadata("design:type", String)
    ], SupersimV1Fleet.prototype, "dataMetering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], SupersimV1Fleet.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], SupersimV1Fleet.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_commands_method" }),
        __metadata("design:type", String)
    ], SupersimV1Fleet.prototype, "ipCommandsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_commands_url" }),
        __metadata("design:type", String)
    ], SupersimV1Fleet.prototype, "ipCommandsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_access_profile_sid" }),
        __metadata("design:type", String)
    ], SupersimV1Fleet.prototype, "networkAccessProfileSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], SupersimV1Fleet.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_commands_enabled" }),
        __metadata("design:type", Boolean)
    ], SupersimV1Fleet.prototype, "smsCommandsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_commands_method" }),
        __metadata("design:type", String)
    ], SupersimV1Fleet.prototype, "smsCommandsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_commands_url" }),
        __metadata("design:type", String)
    ], SupersimV1Fleet.prototype, "smsCommandsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], SupersimV1Fleet.prototype, "uniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SupersimV1Fleet.prototype, "url", void 0);
    return SupersimV1Fleet;
}(SpeakeasyBase));
export { SupersimV1Fleet };
