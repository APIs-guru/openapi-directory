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
var GetDistrictEventsSimplePathParams = /** @class */ (function (_super) {
    __extends(GetDistrictEventsSimplePathParams, _super);
    function GetDistrictEventsSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district_key" }),
        __metadata("design:type", String)
    ], GetDistrictEventsSimplePathParams.prototype, "districtKey", void 0);
    return GetDistrictEventsSimplePathParams;
}(SpeakeasyBase));
export { GetDistrictEventsSimplePathParams };
var GetDistrictEventsSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetDistrictEventsSimpleHeaders, _super);
    function GetDistrictEventsSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetDistrictEventsSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetDistrictEventsSimpleHeaders;
}(SpeakeasyBase));
export { GetDistrictEventsSimpleHeaders };
var GetDistrictEventsSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetDistrictEventsSimpleSecurity, _super);
    function GetDistrictEventsSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetDistrictEventsSimpleSecurity.prototype, "apiKey", void 0);
    return GetDistrictEventsSimpleSecurity;
}(SpeakeasyBase));
export { GetDistrictEventsSimpleSecurity };
var GetDistrictEventsSimpleRequest = /** @class */ (function (_super) {
    __extends(GetDistrictEventsSimpleRequest, _super);
    function GetDistrictEventsSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictEventsSimplePathParams)
    ], GetDistrictEventsSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictEventsSimpleHeaders)
    ], GetDistrictEventsSimpleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictEventsSimpleSecurity)
    ], GetDistrictEventsSimpleRequest.prototype, "security", void 0);
    return GetDistrictEventsSimpleRequest;
}(SpeakeasyBase));
export { GetDistrictEventsSimpleRequest };
var GetDistrictEventsSimpleResponse = /** @class */ (function (_super) {
    __extends(GetDistrictEventsSimpleResponse, _super);
    function GetDistrictEventsSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDistrictEventsSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.EventSimple }),
        __metadata("design:type", Array)
    ], GetDistrictEventsSimpleResponse.prototype, "eventSimples", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDistrictEventsSimpleResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDistrictEventsSimpleResponse.prototype, "statusCode", void 0);
    return GetDistrictEventsSimpleResponse;
}(SpeakeasyBase));
export { GetDistrictEventsSimpleResponse };
