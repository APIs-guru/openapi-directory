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
var GetTeamSocialMediaPathParams = /** @class */ (function (_super) {
    __extends(GetTeamSocialMediaPathParams, _super);
    function GetTeamSocialMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamSocialMediaPathParams.prototype, "teamKey", void 0);
    return GetTeamSocialMediaPathParams;
}(SpeakeasyBase));
export { GetTeamSocialMediaPathParams };
var GetTeamSocialMediaHeaders = /** @class */ (function (_super) {
    __extends(GetTeamSocialMediaHeaders, _super);
    function GetTeamSocialMediaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamSocialMediaHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamSocialMediaHeaders;
}(SpeakeasyBase));
export { GetTeamSocialMediaHeaders };
var GetTeamSocialMediaSecurity = /** @class */ (function (_super) {
    __extends(GetTeamSocialMediaSecurity, _super);
    function GetTeamSocialMediaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamSocialMediaSecurity.prototype, "apiKey", void 0);
    return GetTeamSocialMediaSecurity;
}(SpeakeasyBase));
export { GetTeamSocialMediaSecurity };
var GetTeamSocialMediaRequest = /** @class */ (function (_super) {
    __extends(GetTeamSocialMediaRequest, _super);
    function GetTeamSocialMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamSocialMediaPathParams)
    ], GetTeamSocialMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamSocialMediaHeaders)
    ], GetTeamSocialMediaRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamSocialMediaSecurity)
    ], GetTeamSocialMediaRequest.prototype, "security", void 0);
    return GetTeamSocialMediaRequest;
}(SpeakeasyBase));
export { GetTeamSocialMediaRequest };
var GetTeamSocialMediaResponse = /** @class */ (function (_super) {
    __extends(GetTeamSocialMediaResponse, _super);
    function GetTeamSocialMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamSocialMediaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamSocialMediaResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Media }),
        __metadata("design:type", Array)
    ], GetTeamSocialMediaResponse.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamSocialMediaResponse.prototype, "statusCode", void 0);
    return GetTeamSocialMediaResponse;
}(SpeakeasyBase));
export { GetTeamSocialMediaResponse };
