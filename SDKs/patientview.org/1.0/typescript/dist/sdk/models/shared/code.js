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
import { CodeCategory } from "./codecategory";
import { Lookup } from "./lookup";
import { CodeExternalStandard } from "./codeexternalstandard";
import { Link } from "./link";
export var CodeSourceTypeEnum;
(function (CodeSourceTypeEnum) {
    CodeSourceTypeEnum["Patientview"] = "PATIENTVIEW";
    CodeSourceTypeEnum["NhsChoices"] = "NHS_CHOICES";
})(CodeSourceTypeEnum || (CodeSourceTypeEnum = {}));
var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Code.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=codeCategories", elemType: CodeCategory }),
        __metadata("design:type", Array)
    ], Code.prototype, "codeCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=codeType" }),
        __metadata("design:type", Lookup)
    ], Code.prototype, "codeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Code.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Code.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayOrder" }),
        __metadata("design:type", Number)
    ], Code.prototype, "displayOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalStandards", elemType: CodeExternalStandard }),
        __metadata("design:type", Array)
    ], Code.prototype, "externalStandards", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullDescription" }),
        __metadata("design:type", String)
    ], Code.prototype, "fullDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideFromPatients" }),
        __metadata("design:type", Boolean)
    ], Code.prototype, "hideFromPatients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Code.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdate" }),
        __metadata("design:type", Date)
    ], Code.prototype, "lastUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links", elemType: Link }),
        __metadata("design:type", Array)
    ], Code.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patientFriendlyName" }),
        __metadata("design:type", String)
    ], Code.prototype, "patientFriendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removedExternally" }),
        __metadata("design:type", Boolean)
    ], Code.prototype, "removedExternally", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceType" }),
        __metadata("design:type", String)
    ], Code.prototype, "sourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standardType" }),
        __metadata("design:type", Lookup)
    ], Code.prototype, "standardType", void 0);
    return Code;
}(SpeakeasyBase));
export { Code };
