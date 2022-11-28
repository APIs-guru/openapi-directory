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
var GetDistrictTeamsSimplePathParams = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsSimplePathParams, _super);
    function GetDistrictTeamsSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district_key" }),
        __metadata("design:type", String)
    ], GetDistrictTeamsSimplePathParams.prototype, "districtKey", void 0);
    return GetDistrictTeamsSimplePathParams;
}(SpeakeasyBase));
export { GetDistrictTeamsSimplePathParams };
var GetDistrictTeamsSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsSimpleHeaders, _super);
    function GetDistrictTeamsSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetDistrictTeamsSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetDistrictTeamsSimpleHeaders;
}(SpeakeasyBase));
export { GetDistrictTeamsSimpleHeaders };
var GetDistrictTeamsSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsSimpleSecurity, _super);
    function GetDistrictTeamsSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetDistrictTeamsSimpleSecurity.prototype, "apiKey", void 0);
    return GetDistrictTeamsSimpleSecurity;
}(SpeakeasyBase));
export { GetDistrictTeamsSimpleSecurity };
var GetDistrictTeamsSimpleRequest = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsSimpleRequest, _super);
    function GetDistrictTeamsSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictTeamsSimplePathParams)
    ], GetDistrictTeamsSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictTeamsSimpleHeaders)
    ], GetDistrictTeamsSimpleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictTeamsSimpleSecurity)
    ], GetDistrictTeamsSimpleRequest.prototype, "security", void 0);
    return GetDistrictTeamsSimpleRequest;
}(SpeakeasyBase));
export { GetDistrictTeamsSimpleRequest };
var GetDistrictTeamsSimpleResponse = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsSimpleResponse, _super);
    function GetDistrictTeamsSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDistrictTeamsSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDistrictTeamsSimpleResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDistrictTeamsSimpleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamSimple }),
        __metadata("design:type", Array)
    ], GetDistrictTeamsSimpleResponse.prototype, "teamSimples", void 0);
    return GetDistrictTeamsSimpleResponse;
}(SpeakeasyBase));
export { GetDistrictTeamsSimpleResponse };
