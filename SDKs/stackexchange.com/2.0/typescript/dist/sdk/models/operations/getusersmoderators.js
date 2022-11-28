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
export var GetUsersModeratorsOrderEnum;
(function (GetUsersModeratorsOrderEnum) {
    GetUsersModeratorsOrderEnum["Desc"] = "desc";
    GetUsersModeratorsOrderEnum["Asc"] = "asc";
})(GetUsersModeratorsOrderEnum || (GetUsersModeratorsOrderEnum = {}));
export var GetUsersModeratorsSortEnum;
(function (GetUsersModeratorsSortEnum) {
    GetUsersModeratorsSortEnum["Reputation"] = "reputation";
    GetUsersModeratorsSortEnum["Creation"] = "creation";
    GetUsersModeratorsSortEnum["Name"] = "name";
    GetUsersModeratorsSortEnum["Modified"] = "modified";
})(GetUsersModeratorsSortEnum || (GetUsersModeratorsSortEnum = {}));
var GetUsersModeratorsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersModeratorsQueryParams, _super);
    function GetUsersModeratorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersModeratorsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersModeratorsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersModeratorsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersModeratorsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersModeratorsQueryParams.prototype, "todate", void 0);
    return GetUsersModeratorsQueryParams;
}(SpeakeasyBase));
export { GetUsersModeratorsQueryParams };
var GetUsersModeratorsRequest = /** @class */ (function (_super) {
    __extends(GetUsersModeratorsRequest, _super);
    function GetUsersModeratorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersModeratorsQueryParams)
    ], GetUsersModeratorsRequest.prototype, "queryParams", void 0);
    return GetUsersModeratorsRequest;
}(SpeakeasyBase));
export { GetUsersModeratorsRequest };
var GetUsersModeratorsResponse = /** @class */ (function (_super) {
    __extends(GetUsersModeratorsResponse, _super);
    function GetUsersModeratorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersModeratorsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersModeratorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersModeratorsResponse.prototype, "statusCode", void 0);
    return GetUsersModeratorsResponse;
}(SpeakeasyBase));
export { GetUsersModeratorsResponse };
