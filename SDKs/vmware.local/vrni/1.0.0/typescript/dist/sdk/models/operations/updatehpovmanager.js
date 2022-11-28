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
var UpdateHpovManagerPathParams = /** @class */ (function (_super) {
    __extends(UpdateHpovManagerPathParams, _super);
    function UpdateHpovManagerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateHpovManagerPathParams.prototype, "id", void 0);
    return UpdateHpovManagerPathParams;
}(SpeakeasyBase));
export { UpdateHpovManagerPathParams };
var UpdateHpovManagerSecurity = /** @class */ (function (_super) {
    __extends(UpdateHpovManagerSecurity, _super);
    function UpdateHpovManagerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], UpdateHpovManagerSecurity.prototype, "apiKeyAuth", void 0);
    return UpdateHpovManagerSecurity;
}(SpeakeasyBase));
export { UpdateHpovManagerSecurity };
var UpdateHpovManagerRequest = /** @class */ (function (_super) {
    __extends(UpdateHpovManagerRequest, _super);
    function UpdateHpovManagerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateHpovManagerPathParams)
    ], UpdateHpovManagerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SwitchDataSource)
    ], UpdateHpovManagerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateHpovManagerSecurity)
    ], UpdateHpovManagerRequest.prototype, "security", void 0);
    return UpdateHpovManagerRequest;
}(SpeakeasyBase));
export { UpdateHpovManagerRequest };
var UpdateHpovManagerResponse = /** @class */ (function (_super) {
    __extends(UpdateHpovManagerResponse, _super);
    function UpdateHpovManagerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], UpdateHpovManagerResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateHpovManagerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateHpovManagerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SwitchDataSource)
    ], UpdateHpovManagerResponse.prototype, "switchDataSource", void 0);
    return UpdateHpovManagerResponse;
}(SpeakeasyBase));
export { UpdateHpovManagerResponse };
