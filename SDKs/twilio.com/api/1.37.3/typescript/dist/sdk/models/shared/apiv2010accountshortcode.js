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
export var ApiV2010AccountShortCodeSmsFallbackMethodEnum;
(function (ApiV2010AccountShortCodeSmsFallbackMethodEnum) {
    ApiV2010AccountShortCodeSmsFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountShortCodeSmsFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountShortCodeSmsFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountShortCodeSmsFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountShortCodeSmsFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountShortCodeSmsFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountShortCodeSmsFallbackMethodEnum || (ApiV2010AccountShortCodeSmsFallbackMethodEnum = {}));
export var ApiV2010AccountShortCodeSmsMethodEnum;
(function (ApiV2010AccountShortCodeSmsMethodEnum) {
    ApiV2010AccountShortCodeSmsMethodEnum["Head"] = "HEAD";
    ApiV2010AccountShortCodeSmsMethodEnum["Get"] = "GET";
    ApiV2010AccountShortCodeSmsMethodEnum["Post"] = "POST";
    ApiV2010AccountShortCodeSmsMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountShortCodeSmsMethodEnum["Put"] = "PUT";
    ApiV2010AccountShortCodeSmsMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountShortCodeSmsMethodEnum || (ApiV2010AccountShortCodeSmsMethodEnum = {}));
var ApiV2010AccountShortCode = /** @class */ (function (_super) {
    __extends(ApiV2010AccountShortCode, _super);
    function ApiV2010AccountShortCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=short_code" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "shortCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "smsFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "smsFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "smsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "smsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountShortCode.prototype, "uri", void 0);
    return ApiV2010AccountShortCode;
}(SpeakeasyBase));
export { ApiV2010AccountShortCode };
