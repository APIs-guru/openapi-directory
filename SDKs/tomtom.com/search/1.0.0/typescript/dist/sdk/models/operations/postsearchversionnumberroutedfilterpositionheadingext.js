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
var PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams, _super);
    function PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=heading" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams.prototype, "heading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=position" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams.prototype, "versionNumber", void 0);
    return PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams;
}(SpeakeasyBase));
export { PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams };
var PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams, _super);
    function PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routingTimeout" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams.prototype, "routingTimeout", void 0);
    return PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams;
}(SpeakeasyBase));
export { PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams };
var PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress, _super);
    function PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeformAddress" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress.prototype, "freeformAddress", void 0);
    return PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress;
}(SpeakeasyBase));
export { PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress };
var PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi, _super);
    function PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi.prototype, "name", void 0);
    return PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi;
}(SpeakeasyBase));
export { PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi };
var PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition, _super);
    function PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lon" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition.prototype, "lon", void 0);
    return PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition;
}(SpeakeasyBase));
export { PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition };
var PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList, _super);
    function PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poi" }),
        __metadata("design:type", PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList.prototype, "poi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList.prototype, "position", void 0);
    return PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList;
}(SpeakeasyBase));
export { PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList };
var PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody, _super);
    function PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poiList", elemType: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList }),
        __metadata("design:type", Array)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody.prototype, "poiList", void 0);
    return PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody;
}(SpeakeasyBase));
export { PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody };
var PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest, _super);
    function PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest.prototype, "request", void 0);
    return PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest;
}(SpeakeasyBase));
export { PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest };
var PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse, _super);
    function PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse.prototype, "statusCode", void 0);
    return PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse;
}(SpeakeasyBase));
export { PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse };
