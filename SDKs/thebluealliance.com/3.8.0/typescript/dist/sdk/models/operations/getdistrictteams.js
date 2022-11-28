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
var GetDistrictTeamsPathParams = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsPathParams, _super);
    function GetDistrictTeamsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district_key" }),
        __metadata("design:type", String)
    ], GetDistrictTeamsPathParams.prototype, "districtKey", void 0);
    return GetDistrictTeamsPathParams;
}(SpeakeasyBase));
export { GetDistrictTeamsPathParams };
var GetDistrictTeamsHeaders = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsHeaders, _super);
    function GetDistrictTeamsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetDistrictTeamsHeaders.prototype, "ifModifiedSince", void 0);
    return GetDistrictTeamsHeaders;
}(SpeakeasyBase));
export { GetDistrictTeamsHeaders };
var GetDistrictTeamsSecurity = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsSecurity, _super);
    function GetDistrictTeamsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetDistrictTeamsSecurity.prototype, "apiKey", void 0);
    return GetDistrictTeamsSecurity;
}(SpeakeasyBase));
export { GetDistrictTeamsSecurity };
var GetDistrictTeamsRequest = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsRequest, _super);
    function GetDistrictTeamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictTeamsPathParams)
    ], GetDistrictTeamsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictTeamsHeaders)
    ], GetDistrictTeamsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictTeamsSecurity)
    ], GetDistrictTeamsRequest.prototype, "security", void 0);
    return GetDistrictTeamsRequest;
}(SpeakeasyBase));
export { GetDistrictTeamsRequest };
var GetDistrictTeamsResponse = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsResponse, _super);
    function GetDistrictTeamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDistrictTeamsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDistrictTeamsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDistrictTeamsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Team }),
        __metadata("design:type", Array)
    ], GetDistrictTeamsResponse.prototype, "teams", void 0);
    return GetDistrictTeamsResponse;
}(SpeakeasyBase));
export { GetDistrictTeamsResponse };
