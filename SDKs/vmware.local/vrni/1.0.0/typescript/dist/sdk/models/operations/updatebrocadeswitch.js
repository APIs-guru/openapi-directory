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
var UpdateBrocadeSwitchPathParams = /** @class */ (function (_super) {
    __extends(UpdateBrocadeSwitchPathParams, _super);
    function UpdateBrocadeSwitchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateBrocadeSwitchPathParams.prototype, "id", void 0);
    return UpdateBrocadeSwitchPathParams;
}(SpeakeasyBase));
export { UpdateBrocadeSwitchPathParams };
var UpdateBrocadeSwitchSecurity = /** @class */ (function (_super) {
    __extends(UpdateBrocadeSwitchSecurity, _super);
    function UpdateBrocadeSwitchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], UpdateBrocadeSwitchSecurity.prototype, "apiKeyAuth", void 0);
    return UpdateBrocadeSwitchSecurity;
}(SpeakeasyBase));
export { UpdateBrocadeSwitchSecurity };
var UpdateBrocadeSwitchRequest = /** @class */ (function (_super) {
    __extends(UpdateBrocadeSwitchRequest, _super);
    function UpdateBrocadeSwitchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBrocadeSwitchPathParams)
    ], UpdateBrocadeSwitchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SwitchDataSource)
    ], UpdateBrocadeSwitchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBrocadeSwitchSecurity)
    ], UpdateBrocadeSwitchRequest.prototype, "security", void 0);
    return UpdateBrocadeSwitchRequest;
}(SpeakeasyBase));
export { UpdateBrocadeSwitchRequest };
var UpdateBrocadeSwitchResponse = /** @class */ (function (_super) {
    __extends(UpdateBrocadeSwitchResponse, _super);
    function UpdateBrocadeSwitchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], UpdateBrocadeSwitchResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateBrocadeSwitchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateBrocadeSwitchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SwitchDataSource)
    ], UpdateBrocadeSwitchResponse.prototype, "switchDataSource", void 0);
    return UpdateBrocadeSwitchResponse;
}(SpeakeasyBase));
export { UpdateBrocadeSwitchResponse };
