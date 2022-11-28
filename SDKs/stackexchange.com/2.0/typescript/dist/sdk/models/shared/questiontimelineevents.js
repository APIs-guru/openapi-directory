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
var QuestionTimelineEventsOwnerBadgeCounts = /** @class */ (function (_super) {
    __extends(QuestionTimelineEventsOwnerBadgeCounts, _super);
    function QuestionTimelineEventsOwnerBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsOwnerBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsOwnerBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsOwnerBadgeCounts.prototype, "silver", void 0);
    return QuestionTimelineEventsOwnerBadgeCounts;
}(SpeakeasyBase));
export { QuestionTimelineEventsOwnerBadgeCounts };
var QuestionTimelineEventsOwner = /** @class */ (function (_super) {
    __extends(QuestionTimelineEventsOwner, _super);
    function QuestionTimelineEventsOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsOwner.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionTimelineEventsOwnerBadgeCounts)
    ], QuestionTimelineEventsOwner.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionTimelineEventsOwner.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionTimelineEventsOwner.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionTimelineEventsOwner.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsOwner.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsOwner.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionTimelineEventsOwner.prototype, "userType", void 0);
    return QuestionTimelineEventsOwner;
}(SpeakeasyBase));
export { QuestionTimelineEventsOwner };
var QuestionTimelineEventsUserBadgeCounts = /** @class */ (function (_super) {
    __extends(QuestionTimelineEventsUserBadgeCounts, _super);
    function QuestionTimelineEventsUserBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsUserBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsUserBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsUserBadgeCounts.prototype, "silver", void 0);
    return QuestionTimelineEventsUserBadgeCounts;
}(SpeakeasyBase));
export { QuestionTimelineEventsUserBadgeCounts };
var QuestionTimelineEventsUser = /** @class */ (function (_super) {
    __extends(QuestionTimelineEventsUser, _super);
    function QuestionTimelineEventsUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsUser.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionTimelineEventsUserBadgeCounts)
    ], QuestionTimelineEventsUser.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionTimelineEventsUser.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionTimelineEventsUser.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionTimelineEventsUser.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsUser.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEventsUser.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionTimelineEventsUser.prototype, "userType", void 0);
    return QuestionTimelineEventsUser;
}(SpeakeasyBase));
export { QuestionTimelineEventsUser };
var QuestionTimelineEvents = /** @class */ (function (_super) {
    __extends(QuestionTimelineEvents, _super);
    function QuestionTimelineEvents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEvents.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEvents.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEvents.prototype, "downVoteCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionTimelineEventsOwner)
    ], QuestionTimelineEvents.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEvents.prototype, "postId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEvents.prototype, "questionId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionTimelineEvents.prototype, "revisionGuid", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuestionTimelineEvents.prototype, "timelineType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuestionTimelineEvents.prototype, "upVoteCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuestionTimelineEventsUser)
    ], QuestionTimelineEvents.prototype, "user", void 0);
    return QuestionTimelineEvents;
}(SpeakeasyBase));
export { QuestionTimelineEvents };
