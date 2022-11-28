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
import * as shared from "../shared";
export var UserApiGetListFieldsEnum;
(function (UserApiGetListFieldsEnum) {
    UserApiGetListFieldsEnum["None"] = "None";
    UserApiGetListFieldsEnum["KnownLanguages"] = "KnownLanguages";
    UserApiGetListFieldsEnum["MainPicture"] = "MainPicture";
    UserApiGetListFieldsEnum["OldUsernames"] = "OldUsernames";
})(UserApiGetListFieldsEnum || (UserApiGetListFieldsEnum = {}));
export var UserApiGetListGroupsEnum;
(function (UserApiGetListGroupsEnum) {
    UserApiGetListGroupsEnum["Nothing"] = "Nothing";
    UserApiGetListGroupsEnum["Limited"] = "Limited";
    UserApiGetListGroupsEnum["Regular"] = "Regular";
    UserApiGetListGroupsEnum["Trusted"] = "Trusted";
    UserApiGetListGroupsEnum["Moderator"] = "Moderator";
    UserApiGetListGroupsEnum["Admin"] = "Admin";
})(UserApiGetListGroupsEnum || (UserApiGetListGroupsEnum = {}));
export var UserApiGetListNameMatchModeEnum;
(function (UserApiGetListNameMatchModeEnum) {
    UserApiGetListNameMatchModeEnum["Auto"] = "Auto";
    UserApiGetListNameMatchModeEnum["Partial"] = "Partial";
    UserApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    UserApiGetListNameMatchModeEnum["Exact"] = "Exact";
    UserApiGetListNameMatchModeEnum["Words"] = "Words";
})(UserApiGetListNameMatchModeEnum || (UserApiGetListNameMatchModeEnum = {}));
export var UserApiGetListSortEnum;
(function (UserApiGetListSortEnum) {
    UserApiGetListSortEnum["RegisterDate"] = "RegisterDate";
    UserApiGetListSortEnum["Name"] = "Name";
    UserApiGetListSortEnum["Group"] = "Group";
})(UserApiGetListSortEnum || (UserApiGetListSortEnum = {}));
var UserApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetListQueryParams, _super);
    function UserApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], UserApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groups" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDisabled" }),
        __metadata("design:type", Boolean)
    ], UserApiGetListQueryParams.prototype, "includeDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=joinDateAfter" }),
        __metadata("design:type", Date)
    ], UserApiGetListQueryParams.prototype, "joinDateAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=joinDateBefore" }),
        __metadata("design:type", Date)
    ], UserApiGetListQueryParams.prototype, "joinDateBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=knowsLanguage" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "knowsLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], UserApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyVerified" }),
        __metadata("design:type", Boolean)
    ], UserApiGetListQueryParams.prototype, "onlyVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], UserApiGetListQueryParams.prototype, "start", void 0);
    return UserApiGetListQueryParams;
}(SpeakeasyBase));
export { UserApiGetListQueryParams };
var UserApiGetListRequest = /** @class */ (function (_super) {
    __extends(UserApiGetListRequest, _super);
    function UserApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetListQueryParams)
    ], UserApiGetListRequest.prototype, "queryParams", void 0);
    return UserApiGetListRequest;
}(SpeakeasyBase));
export { UserApiGetListRequest };
var UserApiGetListResponse = /** @class */ (function (_super) {
    __extends(UserApiGetListResponse, _super);
    function UserApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultUserForApiContract)
    ], UserApiGetListResponse.prototype, "partialFindResultUserForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserApiGetListResponse.prototype, "statusCode", void 0);
    return UserApiGetListResponse;
}(SpeakeasyBase));
export { UserApiGetListResponse };
