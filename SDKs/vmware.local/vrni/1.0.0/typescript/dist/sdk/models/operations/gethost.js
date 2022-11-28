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
var GetHostPathParams = /** @class */ (function (_super) {
    __extends(GetHostPathParams, _super);
    function GetHostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetHostPathParams.prototype, "id", void 0);
    return GetHostPathParams;
}(SpeakeasyBase));
export { GetHostPathParams };
var GetHostQueryParams = /** @class */ (function (_super) {
    __extends(GetHostQueryParams, _super);
    function GetHostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetHostQueryParams.prototype, "time", void 0);
    return GetHostQueryParams;
}(SpeakeasyBase));
export { GetHostQueryParams };
var GetHostSecurity = /** @class */ (function (_super) {
    __extends(GetHostSecurity, _super);
    function GetHostSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetHostSecurity.prototype, "apiKeyAuth", void 0);
    return GetHostSecurity;
}(SpeakeasyBase));
export { GetHostSecurity };
var GetHostRequest = /** @class */ (function (_super) {
    __extends(GetHostRequest, _super);
    function GetHostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHostPathParams)
    ], GetHostRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHostQueryParams)
    ], GetHostRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHostSecurity)
    ], GetHostRequest.prototype, "security", void 0);
    return GetHostRequest;
}(SpeakeasyBase));
export { GetHostRequest };
var GetHostResponse = /** @class */ (function (_super) {
    __extends(GetHostResponse, _super);
    function GetHostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetHostResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetHostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Host)
    ], GetHostResponse.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetHostResponse.prototype, "statusCode", void 0);
    return GetHostResponse;
}(SpeakeasyBase));
export { GetHostResponse };
