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
var GetMatchPathParams = /** @class */ (function (_super) {
    __extends(GetMatchPathParams, _super);
    function GetMatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=match_key" }),
        __metadata("design:type", String)
    ], GetMatchPathParams.prototype, "matchKey", void 0);
    return GetMatchPathParams;
}(SpeakeasyBase));
export { GetMatchPathParams };
var GetMatchHeaders = /** @class */ (function (_super) {
    __extends(GetMatchHeaders, _super);
    function GetMatchHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetMatchHeaders.prototype, "ifModifiedSince", void 0);
    return GetMatchHeaders;
}(SpeakeasyBase));
export { GetMatchHeaders };
var GetMatchSecurity = /** @class */ (function (_super) {
    __extends(GetMatchSecurity, _super);
    function GetMatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetMatchSecurity.prototype, "apiKey", void 0);
    return GetMatchSecurity;
}(SpeakeasyBase));
export { GetMatchSecurity };
var GetMatchRequest = /** @class */ (function (_super) {
    __extends(GetMatchRequest, _super);
    function GetMatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMatchPathParams)
    ], GetMatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMatchHeaders)
    ], GetMatchRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMatchSecurity)
    ], GetMatchRequest.prototype, "security", void 0);
    return GetMatchRequest;
}(SpeakeasyBase));
export { GetMatchRequest };
var GetMatchResponse = /** @class */ (function (_super) {
    __extends(GetMatchResponse, _super);
    function GetMatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetMatchResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Match)
    ], GetMatchResponse.prototype, "match", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMatchResponse.prototype, "statusCode", void 0);
    return GetMatchResponse;
}(SpeakeasyBase));
export { GetMatchResponse };
