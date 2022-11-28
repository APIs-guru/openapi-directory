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
var OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl = /** @class */ (function (_super) {
    __extends(OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl, _super);
    function OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", String)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl.prototype, "title", void 0);
    return OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl;
}(SpeakeasyBase));
export { OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl };
var OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement = /** @class */ (function (_super) {
    __extends(OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement, _super);
    function OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creation_date" }),
        __metadata("design:type", String)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_internal" }),
        __metadata("design:type", String)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement.prototype, "fileInternal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=src_ip_address" }),
        __metadata("design:type", String)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement.prototype, "srcIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement.prototype, "url", void 0);
    return OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement;
}(SpeakeasyBase));
export { OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement };
var OneannouncementsPostResponses201ContentApplication1jsonSchema = /** @class */ (function (_super) {
    __extends(OneannouncementsPostResponses201ContentApplication1jsonSchema, _super);
    function OneannouncementsPostResponses201ContentApplication1jsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=announcement" }),
        __metadata("design:type", OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement)
    ], OneannouncementsPostResponses201ContentApplication1jsonSchema.prototype, "announcement", void 0);
    return OneannouncementsPostResponses201ContentApplication1jsonSchema;
}(SpeakeasyBase));
export { OneannouncementsPostResponses201ContentApplication1jsonSchema };
