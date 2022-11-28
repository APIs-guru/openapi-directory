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
var SyncV1Service = /** @class */ (function (_super) {
    __extends(SyncV1Service, _super);
    function SyncV1Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], SyncV1Service.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acl_enabled" }),
        __metadata("design:type", Boolean)
    ], SyncV1Service.prototype, "aclEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], SyncV1Service.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], SyncV1Service.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], SyncV1Service.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], SyncV1Service.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reachability_debouncing_enabled" }),
        __metadata("design:type", Boolean)
    ], SyncV1Service.prototype, "reachabilityDebouncingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reachability_debouncing_window" }),
        __metadata("design:type", Number)
    ], SyncV1Service.prototype, "reachabilityDebouncingWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reachability_webhooks_enabled" }),
        __metadata("design:type", Boolean)
    ], SyncV1Service.prototype, "reachabilityWebhooksEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], SyncV1Service.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], SyncV1Service.prototype, "uniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SyncV1Service.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], SyncV1Service.prototype, "webhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooks_from_rest_enabled" }),
        __metadata("design:type", Boolean)
    ], SyncV1Service.prototype, "webhooksFromRestEnabled", void 0);
    return SyncV1Service;
}(SpeakeasyBase));
export { SyncV1Service };
