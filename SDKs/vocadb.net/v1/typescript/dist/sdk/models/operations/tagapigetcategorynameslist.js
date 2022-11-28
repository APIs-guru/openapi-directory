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
export var TagApiGetCategoryNamesListNameMatchModeEnum;
(function (TagApiGetCategoryNamesListNameMatchModeEnum) {
    TagApiGetCategoryNamesListNameMatchModeEnum["Auto"] = "Auto";
    TagApiGetCategoryNamesListNameMatchModeEnum["Partial"] = "Partial";
    TagApiGetCategoryNamesListNameMatchModeEnum["StartsWith"] = "StartsWith";
    TagApiGetCategoryNamesListNameMatchModeEnum["Exact"] = "Exact";
    TagApiGetCategoryNamesListNameMatchModeEnum["Words"] = "Words";
})(TagApiGetCategoryNamesListNameMatchModeEnum || (TagApiGetCategoryNamesListNameMatchModeEnum = {}));
var TagApiGetCategoryNamesListQueryParams = /** @class */ (function (_super) {
    __extends(TagApiGetCategoryNamesListQueryParams, _super);
    function TagApiGetCategoryNamesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], TagApiGetCategoryNamesListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], TagApiGetCategoryNamesListQueryParams.prototype, "query", void 0);
    return TagApiGetCategoryNamesListQueryParams;
}(SpeakeasyBase));
export { TagApiGetCategoryNamesListQueryParams };
var TagApiGetCategoryNamesListRequest = /** @class */ (function (_super) {
    __extends(TagApiGetCategoryNamesListRequest, _super);
    function TagApiGetCategoryNamesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagApiGetCategoryNamesListQueryParams)
    ], TagApiGetCategoryNamesListRequest.prototype, "queryParams", void 0);
    return TagApiGetCategoryNamesListRequest;
}(SpeakeasyBase));
export { TagApiGetCategoryNamesListRequest };
var TagApiGetCategoryNamesListResponse = /** @class */ (function (_super) {
    __extends(TagApiGetCategoryNamesListResponse, _super);
    function TagApiGetCategoryNamesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TagApiGetCategoryNamesListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagApiGetCategoryNamesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagApiGetCategoryNamesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], TagApiGetCategoryNamesListResponse.prototype, "tagApiGetCategoryNamesList200ApplicationJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], TagApiGetCategoryNamesListResponse.prototype, "tagApiGetCategoryNamesList200ApplicationJsonpStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], TagApiGetCategoryNamesListResponse.prototype, "tagApiGetCategoryNamesList200TextJsonStrings", void 0);
    return TagApiGetCategoryNamesListResponse;
}(SpeakeasyBase));
export { TagApiGetCategoryNamesListResponse };
