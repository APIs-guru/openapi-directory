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
var CallLog = /** @class */ (function (_super) {
    __extends(CallLog, _super);
    function CallLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=charge" }),
        __metadata("design:type", Number)
    ], CallLog.prototype, "charge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_device_name" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "destinationDeviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_extension" }),
        __metadata("design:type", Number)
    ], CallLog.prototype, "destinationExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_sip_id" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "destinationSipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_user" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "destinationUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_user_full_name" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "destinationUserFullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in_network" }),
        __metadata("design:type", Boolean)
    ], CallLog.prototype, "inNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=international" }),
        __metadata("design:type", Boolean)
    ], CallLog.prototype, "international", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], CallLog.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], CallLog.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recorded" }),
        __metadata("design:type", Boolean)
    ], CallLog.prototype, "recorded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_device_name" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "sourceDeviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_extension" }),
        __metadata("design:type", Number)
    ], CallLog.prototype, "sourceExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_sip_id" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "sourceSipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_user" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "sourceUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_user_full_name" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "sourceUserFullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CallLog.prototype, "to", void 0);
    return CallLog;
}(SpeakeasyBase));
export { CallLog };
