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
export var SearchUsersDirectionEnum;
(function (SearchUsersDirectionEnum) {
    SearchUsersDirectionEnum["Asc"] = "asc";
    SearchUsersDirectionEnum["Desc"] = "desc";
})(SearchUsersDirectionEnum || (SearchUsersDirectionEnum = {}));
export var SearchUsersSortEnum;
(function (SearchUsersSortEnum) {
    SearchUsersSortEnum["Alphabetical"] = "alphabetical";
    SearchUsersSortEnum["Date"] = "date";
    SearchUsersSortEnum["Followers"] = "followers";
    SearchUsersSortEnum["Relevant"] = "relevant";
    SearchUsersSortEnum["Videos"] = "videos";
})(SearchUsersSortEnum || (SearchUsersSortEnum = {}));
var SearchUsersQueryParams = /** @class */ (function (_super) {
    __extends(SearchUsersQueryParams, _super);
    function SearchUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], SearchUsersQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchUsersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchUsersQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SearchUsersQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchUsersQueryParams.prototype, "sort", void 0);
    return SearchUsersQueryParams;
}(SpeakeasyBase));
export { SearchUsersQueryParams };
var SearchUsersRequest = /** @class */ (function (_super) {
    __extends(SearchUsersRequest, _super);
    function SearchUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchUsersQueryParams)
    ], SearchUsersRequest.prototype, "queryParams", void 0);
    return SearchUsersRequest;
}(SpeakeasyBase));
export { SearchUsersRequest };
var SearchUsersResponse = /** @class */ (function (_super) {
    __extends(SearchUsersResponse, _super);
    function SearchUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], SearchUsersResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], SearchUsersResponse.prototype, "users", void 0);
    return SearchUsersResponse;
}(SpeakeasyBase));
export { SearchUsersResponse };
