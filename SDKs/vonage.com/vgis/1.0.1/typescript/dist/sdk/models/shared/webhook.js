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
export var WebhookEventsEnum;
(function (WebhookEventsEnum) {
    WebhookEventsEnum["Call"] = "CALL";
})(WebhookEventsEnum || (WebhookEventsEnum = {}));
export var WebhookMetadataPolicyEnum;
(function (WebhookMetadataPolicyEnum) {
    WebhookMetadataPolicyEnum["None"] = "NONE";
    WebhookMetadataPolicyEnum["Header"] = "HEADER";
    WebhookMetadataPolicyEnum["Body"] = "BODY";
})(WebhookMetadataPolicyEnum || (WebhookMetadataPolicyEnum = {}));
export var WebhookSigningAlgoEnum;
(function (WebhookSigningAlgoEnum) {
    WebhookSigningAlgoEnum["HmacSha256"] = "HMAC_SHA256";
    WebhookSigningAlgoEnum["None"] = "NONE";
})(WebhookSigningAlgoEnum || (WebhookSigningAlgoEnum = {}));
var WebhookStatistics = /** @class */ (function (_super) {
    __extends(WebhookStatistics, _super);
    function WebhookStatistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failed" }),
        __metadata("design:type", Boolean)
    ], WebhookStatistics.prototype, "failed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalAttempts" }),
        __metadata("design:type", Number)
    ], WebhookStatistics.prototype, "totalAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalFailures" }),
        __metadata("design:type", Number)
    ], WebhookStatistics.prototype, "totalFailures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSuccesses" }),
        __metadata("design:type", Number)
    ], WebhookStatistics.prototype, "totalSuccesses", void 0);
    return WebhookStatistics;
}(SpeakeasyBase));
export { WebhookStatistics };
export var WebhookStatusEnum;
(function (WebhookStatusEnum) {
    WebhookStatusEnum["Active"] = "ACTIVE";
    WebhookStatusEnum["Paused"] = "PAUSED";
})(WebhookStatusEnum || (WebhookStatusEnum = {}));
var Webhook = /** @class */ (function (_super) {
    __extends(Webhook, _super);
    function Webhook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], Webhook.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireAt" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "expireAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataPolicy" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "metadataPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purgeAt" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "purgeAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewedAt" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "renewedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signingAlgo" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "signingAlgo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signingKey" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "signingKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statistics" }),
        __metadata("design:type", WebhookStatistics)
    ], Webhook.prototype, "statistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "userId", void 0);
    return Webhook;
}(SpeakeasyBase));
export { Webhook };
