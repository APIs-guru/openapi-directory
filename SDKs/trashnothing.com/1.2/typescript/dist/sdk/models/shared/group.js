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
// GroupCountry
/**
 * Provides information about the country that is associated with a group.  May be null.
**/
var GroupCountry = /** @class */ (function (_super) {
    __extends(GroupCountry, _super);
    function GroupCountry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abbreviation" }),
        __metadata("design:type", String)
    ], GroupCountry.prototype, "abbreviation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GroupCountry.prototype, "name", void 0);
    return GroupCountry;
}(SpeakeasyBase));
export { GroupCountry };
// GroupMembershipQuestionnaire
/**
 * Membership questionnaire data.  Will be null unless the membership status is pending-questions.
**/
var GroupMembershipQuestionnaire = /** @class */ (function (_super) {
    __extends(GroupMembershipQuestionnaire, _super);
    function GroupMembershipQuestionnaire() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GroupMembershipQuestionnaire.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questions" }),
        __metadata("design:type", Array)
    ], GroupMembershipQuestionnaire.prototype, "questions", void 0);
    return GroupMembershipQuestionnaire;
}(SpeakeasyBase));
export { GroupMembershipQuestionnaire };
// GroupMembership
/**
 * Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group.
 *
**/
var GroupMembership = /** @class */ (function (_super) {
    __extends(GroupMembership, _super);
    function GroupMembership() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GroupMembership.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionnaire" }),
        __metadata("design:type", GroupMembershipQuestionnaire)
    ], GroupMembership.prototype, "questionnaire", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GroupMembership.prototype, "status", void 0);
    return GroupMembership;
}(SpeakeasyBase));
export { GroupMembership };
// GroupRegion
/**
 * Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null.
**/
var GroupRegion = /** @class */ (function (_super) {
    __extends(GroupRegion, _super);
    function GroupRegion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abbreviation" }),
        __metadata("design:type", String)
    ], GroupRegion.prototype, "abbreviation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GroupRegion.prototype, "name", void 0);
    return GroupRegion;
}(SpeakeasyBase));
export { GroupRegion };
// Group
/**
 * Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed).
 *
**/
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", GroupCountry)
    ], Group.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_id" }),
        __metadata("design:type", String)
    ], Group.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_questions" }),
        __metadata("design:type", Boolean)
    ], Group.prototype, "hasQuestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], Group.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], Group.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], Group.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], Group.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=member_count" }),
        __metadata("design:type", Number)
    ], Group.prototype, "memberCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membership" }),
        __metadata("design:type", GroupMembership)
    ], Group.prototype, "membership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Group.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_archives" }),
        __metadata("design:type", Boolean)
    ], Group.prototype, "openArchives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_membership" }),
        __metadata("design:type", Boolean)
    ], Group.prototype, "openMembership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", GroupRegion)
    ], Group.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Group.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utc_offset" }),
        __metadata("design:type", Number)
    ], Group.prototype, "utcOffset", void 0);
    return Group;
}(SpeakeasyBase));
export { Group };
