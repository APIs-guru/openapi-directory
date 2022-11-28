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
// ProxyV1ServicePhoneNumberCapabilities
/**
 * The capabilities of the phone number
**/
var ProxyV1ServicePhoneNumberCapabilities = /** @class */ (function (_super) {
    __extends(ProxyV1ServicePhoneNumberCapabilities, _super);
    function ProxyV1ServicePhoneNumberCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", Boolean)
    ], ProxyV1ServicePhoneNumberCapabilities.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mms" }),
        __metadata("design:type", Boolean)
    ], ProxyV1ServicePhoneNumberCapabilities.prototype, "mms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms" }),
        __metadata("design:type", Boolean)
    ], ProxyV1ServicePhoneNumberCapabilities.prototype, "sms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice" }),
        __metadata("design:type", Boolean)
    ], ProxyV1ServicePhoneNumberCapabilities.prototype, "voice", void 0);
    return ProxyV1ServicePhoneNumberCapabilities;
}(SpeakeasyBase));
export { ProxyV1ServicePhoneNumberCapabilities };
var ProxyV1ServicePhoneNumber = /** @class */ (function (_super) {
    __extends(ProxyV1ServicePhoneNumber, _super);
    function ProxyV1ServicePhoneNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServicePhoneNumber.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", ProxyV1ServicePhoneNumberCapabilities)
    ], ProxyV1ServicePhoneNumber.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], ProxyV1ServicePhoneNumber.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], ProxyV1ServicePhoneNumber.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ProxyV1ServicePhoneNumber.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in_use" }),
        __metadata("design:type", Number)
    ], ProxyV1ServicePhoneNumber.prototype, "inUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_reserved" }),
        __metadata("design:type", Boolean)
    ], ProxyV1ServicePhoneNumber.prototype, "isReserved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso_country" }),
        __metadata("design:type", String)
    ], ProxyV1ServicePhoneNumber.prototype, "isoCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ProxyV1ServicePhoneNumber.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServicePhoneNumber.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ProxyV1ServicePhoneNumber.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProxyV1ServicePhoneNumber.prototype, "url", void 0);
    return ProxyV1ServicePhoneNumber;
}(SpeakeasyBase));
export { ProxyV1ServicePhoneNumber };
