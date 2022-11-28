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
var GetFollowersPathParams = /** @class */ (function (_super) {
    __extends(GetFollowersPathParams, _super);
    function GetFollowersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetFollowersPathParams.prototype, "userId", void 0);
    return GetFollowersPathParams;
}(SpeakeasyBase));
export { GetFollowersPathParams };
export var GetFollowersDirectionEnum;
(function (GetFollowersDirectionEnum) {
    GetFollowersDirectionEnum["Asc"] = "asc";
    GetFollowersDirectionEnum["Desc"] = "desc";
})(GetFollowersDirectionEnum || (GetFollowersDirectionEnum = {}));
export var GetFollowersSortEnum;
(function (GetFollowersSortEnum) {
    GetFollowersSortEnum["Alphabetical"] = "alphabetical";
    GetFollowersSortEnum["Date"] = "date";
})(GetFollowersSortEnum || (GetFollowersSortEnum = {}));
var GetFollowersQueryParams = /** @class */ (function (_super) {
    __extends(GetFollowersQueryParams, _super);
    function GetFollowersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetFollowersQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFollowersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetFollowersQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetFollowersQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetFollowersQueryParams.prototype, "sort", void 0);
    return GetFollowersQueryParams;
}(SpeakeasyBase));
export { GetFollowersQueryParams };
var GetFollowersRequest = /** @class */ (function (_super) {
    __extends(GetFollowersRequest, _super);
    function GetFollowersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFollowersPathParams)
    ], GetFollowersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFollowersQueryParams)
    ], GetFollowersRequest.prototype, "queryParams", void 0);
    return GetFollowersRequest;
}(SpeakeasyBase));
export { GetFollowersRequest };
var GetFollowersResponse = /** @class */ (function (_super) {
    __extends(GetFollowersResponse, _super);
    function GetFollowersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFollowersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFollowersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetFollowersResponse.prototype, "users", void 0);
    return GetFollowersResponse;
}(SpeakeasyBase));
export { GetFollowersResponse };
