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
// PhotoObject
/**
 * **object** detailing a single photo from a user
**/
var PhotoObject = /** @class */ (function (_super) {
    __extends(PhotoObject, _super);
    function PhotoObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editorsPick" }),
        __metadata("design:type", Boolean)
    ], PhotoObject.prototype, "editorsPick", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerAvatarURL" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "ownerAvatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerCountry" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "ownerCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerId" }),
        __metadata("design:type", Number)
    ], PhotoObject.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerName" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "ownerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoHiResURL" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "photoHiResUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoId" }),
        __metadata("design:type", Number)
    ], PhotoObject.prototype, "photoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoMediumResURL" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "photoMediumResUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoURL" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTitle" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "productTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productUrlName" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "productUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], PhotoObject.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslSupported" }),
        __metadata("design:type", Boolean)
    ], PhotoObject.prototype, "sslSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailURL" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "thumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeUploaded" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "timeUploaded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PhotoObject.prototype, "title", void 0);
    return PhotoObject;
}(SpeakeasyBase));
export { PhotoObject };
