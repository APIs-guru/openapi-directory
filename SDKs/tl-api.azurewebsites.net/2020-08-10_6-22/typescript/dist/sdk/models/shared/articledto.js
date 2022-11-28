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
import { GymDto } from "./gymdto";
import { GymArticleDetailsDto } from "./gymarticledetailsdto";
// ArticleDto
/**
 * The ArticleDTO Class.
 * Contains relevant fields of Article DTO by masking actual Article entity's fields in application.
 *
**/
var ArticleDto = /** @class */ (function (_super) {
    __extends(ArticleDto, _super);
    function ArticleDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeStatus" }),
        __metadata("design:type", Boolean)
    ], ArticleDto.prototype, "activeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applyForAllGyms" }),
        __metadata("design:type", Boolean)
    ], ArticleDto.prototype, "applyForAllGyms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=articleId" }),
        __metadata("design:type", Number)
    ], ArticleDto.prototype, "articleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableGyms", elemType: GymDto }),
        __metadata("design:type", Array)
    ], ArticleDto.prototype, "availableGyms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableQty" }),
        __metadata("design:type", Number)
    ], ArticleDto.prototype, "availableQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcode" }),
        __metadata("design:type", String)
    ], ArticleDto.prototype, "barcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], ArticleDto.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdUser" }),
        __metadata("design:type", String)
    ], ArticleDto.prototype, "createdUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cronExpression" }),
        __metadata("design:type", String)
    ], ArticleDto.prototype, "cronExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ArticleDto.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount" }),
        __metadata("design:type", Number)
    ], ArticleDto.prototype, "discount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employeeDiscount" }),
        __metadata("design:type", Number)
    ], ArticleDto.prototype, "employeeDiscount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employeePrice" }),
        __metadata("design:type", Number)
    ], ArticleDto.prototype, "employeePrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gymArticles", elemType: GymArticleDetailsDto }),
        __metadata("design:type", Array)
    ], ArticleDto.prototype, "gymArticles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAddOn" }),
        __metadata("design:type", Boolean)
    ], ArticleDto.prototype, "isAddOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isInventoryItem" }),
        __metadata("design:type", Boolean)
    ], ArticleDto.prototype, "isInventoryItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isObsolete" }),
        __metadata("design:type", Boolean)
    ], ArticleDto.prototype, "isObsolete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=measureUnit" }),
        __metadata("design:type", String)
    ], ArticleDto.prototype, "measureUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedDate" }),
        __metadata("design:type", Date)
    ], ArticleDto.prototype, "modifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedUser" }),
        __metadata("design:type", String)
    ], ArticleDto.prototype, "modifiedUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ArticleDto.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], ArticleDto.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], ArticleDto.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reorderLevel" }),
        __metadata("design:type", Number)
    ], ArticleDto.prototype, "reorderLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revenueAccountId" }),
        __metadata("design:type", Number)
    ], ArticleDto.prototype, "revenueAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellingPrice" }),
        __metadata("design:type", Number)
    ], ArticleDto.prototype, "sellingPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], ArticleDto.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ArticleDto.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vat" }),
        __metadata("design:type", Number)
    ], ArticleDto.prototype, "vat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatApplicable" }),
        __metadata("design:type", Boolean)
    ], ArticleDto.prototype, "vatApplicable", void 0);
    return ArticleDto;
}(SpeakeasyBase));
export { ArticleDto };
