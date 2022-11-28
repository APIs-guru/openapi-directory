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
var GetEventsByYearKeysPathParams = /** @class */ (function (_super) {
    __extends(GetEventsByYearKeysPathParams, _super);
    function GetEventsByYearKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetEventsByYearKeysPathParams.prototype, "year", void 0);
    return GetEventsByYearKeysPathParams;
}(SpeakeasyBase));
export { GetEventsByYearKeysPathParams };
var GetEventsByYearKeysHeaders = /** @class */ (function (_super) {
    __extends(GetEventsByYearKeysHeaders, _super);
    function GetEventsByYearKeysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventsByYearKeysHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventsByYearKeysHeaders;
}(SpeakeasyBase));
export { GetEventsByYearKeysHeaders };
var GetEventsByYearKeysSecurity = /** @class */ (function (_super) {
    __extends(GetEventsByYearKeysSecurity, _super);
    function GetEventsByYearKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventsByYearKeysSecurity.prototype, "apiKey", void 0);
    return GetEventsByYearKeysSecurity;
}(SpeakeasyBase));
export { GetEventsByYearKeysSecurity };
var GetEventsByYearKeysRequest = /** @class */ (function (_super) {
    __extends(GetEventsByYearKeysRequest, _super);
    function GetEventsByYearKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsByYearKeysPathParams)
    ], GetEventsByYearKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsByYearKeysHeaders)
    ], GetEventsByYearKeysRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsByYearKeysSecurity)
    ], GetEventsByYearKeysRequest.prototype, "security", void 0);
    return GetEventsByYearKeysRequest;
}(SpeakeasyBase));
export { GetEventsByYearKeysRequest };
var GetEventsByYearKeysResponse = /** @class */ (function (_super) {
    __extends(GetEventsByYearKeysResponse, _super);
    function GetEventsByYearKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventsByYearKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventsByYearKeysResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventsByYearKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetEventsByYearKeysResponse.prototype, "getEventsByYearKeys200ApplicationJsonStrings", void 0);
    return GetEventsByYearKeysResponse;
}(SpeakeasyBase));
export { GetEventsByYearKeysResponse };
