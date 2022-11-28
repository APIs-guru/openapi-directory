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
var UpdateVcenterPathParams = /** @class */ (function (_super) {
    __extends(UpdateVcenterPathParams, _super);
    function UpdateVcenterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateVcenterPathParams.prototype, "id", void 0);
    return UpdateVcenterPathParams;
}(SpeakeasyBase));
export { UpdateVcenterPathParams };
var UpdateVcenterSecurity = /** @class */ (function (_super) {
    __extends(UpdateVcenterSecurity, _super);
    function UpdateVcenterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], UpdateVcenterSecurity.prototype, "apiKeyAuth", void 0);
    return UpdateVcenterSecurity;
}(SpeakeasyBase));
export { UpdateVcenterSecurity };
var UpdateVcenterRequest = /** @class */ (function (_super) {
    __extends(UpdateVcenterRequest, _super);
    function UpdateVcenterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVcenterPathParams)
    ], UpdateVcenterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.VCenterDataSource)
    ], UpdateVcenterRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVcenterSecurity)
    ], UpdateVcenterRequest.prototype, "security", void 0);
    return UpdateVcenterRequest;
}(SpeakeasyBase));
export { UpdateVcenterRequest };
var UpdateVcenterResponse = /** @class */ (function (_super) {
    __extends(UpdateVcenterResponse, _super);
    function UpdateVcenterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], UpdateVcenterResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateVcenterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateVcenterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VCenterDataSource)
    ], UpdateVcenterResponse.prototype, "vCenterDataSource", void 0);
    return UpdateVcenterResponse;
}(SpeakeasyBase));
export { UpdateVcenterResponse };
