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
var UserApiGetSongListsPathParams = /** @class */ (function (_super) {
    __extends(UserApiGetSongListsPathParams, _super);
    function UserApiGetSongListsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserApiGetSongListsPathParams.prototype, "id", void 0);
    return UserApiGetSongListsPathParams;
}(SpeakeasyBase));
export { UserApiGetSongListsPathParams };
export var UserApiGetSongListsFieldsEnum;
(function (UserApiGetSongListsFieldsEnum) {
    UserApiGetSongListsFieldsEnum["None"] = "None";
    UserApiGetSongListsFieldsEnum["Description"] = "Description";
    UserApiGetSongListsFieldsEnum["Events"] = "Events";
    UserApiGetSongListsFieldsEnum["MainPicture"] = "MainPicture";
    UserApiGetSongListsFieldsEnum["Tags"] = "Tags";
})(UserApiGetSongListsFieldsEnum || (UserApiGetSongListsFieldsEnum = {}));
export var UserApiGetSongListsNameMatchModeEnum;
(function (UserApiGetSongListsNameMatchModeEnum) {
    UserApiGetSongListsNameMatchModeEnum["Auto"] = "Auto";
    UserApiGetSongListsNameMatchModeEnum["Partial"] = "Partial";
    UserApiGetSongListsNameMatchModeEnum["StartsWith"] = "StartsWith";
    UserApiGetSongListsNameMatchModeEnum["Exact"] = "Exact";
    UserApiGetSongListsNameMatchModeEnum["Words"] = "Words";
})(UserApiGetSongListsNameMatchModeEnum || (UserApiGetSongListsNameMatchModeEnum = {}));
export var UserApiGetSongListsSortEnum;
(function (UserApiGetSongListsSortEnum) {
    UserApiGetSongListsSortEnum["None"] = "None";
    UserApiGetSongListsSortEnum["Name"] = "Name";
    UserApiGetSongListsSortEnum["Date"] = "Date";
    UserApiGetSongListsSortEnum["CreateDate"] = "CreateDate";
})(UserApiGetSongListsSortEnum || (UserApiGetSongListsSortEnum = {}));
var UserApiGetSongListsQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetSongListsQueryParams, _super);
    function UserApiGetSongListsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" }),
        __metadata("design:type", Boolean)
    ], UserApiGetSongListsQueryParams.prototype, "childTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], UserApiGetSongListsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], UserApiGetSongListsQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], UserApiGetSongListsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], UserApiGetSongListsQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], UserApiGetSongListsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], UserApiGetSongListsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], UserApiGetSongListsQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], UserApiGetSongListsQueryParams.prototype, "tagId", void 0);
    return UserApiGetSongListsQueryParams;
}(SpeakeasyBase));
export { UserApiGetSongListsQueryParams };
var UserApiGetSongListsRequest = /** @class */ (function (_super) {
    __extends(UserApiGetSongListsRequest, _super);
    function UserApiGetSongListsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetSongListsPathParams)
    ], UserApiGetSongListsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetSongListsQueryParams)
    ], UserApiGetSongListsRequest.prototype, "queryParams", void 0);
    return UserApiGetSongListsRequest;
}(SpeakeasyBase));
export { UserApiGetSongListsRequest };
var UserApiGetSongListsResponse = /** @class */ (function (_super) {
    __extends(UserApiGetSongListsResponse, _super);
    function UserApiGetSongListsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetSongListsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetSongListsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultSongListForApiContract)
    ], UserApiGetSongListsResponse.prototype, "partialFindResultSongListForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserApiGetSongListsResponse.prototype, "statusCode", void 0);
    return UserApiGetSongListsResponse;
}(SpeakeasyBase));
export { UserApiGetSongListsResponse };
