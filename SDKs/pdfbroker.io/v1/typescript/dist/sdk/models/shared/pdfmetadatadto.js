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
// PdfMetadataDto
/**
 * Enter meta data for pdf document
**/
var PdfMetadataDto = /** @class */ (function (_super) {
    __extends(PdfMetadataDto, _super);
    function PdfMetadataDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Author" }),
        __metadata("design:type", String)
    ], PdfMetadataDto.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAdd" }),
        __metadata("design:type", Boolean)
    ], PdfMetadataDto.prototype, "enableAdd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableCopy" }),
        __metadata("design:type", Boolean)
    ], PdfMetadataDto.prototype, "enableCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableModify" }),
        __metadata("design:type", Boolean)
    ], PdfMetadataDto.prototype, "enableModify", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnablePrinting" }),
        __metadata("design:type", Boolean)
    ], PdfMetadataDto.prototype, "enablePrinting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Keywords" }),
        __metadata("design:type", Array)
    ], PdfMetadataDto.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerPassword" }),
        __metadata("design:type", String)
    ], PdfMetadataDto.prototype, "ownerPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subject" }),
        __metadata("design:type", String)
    ], PdfMetadataDto.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], PdfMetadataDto.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserPassword" }),
        __metadata("design:type", String)
    ], PdfMetadataDto.prototype, "userPassword", void 0);
    return PdfMetadataDto;
}(SpeakeasyBase));
export { PdfMetadataDto };
