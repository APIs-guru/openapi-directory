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
var GetEventTeamsSimplePathParams = /** @class */ (function (_super) {
    __extends(GetEventTeamsSimplePathParams, _super);
    function GetEventTeamsSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventTeamsSimplePathParams.prototype, "eventKey", void 0);
    return GetEventTeamsSimplePathParams;
}(SpeakeasyBase));
export { GetEventTeamsSimplePathParams };
var GetEventTeamsSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetEventTeamsSimpleHeaders, _super);
    function GetEventTeamsSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventTeamsSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventTeamsSimpleHeaders;
}(SpeakeasyBase));
export { GetEventTeamsSimpleHeaders };
var GetEventTeamsSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetEventTeamsSimpleSecurity, _super);
    function GetEventTeamsSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventTeamsSimpleSecurity.prototype, "apiKey", void 0);
    return GetEventTeamsSimpleSecurity;
}(SpeakeasyBase));
export { GetEventTeamsSimpleSecurity };
var GetEventTeamsSimpleRequest = /** @class */ (function (_super) {
    __extends(GetEventTeamsSimpleRequest, _super);
    function GetEventTeamsSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventTeamsSimplePathParams)
    ], GetEventTeamsSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventTeamsSimpleHeaders)
    ], GetEventTeamsSimpleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventTeamsSimpleSecurity)
    ], GetEventTeamsSimpleRequest.prototype, "security", void 0);
    return GetEventTeamsSimpleRequest;
}(SpeakeasyBase));
export { GetEventTeamsSimpleRequest };
var GetEventTeamsSimpleResponse = /** @class */ (function (_super) {
    __extends(GetEventTeamsSimpleResponse, _super);
    function GetEventTeamsSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventTeamsSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventTeamsSimpleResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventTeamsSimpleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamSimple }),
        __metadata("design:type", Array)
    ], GetEventTeamsSimpleResponse.prototype, "teamSimples", void 0);
    return GetEventTeamsSimpleResponse;
}(SpeakeasyBase));
export { GetEventTeamsSimpleResponse };
