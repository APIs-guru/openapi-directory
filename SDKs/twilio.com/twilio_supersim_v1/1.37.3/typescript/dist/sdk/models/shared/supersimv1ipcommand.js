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
import { IpCommandEnumDirectionEnum } from "./ipcommandenumdirectionenum";
import { IpCommandEnumPayloadTypeEnum } from "./ipcommandenumpayloadtypeenum";
import { IpCommandEnumStatusEnum } from "./ipcommandenumstatusenum";
var SupersimV1IpCommand = /** @class */ (function (_super) {
    __extends(SupersimV1IpCommand, _super);
    function SupersimV1IpCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], SupersimV1IpCommand.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], SupersimV1IpCommand.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], SupersimV1IpCommand.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_ip" }),
        __metadata("design:type", String)
    ], SupersimV1IpCommand.prototype, "deviceIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_port" }),
        __metadata("design:type", Number)
    ], SupersimV1IpCommand.prototype, "devicePort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], SupersimV1IpCommand.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", String)
    ], SupersimV1IpCommand.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload_type" }),
        __metadata("design:type", String)
    ], SupersimV1IpCommand.prototype, "payloadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], SupersimV1IpCommand.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sim_iccid" }),
        __metadata("design:type", String)
    ], SupersimV1IpCommand.prototype, "simIccid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sim_sid" }),
        __metadata("design:type", String)
    ], SupersimV1IpCommand.prototype, "simSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SupersimV1IpCommand.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SupersimV1IpCommand.prototype, "url", void 0);
    return SupersimV1IpCommand;
}(SpeakeasyBase));
export { SupersimV1IpCommand };
