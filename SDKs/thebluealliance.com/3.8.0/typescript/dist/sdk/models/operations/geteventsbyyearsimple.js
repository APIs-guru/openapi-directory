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
var GetEventsByYearSimplePathParams = /** @class */ (function (_super) {
    __extends(GetEventsByYearSimplePathParams, _super);
    function GetEventsByYearSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetEventsByYearSimplePathParams.prototype, "year", void 0);
    return GetEventsByYearSimplePathParams;
}(SpeakeasyBase));
export { GetEventsByYearSimplePathParams };
var GetEventsByYearSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetEventsByYearSimpleHeaders, _super);
    function GetEventsByYearSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventsByYearSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventsByYearSimpleHeaders;
}(SpeakeasyBase));
export { GetEventsByYearSimpleHeaders };
var GetEventsByYearSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetEventsByYearSimpleSecurity, _super);
    function GetEventsByYearSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventsByYearSimpleSecurity.prototype, "apiKey", void 0);
    return GetEventsByYearSimpleSecurity;
}(SpeakeasyBase));
export { GetEventsByYearSimpleSecurity };
var GetEventsByYearSimpleRequest = /** @class */ (function (_super) {
    __extends(GetEventsByYearSimpleRequest, _super);
    function GetEventsByYearSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsByYearSimplePathParams)
    ], GetEventsByYearSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsByYearSimpleHeaders)
    ], GetEventsByYearSimpleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsByYearSimpleSecurity)
    ], GetEventsByYearSimpleRequest.prototype, "security", void 0);
    return GetEventsByYearSimpleRequest;
}(SpeakeasyBase));
export { GetEventsByYearSimpleRequest };
var GetEventsByYearSimpleResponse = /** @class */ (function (_super) {
    __extends(GetEventsByYearSimpleResponse, _super);
    function GetEventsByYearSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventsByYearSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.EventSimple }),
        __metadata("design:type", Array)
    ], GetEventsByYearSimpleResponse.prototype, "eventSimples", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventsByYearSimpleResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventsByYearSimpleResponse.prototype, "statusCode", void 0);
    return GetEventsByYearSimpleResponse;
}(SpeakeasyBase));
export { GetEventsByYearSimpleResponse };
