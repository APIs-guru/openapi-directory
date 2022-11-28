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
var WebhookResourceAttributes = /** @class */ (function (_super) {
    __extends(WebhookResourceAttributes, _super);
    function WebhookResourceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], WebhookResourceAttributes.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], WebhookResourceAttributes.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secretKey" }),
        __metadata("design:type", String)
    ], WebhookResourceAttributes.prototype, "secretKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], WebhookResourceAttributes.prototype, "url", void 0);
    return WebhookResourceAttributes;
}(SpeakeasyBase));
export { WebhookResourceAttributes };
var WebhookResourceLinks = /** @class */ (function (_super) {
    __extends(WebhookResourceLinks, _super);
    function WebhookResourceLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], WebhookResourceLinks.prototype, "self", void 0);
    return WebhookResourceLinks;
}(SpeakeasyBase));
export { WebhookResourceLinks };
var WebhookResourceRelationshipsLogsLinks = /** @class */ (function (_super) {
    __extends(WebhookResourceRelationshipsLogsLinks, _super);
    function WebhookResourceRelationshipsLogsLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related" }),
        __metadata("design:type", String)
    ], WebhookResourceRelationshipsLogsLinks.prototype, "related", void 0);
    return WebhookResourceRelationshipsLogsLinks;
}(SpeakeasyBase));
export { WebhookResourceRelationshipsLogsLinks };
var WebhookResourceRelationshipsLogs = /** @class */ (function (_super) {
    __extends(WebhookResourceRelationshipsLogs, _super);
    function WebhookResourceRelationshipsLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", WebhookResourceRelationshipsLogsLinks)
    ], WebhookResourceRelationshipsLogs.prototype, "links", void 0);
    return WebhookResourceRelationshipsLogs;
}(SpeakeasyBase));
export { WebhookResourceRelationshipsLogs };
var WebhookResourceRelationships = /** @class */ (function (_super) {
    __extends(WebhookResourceRelationships, _super);
    function WebhookResourceRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logs" }),
        __metadata("design:type", WebhookResourceRelationshipsLogs)
    ], WebhookResourceRelationships.prototype, "logs", void 0);
    return WebhookResourceRelationships;
}(SpeakeasyBase));
export { WebhookResourceRelationships };
// WebhookResource
/**
 * Provides information about a webhook.
 *
**/
var WebhookResource = /** @class */ (function (_super) {
    __extends(WebhookResource, _super);
    function WebhookResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", WebhookResourceAttributes)
    ], WebhookResource.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebhookResource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", WebhookResourceLinks)
    ], WebhookResource.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationships" }),
        __metadata("design:type", WebhookResourceRelationships)
    ], WebhookResource.prototype, "relationships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebhookResource.prototype, "type", void 0);
    return WebhookResource;
}(SpeakeasyBase));
export { WebhookResource };
