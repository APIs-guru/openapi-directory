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
import { ReleaseEventSeriesContract } from "./releaseeventseriescontract";
import { SongListBaseContract } from "./songlistbasecontract";
import { VenueContract } from "./venuecontract";
export var ReleaseEventContractCategoryEnum;
(function (ReleaseEventContractCategoryEnum) {
    ReleaseEventContractCategoryEnum["Unspecified"] = "Unspecified";
    ReleaseEventContractCategoryEnum["AlbumRelease"] = "AlbumRelease";
    ReleaseEventContractCategoryEnum["Anniversary"] = "Anniversary";
    ReleaseEventContractCategoryEnum["Club"] = "Club";
    ReleaseEventContractCategoryEnum["Concert"] = "Concert";
    ReleaseEventContractCategoryEnum["Contest"] = "Contest";
    ReleaseEventContractCategoryEnum["Convention"] = "Convention";
    ReleaseEventContractCategoryEnum["Other"] = "Other";
})(ReleaseEventContractCategoryEnum || (ReleaseEventContractCategoryEnum = {}));
export var ReleaseEventContractInheritedCategoryEnum;
(function (ReleaseEventContractInheritedCategoryEnum) {
    ReleaseEventContractInheritedCategoryEnum["Unspecified"] = "Unspecified";
    ReleaseEventContractInheritedCategoryEnum["AlbumRelease"] = "AlbumRelease";
    ReleaseEventContractInheritedCategoryEnum["Anniversary"] = "Anniversary";
    ReleaseEventContractInheritedCategoryEnum["Club"] = "Club";
    ReleaseEventContractInheritedCategoryEnum["Concert"] = "Concert";
    ReleaseEventContractInheritedCategoryEnum["Contest"] = "Contest";
    ReleaseEventContractInheritedCategoryEnum["Convention"] = "Convention";
    ReleaseEventContractInheritedCategoryEnum["Other"] = "Other";
})(ReleaseEventContractInheritedCategoryEnum || (ReleaseEventContractInheritedCategoryEnum = {}));
export var ReleaseEventContractStatusEnum;
(function (ReleaseEventContractStatusEnum) {
    ReleaseEventContractStatusEnum["Draft"] = "Draft";
    ReleaseEventContractStatusEnum["Finished"] = "Finished";
    ReleaseEventContractStatusEnum["Approved"] = "Approved";
    ReleaseEventContractStatusEnum["Locked"] = "Locked";
})(ReleaseEventContractStatusEnum || (ReleaseEventContractStatusEnum = {}));
var ReleaseEventContract = /** @class */ (function (_super) {
    __extends(ReleaseEventContract, _super);
    function ReleaseEventContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], ReleaseEventContract.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], ReleaseEventContract.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customName" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventContract.prototype, "customName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], ReleaseEventContract.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventContract.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReleaseEventContract.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], ReleaseEventContract.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasVenueOrVenueName" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventContract.prototype, "hasVenueOrVenueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReleaseEventContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inheritedCategory" }),
        __metadata("design:type", String)
    ], ReleaseEventContract.prototype, "inheritedCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReleaseEventContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictureMime" }),
        __metadata("design:type", String)
    ], ReleaseEventContract.prototype, "pictureMime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=series" }),
        __metadata("design:type", ReleaseEventSeriesContract)
    ], ReleaseEventContract.prototype, "series", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=songList" }),
        __metadata("design:type", SongListBaseContract)
    ], ReleaseEventContract.prototype, "songList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ReleaseEventContract.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlSlug" }),
        __metadata("design:type", String)
    ], ReleaseEventContract.prototype, "urlSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=venue" }),
        __metadata("design:type", VenueContract)
    ], ReleaseEventContract.prototype, "venue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=venueName" }),
        __metadata("design:type", String)
    ], ReleaseEventContract.prototype, "venueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], ReleaseEventContract.prototype, "version", void 0);
    return ReleaseEventContract;
}(SpeakeasyBase));
export { ReleaseEventContract };
var ReleaseEventContractInput = /** @class */ (function (_super) {
    __extends(ReleaseEventContractInput, _super);
    function ReleaseEventContractInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], ReleaseEventContractInput.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], ReleaseEventContractInput.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customName" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventContractInput.prototype, "customName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], ReleaseEventContractInput.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventContractInput.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReleaseEventContractInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], ReleaseEventContractInput.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReleaseEventContractInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReleaseEventContractInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictureMime" }),
        __metadata("design:type", String)
    ], ReleaseEventContractInput.prototype, "pictureMime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=series" }),
        __metadata("design:type", ReleaseEventSeriesContract)
    ], ReleaseEventContractInput.prototype, "series", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=songList" }),
        __metadata("design:type", SongListBaseContract)
    ], ReleaseEventContractInput.prototype, "songList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ReleaseEventContractInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlSlug" }),
        __metadata("design:type", String)
    ], ReleaseEventContractInput.prototype, "urlSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=venue" }),
        __metadata("design:type", VenueContract)
    ], ReleaseEventContractInput.prototype, "venue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=venueName" }),
        __metadata("design:type", String)
    ], ReleaseEventContractInput.prototype, "venueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], ReleaseEventContractInput.prototype, "version", void 0);
    return ReleaseEventContractInput;
}(SpeakeasyBase));
export { ReleaseEventContractInput };
