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
import { ContactPoint } from "./contactpoint";
import { GroupFeature } from "./groupfeature";
import { Lookup } from "./lookup";
import { Link } from "./link";
import { Location } from "./location";
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], Group.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], Group.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address3" }),
        __metadata("design:type", String)
    ], Group.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childGroups", elemType: Group }),
        __metadata("design:type", Array)
    ], Group.prototype, "childGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Group.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactPoints", elemType: ContactPoint }),
        __metadata("design:type", Array)
    ], Group.prototype, "contactPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Group.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fhirResourceId" }),
        __metadata("design:type", String)
    ], Group.prototype, "fhirResourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupFeatures", elemType: GroupFeature }),
        __metadata("design:type", Array)
    ], Group.prototype, "groupFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupType" }),
        __metadata("design:type", Lookup)
    ], Group.prototype, "groupType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Group.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastImportDate" }),
        __metadata("design:type", Date)
    ], Group.prototype, "lastImportDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdate" }),
        __metadata("design:type", Date)
    ], Group.prototype, "lastUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links", elemType: Link }),
        __metadata("design:type", Array)
    ], Group.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations", elemType: Location }),
        __metadata("design:type", Array)
    ], Group.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Group.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentGroups", elemType: Group }),
        __metadata("design:type", Array)
    ], Group.prototype, "parentGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postcode" }),
        __metadata("design:type", String)
    ], Group.prototype, "postcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sftpUser" }),
        __metadata("design:type", String)
    ], Group.prototype, "sftpUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortName" }),
        __metadata("design:type", String)
    ], Group.prototype, "shortName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], Group.prototype, "visible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibleToJoin" }),
        __metadata("design:type", Boolean)
    ], Group.prototype, "visibleToJoin", void 0);
    return Group;
}(SpeakeasyBase));
export { Group };
