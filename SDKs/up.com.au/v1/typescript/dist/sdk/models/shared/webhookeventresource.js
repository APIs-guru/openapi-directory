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
var WebhookEventResourceAttributes = /** @class */ (function (_super) {
    __extends(WebhookEventResourceAttributes, _super);
    function WebhookEventResourceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], WebhookEventResourceAttributes.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", Object)
    ], WebhookEventResourceAttributes.prototype, "eventType", void 0);
    return WebhookEventResourceAttributes;
}(SpeakeasyBase));
export { WebhookEventResourceAttributes };
var WebhookEventResourceRelationshipsTransactionData = /** @class */ (function (_super) {
    __extends(WebhookEventResourceRelationshipsTransactionData, _super);
    function WebhookEventResourceRelationshipsTransactionData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebhookEventResourceRelationshipsTransactionData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebhookEventResourceRelationshipsTransactionData.prototype, "type", void 0);
    return WebhookEventResourceRelationshipsTransactionData;
}(SpeakeasyBase));
export { WebhookEventResourceRelationshipsTransactionData };
var WebhookEventResourceRelationshipsTransactionLinks = /** @class */ (function (_super) {
    __extends(WebhookEventResourceRelationshipsTransactionLinks, _super);
    function WebhookEventResourceRelationshipsTransactionLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related" }),
        __metadata("design:type", String)
    ], WebhookEventResourceRelationshipsTransactionLinks.prototype, "related", void 0);
    return WebhookEventResourceRelationshipsTransactionLinks;
}(SpeakeasyBase));
export { WebhookEventResourceRelationshipsTransactionLinks };
var WebhookEventResourceRelationshipsTransaction = /** @class */ (function (_super) {
    __extends(WebhookEventResourceRelationshipsTransaction, _super);
    function WebhookEventResourceRelationshipsTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", WebhookEventResourceRelationshipsTransactionData)
    ], WebhookEventResourceRelationshipsTransaction.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", WebhookEventResourceRelationshipsTransactionLinks)
    ], WebhookEventResourceRelationshipsTransaction.prototype, "links", void 0);
    return WebhookEventResourceRelationshipsTransaction;
}(SpeakeasyBase));
export { WebhookEventResourceRelationshipsTransaction };
var WebhookEventResourceRelationshipsWebhookData = /** @class */ (function (_super) {
    __extends(WebhookEventResourceRelationshipsWebhookData, _super);
    function WebhookEventResourceRelationshipsWebhookData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebhookEventResourceRelationshipsWebhookData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebhookEventResourceRelationshipsWebhookData.prototype, "type", void 0);
    return WebhookEventResourceRelationshipsWebhookData;
}(SpeakeasyBase));
export { WebhookEventResourceRelationshipsWebhookData };
var WebhookEventResourceRelationshipsWebhookLinks = /** @class */ (function (_super) {
    __extends(WebhookEventResourceRelationshipsWebhookLinks, _super);
    function WebhookEventResourceRelationshipsWebhookLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related" }),
        __metadata("design:type", String)
    ], WebhookEventResourceRelationshipsWebhookLinks.prototype, "related", void 0);
    return WebhookEventResourceRelationshipsWebhookLinks;
}(SpeakeasyBase));
export { WebhookEventResourceRelationshipsWebhookLinks };
var WebhookEventResourceRelationshipsWebhook = /** @class */ (function (_super) {
    __extends(WebhookEventResourceRelationshipsWebhook, _super);
    function WebhookEventResourceRelationshipsWebhook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", WebhookEventResourceRelationshipsWebhookData)
    ], WebhookEventResourceRelationshipsWebhook.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", WebhookEventResourceRelationshipsWebhookLinks)
    ], WebhookEventResourceRelationshipsWebhook.prototype, "links", void 0);
    return WebhookEventResourceRelationshipsWebhook;
}(SpeakeasyBase));
export { WebhookEventResourceRelationshipsWebhook };
var WebhookEventResourceRelationships = /** @class */ (function (_super) {
    __extends(WebhookEventResourceRelationships, _super);
    function WebhookEventResourceRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction" }),
        __metadata("design:type", WebhookEventResourceRelationshipsTransaction)
    ], WebhookEventResourceRelationships.prototype, "transaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook" }),
        __metadata("design:type", WebhookEventResourceRelationshipsWebhook)
    ], WebhookEventResourceRelationships.prototype, "webhook", void 0);
    return WebhookEventResourceRelationships;
}(SpeakeasyBase));
export { WebhookEventResourceRelationships };
// WebhookEventResource
/**
 * Provides the event data used in asynchronous webhook event callbacks to
 * subscribed endpoints. Webhooks events have defined `eventType`s and may
 * optionally relate to other resources within the Up API.
 *
**/
var WebhookEventResource = /** @class */ (function (_super) {
    __extends(WebhookEventResource, _super);
    function WebhookEventResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", WebhookEventResourceAttributes)
    ], WebhookEventResource.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebhookEventResource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationships" }),
        __metadata("design:type", WebhookEventResourceRelationships)
    ], WebhookEventResource.prototype, "relationships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebhookEventResource.prototype, "type", void 0);
    return WebhookEventResource;
}(SpeakeasyBase));
export { WebhookEventResource };
