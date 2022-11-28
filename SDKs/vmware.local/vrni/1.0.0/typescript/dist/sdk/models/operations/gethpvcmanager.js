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
var GetHpvcManagerPathParams = /** @class */ (function (_super) {
    __extends(GetHpvcManagerPathParams, _super);
    function GetHpvcManagerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetHpvcManagerPathParams.prototype, "id", void 0);
    return GetHpvcManagerPathParams;
}(SpeakeasyBase));
export { GetHpvcManagerPathParams };
var GetHpvcManagerSecurity = /** @class */ (function (_super) {
    __extends(GetHpvcManagerSecurity, _super);
    function GetHpvcManagerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetHpvcManagerSecurity.prototype, "apiKeyAuth", void 0);
    return GetHpvcManagerSecurity;
}(SpeakeasyBase));
export { GetHpvcManagerSecurity };
var GetHpvcManagerRequest = /** @class */ (function (_super) {
    __extends(GetHpvcManagerRequest, _super);
    function GetHpvcManagerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHpvcManagerPathParams)
    ], GetHpvcManagerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHpvcManagerSecurity)
    ], GetHpvcManagerRequest.prototype, "security", void 0);
    return GetHpvcManagerRequest;
}(SpeakeasyBase));
export { GetHpvcManagerRequest };
var GetHpvcManagerResponse = /** @class */ (function (_super) {
    __extends(GetHpvcManagerResponse, _super);
    function GetHpvcManagerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetHpvcManagerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetHpvcManagerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SwitchDataSource)
    ], GetHpvcManagerResponse.prototype, "switchDataSource", void 0);
    return GetHpvcManagerResponse;
}(SpeakeasyBase));
export { GetHpvcManagerResponse };
