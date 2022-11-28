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
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
export var ReleaseEventSeriesForApiContractCategoryEnum;
(function (ReleaseEventSeriesForApiContractCategoryEnum) {
    ReleaseEventSeriesForApiContractCategoryEnum["Unspecified"] = "Unspecified";
    ReleaseEventSeriesForApiContractCategoryEnum["AlbumRelease"] = "AlbumRelease";
    ReleaseEventSeriesForApiContractCategoryEnum["Anniversary"] = "Anniversary";
    ReleaseEventSeriesForApiContractCategoryEnum["Club"] = "Club";
    ReleaseEventSeriesForApiContractCategoryEnum["Concert"] = "Concert";
    ReleaseEventSeriesForApiContractCategoryEnum["Contest"] = "Contest";
    ReleaseEventSeriesForApiContractCategoryEnum["Convention"] = "Convention";
    ReleaseEventSeriesForApiContractCategoryEnum["Other"] = "Other";
})(ReleaseEventSeriesForApiContractCategoryEnum || (ReleaseEventSeriesForApiContractCategoryEnum = {}));
export var ReleaseEventSeriesForApiContractStatusEnum;
(function (ReleaseEventSeriesForApiContractStatusEnum) {
    ReleaseEventSeriesForApiContractStatusEnum["Draft"] = "Draft";
    ReleaseEventSeriesForApiContractStatusEnum["Finished"] = "Finished";
    ReleaseEventSeriesForApiContractStatusEnum["Approved"] = "Approved";
    ReleaseEventSeriesForApiContractStatusEnum["Locked"] = "Locked";
})(ReleaseEventSeriesForApiContractStatusEnum || (ReleaseEventSeriesForApiContractStatusEnum = {}));
var ReleaseEventSeriesForApiContract = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesForApiContract, _super);
    function ReleaseEventSeriesForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesForApiContract.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesForApiContract.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesForApiContract.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: ReleaseEventForApiContract }),
        __metadata("design:type", Array)
    ], ReleaseEventSeriesForApiContract.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReleaseEventSeriesForApiContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainPicture" }),
        __metadata("design:type", EntryThumbForApiContract)
    ], ReleaseEventSeriesForApiContract.prototype, "mainPicture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesForApiContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract }),
        __metadata("design:type", Array)
    ], ReleaseEventSeriesForApiContract.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesForApiContract.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlSlug" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesForApiContract.prototype, "urlSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], ReleaseEventSeriesForApiContract.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], ReleaseEventSeriesForApiContract.prototype, "webLinks", void 0);
    return ReleaseEventSeriesForApiContract;
}(SpeakeasyBase));
export { ReleaseEventSeriesForApiContract };
