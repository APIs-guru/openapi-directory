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
// OnDemandGenreInteractionsPage
/**
 * Interactions for On Demand pages that are in this genre.
**/
var OnDemandGenreInteractionsPage = /** @class */ (function (_super) {
    __extends(OnDemandGenreInteractionsPage, _super);
    function OnDemandGenreInteractionsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandGenreInteractionsPage.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandGenreInteractionsPage.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandGenreInteractionsPage.prototype, "uri", void 0);
    return OnDemandGenreInteractionsPage;
}(SpeakeasyBase));
export { OnDemandGenreInteractionsPage };
var OnDemandGenreInteractions = /** @class */ (function (_super) {
    __extends(OnDemandGenreInteractions, _super);
    function OnDemandGenreInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", OnDemandGenreInteractionsPage)
    ], OnDemandGenreInteractions.prototype, "page", void 0);
    return OnDemandGenreInteractions;
}(SpeakeasyBase));
export { OnDemandGenreInteractions };
// OnDemandGenreMetadataConnectionsPages
/**
 * Information about the On Demand pages related to this group.
**/
var OnDemandGenreMetadataConnectionsPages = /** @class */ (function (_super) {
    __extends(OnDemandGenreMetadataConnectionsPages, _super);
    function OnDemandGenreMetadataConnectionsPages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandGenreMetadataConnectionsPages.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandGenreMetadataConnectionsPages.prototype, "uri", void 0);
    return OnDemandGenreMetadataConnectionsPages;
}(SpeakeasyBase));
export { OnDemandGenreMetadataConnectionsPages };
// OnDemandGenreMetadataConnections
/**
 * A collection of information connected to this resource.
**/
var OnDemandGenreMetadataConnections = /** @class */ (function (_super) {
    __extends(OnDemandGenreMetadataConnections, _super);
    function OnDemandGenreMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", OnDemandGenreMetadataConnectionsPages)
    ], OnDemandGenreMetadataConnections.prototype, "pages", void 0);
    return OnDemandGenreMetadataConnections;
}(SpeakeasyBase));
export { OnDemandGenreMetadataConnections };
var OnDemandGenreMetadata = /** @class */ (function (_super) {
    __extends(OnDemandGenreMetadata, _super);
    function OnDemandGenreMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", OnDemandGenreMetadataConnections)
    ], OnDemandGenreMetadata.prototype, "connections", void 0);
    return OnDemandGenreMetadata;
}(SpeakeasyBase));
export { OnDemandGenreMetadata };
var OnDemandGenre = /** @class */ (function (_super) {
    __extends(OnDemandGenre, _super);
    function OnDemandGenre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonical" }),
        __metadata("design:type", String)
    ], OnDemandGenre.prototype, "canonical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", OnDemandGenreInteractions)
    ], OnDemandGenre.prototype, "interactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandGenre.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", OnDemandGenreMetadata)
    ], OnDemandGenre.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandGenre.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandGenre.prototype, "uri", void 0);
    return OnDemandGenre;
}(SpeakeasyBase));
export { OnDemandGenre };
