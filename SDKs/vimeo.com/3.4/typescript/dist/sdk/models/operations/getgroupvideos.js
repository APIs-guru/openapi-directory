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
var GetGroupVideosPathParams = /** @class */ (function (_super) {
    __extends(GetGroupVideosPathParams, _super);
    function GetGroupVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" }),
        __metadata("design:type", Number)
    ], GetGroupVideosPathParams.prototype, "groupId", void 0);
    return GetGroupVideosPathParams;
}(SpeakeasyBase));
export { GetGroupVideosPathParams };
export var GetGroupVideosDirectionEnum;
(function (GetGroupVideosDirectionEnum) {
    GetGroupVideosDirectionEnum["Asc"] = "asc";
    GetGroupVideosDirectionEnum["Desc"] = "desc";
})(GetGroupVideosDirectionEnum || (GetGroupVideosDirectionEnum = {}));
export var GetGroupVideosFilterEnum;
(function (GetGroupVideosFilterEnum) {
    GetGroupVideosFilterEnum["Embeddable"] = "embeddable";
})(GetGroupVideosFilterEnum || (GetGroupVideosFilterEnum = {}));
export var GetGroupVideosSortEnum;
(function (GetGroupVideosSortEnum) {
    GetGroupVideosSortEnum["Alphabetical"] = "alphabetical";
    GetGroupVideosSortEnum["Comments"] = "comments";
    GetGroupVideosSortEnum["Date"] = "date";
    GetGroupVideosSortEnum["Duration"] = "duration";
    GetGroupVideosSortEnum["Likes"] = "likes";
    GetGroupVideosSortEnum["Plays"] = "plays";
})(GetGroupVideosSortEnum || (GetGroupVideosSortEnum = {}));
var GetGroupVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetGroupVideosQueryParams, _super);
    function GetGroupVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetGroupVideosQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetGroupVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetGroupVideosQueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetGroupVideosQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetGroupVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetGroupVideosQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetGroupVideosQueryParams.prototype, "sort", void 0);
    return GetGroupVideosQueryParams;
}(SpeakeasyBase));
export { GetGroupVideosQueryParams };
var GetGroupVideosRequest = /** @class */ (function (_super) {
    __extends(GetGroupVideosRequest, _super);
    function GetGroupVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupVideosPathParams)
    ], GetGroupVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupVideosQueryParams)
    ], GetGroupVideosRequest.prototype, "queryParams", void 0);
    return GetGroupVideosRequest;
}(SpeakeasyBase));
export { GetGroupVideosRequest };
var GetGroupVideosResponse = /** @class */ (function (_super) {
    __extends(GetGroupVideosResponse, _super);
    function GetGroupVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGroupVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGroupVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetGroupVideosResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetGroupVideosResponse.prototype, "videos", void 0);
    return GetGroupVideosResponse;
}(SpeakeasyBase));
export { GetGroupVideosResponse };
