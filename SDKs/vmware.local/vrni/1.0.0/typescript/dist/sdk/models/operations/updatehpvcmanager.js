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
var UpdateHpvcManagerPathParams = /** @class */ (function (_super) {
    __extends(UpdateHpvcManagerPathParams, _super);
    function UpdateHpvcManagerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateHpvcManagerPathParams.prototype, "id", void 0);
    return UpdateHpvcManagerPathParams;
}(SpeakeasyBase));
export { UpdateHpvcManagerPathParams };
var UpdateHpvcManagerSecurity = /** @class */ (function (_super) {
    __extends(UpdateHpvcManagerSecurity, _super);
    function UpdateHpvcManagerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], UpdateHpvcManagerSecurity.prototype, "apiKeyAuth", void 0);
    return UpdateHpvcManagerSecurity;
}(SpeakeasyBase));
export { UpdateHpvcManagerSecurity };
var UpdateHpvcManagerRequest = /** @class */ (function (_super) {
    __extends(UpdateHpvcManagerRequest, _super);
    function UpdateHpvcManagerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateHpvcManagerPathParams)
    ], UpdateHpvcManagerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SwitchDataSource)
    ], UpdateHpvcManagerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateHpvcManagerSecurity)
    ], UpdateHpvcManagerRequest.prototype, "security", void 0);
    return UpdateHpvcManagerRequest;
}(SpeakeasyBase));
export { UpdateHpvcManagerRequest };
var UpdateHpvcManagerResponse = /** @class */ (function (_super) {
    __extends(UpdateHpvcManagerResponse, _super);
    function UpdateHpvcManagerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], UpdateHpvcManagerResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateHpvcManagerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateHpvcManagerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SwitchDataSource)
    ], UpdateHpvcManagerResponse.prototype, "switchDataSource", void 0);
    return UpdateHpvcManagerResponse;
}(SpeakeasyBase));
export { UpdateHpvcManagerResponse };
