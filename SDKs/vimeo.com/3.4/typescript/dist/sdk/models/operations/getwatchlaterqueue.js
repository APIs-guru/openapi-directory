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
var GetWatchLaterQueuePathParams = /** @class */ (function (_super) {
    __extends(GetWatchLaterQueuePathParams, _super);
    function GetWatchLaterQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetWatchLaterQueuePathParams.prototype, "userId", void 0);
    return GetWatchLaterQueuePathParams;
}(SpeakeasyBase));
export { GetWatchLaterQueuePathParams };
export var GetWatchLaterQueueDirectionEnum;
(function (GetWatchLaterQueueDirectionEnum) {
    GetWatchLaterQueueDirectionEnum["Asc"] = "asc";
    GetWatchLaterQueueDirectionEnum["Desc"] = "desc";
})(GetWatchLaterQueueDirectionEnum || (GetWatchLaterQueueDirectionEnum = {}));
export var GetWatchLaterQueueFilterEnum;
(function (GetWatchLaterQueueFilterEnum) {
    GetWatchLaterQueueFilterEnum["Embeddable"] = "embeddable";
})(GetWatchLaterQueueFilterEnum || (GetWatchLaterQueueFilterEnum = {}));
export var GetWatchLaterQueueSortEnum;
(function (GetWatchLaterQueueSortEnum) {
    GetWatchLaterQueueSortEnum["Alphabetical"] = "alphabetical";
    GetWatchLaterQueueSortEnum["Comments"] = "comments";
    GetWatchLaterQueueSortEnum["Date"] = "date";
    GetWatchLaterQueueSortEnum["Duration"] = "duration";
    GetWatchLaterQueueSortEnum["Likes"] = "likes";
    GetWatchLaterQueueSortEnum["Plays"] = "plays";
})(GetWatchLaterQueueSortEnum || (GetWatchLaterQueueSortEnum = {}));
var GetWatchLaterQueueQueryParams = /** @class */ (function (_super) {
    __extends(GetWatchLaterQueueQueryParams, _super);
    function GetWatchLaterQueueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetWatchLaterQueueQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetWatchLaterQueueQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetWatchLaterQueueQueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetWatchLaterQueueQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetWatchLaterQueueQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetWatchLaterQueueQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetWatchLaterQueueQueryParams.prototype, "sort", void 0);
    return GetWatchLaterQueueQueryParams;
}(SpeakeasyBase));
export { GetWatchLaterQueueQueryParams };
var GetWatchLaterQueueSecurity = /** @class */ (function (_super) {
    __extends(GetWatchLaterQueueSecurity, _super);
    function GetWatchLaterQueueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetWatchLaterQueueSecurity.prototype, "oauth2", void 0);
    return GetWatchLaterQueueSecurity;
}(SpeakeasyBase));
export { GetWatchLaterQueueSecurity };
var GetWatchLaterQueueRequest = /** @class */ (function (_super) {
    __extends(GetWatchLaterQueueRequest, _super);
    function GetWatchLaterQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWatchLaterQueuePathParams)
    ], GetWatchLaterQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWatchLaterQueueQueryParams)
    ], GetWatchLaterQueueRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWatchLaterQueueSecurity)
    ], GetWatchLaterQueueRequest.prototype, "security", void 0);
    return GetWatchLaterQueueRequest;
}(SpeakeasyBase));
export { GetWatchLaterQueueRequest };
var GetWatchLaterQueueResponse = /** @class */ (function (_super) {
    __extends(GetWatchLaterQueueResponse, _super);
    function GetWatchLaterQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWatchLaterQueueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWatchLaterQueueResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetWatchLaterQueueResponse.prototype, "videos", void 0);
    return GetWatchLaterQueueResponse;
}(SpeakeasyBase));
export { GetWatchLaterQueueResponse };
