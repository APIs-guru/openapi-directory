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
var GetTeamDistrictsPathParams = /** @class */ (function (_super) {
    __extends(GetTeamDistrictsPathParams, _super);
    function GetTeamDistrictsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamDistrictsPathParams.prototype, "teamKey", void 0);
    return GetTeamDistrictsPathParams;
}(SpeakeasyBase));
export { GetTeamDistrictsPathParams };
var GetTeamDistrictsHeaders = /** @class */ (function (_super) {
    __extends(GetTeamDistrictsHeaders, _super);
    function GetTeamDistrictsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamDistrictsHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamDistrictsHeaders;
}(SpeakeasyBase));
export { GetTeamDistrictsHeaders };
var GetTeamDistrictsSecurity = /** @class */ (function (_super) {
    __extends(GetTeamDistrictsSecurity, _super);
    function GetTeamDistrictsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamDistrictsSecurity.prototype, "apiKey", void 0);
    return GetTeamDistrictsSecurity;
}(SpeakeasyBase));
export { GetTeamDistrictsSecurity };
var GetTeamDistrictsRequest = /** @class */ (function (_super) {
    __extends(GetTeamDistrictsRequest, _super);
    function GetTeamDistrictsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamDistrictsPathParams)
    ], GetTeamDistrictsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamDistrictsHeaders)
    ], GetTeamDistrictsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamDistrictsSecurity)
    ], GetTeamDistrictsRequest.prototype, "security", void 0);
    return GetTeamDistrictsRequest;
}(SpeakeasyBase));
export { GetTeamDistrictsRequest };
var GetTeamDistrictsResponse = /** @class */ (function (_super) {
    __extends(GetTeamDistrictsResponse, _super);
    function GetTeamDistrictsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamDistrictsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.DistrictList }),
        __metadata("design:type", Array)
    ], GetTeamDistrictsResponse.prototype, "districtLists", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamDistrictsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamDistrictsResponse.prototype, "statusCode", void 0);
    return GetTeamDistrictsResponse;
}(SpeakeasyBase));
export { GetTeamDistrictsResponse };
