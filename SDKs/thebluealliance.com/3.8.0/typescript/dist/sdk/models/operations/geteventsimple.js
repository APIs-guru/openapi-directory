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
var GetEventSimplePathParams = /** @class */ (function (_super) {
    __extends(GetEventSimplePathParams, _super);
    function GetEventSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventSimplePathParams.prototype, "eventKey", void 0);
    return GetEventSimplePathParams;
}(SpeakeasyBase));
export { GetEventSimplePathParams };
var GetEventSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetEventSimpleHeaders, _super);
    function GetEventSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventSimpleHeaders;
}(SpeakeasyBase));
export { GetEventSimpleHeaders };
var GetEventSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetEventSimpleSecurity, _super);
    function GetEventSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventSimpleSecurity.prototype, "apiKey", void 0);
    return GetEventSimpleSecurity;
}(SpeakeasyBase));
export { GetEventSimpleSecurity };
var GetEventSimpleRequest = /** @class */ (function (_super) {
    __extends(GetEventSimpleRequest, _super);
    function GetEventSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventSimplePathParams)
    ], GetEventSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventSimpleHeaders)
    ], GetEventSimpleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventSimpleSecurity)
    ], GetEventSimpleRequest.prototype, "security", void 0);
    return GetEventSimpleRequest;
}(SpeakeasyBase));
export { GetEventSimpleRequest };
var GetEventSimpleResponse = /** @class */ (function (_super) {
    __extends(GetEventSimpleResponse, _super);
    function GetEventSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventSimple)
    ], GetEventSimpleResponse.prototype, "eventSimple", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventSimpleResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventSimpleResponse.prototype, "statusCode", void 0);
    return GetEventSimpleResponse;
}(SpeakeasyBase));
export { GetEventSimpleResponse };
