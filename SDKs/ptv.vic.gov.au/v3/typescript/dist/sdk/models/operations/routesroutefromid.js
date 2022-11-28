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
var RoutesRouteFromIdPathParams = /** @class */ (function (_super) {
    __extends(RoutesRouteFromIdPathParams, _super);
    function RoutesRouteFromIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_id" }),
        __metadata("design:type", Number)
    ], RoutesRouteFromIdPathParams.prototype, "routeId", void 0);
    return RoutesRouteFromIdPathParams;
}(SpeakeasyBase));
export { RoutesRouteFromIdPathParams };
var RoutesRouteFromIdQueryParams = /** @class */ (function (_super) {
    __extends(RoutesRouteFromIdQueryParams, _super);
    function RoutesRouteFromIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], RoutesRouteFromIdQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geopath_utc" }),
        __metadata("design:type", Date)
    ], RoutesRouteFromIdQueryParams.prototype, "geopathUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_geopath" }),
        __metadata("design:type", Boolean)
    ], RoutesRouteFromIdQueryParams.prototype, "includeGeopath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], RoutesRouteFromIdQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], RoutesRouteFromIdQueryParams.prototype, "token", void 0);
    return RoutesRouteFromIdQueryParams;
}(SpeakeasyBase));
export { RoutesRouteFromIdQueryParams };
var RoutesRouteFromIdRequest = /** @class */ (function (_super) {
    __extends(RoutesRouteFromIdRequest, _super);
    function RoutesRouteFromIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RoutesRouteFromIdPathParams)
    ], RoutesRouteFromIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RoutesRouteFromIdQueryParams)
    ], RoutesRouteFromIdRequest.prototype, "queryParams", void 0);
    return RoutesRouteFromIdRequest;
}(SpeakeasyBase));
export { RoutesRouteFromIdRequest };
var RoutesRouteFromIdResponse = /** @class */ (function (_super) {
    __extends(RoutesRouteFromIdResponse, _super);
    function RoutesRouteFromIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RoutesRouteFromIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RoutesRouteFromIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RoutesRouteFromIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], RoutesRouteFromIdResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3RouteResponse)
    ], RoutesRouteFromIdResponse.prototype, "v3RouteResponse", void 0);
    return RoutesRouteFromIdResponse;
}(SpeakeasyBase));
export { RoutesRouteFromIdResponse };
