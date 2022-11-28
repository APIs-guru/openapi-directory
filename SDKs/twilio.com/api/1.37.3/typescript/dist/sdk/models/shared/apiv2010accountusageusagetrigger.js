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
import { UsageTriggerEnumRecurringEnum } from "./usagetriggerenumrecurringenum";
import { UsageTriggerEnumTriggerFieldEnum } from "./usagetriggerenumtriggerfieldenum";
import { UsageTriggerEnumUsageCategoryEnum } from "./usagetriggerenumusagecategoryenum";
export var ApiV2010AccountUsageUsageTriggerCallbackMethodEnum;
(function (ApiV2010AccountUsageUsageTriggerCallbackMethodEnum) {
    ApiV2010AccountUsageUsageTriggerCallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountUsageUsageTriggerCallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountUsageUsageTriggerCallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountUsageUsageTriggerCallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountUsageUsageTriggerCallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountUsageUsageTriggerCallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountUsageUsageTriggerCallbackMethodEnum || (ApiV2010AccountUsageUsageTriggerCallbackMethodEnum = {}));
var ApiV2010AccountUsageUsageTrigger = /** @class */ (function (_super) {
    __extends(ApiV2010AccountUsageUsageTrigger, _super);
    function ApiV2010AccountUsageUsageTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "callbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_value" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "currentValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_fired" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "dateFired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recurring" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "recurring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger_by" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "triggerBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger_value" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "triggerValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage_category" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "usageCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage_record_uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountUsageUsageTrigger.prototype, "usageRecordUri", void 0);
    return ApiV2010AccountUsageUsageTrigger;
}(SpeakeasyBase));
export { ApiV2010AccountUsageUsageTrigger };
