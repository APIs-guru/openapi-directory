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
var GetVideoLikesPathParams = /** @class */ (function (_super) {
    __extends(GetVideoLikesPathParams, _super);
    function GetVideoLikesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], GetVideoLikesPathParams.prototype, "videoId", void 0);
    return GetVideoLikesPathParams;
}(SpeakeasyBase));
export { GetVideoLikesPathParams };
export var GetVideoLikesDirectionEnum;
(function (GetVideoLikesDirectionEnum) {
    GetVideoLikesDirectionEnum["Asc"] = "asc";
    GetVideoLikesDirectionEnum["Desc"] = "desc";
})(GetVideoLikesDirectionEnum || (GetVideoLikesDirectionEnum = {}));
export var GetVideoLikesSortEnum;
(function (GetVideoLikesSortEnum) {
    GetVideoLikesSortEnum["Alphabetical"] = "alphabetical";
    GetVideoLikesSortEnum["Date"] = "date";
})(GetVideoLikesSortEnum || (GetVideoLikesSortEnum = {}));
var GetVideoLikesQueryParams = /** @class */ (function (_super) {
    __extends(GetVideoLikesQueryParams, _super);
    function GetVideoLikesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetVideoLikesQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVideoLikesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVideoLikesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVideoLikesQueryParams.prototype, "sort", void 0);
    return GetVideoLikesQueryParams;
}(SpeakeasyBase));
export { GetVideoLikesQueryParams };
var GetVideoLikesRequest = /** @class */ (function (_super) {
    __extends(GetVideoLikesRequest, _super);
    function GetVideoLikesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoLikesPathParams)
    ], GetVideoLikesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoLikesQueryParams)
    ], GetVideoLikesRequest.prototype, "queryParams", void 0);
    return GetVideoLikesRequest;
}(SpeakeasyBase));
export { GetVideoLikesRequest };
var GetVideoLikesResponse = /** @class */ (function (_super) {
    __extends(GetVideoLikesResponse, _super);
    function GetVideoLikesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideoLikesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideoLikesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetVideoLikesResponse.prototype, "users", void 0);
    return GetVideoLikesResponse;
}(SpeakeasyBase));
export { GetVideoLikesResponse };
