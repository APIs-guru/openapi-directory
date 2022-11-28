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
import { BiographyItem } from "./biographyitem";
var MemberBiography = /** @class */ (function (_super) {
    __extends(MemberBiography, _super);
    function MemberBiography() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committeeMemberships", elemType: BiographyItem }),
        __metadata("design:type", Array)
    ], MemberBiography.prototype, "committeeMemberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=electionsContested", elemType: BiographyItem }),
        __metadata("design:type", Array)
    ], MemberBiography.prototype, "electionsContested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=governmentPosts", elemType: BiographyItem }),
        __metadata("design:type", Array)
    ], MemberBiography.prototype, "governmentPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=houseMemberships", elemType: BiographyItem }),
        __metadata("design:type", Array)
    ], MemberBiography.prototype, "houseMemberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oppositionPosts", elemType: BiographyItem }),
        __metadata("design:type", Array)
    ], MemberBiography.prototype, "oppositionPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherPosts", elemType: BiographyItem }),
        __metadata("design:type", Array)
    ], MemberBiography.prototype, "otherPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partyAffiliations", elemType: BiographyItem }),
        __metadata("design:type", Array)
    ], MemberBiography.prototype, "partyAffiliations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=representations", elemType: BiographyItem }),
        __metadata("design:type", Array)
    ], MemberBiography.prototype, "representations", void 0);
    return MemberBiography;
}(SpeakeasyBase));
export { MemberBiography };
