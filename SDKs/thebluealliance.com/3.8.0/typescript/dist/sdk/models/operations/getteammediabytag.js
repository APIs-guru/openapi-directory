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
var GetTeamMediaByTagPathParams = /** @class */ (function (_super) {
    __extends(GetTeamMediaByTagPathParams, _super);
    function GetTeamMediaByTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=media_tag" }),
        __metadata("design:type", String)
    ], GetTeamMediaByTagPathParams.prototype, "mediaTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamMediaByTagPathParams.prototype, "teamKey", void 0);
    return GetTeamMediaByTagPathParams;
}(SpeakeasyBase));
export { GetTeamMediaByTagPathParams };
var GetTeamMediaByTagHeaders = /** @class */ (function (_super) {
    __extends(GetTeamMediaByTagHeaders, _super);
    function GetTeamMediaByTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamMediaByTagHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamMediaByTagHeaders;
}(SpeakeasyBase));
export { GetTeamMediaByTagHeaders };
var GetTeamMediaByTagSecurity = /** @class */ (function (_super) {
    __extends(GetTeamMediaByTagSecurity, _super);
    function GetTeamMediaByTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamMediaByTagSecurity.prototype, "apiKey", void 0);
    return GetTeamMediaByTagSecurity;
}(SpeakeasyBase));
export { GetTeamMediaByTagSecurity };
var GetTeamMediaByTagRequest = /** @class */ (function (_super) {
    __extends(GetTeamMediaByTagRequest, _super);
    function GetTeamMediaByTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMediaByTagPathParams)
    ], GetTeamMediaByTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMediaByTagHeaders)
    ], GetTeamMediaByTagRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMediaByTagSecurity)
    ], GetTeamMediaByTagRequest.prototype, "security", void 0);
    return GetTeamMediaByTagRequest;
}(SpeakeasyBase));
export { GetTeamMediaByTagRequest };
var GetTeamMediaByTagResponse = /** @class */ (function (_super) {
    __extends(GetTeamMediaByTagResponse, _super);
    function GetTeamMediaByTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamMediaByTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamMediaByTagResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Media }),
        __metadata("design:type", Array)
    ], GetTeamMediaByTagResponse.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamMediaByTagResponse.prototype, "statusCode", void 0);
    return GetTeamMediaByTagResponse;
}(SpeakeasyBase));
export { GetTeamMediaByTagResponse };
