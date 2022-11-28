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
import { TagBaseContract } from "./tagbasecontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringWithIdContract } from "./localizedstringwithidcontract";
import { EnglishTranslatedStringContract } from "./englishtranslatedstringcontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
export var TagForApiContractDefaultNameLanguageEnum;
(function (TagForApiContractDefaultNameLanguageEnum) {
    TagForApiContractDefaultNameLanguageEnum["Unspecified"] = "Unspecified";
    TagForApiContractDefaultNameLanguageEnum["Japanese"] = "Japanese";
    TagForApiContractDefaultNameLanguageEnum["Romaji"] = "Romaji";
    TagForApiContractDefaultNameLanguageEnum["English"] = "English";
})(TagForApiContractDefaultNameLanguageEnum || (TagForApiContractDefaultNameLanguageEnum = {}));
export var TagForApiContractStatusEnum;
(function (TagForApiContractStatusEnum) {
    TagForApiContractStatusEnum["Draft"] = "Draft";
    TagForApiContractStatusEnum["Finished"] = "Finished";
    TagForApiContractStatusEnum["Approved"] = "Approved";
    TagForApiContractStatusEnum["Locked"] = "Locked";
})(TagForApiContractStatusEnum || (TagForApiContractStatusEnum = {}));
var TagForApiContract = /** @class */ (function (_super) {
    __extends(TagForApiContract, _super);
    function TagForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], TagForApiContract.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aliasedTo" }),
        __metadata("design:type", TagBaseContract)
    ], TagForApiContract.prototype, "aliasedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryName" }),
        __metadata("design:type", String)
    ], TagForApiContract.prototype, "categoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], TagForApiContract.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" }),
        __metadata("design:type", String)
    ], TagForApiContract.prototype, "defaultNameLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TagForApiContract.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TagForApiContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainPicture" }),
        __metadata("design:type", EntryThumbForApiContract)
    ], TagForApiContract.prototype, "mainPicture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TagForApiContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringWithIdContract }),
        __metadata("design:type", Array)
    ], TagForApiContract.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", TagBaseContract)
    ], TagForApiContract.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedTags", elemType: TagBaseContract }),
        __metadata("design:type", Array)
    ], TagForApiContract.prototype, "relatedTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TagForApiContract.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets" }),
        __metadata("design:type", Number)
    ], TagForApiContract.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translatedDescription" }),
        __metadata("design:type", EnglishTranslatedStringContract)
    ], TagForApiContract.prototype, "translatedDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlSlug" }),
        __metadata("design:type", String)
    ], TagForApiContract.prototype, "urlSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageCount" }),
        __metadata("design:type", Number)
    ], TagForApiContract.prototype, "usageCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], TagForApiContract.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], TagForApiContract.prototype, "webLinks", void 0);
    return TagForApiContract;
}(SpeakeasyBase));
export { TagForApiContract };
