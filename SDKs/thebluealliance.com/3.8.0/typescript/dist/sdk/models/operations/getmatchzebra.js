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
var GetMatchZebraPathParams = /** @class */ (function (_super) {
    __extends(GetMatchZebraPathParams, _super);
    function GetMatchZebraPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=match_key" }),
        __metadata("design:type", String)
    ], GetMatchZebraPathParams.prototype, "matchKey", void 0);
    return GetMatchZebraPathParams;
}(SpeakeasyBase));
export { GetMatchZebraPathParams };
var GetMatchZebraHeaders = /** @class */ (function (_super) {
    __extends(GetMatchZebraHeaders, _super);
    function GetMatchZebraHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetMatchZebraHeaders.prototype, "ifModifiedSince", void 0);
    return GetMatchZebraHeaders;
}(SpeakeasyBase));
export { GetMatchZebraHeaders };
var GetMatchZebraSecurity = /** @class */ (function (_super) {
    __extends(GetMatchZebraSecurity, _super);
    function GetMatchZebraSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetMatchZebraSecurity.prototype, "apiKey", void 0);
    return GetMatchZebraSecurity;
}(SpeakeasyBase));
export { GetMatchZebraSecurity };
var GetMatchZebraRequest = /** @class */ (function (_super) {
    __extends(GetMatchZebraRequest, _super);
    function GetMatchZebraRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMatchZebraPathParams)
    ], GetMatchZebraRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMatchZebraHeaders)
    ], GetMatchZebraRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMatchZebraSecurity)
    ], GetMatchZebraRequest.prototype, "security", void 0);
    return GetMatchZebraRequest;
}(SpeakeasyBase));
export { GetMatchZebraRequest };
var GetMatchZebraResponse = /** @class */ (function (_super) {
    __extends(GetMatchZebraResponse, _super);
    function GetMatchZebraResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMatchZebraResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetMatchZebraResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMatchZebraResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Zebra)
    ], GetMatchZebraResponse.prototype, "zebra", void 0);
    return GetMatchZebraResponse;
}(SpeakeasyBase));
export { GetMatchZebraResponse };
