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
var PostSearchVersionNumberSearchAlongRouteQueryExtPathParams = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtPathParams, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtPathParams.prototype, "ext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtPathParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtPathParams.prototype, "versionNumber", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtPathParams;
}(SpeakeasyBase));
export { PostSearchVersionNumberSearchAlongRouteQueryExtPathParams };
var PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDetourTime" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams.prototype, "maxDetourTime", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams;
}(SpeakeasyBase));
export { PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams };
var PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lon" }),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints.prototype, "lon", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints;
}(SpeakeasyBase));
export { PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints };
var PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=points", elemType: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints }),
        __metadata("design:type", Array)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute.prototype, "points", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute;
}(SpeakeasyBase));
export { PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute };
var PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=route" }),
        __metadata("design:type", PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody.prototype, "route", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody;
}(SpeakeasyBase));
export { PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody };
var PostSearchVersionNumberSearchAlongRouteQueryExtRequest = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtRequest, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSearchVersionNumberSearchAlongRouteQueryExtPathParams)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtRequest.prototype, "request", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtRequest;
}(SpeakeasyBase));
export { PostSearchVersionNumberSearchAlongRouteQueryExtRequest };
var PostSearchVersionNumberSearchAlongRouteQueryExtResponse = /** @class */ (function (_super) {
    __extends(PostSearchVersionNumberSearchAlongRouteQueryExtResponse, _super);
    function PostSearchVersionNumberSearchAlongRouteQueryExtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSearchVersionNumberSearchAlongRouteQueryExtResponse.prototype, "statusCode", void 0);
    return PostSearchVersionNumberSearchAlongRouteQueryExtResponse;
}(SpeakeasyBase));
export { PostSearchVersionNumberSearchAlongRouteQueryExtResponse };
