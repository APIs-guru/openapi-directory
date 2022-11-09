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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GetMapVersionNumberCopyrightsCaptionFormatFormatEnum;
(function (GetMapVersionNumberCopyrightsCaptionFormatFormatEnum) {
    GetMapVersionNumberCopyrightsCaptionFormatFormatEnum["Json"] = "json";
    GetMapVersionNumberCopyrightsCaptionFormatFormatEnum["Jsonp"] = "jsonp";
    GetMapVersionNumberCopyrightsCaptionFormatFormatEnum["Xml"] = "xml";
})(GetMapVersionNumberCopyrightsCaptionFormatFormatEnum || (GetMapVersionNumberCopyrightsCaptionFormatFormatEnum = {}));
var GetMapVersionNumberCopyrightsCaptionFormatPathParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsCaptionFormatPathParams, _super);
    function GetMapVersionNumberCopyrightsCaptionFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsCaptionFormatPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsCaptionFormatPathParams.prototype, "versionNumber", void 0);
    return GetMapVersionNumberCopyrightsCaptionFormatPathParams;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsCaptionFormatPathParams };
var GetMapVersionNumberCopyrightsCaptionFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsCaptionFormatQueryParams, _super);
    function GetMapVersionNumberCopyrightsCaptionFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsCaptionFormatQueryParams.prototype, "callback", void 0);
    return GetMapVersionNumberCopyrightsCaptionFormatQueryParams;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsCaptionFormatQueryParams };
var GetMapVersionNumberCopyrightsCaptionFormatRequest = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsCaptionFormatRequest, _super);
    function GetMapVersionNumberCopyrightsCaptionFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapVersionNumberCopyrightsCaptionFormatPathParams)
    ], GetMapVersionNumberCopyrightsCaptionFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapVersionNumberCopyrightsCaptionFormatQueryParams)
    ], GetMapVersionNumberCopyrightsCaptionFormatRequest.prototype, "queryParams", void 0);
    return GetMapVersionNumberCopyrightsCaptionFormatRequest;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsCaptionFormatRequest };
var GetMapVersionNumberCopyrightsCaptionFormatResponse = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsCaptionFormatResponse, _super);
    function GetMapVersionNumberCopyrightsCaptionFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsCaptionFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsCaptionFormatResponse.prototype, "statusCode", void 0);
    return GetMapVersionNumberCopyrightsCaptionFormatResponse;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsCaptionFormatResponse };
