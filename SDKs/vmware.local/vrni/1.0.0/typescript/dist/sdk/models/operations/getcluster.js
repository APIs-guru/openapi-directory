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
var GetClusterPathParams = /** @class */ (function (_super) {
    __extends(GetClusterPathParams, _super);
    function GetClusterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetClusterPathParams.prototype, "id", void 0);
    return GetClusterPathParams;
}(SpeakeasyBase));
export { GetClusterPathParams };
var GetClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetClusterQueryParams, _super);
    function GetClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetClusterQueryParams.prototype, "time", void 0);
    return GetClusterQueryParams;
}(SpeakeasyBase));
export { GetClusterQueryParams };
var GetClusterSecurity = /** @class */ (function (_super) {
    __extends(GetClusterSecurity, _super);
    function GetClusterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetClusterSecurity.prototype, "apiKeyAuth", void 0);
    return GetClusterSecurity;
}(SpeakeasyBase));
export { GetClusterSecurity };
var GetClusterRequest = /** @class */ (function (_super) {
    __extends(GetClusterRequest, _super);
    function GetClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetClusterPathParams)
    ], GetClusterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetClusterQueryParams)
    ], GetClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetClusterSecurity)
    ], GetClusterRequest.prototype, "security", void 0);
    return GetClusterRequest;
}(SpeakeasyBase));
export { GetClusterRequest };
var GetClusterResponse = /** @class */ (function (_super) {
    __extends(GetClusterResponse, _super);
    function GetClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetClusterResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Cluster)
    ], GetClusterResponse.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetClusterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetClusterResponse.prototype, "statusCode", void 0);
    return GetClusterResponse;
}(SpeakeasyBase));
export { GetClusterResponse };
