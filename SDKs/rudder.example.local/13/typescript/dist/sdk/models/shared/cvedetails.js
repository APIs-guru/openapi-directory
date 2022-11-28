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
// CveDetailsCvssv2
/**
 * CVSS V2 of the CVE
**/
var CveDetailsCvssv2 = /** @class */ (function (_super) {
    __extends(CveDetailsCvssv2, _super);
    function CveDetailsCvssv2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseScore" }),
        __metadata("design:type", Number)
    ], CveDetailsCvssv2.prototype, "baseScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vector" }),
        __metadata("design:type", String)
    ], CveDetailsCvssv2.prototype, "vector", void 0);
    return CveDetailsCvssv2;
}(SpeakeasyBase));
export { CveDetailsCvssv2 };
export var CveDetailsCvssv3BaseSeverityEnum;
(function (CveDetailsCvssv3BaseSeverityEnum) {
    CveDetailsCvssv3BaseSeverityEnum["Critical"] = "critical";
    CveDetailsCvssv3BaseSeverityEnum["High"] = "high";
    CveDetailsCvssv3BaseSeverityEnum["Medium"] = "medium";
    CveDetailsCvssv3BaseSeverityEnum["Low"] = "low";
    CveDetailsCvssv3BaseSeverityEnum["None"] = "none";
})(CveDetailsCvssv3BaseSeverityEnum || (CveDetailsCvssv3BaseSeverityEnum = {}));
// CveDetailsCvssv3
/**
 * CVSS V3 of the CVE
**/
var CveDetailsCvssv3 = /** @class */ (function (_super) {
    __extends(CveDetailsCvssv3, _super);
    function CveDetailsCvssv3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseScore" }),
        __metadata("design:type", Number)
    ], CveDetailsCvssv3.prototype, "baseScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseSeverity" }),
        __metadata("design:type", String)
    ], CveDetailsCvssv3.prototype, "baseSeverity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vector" }),
        __metadata("design:type", String)
    ], CveDetailsCvssv3.prototype, "vector", void 0);
    return CveDetailsCvssv3;
}(SpeakeasyBase));
export { CveDetailsCvssv3 };
var CveDetails = /** @class */ (function (_super) {
    __extends(CveDetails, _super);
    function CveDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cvssv2" }),
        __metadata("design:type", CveDetailsCvssv2)
    ], CveDetails.prototype, "cvssv2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cvssv3" }),
        __metadata("design:type", CveDetailsCvssv3)
    ], CveDetails.prototype, "cvssv3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cweIds" }),
        __metadata("design:type", Array)
    ], CveDetails.prototype, "cweIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", Date)
    ], CveDetails.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CveDetails.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedDate" }),
        __metadata("design:type", Date)
    ], CveDetails.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishedDate" }),
        __metadata("design:type", Date)
    ], CveDetails.prototype, "publishedDate", void 0);
    return CveDetails;
}(SpeakeasyBase));
export { CveDetails };
