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
import { UserForApiContract } from "./userforapicontract";
import { SongInListEditContractInput } from "./songinlisteditcontract";
import { EntryThumbContract } from "./entrythumbcontract";
export var SongListForEditContractFeaturedCategoryEnum;
(function (SongListForEditContractFeaturedCategoryEnum) {
    SongListForEditContractFeaturedCategoryEnum["Nothing"] = "Nothing";
    SongListForEditContractFeaturedCategoryEnum["Concerts"] = "Concerts";
    SongListForEditContractFeaturedCategoryEnum["VocaloidRanking"] = "VocaloidRanking";
    SongListForEditContractFeaturedCategoryEnum["Pools"] = "Pools";
    SongListForEditContractFeaturedCategoryEnum["Other"] = "Other";
})(SongListForEditContractFeaturedCategoryEnum || (SongListForEditContractFeaturedCategoryEnum = {}));
export var SongListForEditContractStatusEnum;
(function (SongListForEditContractStatusEnum) {
    SongListForEditContractStatusEnum["Draft"] = "Draft";
    SongListForEditContractStatusEnum["Finished"] = "Finished";
    SongListForEditContractStatusEnum["Approved"] = "Approved";
    SongListForEditContractStatusEnum["Locked"] = "Locked";
})(SongListForEditContractStatusEnum || (SongListForEditContractStatusEnum = {}));
var SongListForEditContractInput = /** @class */ (function (_super) {
    __extends(SongListForEditContractInput, _super);
    function SongListForEditContractInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", UserForApiContract)
    ], SongListForEditContractInput.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canEdit" }),
        __metadata("design:type", Boolean)
    ], SongListForEditContractInput.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], SongListForEditContractInput.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SongListForEditContractInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventDate" }),
        __metadata("design:type", Date)
    ], SongListForEditContractInput.prototype, "eventDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featuredCategory" }),
        __metadata("design:type", String)
    ], SongListForEditContractInput.prototype, "featuredCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SongListForEditContractInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SongListForEditContractInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=songLinks", elemType: SongInListEditContractInput }),
        __metadata("design:type", Array)
    ], SongListForEditContractInput.prototype, "songLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SongListForEditContractInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumb" }),
        __metadata("design:type", EntryThumbContract)
    ], SongListForEditContractInput.prototype, "thumb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateNotes" }),
        __metadata("design:type", String)
    ], SongListForEditContractInput.prototype, "updateNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], SongListForEditContractInput.prototype, "version", void 0);
    return SongListForEditContractInput;
}(SpeakeasyBase));
export { SongListForEditContractInput };
