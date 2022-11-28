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
var WirelessV1SimDataSession = /** @class */ (function (_super) {
    __extends(WirelessV1SimDataSession, _super);
    function WirelessV1SimDataSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], WirelessV1SimDataSession.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cell_id" }),
        __metadata("design:type", String)
    ], WirelessV1SimDataSession.prototype, "cellId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cell_location_estimate" }),
        __metadata("design:type", Object)
    ], WirelessV1SimDataSession.prototype, "cellLocationEstimate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Date)
    ], WirelessV1SimDataSession.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imei" }),
        __metadata("design:type", String)
    ], WirelessV1SimDataSession.prototype, "imei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], WirelessV1SimDataSession.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator_country" }),
        __metadata("design:type", String)
    ], WirelessV1SimDataSession.prototype, "operatorCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator_mcc" }),
        __metadata("design:type", String)
    ], WirelessV1SimDataSession.prototype, "operatorMcc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator_mnc" }),
        __metadata("design:type", String)
    ], WirelessV1SimDataSession.prototype, "operatorMnc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator_name" }),
        __metadata("design:type", String)
    ], WirelessV1SimDataSession.prototype, "operatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packets_downloaded" }),
        __metadata("design:type", Number)
    ], WirelessV1SimDataSession.prototype, "packetsDownloaded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packets_uploaded" }),
        __metadata("design:type", Number)
    ], WirelessV1SimDataSession.prototype, "packetsUploaded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radio_link" }),
        __metadata("design:type", String)
    ], WirelessV1SimDataSession.prototype, "radioLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], WirelessV1SimDataSession.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sim_sid" }),
        __metadata("design:type", String)
    ], WirelessV1SimDataSession.prototype, "simSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Date)
    ], WirelessV1SimDataSession.prototype, "start", void 0);
    return WirelessV1SimDataSession;
}(SpeakeasyBase));
export { WirelessV1SimDataSession };
