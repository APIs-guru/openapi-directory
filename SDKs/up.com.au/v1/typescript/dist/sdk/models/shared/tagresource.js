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
var TagResourceRelationshipsTransactionsLinks = /** @class */ (function (_super) {
    __extends(TagResourceRelationshipsTransactionsLinks, _super);
    function TagResourceRelationshipsTransactionsLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related" }),
        __metadata("design:type", String)
    ], TagResourceRelationshipsTransactionsLinks.prototype, "related", void 0);
    return TagResourceRelationshipsTransactionsLinks;
}(SpeakeasyBase));
export { TagResourceRelationshipsTransactionsLinks };
var TagResourceRelationshipsTransactions = /** @class */ (function (_super) {
    __extends(TagResourceRelationshipsTransactions, _super);
    function TagResourceRelationshipsTransactions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", TagResourceRelationshipsTransactionsLinks)
    ], TagResourceRelationshipsTransactions.prototype, "links", void 0);
    return TagResourceRelationshipsTransactions;
}(SpeakeasyBase));
export { TagResourceRelationshipsTransactions };
var TagResourceRelationships = /** @class */ (function (_super) {
    __extends(TagResourceRelationships, _super);
    function TagResourceRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactions" }),
        __metadata("design:type", TagResourceRelationshipsTransactions)
    ], TagResourceRelationships.prototype, "transactions", void 0);
    return TagResourceRelationships;
}(SpeakeasyBase));
export { TagResourceRelationships };
// TagResource
/**
 * Provides information about a tag.
 *
**/
var TagResource = /** @class */ (function (_super) {
    __extends(TagResource, _super);
    function TagResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TagResource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationships" }),
        __metadata("design:type", TagResourceRelationships)
    ], TagResource.prototype, "relationships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TagResource.prototype, "type", void 0);
    return TagResource;
}(SpeakeasyBase));
export { TagResource };
