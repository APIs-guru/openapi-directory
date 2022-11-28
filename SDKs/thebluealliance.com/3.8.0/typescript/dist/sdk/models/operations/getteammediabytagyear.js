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
var GetTeamMediaByTagYearPathParams = /** @class */ (function (_super) {
    __extends(GetTeamMediaByTagYearPathParams, _super);
    function GetTeamMediaByTagYearPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=media_tag" }),
        __metadata("design:type", String)
    ], GetTeamMediaByTagYearPathParams.prototype, "mediaTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamMediaByTagYearPathParams.prototype, "teamKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamMediaByTagYearPathParams.prototype, "year", void 0);
    return GetTeamMediaByTagYearPathParams;
}(SpeakeasyBase));
export { GetTeamMediaByTagYearPathParams };
var GetTeamMediaByTagYearHeaders = /** @class */ (function (_super) {
    __extends(GetTeamMediaByTagYearHeaders, _super);
    function GetTeamMediaByTagYearHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamMediaByTagYearHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamMediaByTagYearHeaders;
}(SpeakeasyBase));
export { GetTeamMediaByTagYearHeaders };
var GetTeamMediaByTagYearSecurity = /** @class */ (function (_super) {
    __extends(GetTeamMediaByTagYearSecurity, _super);
    function GetTeamMediaByTagYearSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamMediaByTagYearSecurity.prototype, "apiKey", void 0);
    return GetTeamMediaByTagYearSecurity;
}(SpeakeasyBase));
export { GetTeamMediaByTagYearSecurity };
var GetTeamMediaByTagYearRequest = /** @class */ (function (_super) {
    __extends(GetTeamMediaByTagYearRequest, _super);
    function GetTeamMediaByTagYearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMediaByTagYearPathParams)
    ], GetTeamMediaByTagYearRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMediaByTagYearHeaders)
    ], GetTeamMediaByTagYearRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMediaByTagYearSecurity)
    ], GetTeamMediaByTagYearRequest.prototype, "security", void 0);
    return GetTeamMediaByTagYearRequest;
}(SpeakeasyBase));
export { GetTeamMediaByTagYearRequest };
var GetTeamMediaByTagYearResponse = /** @class */ (function (_super) {
    __extends(GetTeamMediaByTagYearResponse, _super);
    function GetTeamMediaByTagYearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamMediaByTagYearResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamMediaByTagYearResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Media }),
        __metadata("design:type", Array)
    ], GetTeamMediaByTagYearResponse.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamMediaByTagYearResponse.prototype, "statusCode", void 0);
    return GetTeamMediaByTagYearResponse;
}(SpeakeasyBase));
export { GetTeamMediaByTagYearResponse };
