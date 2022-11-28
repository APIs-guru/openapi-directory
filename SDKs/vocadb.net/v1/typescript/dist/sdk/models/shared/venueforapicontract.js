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
import { OptionalGeoPointContract } from "./optionalgeopointcontract";
import { ReleaseEventContract } from "./releaseeventcontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
import { ReleaseEventContractInput } from "./releaseeventcontract";
export var VenueForApiContractStatusEnum;
(function (VenueForApiContractStatusEnum) {
    VenueForApiContractStatusEnum["Draft"] = "Draft";
    VenueForApiContractStatusEnum["Finished"] = "Finished";
    VenueForApiContractStatusEnum["Approved"] = "Approved";
    VenueForApiContractStatusEnum["Locked"] = "Locked";
})(VenueForApiContractStatusEnum || (VenueForApiContractStatusEnum = {}));
var VenueForApiContract = /** @class */ (function (_super) {
    __extends(VenueForApiContract, _super);
    function VenueForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], VenueForApiContract.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], VenueForApiContract.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressCountryCode" }),
        __metadata("design:type", String)
    ], VenueForApiContract.prototype, "addressCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinates" }),
        __metadata("design:type", OptionalGeoPointContract)
    ], VenueForApiContract.prototype, "coordinates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VenueForApiContract.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: ReleaseEventContract }),
        __metadata("design:type", Array)
    ], VenueForApiContract.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], VenueForApiContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VenueForApiContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract }),
        __metadata("design:type", Array)
    ], VenueForApiContract.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], VenueForApiContract.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], VenueForApiContract.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], VenueForApiContract.prototype, "webLinks", void 0);
    return VenueForApiContract;
}(SpeakeasyBase));
export { VenueForApiContract };
var VenueForApiContractInput = /** @class */ (function (_super) {
    __extends(VenueForApiContractInput, _super);
    function VenueForApiContractInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], VenueForApiContractInput.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], VenueForApiContractInput.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressCountryCode" }),
        __metadata("design:type", String)
    ], VenueForApiContractInput.prototype, "addressCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinates" }),
        __metadata("design:type", OptionalGeoPointContract)
    ], VenueForApiContractInput.prototype, "coordinates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VenueForApiContractInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: ReleaseEventContractInput }),
        __metadata("design:type", Array)
    ], VenueForApiContractInput.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], VenueForApiContractInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VenueForApiContractInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract }),
        __metadata("design:type", Array)
    ], VenueForApiContractInput.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], VenueForApiContractInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], VenueForApiContractInput.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], VenueForApiContractInput.prototype, "webLinks", void 0);
    return VenueForApiContractInput;
}(SpeakeasyBase));
export { VenueForApiContractInput };
