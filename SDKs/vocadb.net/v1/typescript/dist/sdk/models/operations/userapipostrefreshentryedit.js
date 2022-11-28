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
export var UserApiPostRefreshEntryEditEntryTypeEnum;
(function (UserApiPostRefreshEntryEditEntryTypeEnum) {
    UserApiPostRefreshEntryEditEntryTypeEnum["Undefined"] = "Undefined";
    UserApiPostRefreshEntryEditEntryTypeEnum["Album"] = "Album";
    UserApiPostRefreshEntryEditEntryTypeEnum["Artist"] = "Artist";
    UserApiPostRefreshEntryEditEntryTypeEnum["DiscussionTopic"] = "DiscussionTopic";
    UserApiPostRefreshEntryEditEntryTypeEnum["Pv"] = "PV";
    UserApiPostRefreshEntryEditEntryTypeEnum["ReleaseEvent"] = "ReleaseEvent";
    UserApiPostRefreshEntryEditEntryTypeEnum["ReleaseEventSeries"] = "ReleaseEventSeries";
    UserApiPostRefreshEntryEditEntryTypeEnum["Song"] = "Song";
    UserApiPostRefreshEntryEditEntryTypeEnum["SongList"] = "SongList";
    UserApiPostRefreshEntryEditEntryTypeEnum["Tag"] = "Tag";
    UserApiPostRefreshEntryEditEntryTypeEnum["User"] = "User";
    UserApiPostRefreshEntryEditEntryTypeEnum["Venue"] = "Venue";
})(UserApiPostRefreshEntryEditEntryTypeEnum || (UserApiPostRefreshEntryEditEntryTypeEnum = {}));
var UserApiPostRefreshEntryEditQueryParams = /** @class */ (function (_super) {
    __extends(UserApiPostRefreshEntryEditQueryParams, _super);
    function UserApiPostRefreshEntryEditQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryId" }),
        __metadata("design:type", Number)
    ], UserApiPostRefreshEntryEditQueryParams.prototype, "entryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryType" }),
        __metadata("design:type", String)
    ], UserApiPostRefreshEntryEditQueryParams.prototype, "entryType", void 0);
    return UserApiPostRefreshEntryEditQueryParams;
}(SpeakeasyBase));
export { UserApiPostRefreshEntryEditQueryParams };
var UserApiPostRefreshEntryEditRequest = /** @class */ (function (_super) {
    __extends(UserApiPostRefreshEntryEditRequest, _super);
    function UserApiPostRefreshEntryEditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiPostRefreshEntryEditQueryParams)
    ], UserApiPostRefreshEntryEditRequest.prototype, "queryParams", void 0);
    return UserApiPostRefreshEntryEditRequest;
}(SpeakeasyBase));
export { UserApiPostRefreshEntryEditRequest };
var UserApiPostRefreshEntryEditResponse = /** @class */ (function (_super) {
    __extends(UserApiPostRefreshEntryEditResponse, _super);
    function UserApiPostRefreshEntryEditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiPostRefreshEntryEditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserApiPostRefreshEntryEditResponse.prototype, "statusCode", void 0);
    return UserApiPostRefreshEntryEditResponse;
}(SpeakeasyBase));
export { UserApiPostRefreshEntryEditResponse };
