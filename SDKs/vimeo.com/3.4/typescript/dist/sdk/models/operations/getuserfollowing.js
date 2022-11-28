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
var GetUserFollowingPathParams = /** @class */ (function (_super) {
    __extends(GetUserFollowingPathParams, _super);
    function GetUserFollowingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetUserFollowingPathParams.prototype, "userId", void 0);
    return GetUserFollowingPathParams;
}(SpeakeasyBase));
export { GetUserFollowingPathParams };
export var GetUserFollowingDirectionEnum;
(function (GetUserFollowingDirectionEnum) {
    GetUserFollowingDirectionEnum["Asc"] = "asc";
    GetUserFollowingDirectionEnum["Desc"] = "desc";
})(GetUserFollowingDirectionEnum || (GetUserFollowingDirectionEnum = {}));
export var GetUserFollowingFilterEnum;
(function (GetUserFollowingFilterEnum) {
    GetUserFollowingFilterEnum["Online"] = "online";
})(GetUserFollowingFilterEnum || (GetUserFollowingFilterEnum = {}));
export var GetUserFollowingSortEnum;
(function (GetUserFollowingSortEnum) {
    GetUserFollowingSortEnum["Alphabetical"] = "alphabetical";
    GetUserFollowingSortEnum["Date"] = "date";
})(GetUserFollowingSortEnum || (GetUserFollowingSortEnum = {}));
var GetUserFollowingQueryParams = /** @class */ (function (_super) {
    __extends(GetUserFollowingQueryParams, _super);
    function GetUserFollowingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetUserFollowingQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUserFollowingQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUserFollowingQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetUserFollowingQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetUserFollowingQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUserFollowingQueryParams.prototype, "sort", void 0);
    return GetUserFollowingQueryParams;
}(SpeakeasyBase));
export { GetUserFollowingQueryParams };
var GetUserFollowingRequest = /** @class */ (function (_super) {
    __extends(GetUserFollowingRequest, _super);
    function GetUserFollowingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserFollowingPathParams)
    ], GetUserFollowingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserFollowingQueryParams)
    ], GetUserFollowingRequest.prototype, "queryParams", void 0);
    return GetUserFollowingRequest;
}(SpeakeasyBase));
export { GetUserFollowingRequest };
var GetUserFollowingResponse = /** @class */ (function (_super) {
    __extends(GetUserFollowingResponse, _super);
    function GetUserFollowingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserFollowingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserFollowingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetUserFollowingResponse.prototype, "users", void 0);
    return GetUserFollowingResponse;
}(SpeakeasyBase));
export { GetUserFollowingResponse };
