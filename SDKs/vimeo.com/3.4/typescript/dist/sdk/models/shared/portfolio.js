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
// PortfolioMetadataConnectionsVideos
/**
 * Information about the videos contained within this portfolio.
**/
var PortfolioMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(PortfolioMetadataConnectionsVideos, _super);
    function PortfolioMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PortfolioMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PortfolioMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PortfolioMetadataConnectionsVideos.prototype, "uri", void 0);
    return PortfolioMetadataConnectionsVideos;
}(SpeakeasyBase));
export { PortfolioMetadataConnectionsVideos };
// PortfolioMetadataConnections
/**
 * A list of resource URIs related to the album.
**/
var PortfolioMetadataConnections = /** @class */ (function (_super) {
    __extends(PortfolioMetadataConnections, _super);
    function PortfolioMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", PortfolioMetadataConnectionsVideos)
    ], PortfolioMetadataConnections.prototype, "videos", void 0);
    return PortfolioMetadataConnections;
}(SpeakeasyBase));
export { PortfolioMetadataConnections };
// PortfolioMetadata
/**
 * Metadata about the album.
**/
var PortfolioMetadata = /** @class */ (function (_super) {
    __extends(PortfolioMetadata, _super);
    function PortfolioMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", PortfolioMetadataConnections)
    ], PortfolioMetadata.prototype, "connections", void 0);
    return PortfolioMetadata;
}(SpeakeasyBase));
export { PortfolioMetadata };
export var PortfolioSortEnum;
(function (PortfolioSortEnum) {
    PortfolioSortEnum["Alphabetical"] = "alphabetical";
    PortfolioSortEnum["Clips"] = "clips";
    PortfolioSortEnum["Modified"] = "modified";
    PortfolioSortEnum["Recent"] = "recent";
})(PortfolioSortEnum || (PortfolioSortEnum = {}));
var Portfolio = /** @class */ (function (_super) {
    __extends(Portfolio, _super);
    function Portfolio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], Portfolio.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Portfolio.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Portfolio.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", PortfolioMetadata)
    ], Portfolio.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified_time" }),
        __metadata("design:type", String)
    ], Portfolio.prototype, "modifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Portfolio.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", String)
    ], Portfolio.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Portfolio.prototype, "uri", void 0);
    return Portfolio;
}(SpeakeasyBase));
export { Portfolio };
