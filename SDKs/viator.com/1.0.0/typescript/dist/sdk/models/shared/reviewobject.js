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
// ReviewObject
/**
 * **object** containing a single user review
**/
var ReviewObject = /** @class */ (function (_super) {
    __extends(ReviewObject, _super);
    function ReviewObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerAvatarURL" }),
        __metadata("design:type", String)
    ], ReviewObject.prototype, "ownerAvatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerCountry" }),
        __metadata("design:type", String)
    ], ReviewObject.prototype, "ownerCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerId" }),
        __metadata("design:type", Number)
    ], ReviewObject.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerName" }),
        __metadata("design:type", String)
    ], ReviewObject.prototype, "ownerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], ReviewObject.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTitle" }),
        __metadata("design:type", String)
    ], ReviewObject.prototype, "productTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productUrlName" }),
        __metadata("design:type", String)
    ], ReviewObject.prototype, "productUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishedDate" }),
        __metadata("design:type", String)
    ], ReviewObject.prototype, "publishedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], ReviewObject.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review" }),
        __metadata("design:type", String)
    ], ReviewObject.prototype, "review", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewId" }),
        __metadata("design:type", Number)
    ], ReviewObject.prototype, "reviewId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], ReviewObject.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslSupported" }),
        __metadata("design:type", Boolean)
    ], ReviewObject.prototype, "sslSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submissionDate" }),
        __metadata("design:type", String)
    ], ReviewObject.prototype, "submissionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viatorFeedback" }),
        __metadata("design:type", String)
    ], ReviewObject.prototype, "viatorFeedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viatorNotes" }),
        __metadata("design:type", String)
    ], ReviewObject.prototype, "viatorNotes", void 0);
    return ReviewObject;
}(SpeakeasyBase));
export { ReviewObject };
