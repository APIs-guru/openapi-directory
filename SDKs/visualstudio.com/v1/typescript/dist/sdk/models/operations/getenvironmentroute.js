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
var GetEnvironmentRoutePathParams = /** @class */ (function (_super) {
    __extends(GetEnvironmentRoutePathParams, _super);
    function GetEnvironmentRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], GetEnvironmentRoutePathParams.prototype, "environmentId", void 0);
    return GetEnvironmentRoutePathParams;
}(SpeakeasyBase));
export { GetEnvironmentRoutePathParams };
var GetEnvironmentRouteQueryParams = /** @class */ (function (_super) {
    __extends(GetEnvironmentRouteQueryParams, _super);
    function GetEnvironmentRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connect" }),
        __metadata("design:type", Boolean)
    ], GetEnvironmentRouteQueryParams.prototype, "connect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pfConnect" }),
        __metadata("design:type", Boolean)
    ], GetEnvironmentRouteQueryParams.prototype, "pfConnect", void 0);
    return GetEnvironmentRouteQueryParams;
}(SpeakeasyBase));
export { GetEnvironmentRouteQueryParams };
var GetEnvironmentRouteRequest = /** @class */ (function (_super) {
    __extends(GetEnvironmentRouteRequest, _super);
    function GetEnvironmentRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEnvironmentRoutePathParams)
    ], GetEnvironmentRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEnvironmentRouteQueryParams)
    ], GetEnvironmentRouteRequest.prototype, "queryParams", void 0);
    return GetEnvironmentRouteRequest;
}(SpeakeasyBase));
export { GetEnvironmentRouteRequest };
var GetEnvironmentRouteResponse = /** @class */ (function (_super) {
    __extends(GetEnvironmentRouteResponse, _super);
    function GetEnvironmentRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetEnvironmentRouteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CloudEnvironmentResult)
    ], GetEnvironmentRouteResponse.prototype, "cloudEnvironmentResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEnvironmentRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEnvironmentRouteResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEnvironmentRouteResponse.prototype, "statusCode", void 0);
    return GetEnvironmentRouteResponse;
}(SpeakeasyBase));
export { GetEnvironmentRouteResponse };
