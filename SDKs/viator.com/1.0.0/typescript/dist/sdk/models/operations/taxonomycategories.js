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
var TaxonomyCategoriesQueryParams = /** @class */ (function (_super) {
    __extends(TaxonomyCategoriesQueryParams, _super);
    function TaxonomyCategoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destId" }),
        __metadata("design:type", Number)
    ], TaxonomyCategoriesQueryParams.prototype, "destId", void 0);
    return TaxonomyCategoriesQueryParams;
}(SpeakeasyBase));
export { TaxonomyCategoriesQueryParams };
var TaxonomyCategoriesHeaders = /** @class */ (function (_super) {
    __extends(TaxonomyCategoriesHeaders, _super);
    function TaxonomyCategoriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], TaxonomyCategoriesHeaders.prototype, "acceptLanguage", void 0);
    return TaxonomyCategoriesHeaders;
}(SpeakeasyBase));
export { TaxonomyCategoriesHeaders };
var TaxonomyCategories200ApplicationJsonDataSubcategories = /** @class */ (function (_super) {
    __extends(TaxonomyCategories200ApplicationJsonDataSubcategories, _super);
    function TaxonomyCategories200ApplicationJsonDataSubcategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryId" }),
        __metadata("design:type", Number)
    ], TaxonomyCategories200ApplicationJsonDataSubcategories.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortorder" }),
        __metadata("design:type", Number)
    ], TaxonomyCategories200ApplicationJsonDataSubcategories.prototype, "sortorder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subCategoryUrlName" }),
        __metadata("design:type", String)
    ], TaxonomyCategories200ApplicationJsonDataSubcategories.prototype, "subCategoryUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subcategoryId" }),
        __metadata("design:type", Number)
    ], TaxonomyCategories200ApplicationJsonDataSubcategories.prototype, "subcategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subcategoryName" }),
        __metadata("design:type", String)
    ], TaxonomyCategories200ApplicationJsonDataSubcategories.prototype, "subcategoryName", void 0);
    return TaxonomyCategories200ApplicationJsonDataSubcategories;
}(SpeakeasyBase));
export { TaxonomyCategories200ApplicationJsonDataSubcategories };
var TaxonomyCategories200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(TaxonomyCategories200ApplicationJsonData, _super);
    function TaxonomyCategories200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupName" }),
        __metadata("design:type", String)
    ], TaxonomyCategories200ApplicationJsonData.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupUrlName" }),
        __metadata("design:type", String)
    ], TaxonomyCategories200ApplicationJsonData.prototype, "groupUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TaxonomyCategories200ApplicationJsonData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCount" }),
        __metadata("design:type", Number)
    ], TaxonomyCategories200ApplicationJsonData.prototype, "productCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subcategories", elemType: TaxonomyCategories200ApplicationJsonDataSubcategories }),
        __metadata("design:type", Array)
    ], TaxonomyCategories200ApplicationJsonData.prototype, "subcategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailURL" }),
        __metadata("design:type", String)
    ], TaxonomyCategories200ApplicationJsonData.prototype, "thumbnailUrl", void 0);
    return TaxonomyCategories200ApplicationJsonData;
}(SpeakeasyBase));
export { TaxonomyCategories200ApplicationJsonData };
var TaxonomyCategories200ApplicationJson = /** @class */ (function (_super) {
    __extends(TaxonomyCategories200ApplicationJson, _super);
    function TaxonomyCategories200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: TaxonomyCategories200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], TaxonomyCategories200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], TaxonomyCategories200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], TaxonomyCategories200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], TaxonomyCategories200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], TaxonomyCategories200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], TaxonomyCategories200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], TaxonomyCategories200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], TaxonomyCategories200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], TaxonomyCategories200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], TaxonomyCategories200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], TaxonomyCategories200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], TaxonomyCategories200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], TaxonomyCategories200ApplicationJson.prototype, "vmid", void 0);
    return TaxonomyCategories200ApplicationJson;
}(SpeakeasyBase));
export { TaxonomyCategories200ApplicationJson };
var TaxonomyCategoriesRequest = /** @class */ (function (_super) {
    __extends(TaxonomyCategoriesRequest, _super);
    function TaxonomyCategoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxonomyCategoriesQueryParams)
    ], TaxonomyCategoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxonomyCategoriesHeaders)
    ], TaxonomyCategoriesRequest.prototype, "headers", void 0);
    return TaxonomyCategoriesRequest;
}(SpeakeasyBase));
export { TaxonomyCategoriesRequest };
var TaxonomyCategoriesResponse = /** @class */ (function (_super) {
    __extends(TaxonomyCategoriesResponse, _super);
    function TaxonomyCategoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TaxonomyCategoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TaxonomyCategoriesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxonomyCategories200ApplicationJson)
    ], TaxonomyCategoriesResponse.prototype, "taxonomyCategories200ApplicationJsonObject", void 0);
    return TaxonomyCategoriesResponse;
}(SpeakeasyBase));
export { TaxonomyCategoriesResponse };
