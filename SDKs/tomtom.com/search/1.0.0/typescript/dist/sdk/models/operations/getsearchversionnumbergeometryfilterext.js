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
var GetSearchVersionNumberGeometryFilterExtPathParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeometryFilterExtPathParams, _super);
    function GetSearchVersionNumberGeometryFilterExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeometryFilterExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeometryFilterExtPathParams.prototype, "versionNumber", void 0);
    return GetSearchVersionNumberGeometryFilterExtPathParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeometryFilterExtPathParams };
var GetSearchVersionNumberGeometryFilterExtQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeometryFilterExtQueryParams, _super);
    function GetSearchVersionNumberGeometryFilterExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geometryList" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeometryFilterExtQueryParams.prototype, "geometryList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=poiList" }),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeometryFilterExtQueryParams.prototype, "poiList", void 0);
    return GetSearchVersionNumberGeometryFilterExtQueryParams;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeometryFilterExtQueryParams };
var GetSearchVersionNumberGeometryFilterExtRequest = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeometryFilterExtRequest, _super);
    function GetSearchVersionNumberGeometryFilterExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberGeometryFilterExtPathParams)
    ], GetSearchVersionNumberGeometryFilterExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchVersionNumberGeometryFilterExtQueryParams)
    ], GetSearchVersionNumberGeometryFilterExtRequest.prototype, "queryParams", void 0);
    return GetSearchVersionNumberGeometryFilterExtRequest;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeometryFilterExtRequest };
var GetSearchVersionNumberGeometryFilterExtResponse = /** @class */ (function (_super) {
    __extends(GetSearchVersionNumberGeometryFilterExtResponse, _super);
    function GetSearchVersionNumberGeometryFilterExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchVersionNumberGeometryFilterExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchVersionNumberGeometryFilterExtResponse.prototype, "statusCode", void 0);
    return GetSearchVersionNumberGeometryFilterExtResponse;
}(SpeakeasyBase));
export { GetSearchVersionNumberGeometryFilterExtResponse };
