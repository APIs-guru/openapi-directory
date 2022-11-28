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
var GetSearchVersionNumberCSCategoryExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCSCategoryExtPathParams, _super);
    function GetSearchVersionNumberCSCategoryExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCSCategoryExtPathParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCSCategoryExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCSCategoryExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberCSCategoryExtPathParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberCSCategoryExtPathParams };
var GetSearchVersionNumberCSCategoryExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCSCategoryExtQueryParams, _super);
    function GetSearchVersionNumberCSCategoryExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=btmRight" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "btmRight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countrySet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "countrySet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idxSet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "idxSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "lon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ofs" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "ofs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topLeft" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "topLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=typeahead" }),
        __metadata("design:type", Boolean)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "typeahead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCSCategoryExtQueryParams.prototype, "view", void 0);
    return GetSearchVersionNumberCSCategoryExtQueryParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberCSCategoryExtQueryParams };
var GetSearchVersionNumberCSCategoryExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCSCategoryExtRequest, _super);
    function GetSearchVersionNumberCSCategoryExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberCSCategoryExtPathParams)
    ], GetSearchVersionNumberCSCategoryExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberCSCategoryExtQueryParams)
    ], GetSearchVersionNumberCSCategoryExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberCSCategoryExtRequest;
}(SpeakeasyBase));
export { GetSearchVersionNumberCSCategoryExtRequest };
var GetSearchVersionNumberCSCategoryExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberCSCategoryExtResponse, _super);
    function GetSearchVersionNumberCSCategoryExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberCSCategoryExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberCSCategoryExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberCSCategoryExtResponse;
}(SpeakeasyBase));
export { GetSearchVersionNumberCSCategoryExtResponse };
