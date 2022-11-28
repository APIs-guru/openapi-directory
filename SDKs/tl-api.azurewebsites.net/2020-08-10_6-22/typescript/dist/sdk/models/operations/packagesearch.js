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
var PackageSearchQueryParams = /** @class */ (function (_super) {
    __extends(PackageSearchQueryParams, _super);
    function PackageSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activeStatus" }),
        __metadata("design:type", Number)
    ], PackageSearchQueryParams.prototype, "activeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryId" }),
        __metadata("design:type", Number)
    ], PackageSearchQueryParams.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endPrice" }),
        __metadata("design:type", Number)
    ], PackageSearchQueryParams.prototype, "endPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gymId" }),
        __metadata("design:type", Number)
    ], PackageSearchQueryParams.prototype, "gymId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], PackageSearchQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], PackageSearchQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], PackageSearchQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestSource" }),
        __metadata("design:type", Number)
    ], PackageSearchQueryParams.prototype, "requestSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchText" }),
        __metadata("design:type", String)
    ], PackageSearchQueryParams.prototype, "searchText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startpPrice" }),
        __metadata("design:type", Number)
    ], PackageSearchQueryParams.prototype, "startpPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], PackageSearchQueryParams.prototype, "type", void 0);
    return PackageSearchQueryParams;
}(SpeakeasyBase));
export { PackageSearchQueryParams };
var PackageSearchRequest = /** @class */ (function (_super) {
    __extends(PackageSearchRequest, _super);
    function PackageSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PackageSearchQueryParams)
    ], PackageSearchRequest.prototype, "queryParams", void 0);
    return PackageSearchRequest;
}(SpeakeasyBase));
export { PackageSearchRequest };
var PackageSearchResponse = /** @class */ (function (_super) {
    __extends(PackageSearchResponse, _super);
    function PackageSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiException)
    ], PackageSearchResponse.prototype, "apiException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PackageSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DefaultResponseDtoOfListOfPackageSearchDto)
    ], PackageSearchResponse.prototype, "defaultResponseDtoOfListOfPackageSearchDto", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.DefaultResponseDtoOfPackageSearchDto }),
        __metadata("design:type", Array)
    ], PackageSearchResponse.prototype, "defaultResponseDtoOfPackageSearchDtos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PackageSearchResponse.prototype, "statusCode", void 0);
    return PackageSearchResponse;
}(SpeakeasyBase));
export { PackageSearchResponse };
