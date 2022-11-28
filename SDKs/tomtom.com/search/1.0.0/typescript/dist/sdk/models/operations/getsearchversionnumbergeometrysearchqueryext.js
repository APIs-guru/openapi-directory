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
var GetSearchVersionNumberGeometrySearchQueryExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeometrySearchQueryExtPathParams, _super);
    function GetSearchVersionNumberGeometrySearchQueryExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeometrySearchQueryExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeometrySearchQueryExtPathParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeometrySearchQueryExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberGeometrySearchQueryExtPathParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeometrySearchQueryExtPathParams };
var GetSearchVersionNumberGeometrySearchQueryExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeometrySearchQueryExtQueryParams, _super);
    function GetSearchVersionNumberGeometrySearchQueryExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeometrySearchQueryExtQueryParams.prototype, "extendedPostalCodesFor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geometryList" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeometrySearchQueryExtQueryParams.prototype, "geometryList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idxSet" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeometrySearchQueryExtQueryParams.prototype, "idxSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeometrySearchQueryExtQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeometrySearchQueryExtQueryParams.prototype, "limit", void 0);
    return GetSearchVersionNumberGeometrySearchQueryExtQueryParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeometrySearchQueryExtQueryParams };
var GetSearchVersionNumberGeometrySearchQueryExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeometrySearchQueryExtRequest, _super);
    function GetSearchVersionNumberGeometrySearchQueryExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberGeometrySearchQueryExtPathParams)
    ], GetSearchVersionNumberGeometrySearchQueryExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberGeometrySearchQueryExtQueryParams)
    ], GetSearchVersionNumberGeometrySearchQueryExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberGeometrySearchQueryExtRequest;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeometrySearchQueryExtRequest };
var GetSearchVersionNumberGeometrySearchQueryExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeometrySearchQueryExtResponse, _super);
    function GetSearchVersionNumberGeometrySearchQueryExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeometrySearchQueryExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeometrySearchQueryExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberGeometrySearchQueryExtResponse;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeometrySearchQueryExtResponse };
