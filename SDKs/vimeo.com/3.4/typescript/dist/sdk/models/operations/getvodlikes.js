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
var GetVodLikesPathParams = /** @class */ (function (_super) {
    __extends(GetVodLikesPathParams, _super);
    function GetVodLikesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], GetVodLikesPathParams.prototype, "ondemandId", void 0);
    return GetVodLikesPathParams;
}(SpeakeasyBase));
export { GetVodLikesPathParams };
export var GetVodLikesDirectionEnum;
(function (GetVodLikesDirectionEnum) {
    GetVodLikesDirectionEnum["Asc"] = "asc";
    GetVodLikesDirectionEnum["Desc"] = "desc";
})(GetVodLikesDirectionEnum || (GetVodLikesDirectionEnum = {}));
export var GetVodLikesFilterEnum;
(function (GetVodLikesFilterEnum) {
    GetVodLikesFilterEnum["Extra"] = "extra";
    GetVodLikesFilterEnum["Main"] = "main";
    GetVodLikesFilterEnum["Trailer"] = "trailer";
})(GetVodLikesFilterEnum || (GetVodLikesFilterEnum = {}));
export var GetVodLikesSortEnum;
(function (GetVodLikesSortEnum) {
    GetVodLikesSortEnum["Alphabetical"] = "alphabetical";
    GetVodLikesSortEnum["Date"] = "date";
})(GetVodLikesSortEnum || (GetVodLikesSortEnum = {}));
var GetVodLikesQueryParams = /** @class */ (function (_super) {
    __extends(GetVodLikesQueryParams, _super);
    function GetVodLikesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetVodLikesQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetVodLikesQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVodLikesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVodLikesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVodLikesQueryParams.prototype, "sort", void 0);
    return GetVodLikesQueryParams;
}(SpeakeasyBase));
export { GetVodLikesQueryParams };
var GetVodLikesRequest = /** @class */ (function (_super) {
    __extends(GetVodLikesRequest, _super);
    function GetVodLikesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodLikesPathParams)
    ], GetVodLikesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodLikesQueryParams)
    ], GetVodLikesRequest.prototype, "queryParams", void 0);
    return GetVodLikesRequest;
}(SpeakeasyBase));
export { GetVodLikesRequest };
var GetVodLikesResponse = /** @class */ (function (_super) {
    __extends(GetVodLikesResponse, _super);
    function GetVodLikesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVodLikesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVodLikesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetVodLikesResponse.prototype, "users", void 0);
    return GetVodLikesResponse;
}(SpeakeasyBase));
export { GetVodLikesResponse };
