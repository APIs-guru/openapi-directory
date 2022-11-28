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
import { WebLinkContract } from "./weblinkcontract";
export var ReleaseEventSeriesContractCategoryEnum;
(function (ReleaseEventSeriesContractCategoryEnum) {
    ReleaseEventSeriesContractCategoryEnum["Unspecified"] = "Unspecified";
    ReleaseEventSeriesContractCategoryEnum["AlbumRelease"] = "AlbumRelease";
    ReleaseEventSeriesContractCategoryEnum["Anniversary"] = "Anniversary";
    ReleaseEventSeriesContractCategoryEnum["Club"] = "Club";
    ReleaseEventSeriesContractCategoryEnum["Concert"] = "Concert";
    ReleaseEventSeriesContractCategoryEnum["Contest"] = "Contest";
    ReleaseEventSeriesContractCategoryEnum["Convention"] = "Convention";
    ReleaseEventSeriesContractCategoryEnum["Other"] = "Other";
})(ReleaseEventSeriesContractCategoryEnum || (ReleaseEventSeriesContractCategoryEnum = {}));
export var ReleaseEventSeriesContractStatusEnum;
(function (ReleaseEventSeriesContractStatusEnum) {
    ReleaseEventSeriesContractStatusEnum["Draft"] = "Draft";
    ReleaseEventSeriesContractStatusEnum["Finished"] = "Finished";
    ReleaseEventSeriesContractStatusEnum["Approved"] = "Approved";
    ReleaseEventSeriesContractStatusEnum["Locked"] = "Locked";
})(ReleaseEventSeriesContractStatusEnum || (ReleaseEventSeriesContractStatusEnum = {}));
var ReleaseEventSeriesContract = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesContract, _super);
    function ReleaseEventSeriesContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesContract.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesContract.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventSeriesContract.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesContract.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReleaseEventSeriesContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictureMime" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesContract.prototype, "pictureMime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesContract.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlSlug" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesContract.prototype, "urlSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], ReleaseEventSeriesContract.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkContract }),
        __metadata("design:type", Array)
    ], ReleaseEventSeriesContract.prototype, "webLinks", void 0);
    return ReleaseEventSeriesContract;
}(SpeakeasyBase));
export { ReleaseEventSeriesContract };
