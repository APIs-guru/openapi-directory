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
export var LookupTypeTypeEnum;
(function (LookupTypeTypeEnum) {
    LookupTypeTypeEnum["Group"] = "GROUP";
    LookupTypeTypeEnum["Menu"] = "MENU";
    LookupTypeTypeEnum["Role"] = "ROLE";
    LookupTypeTypeEnum["CodeStandard"] = "CODE_STANDARD";
    LookupTypeTypeEnum["CodeType"] = "CODE_TYPE";
    LookupTypeTypeEnum["FeatureType"] = "FEATURE_TYPE";
    LookupTypeTypeEnum["RelationshipType"] = "RELATIONSHIP_TYPE";
    LookupTypeTypeEnum["Identifier"] = "IDENTIFIER";
    LookupTypeTypeEnum["ContactPointType"] = "CONTACT_POINT_TYPE";
    LookupTypeTypeEnum["StatisticType"] = "STATISTIC_TYPE";
    LookupTypeTypeEnum["NewsType"] = "NEWS_TYPE";
    LookupTypeTypeEnum["Gender"] = "GENDER";
    LookupTypeTypeEnum["IbdCrohnslocation"] = "IBD_CROHNSLOCATION";
    LookupTypeTypeEnum["IbdCrohnsproximalterminalileum"] = "IBD_CROHNSPROXIMALTERMINALILEUM";
    LookupTypeTypeEnum["IbdCrohnsperianal"] = "IBD_CROHNSPERIANAL";
    LookupTypeTypeEnum["IbdCrohnsbehaviour"] = "IBD_CROHNSBEHAVIOUR";
    LookupTypeTypeEnum["IbdUcextent"] = "IBD_UCEXTENT";
    LookupTypeTypeEnum["IbdEgimcomplication"] = "IBD_EGIMCOMPLICATION";
    LookupTypeTypeEnum["IbdSurgerymainprocedure"] = "IBD_SURGERYMAINPROCEDURE";
    LookupTypeTypeEnum["IbdSmokingstatus"] = "IBD_SMOKINGSTATUS";
    LookupTypeTypeEnum["IbdFamilyhistory"] = "IBD_FAMILYHISTORY";
    LookupTypeTypeEnum["LinkType"] = "LINK_TYPE";
})(LookupTypeTypeEnum || (LookupTypeTypeEnum = {}));
var LookupType = /** @class */ (function (_super) {
    __extends(LookupType, _super);
    function LookupType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], LookupType.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LookupType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], LookupType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdate" }),
        __metadata("design:type", Date)
    ], LookupType.prototype, "lastUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LookupType.prototype, "type", void 0);
    return LookupType;
}(SpeakeasyBase));
export { LookupType };
