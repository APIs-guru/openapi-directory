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
import { PvExtendedMetadata } from "./pvextendedmetadata";
export var PvContractPvTypeEnum;
(function (PvContractPvTypeEnum) {
    PvContractPvTypeEnum["Original"] = "Original";
    PvContractPvTypeEnum["Reprint"] = "Reprint";
    PvContractPvTypeEnum["Other"] = "Other";
})(PvContractPvTypeEnum || (PvContractPvTypeEnum = {}));
export var PvContractServiceEnum;
(function (PvContractServiceEnum) {
    PvContractServiceEnum["NicoNicoDouga"] = "NicoNicoDouga";
    PvContractServiceEnum["Youtube"] = "Youtube";
    PvContractServiceEnum["SoundCloud"] = "SoundCloud";
    PvContractServiceEnum["Vimeo"] = "Vimeo";
    PvContractServiceEnum["Piapro"] = "Piapro";
    PvContractServiceEnum["Bilibili"] = "Bilibili";
    PvContractServiceEnum["File"] = "File";
    PvContractServiceEnum["LocalFile"] = "LocalFile";
    PvContractServiceEnum["Creofuga"] = "Creofuga";
    PvContractServiceEnum["Bandcamp"] = "Bandcamp";
})(PvContractServiceEnum || (PvContractServiceEnum = {}));
var PvContract = /** @class */ (function (_super) {
    __extends(PvContract, _super);
    function PvContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], PvContract.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", Number)
    ], PvContract.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PvContract.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extendedMetadata" }),
        __metadata("design:type", PvExtendedMetadata)
    ], PvContract.prototype, "extendedMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PvContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], PvContract.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PvContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishDate" }),
        __metadata("design:type", Date)
    ], PvContract.prototype, "publishDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pvId" }),
        __metadata("design:type", String)
    ], PvContract.prototype, "pvId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pvType" }),
        __metadata("design:type", String)
    ], PvContract.prototype, "pvType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], PvContract.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbUrl" }),
        __metadata("design:type", String)
    ], PvContract.prototype, "thumbUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PvContract.prototype, "url", void 0);
    return PvContract;
}(SpeakeasyBase));
export { PvContract };
