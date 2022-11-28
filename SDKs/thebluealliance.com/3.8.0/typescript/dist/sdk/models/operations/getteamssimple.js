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
var GetTeamsSimplePathParams = /** @class */ (function (_super) {
    __extends(GetTeamsSimplePathParams, _super);
    function GetTeamsSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page_num" }),
        __metadata("design:type", Number)
    ], GetTeamsSimplePathParams.prototype, "pageNum", void 0);
    return GetTeamsSimplePathParams;
}(SpeakeasyBase));
export { GetTeamsSimplePathParams };
var GetTeamsSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetTeamsSimpleHeaders, _super);
    function GetTeamsSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamsSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamsSimpleHeaders;
}(SpeakeasyBase));
export { GetTeamsSimpleHeaders };
var GetTeamsSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetTeamsSimpleSecurity, _super);
    function GetTeamsSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamsSimpleSecurity.prototype, "apiKey", void 0);
    return GetTeamsSimpleSecurity;
}(SpeakeasyBase));
export { GetTeamsSimpleSecurity };
var GetTeamsSimpleRequest = /** @class */ (function (_super) {
    __extends(GetTeamsSimpleRequest, _super);
    function GetTeamsSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsSimplePathParams)
    ], GetTeamsSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsSimpleHeaders)
    ], GetTeamsSimpleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsSimpleSecurity)
    ], GetTeamsSimpleRequest.prototype, "security", void 0);
    return GetTeamsSimpleRequest;
}(SpeakeasyBase));
export { GetTeamsSimpleRequest };
var GetTeamsSimpleResponse = /** @class */ (function (_super) {
    __extends(GetTeamsSimpleResponse, _super);
    function GetTeamsSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamsSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamsSimpleResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamsSimpleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamSimple }),
        __metadata("design:type", Array)
    ], GetTeamsSimpleResponse.prototype, "teamSimples", void 0);
    return GetTeamsSimpleResponse;
}(SpeakeasyBase));
export { GetTeamsSimpleResponse };
