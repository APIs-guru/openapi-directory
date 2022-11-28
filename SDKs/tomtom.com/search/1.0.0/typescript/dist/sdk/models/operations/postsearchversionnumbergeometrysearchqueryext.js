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
var PostSearchVersionNumberGeometrySearchQueryExtPathParams = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometrySearchQueryExtPathParams, _super);
    function PostSearchVersionNumberGeometrySearchQueryExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometrySearchQueryExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometrySearchQueryExtPathParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberGeometrySearchQueryExtPathParams.prototype, "versionNumber", void 0);
    return PostSearchVersionNumberGeometrySearchQueryExtPathParams;
}(SpeakeasyBase));
export { PostSearchVersionNumberGeometrySearchQueryExtPathParams };
var PostSearchVersionNumberGeometrySearchQueryExtQueryParams = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometrySearchQueryExtQueryParams, _super);
    function PostSearchVersionNumberGeometrySearchQueryExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometrySearchQueryExtQueryParams.prototype, "extendedPostalCodesFor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idxSet" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometrySearchQueryExtQueryParams.prototype, "idxSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometrySearchQueryExtQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberGeometrySearchQueryExtQueryParams.prototype, "limit", void 0);
    return PostSearchVersionNumberGeometrySearchQueryExtQueryParams;
}(SpeakeasyBase));
export { PostSearchVersionNumberGeometrySearchQueryExtQueryParams };
var PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList, _super);
    function PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radius" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vertices" }),
        __metadata("design:type", Array)
    ], PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList.prototype, "vertices", void 0);
    return PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList;
}(SpeakeasyBase));
export { PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList };
var PostSearchVersionNumberGeometrySearchQueryExtRequestBody = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometrySearchQueryExtRequestBody, _super);
    function PostSearchVersionNumberGeometrySearchQueryExtRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geometryList", elemType: PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList }),
        __metadata("design:type", Array)
    ], PostSearchVersionNumberGeometrySearchQueryExtRequestBody.prototype, "geometryList", void 0);
    return PostSearchVersionNumberGeometrySearchQueryExtRequestBody;
}(SpeakeasyBase));
export { PostSearchVersionNumberGeometrySearchQueryExtRequestBody };
var PostSearchVersionNumberGeometrySearchQueryExtRequest = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometrySearchQueryExtRequest, _super);
    function PostSearchVersionNumberGeometrySearchQueryExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSearchVersionNumberGeometrySearchQueryExtPathParams)
    ], PostSearchVersionNumberGeometrySearchQueryExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSearchVersionNumberGeometrySearchQueryExtQueryParams)
    ], PostSearchVersionNumberGeometrySearchQueryExtRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostSearchVersionNumberGeometrySearchQueryExtRequestBody)
    ], PostSearchVersionNumberGeometrySearchQueryExtRequest.prototype, "request", void 0);
    return PostSearchVersionNumberGeometrySearchQueryExtRequest;
}(SpeakeasyBase));
export { PostSearchVersionNumberGeometrySearchQueryExtRequest };
var PostSearchVersionNumberGeometrySearchQueryExtResponse = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberGeometrySearchQueryExtResponse, _super);
    function PostSearchVersionNumberGeometrySearchQueryExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSearchVersionNumberGeometrySearchQueryExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberGeometrySearchQueryExtResponse.prototype, "statusCode", void 0);
    return PostSearchVersionNumberGeometrySearchQueryExtResponse;
}(SpeakeasyBase));
export { PostSearchVersionNumberGeometrySearchQueryExtResponse };
