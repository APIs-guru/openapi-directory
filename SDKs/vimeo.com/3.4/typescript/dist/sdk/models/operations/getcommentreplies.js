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
var GetCommentRepliesPathParams = /** @class */ (function (_super) {
    __extends(GetCommentRepliesPathParams, _super);
    function GetCommentRepliesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], GetCommentRepliesPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], GetCommentRepliesPathParams.prototype, "videoId", void 0);
    return GetCommentRepliesPathParams;
}(SpeakeasyBase));
export { GetCommentRepliesPathParams };
var GetCommentRepliesQueryParams = /** @class */ (function (_super) {
    __extends(GetCommentRepliesQueryParams, _super);
    function GetCommentRepliesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommentRepliesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommentRepliesQueryParams.prototype, "perPage", void 0);
    return GetCommentRepliesQueryParams;
}(SpeakeasyBase));
export { GetCommentRepliesQueryParams };
var GetCommentRepliesRequest = /** @class */ (function (_super) {
    __extends(GetCommentRepliesRequest, _super);
    function GetCommentRepliesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommentRepliesPathParams)
    ], GetCommentRepliesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommentRepliesQueryParams)
    ], GetCommentRepliesRequest.prototype, "queryParams", void 0);
    return GetCommentRepliesRequest;
}(SpeakeasyBase));
export { GetCommentRepliesRequest };
var GetCommentRepliesResponse = /** @class */ (function (_super) {
    __extends(GetCommentRepliesResponse, _super);
    function GetCommentRepliesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCommentRepliesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCommentRepliesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Comment }),
        __metadata("design:type", Array)
    ], GetCommentRepliesResponse.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetCommentRepliesResponse.prototype, "legacyError", void 0);
    return GetCommentRepliesResponse;
}(SpeakeasyBase));
export { GetCommentRepliesResponse };
