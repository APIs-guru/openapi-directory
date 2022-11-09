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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var LookupsV2PhoneNumber = /** @class */ (function (_super) {
    __extends(LookupsV2PhoneNumber, _super);
    function LookupsV2PhoneNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=call_forwarding" }),
        __metadata("design:type", Object)
    ], LookupsV2PhoneNumber.prototype, "callForwarding", void 0);
    __decorate([
        Metadata({ data: "json, name=caller_name" }),
        __metadata("design:type", Object)
    ], LookupsV2PhoneNumber.prototype, "callerName", void 0);
    __decorate([
        Metadata({ data: "json, name=calling_country_code" }),
        __metadata("design:type", String)
    ], LookupsV2PhoneNumber.prototype, "callingCountryCode", void 0);
    __decorate([
        Metadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], LookupsV2PhoneNumber.prototype, "countryCode", void 0);
    __decorate([
        Metadata({ data: "json, name=line_type_intelligence" }),
        __metadata("design:type", Object)
    ], LookupsV2PhoneNumber.prototype, "lineTypeIntelligence", void 0);
    __decorate([
        Metadata({ data: "json, name=live_activity" }),
        __metadata("design:type", Object)
    ], LookupsV2PhoneNumber.prototype, "liveActivity", void 0);
    __decorate([
        Metadata({ data: "json, name=national_format" }),
        __metadata("design:type", String)
    ], LookupsV2PhoneNumber.prototype, "nationalFormat", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], LookupsV2PhoneNumber.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=sim_swap" }),
        __metadata("design:type", Object)
    ], LookupsV2PhoneNumber.prototype, "simSwap", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], LookupsV2PhoneNumber.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=valid" }),
        __metadata("design:type", Boolean)
    ], LookupsV2PhoneNumber.prototype, "valid", void 0);
    __decorate([
        Metadata({ data: "json, name=validation_errors" }),
        __metadata("design:type", Array)
    ], LookupsV2PhoneNumber.prototype, "validationErrors", void 0);
    return LookupsV2PhoneNumber;
}(SpeakeasyBase));
export { LookupsV2PhoneNumber };
