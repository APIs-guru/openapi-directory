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
var PackageVersionsPathParams = /** @class */ (function (_super) {
    __extends(PackageVersionsPathParams, _super);
    function PackageVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" }),
        __metadata("design:type", String)
    ], PackageVersionsPathParams.prototype, "packageName", void 0);
    return PackageVersionsPathParams;
}(SpeakeasyBase));
export { PackageVersionsPathParams };
var PackageVersionsQueryParams = /** @class */ (function (_super) {
    __extends(PackageVersionsQueryParams, _super);
    function PackageVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], PackageVersionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], PackageVersionsQueryParams.prototype, "offset", void 0);
    return PackageVersionsQueryParams;
}(SpeakeasyBase));
export { PackageVersionsQueryParams };
var PackageVersionsSecurity = /** @class */ (function (_super) {
    __extends(PackageVersionsSecurity, _super);
    function PackageVersionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], PackageVersionsSecurity.prototype, "rhIdentity", void 0);
    return PackageVersionsSecurity;
}(SpeakeasyBase));
export { PackageVersionsSecurity };
var PackageVersionsRequest = /** @class */ (function (_super) {
    __extends(PackageVersionsRequest, _super);
    function PackageVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PackageVersionsPathParams)
    ], PackageVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PackageVersionsQueryParams)
    ], PackageVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PackageVersionsSecurity)
    ], PackageVersionsRequest.prototype, "security", void 0);
    return PackageVersionsRequest;
}(SpeakeasyBase));
export { PackageVersionsRequest };
var PackageVersionsResponse = /** @class */ (function (_super) {
    __extends(PackageVersionsResponse, _super);
    function PackageVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PackageVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PackageVersionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ControllersPackageVersionsResponse)
    ], PackageVersionsResponse.prototype, "controllersPackageVersionsResponse", void 0);
    return PackageVersionsResponse;
}(SpeakeasyBase));
export { PackageVersionsResponse };
