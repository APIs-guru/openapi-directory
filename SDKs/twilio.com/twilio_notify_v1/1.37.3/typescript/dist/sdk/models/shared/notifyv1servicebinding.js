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
var NotifyV1ServiceBinding = /** @class */ (function (_super) {
    __extends(NotifyV1ServiceBinding, _super);
    function NotifyV1ServiceBinding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceBinding.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceBinding.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=binding_type" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceBinding.prototype, "bindingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credential_sid" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceBinding.prototype, "credentialSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], NotifyV1ServiceBinding.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], NotifyV1ServiceBinding.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceBinding.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identity" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceBinding.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], NotifyV1ServiceBinding.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_protocol_version" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceBinding.prototype, "notificationProtocolVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceBinding.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceBinding.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], NotifyV1ServiceBinding.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], NotifyV1ServiceBinding.prototype, "url", void 0);
    return NotifyV1ServiceBinding;
}(SpeakeasyBase));
export { NotifyV1ServiceBinding };
