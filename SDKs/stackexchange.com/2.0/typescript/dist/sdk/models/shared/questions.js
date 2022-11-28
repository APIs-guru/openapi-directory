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
var QuestionsBountyUserBadgeCounts = /** @class */ (function (_super) {
    __extends(QuestionsBountyUserBadgeCounts, _super);
    function QuestionsBountyUserBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsBountyUserBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsBountyUserBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsBountyUserBadgeCounts.prototype, "silver", void 0);
    return QuestionsBountyUserBadgeCounts;
}(SpeakeasyBase));
export { QuestionsBountyUserBadgeCounts };
var QuestionsBountyUser = /** @class */ (function (_super) {
    __extends(QuestionsBountyUser, _super);
    function QuestionsBountyUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsBountyUser.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsBountyUserBadgeCounts)
    ], QuestionsBountyUser.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsBountyUser.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsBountyUser.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsBountyUser.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsBountyUser.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsBountyUser.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsBountyUser.prototype, "userType", void 0);
    return QuestionsBountyUser;
}(SpeakeasyBase));
export { QuestionsBountyUser };
var QuestionsClosedDetails = /** @class */ (function (_super) {
    __extends(QuestionsClosedDetails, _super);
    function QuestionsClosedDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], QuestionsClosedDetails.prototype, "byUsers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsClosedDetails.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], QuestionsClosedDetails.prototype, "onHold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], QuestionsClosedDetails.prototype, "originalQuestions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsClosedDetails.prototype, "reason", void 0);
    return QuestionsClosedDetails;
}(SpeakeasyBase));
export { QuestionsClosedDetails };
var QuestionsLastEditorBadgeCounts = /** @class */ (function (_super) {
    __extends(QuestionsLastEditorBadgeCounts, _super);
    function QuestionsLastEditorBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsLastEditorBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsLastEditorBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsLastEditorBadgeCounts.prototype, "silver", void 0);
    return QuestionsLastEditorBadgeCounts;
}(SpeakeasyBase));
export { QuestionsLastEditorBadgeCounts };
var QuestionsLastEditor = /** @class */ (function (_super) {
    __extends(QuestionsLastEditor, _super);
    function QuestionsLastEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsLastEditor.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsLastEditorBadgeCounts)
    ], QuestionsLastEditor.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsLastEditor.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsLastEditor.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsLastEditor.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsLastEditor.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsLastEditor.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsLastEditor.prototype, "userType", void 0);
    return QuestionsLastEditor;
}(SpeakeasyBase));
export { QuestionsLastEditor };
var QuestionsMigratedFromOtherSiteStyling = /** @class */ (function (_super) {
    __extends(QuestionsMigratedFromOtherSiteStyling, _super);
    function QuestionsMigratedFromOtherSiteStyling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSiteStyling.prototype, "linkColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSiteStyling.prototype, "tagBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSiteStyling.prototype, "tagForegroundColor", void 0);
    return QuestionsMigratedFromOtherSiteStyling;
}(SpeakeasyBase));
export { QuestionsMigratedFromOtherSiteStyling };
var QuestionsMigratedFromOtherSite = /** @class */ (function (_super) {
    __extends(QuestionsMigratedFromOtherSite, _super);
    function QuestionsMigratedFromOtherSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], QuestionsMigratedFromOtherSite.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSite.prototype, "apiSiteParameter", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSite.prototype, "audience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsMigratedFromOtherSite.prototype, "closedBetaDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSite.prototype, "faviconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSite.prototype, "highResolutionIconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSite.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsMigratedFromOtherSite.prototype, "launchDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSite.prototype, "logoUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], QuestionsMigratedFromOtherSite.prototype, "markdownExtensions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSite.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsMigratedFromOtherSite.prototype, "openBetaDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], QuestionsMigratedFromOtherSite.prototype, "relatedSites", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSite.prototype, "siteState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSite.prototype, "siteType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSite.prototype, "siteUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsMigratedFromOtherSiteStyling)
    ], QuestionsMigratedFromOtherSite.prototype, "styling", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedFromOtherSite.prototype, "twitterAccount", void 0);
    return QuestionsMigratedFromOtherSite;
}(SpeakeasyBase));
export { QuestionsMigratedFromOtherSite };
var QuestionsMigratedFrom = /** @class */ (function (_super) {
    __extends(QuestionsMigratedFrom, _super);
    function QuestionsMigratedFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsMigratedFrom.prototype, "onDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsMigratedFromOtherSite)
    ], QuestionsMigratedFrom.prototype, "otherSite", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsMigratedFrom.prototype, "questionId", void 0);
    return QuestionsMigratedFrom;
}(SpeakeasyBase));
export { QuestionsMigratedFrom };
var QuestionsMigratedToOtherSiteStyling = /** @class */ (function (_super) {
    __extends(QuestionsMigratedToOtherSiteStyling, _super);
    function QuestionsMigratedToOtherSiteStyling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSiteStyling.prototype, "linkColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSiteStyling.prototype, "tagBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSiteStyling.prototype, "tagForegroundColor", void 0);
    return QuestionsMigratedToOtherSiteStyling;
}(SpeakeasyBase));
export { QuestionsMigratedToOtherSiteStyling };
var QuestionsMigratedToOtherSite = /** @class */ (function (_super) {
    __extends(QuestionsMigratedToOtherSite, _super);
    function QuestionsMigratedToOtherSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], QuestionsMigratedToOtherSite.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSite.prototype, "apiSiteParameter", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSite.prototype, "audience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsMigratedToOtherSite.prototype, "closedBetaDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSite.prototype, "faviconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSite.prototype, "highResolutionIconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSite.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsMigratedToOtherSite.prototype, "launchDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSite.prototype, "logoUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], QuestionsMigratedToOtherSite.prototype, "markdownExtensions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSite.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsMigratedToOtherSite.prototype, "openBetaDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], QuestionsMigratedToOtherSite.prototype, "relatedSites", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSite.prototype, "siteState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSite.prototype, "siteType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSite.prototype, "siteUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsMigratedToOtherSiteStyling)
    ], QuestionsMigratedToOtherSite.prototype, "styling", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsMigratedToOtherSite.prototype, "twitterAccount", void 0);
    return QuestionsMigratedToOtherSite;
}(SpeakeasyBase));
export { QuestionsMigratedToOtherSite };
var QuestionsMigratedTo = /** @class */ (function (_super) {
    __extends(QuestionsMigratedTo, _super);
    function QuestionsMigratedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsMigratedTo.prototype, "onDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsMigratedToOtherSite)
    ], QuestionsMigratedTo.prototype, "otherSite", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsMigratedTo.prototype, "questionId", void 0);
    return QuestionsMigratedTo;
}(SpeakeasyBase));
export { QuestionsMigratedTo };
var QuestionsNotice = /** @class */ (function (_super) {
    __extends(QuestionsNotice, _super);
    function QuestionsNotice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsNotice.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsNotice.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsNotice.prototype, "ownerUserId", void 0);
    return QuestionsNotice;
}(SpeakeasyBase));
export { QuestionsNotice };
var QuestionsOwnerBadgeCounts = /** @class */ (function (_super) {
    __extends(QuestionsOwnerBadgeCounts, _super);
    function QuestionsOwnerBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsOwnerBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsOwnerBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsOwnerBadgeCounts.prototype, "silver", void 0);
    return QuestionsOwnerBadgeCounts;
}(SpeakeasyBase));
export { QuestionsOwnerBadgeCounts };
var QuestionsOwner = /** @class */ (function (_super) {
    __extends(QuestionsOwner, _super);
    function QuestionsOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsOwner.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsOwnerBadgeCounts)
    ], QuestionsOwner.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsOwner.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsOwner.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsOwner.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsOwner.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionsOwner.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionsOwner.prototype, "userType", void 0);
    return QuestionsOwner;
}(SpeakeasyBase));
export { QuestionsOwner };
var Questions = /** @class */ (function (_super) {
    __extends(Questions, _super);
    function Questions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "acceptedAnswerId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "answerCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Questions.prototype, "answers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Questions.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Questions.prototype, "bodyMarkdown", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "bountyAmount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "bountyClosesDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsBountyUser)
    ], Questions.prototype, "bountyUser", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Questions.prototype, "canClose", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Questions.prototype, "canFlag", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "closeVoteCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "closedDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsClosedDetails)
    ], Questions.prototype, "closedDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Questions.prototype, "closedReason", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "commentCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Questions.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "communityOwnedDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "deleteVoteCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "downVoteCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Questions.prototype, "downvoted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "favoriteCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Questions.prototype, "favorited", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Questions.prototype, "isAnswered", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "lastActivityDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "lastEditDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsLastEditor)
    ], Questions.prototype, "lastEditor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Questions.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "lockedDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsMigratedFrom)
    ], Questions.prototype, "migratedFrom", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsMigratedTo)
    ], Questions.prototype, "migratedTo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsNotice)
    ], Questions.prototype, "notice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionsOwner)
    ], Questions.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "protectedDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "questionId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "reopenVoteCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Questions.prototype, "shareLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Questions.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Questions.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "upVoteCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Questions.prototype, "upvoted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Questions.prototype, "viewCount", void 0);
    return Questions;
}(SpeakeasyBase));
export { Questions };
