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
export var GetMapVersionNumberCopyrightsFormatFormatEnum;
(function (GetMapVersionNumberCopyrightsFormatFormatEnum) {
    GetMapVersionNumberCopyrightsFormatFormatEnum["Json"] = "json";
    GetMapVersionNumberCopyrightsFormatFormatEnum["Jsonp"] = "jsonp";
    GetMapVersionNumberCopyrightsFormatFormatEnum["Xml"] = "xml";
})(GetMapVersionNumberCopyrightsFormatFormatEnum || (GetMapVersionNumberCopyrightsFormatFormatEnum = {}));
var GetMapVersionNumberCopyrightsFormatPathParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsFormatPathParams, _super);
    function GetMapVersionNumberCopyrightsFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsFormatPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsFormatPathParams.prototype, "versionNumber", void 0);
    return GetMapVersionNumberCopyrightsFormatPathParams;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsFormatPathParams };
var GetMapVersionNumberCopyrightsFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsFormatQueryParams, _super);
    function GetMapVersionNumberCopyrightsFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsFormatQueryParams.prototype, "callback", void 0);
    return GetMapVersionNumberCopyrightsFormatQueryParams;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsFormatQueryParams };
var GetMapVersionNumberCopyrightsFormatRequest = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsFormatRequest, _super);
    function GetMapVersionNumberCopyrightsFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapVersionNumberCopyrightsFormatPathParams)
    ], GetMapVersionNumberCopyrightsFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapVersionNumberCopyrightsFormatQueryParams)
    ], GetMapVersionNumberCopyrightsFormatRequest.prototype, "queryParams", void 0);
    return GetMapVersionNumberCopyrightsFormatRequest;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsFormatRequest };
var GetMapVersionNumberCopyrightsFormatResponse = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsFormatResponse, _super);
    function GetMapVersionNumberCopyrightsFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsFormatResponse.prototype, "statusCode", void 0);
    return GetMapVersionNumberCopyrightsFormatResponse;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsFormatResponse };
