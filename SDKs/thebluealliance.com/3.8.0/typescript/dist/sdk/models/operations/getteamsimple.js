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
var GetTeamSimplePathParams = /** @class */ (function (_super) {
    __extends(GetTeamSimplePathParams, _super);
    function GetTeamSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamSimplePathParams.prototype, "teamKey", void 0);
    return GetTeamSimplePathParams;
}(SpeakeasyBase));
export { GetTeamSimplePathParams };
var GetTeamSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetTeamSimpleHeaders, _super);
    function GetTeamSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamSimpleHeaders;
}(SpeakeasyBase));
export { GetTeamSimpleHeaders };
var GetTeamSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetTeamSimpleSecurity, _super);
    function GetTeamSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamSimpleSecurity.prototype, "apiKey", void 0);
    return GetTeamSimpleSecurity;
}(SpeakeasyBase));
export { GetTeamSimpleSecurity };
var GetTeamSimpleRequest = /** @class */ (function (_super) {
    __extends(GetTeamSimpleRequest, _super);
    function GetTeamSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamSimplePathParams)
    ], GetTeamSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamSimpleHeaders)
    ], GetTeamSimpleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamSimpleSecurity)
    ], GetTeamSimpleRequest.prototype, "security", void 0);
    return GetTeamSimpleRequest;
}(SpeakeasyBase));
export { GetTeamSimpleRequest };
var GetTeamSimpleResponse = /** @class */ (function (_super) {
    __extends(GetTeamSimpleResponse, _super);
    function GetTeamSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamSimpleResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamSimpleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamSimple)
    ], GetTeamSimpleResponse.prototype, "teamSimple", void 0);
    return GetTeamSimpleResponse;
}(SpeakeasyBase));
export { GetTeamSimpleResponse };
