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
export var GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum;
(function (GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum) {
    GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum["Json"] = "json";
    GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum["Jsonp"] = "jsonp";
    GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum["Xml"] = "xml";
})(GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum || (GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum = {}));
var GetMapVersionNumberCopyrightsZoomXYFormatPathParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsZoomXYFormatPathParams, _super);
    function GetMapVersionNumberCopyrightsZoomXYFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=X" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsZoomXYFormatPathParams.prototype, "x", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Y" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsZoomXYFormatPathParams.prototype, "y", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsZoomXYFormatPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsZoomXYFormatPathParams.prototype, "versionNumber", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=zoom" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsZoomXYFormatPathParams.prototype, "zoom", void 0);
    return GetMapVersionNumberCopyrightsZoomXYFormatPathParams;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsZoomXYFormatPathParams };
var GetMapVersionNumberCopyrightsZoomXYFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsZoomXYFormatQueryParams, _super);
    function GetMapVersionNumberCopyrightsZoomXYFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsZoomXYFormatQueryParams.prototype, "callback", void 0);
    return GetMapVersionNumberCopyrightsZoomXYFormatQueryParams;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsZoomXYFormatQueryParams };
var GetMapVersionNumberCopyrightsZoomXYFormatRequest = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsZoomXYFormatRequest, _super);
    function GetMapVersionNumberCopyrightsZoomXYFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapVersionNumberCopyrightsZoomXYFormatPathParams)
    ], GetMapVersionNumberCopyrightsZoomXYFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapVersionNumberCopyrightsZoomXYFormatQueryParams)
    ], GetMapVersionNumberCopyrightsZoomXYFormatRequest.prototype, "queryParams", void 0);
    return GetMapVersionNumberCopyrightsZoomXYFormatRequest;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsZoomXYFormatRequest };
var GetMapVersionNumberCopyrightsZoomXYFormatResponse = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberCopyrightsZoomXYFormatResponse, _super);
    function GetMapVersionNumberCopyrightsZoomXYFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMapVersionNumberCopyrightsZoomXYFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMapVersionNumberCopyrightsZoomXYFormatResponse.prototype, "statusCode", void 0);
    return GetMapVersionNumberCopyrightsZoomXYFormatResponse;
}(SpeakeasyBase));
export { GetMapVersionNumberCopyrightsZoomXYFormatResponse };
