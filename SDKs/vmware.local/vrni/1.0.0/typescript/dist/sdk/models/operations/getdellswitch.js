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
var GetDellSwitchPathParams = /** @class */ (function (_super) {
    __extends(GetDellSwitchPathParams, _super);
    function GetDellSwitchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetDellSwitchPathParams.prototype, "id", void 0);
    return GetDellSwitchPathParams;
}(SpeakeasyBase));
export { GetDellSwitchPathParams };
var GetDellSwitchSecurity = /** @class */ (function (_super) {
    __extends(GetDellSwitchSecurity, _super);
    function GetDellSwitchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetDellSwitchSecurity.prototype, "apiKeyAuth", void 0);
    return GetDellSwitchSecurity;
}(SpeakeasyBase));
export { GetDellSwitchSecurity };
var GetDellSwitchRequest = /** @class */ (function (_super) {
    __extends(GetDellSwitchRequest, _super);
    function GetDellSwitchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDellSwitchPathParams)
    ], GetDellSwitchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDellSwitchSecurity)
    ], GetDellSwitchRequest.prototype, "security", void 0);
    return GetDellSwitchRequest;
}(SpeakeasyBase));
export { GetDellSwitchRequest };
var GetDellSwitchResponse = /** @class */ (function (_super) {
    __extends(GetDellSwitchResponse, _super);
    function GetDellSwitchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDellSwitchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DellSwitchDataSource)
    ], GetDellSwitchResponse.prototype, "dellSwitchDataSource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDellSwitchResponse.prototype, "statusCode", void 0);
    return GetDellSwitchResponse;
}(SpeakeasyBase));
export { GetDellSwitchResponse };
