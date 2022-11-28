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
var GetVideosWithTagPathParams = /** @class */ (function (_super) {
    __extends(GetVideosWithTagPathParams, _super);
    function GetVideosWithTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" }),
        __metadata("design:type", String)
    ], GetVideosWithTagPathParams.prototype, "word", void 0);
    return GetVideosWithTagPathParams;
}(SpeakeasyBase));
export { GetVideosWithTagPathParams };
export var GetVideosWithTagDirectionEnum;
(function (GetVideosWithTagDirectionEnum) {
    GetVideosWithTagDirectionEnum["Asc"] = "asc";
    GetVideosWithTagDirectionEnum["Desc"] = "desc";
})(GetVideosWithTagDirectionEnum || (GetVideosWithTagDirectionEnum = {}));
export var GetVideosWithTagSortEnum;
(function (GetVideosWithTagSortEnum) {
    GetVideosWithTagSortEnum["CreatedTime"] = "created_time";
    GetVideosWithTagSortEnum["Duration"] = "duration";
    GetVideosWithTagSortEnum["Name"] = "name";
})(GetVideosWithTagSortEnum || (GetVideosWithTagSortEnum = {}));
var GetVideosWithTagQueryParams = /** @class */ (function (_super) {
    __extends(GetVideosWithTagQueryParams, _super);
    function GetVideosWithTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetVideosWithTagQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVideosWithTagQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVideosWithTagQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVideosWithTagQueryParams.prototype, "sort", void 0);
    return GetVideosWithTagQueryParams;
}(SpeakeasyBase));
export { GetVideosWithTagQueryParams };
var GetVideosWithTagRequest = /** @class */ (function (_super) {
    __extends(GetVideosWithTagRequest, _super);
    function GetVideosWithTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosWithTagPathParams)
    ], GetVideosWithTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosWithTagQueryParams)
    ], GetVideosWithTagRequest.prototype, "queryParams", void 0);
    return GetVideosWithTagRequest;
}(SpeakeasyBase));
export { GetVideosWithTagRequest };
var GetVideosWithTagResponse = /** @class */ (function (_super) {
    __extends(GetVideosWithTagResponse, _super);
    function GetVideosWithTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideosWithTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideosWithTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetVideosWithTagResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetVideosWithTagResponse.prototype, "videos", void 0);
    return GetVideosWithTagResponse;
}(SpeakeasyBase));
export { GetVideosWithTagResponse };
