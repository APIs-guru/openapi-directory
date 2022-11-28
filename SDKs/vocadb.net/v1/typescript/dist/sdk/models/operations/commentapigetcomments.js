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
export var CommentApiGetCommentsEntryTypeEnum;
(function (CommentApiGetCommentsEntryTypeEnum) {
    CommentApiGetCommentsEntryTypeEnum["Undefined"] = "Undefined";
    CommentApiGetCommentsEntryTypeEnum["Album"] = "Album";
    CommentApiGetCommentsEntryTypeEnum["Artist"] = "Artist";
    CommentApiGetCommentsEntryTypeEnum["DiscussionTopic"] = "DiscussionTopic";
    CommentApiGetCommentsEntryTypeEnum["Pv"] = "PV";
    CommentApiGetCommentsEntryTypeEnum["ReleaseEvent"] = "ReleaseEvent";
    CommentApiGetCommentsEntryTypeEnum["ReleaseEventSeries"] = "ReleaseEventSeries";
    CommentApiGetCommentsEntryTypeEnum["Song"] = "Song";
    CommentApiGetCommentsEntryTypeEnum["SongList"] = "SongList";
    CommentApiGetCommentsEntryTypeEnum["Tag"] = "Tag";
    CommentApiGetCommentsEntryTypeEnum["User"] = "User";
    CommentApiGetCommentsEntryTypeEnum["Venue"] = "Venue";
})(CommentApiGetCommentsEntryTypeEnum || (CommentApiGetCommentsEntryTypeEnum = {}));
var CommentApiGetCommentsPathParams = /** @class */ (function (_super) {
    __extends(CommentApiGetCommentsPathParams, _super);
    function CommentApiGetCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entryType" }),
        __metadata("design:type", String)
    ], CommentApiGetCommentsPathParams.prototype, "entryType", void 0);
    return CommentApiGetCommentsPathParams;
}(SpeakeasyBase));
export { CommentApiGetCommentsPathParams };
var CommentApiGetCommentsQueryParams = /** @class */ (function (_super) {
    __extends(CommentApiGetCommentsQueryParams, _super);
    function CommentApiGetCommentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryId" }),
        __metadata("design:type", Number)
    ], CommentApiGetCommentsQueryParams.prototype, "entryId", void 0);
    return CommentApiGetCommentsQueryParams;
}(SpeakeasyBase));
export { CommentApiGetCommentsQueryParams };
var CommentApiGetCommentsRequest = /** @class */ (function (_super) {
    __extends(CommentApiGetCommentsRequest, _super);
    function CommentApiGetCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CommentApiGetCommentsPathParams)
    ], CommentApiGetCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CommentApiGetCommentsQueryParams)
    ], CommentApiGetCommentsRequest.prototype, "queryParams", void 0);
    return CommentApiGetCommentsRequest;
}(SpeakeasyBase));
export { CommentApiGetCommentsRequest };
var CommentApiGetCommentsResponse = /** @class */ (function (_super) {
    __extends(CommentApiGetCommentsResponse, _super);
    function CommentApiGetCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CommentApiGetCommentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CommentApiGetCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultCommentForApiContract)
    ], CommentApiGetCommentsResponse.prototype, "partialFindResultCommentForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CommentApiGetCommentsResponse.prototype, "statusCode", void 0);
    return CommentApiGetCommentsResponse;
}(SpeakeasyBase));
export { CommentApiGetCommentsResponse };
