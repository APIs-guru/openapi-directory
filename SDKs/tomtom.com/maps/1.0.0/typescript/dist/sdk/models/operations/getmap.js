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
var GetMapPathParams = /** @class */ (function (_super) {
    __extends(GetMapPathParams, _super);
    function GetMapPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapPathParams.prototype, "versionNumber", void 0);
    return GetMapPathParams;
}(SpeakeasyBase));
export { GetMapPathParams };
export var GetMapFormatEnum;
(function (GetMapFormatEnum) {
    GetMapFormatEnum["ImageJpeg"] = "image/jpeg";
    GetMapFormatEnum["ImagePng"] = "image/png";
})(GetMapFormatEnum || (GetMapFormatEnum = {}));
export var GetMapLayersEnum;
(function (GetMapLayersEnum) {
    GetMapLayersEnum["Basic"] = "basic";
})(GetMapLayersEnum || (GetMapLayersEnum = {}));
export var GetMapRequestEnum;
(function (GetMapRequestEnum) {
    GetMapRequestEnum["GetMap"] = "GetMap";
})(GetMapRequestEnum || (GetMapRequestEnum = {}));
export var GetMapServiceEnum;
(function (GetMapServiceEnum) {
    GetMapServiceEnum["Wms"] = "WMS";
})(GetMapServiceEnum || (GetMapServiceEnum = {}));
export var GetMapSrsEnum;
(function (GetMapSrsEnum) {
    GetMapSrsEnum["Epsg3857"] = "EPSG:3857";
    GetMapSrsEnum["Epsg4326"] = "EPSG:4326";
})(GetMapSrsEnum || (GetMapSrsEnum = {}));
export var GetMapStylesEnum;
(function (GetMapStylesEnum) {
    GetMapStylesEnum["Unknown"] = "";
})(GetMapStylesEnum || (GetMapStylesEnum = {}));
export var GetMapVersionEnum;
(function (GetMapVersionEnum) {
    GetMapVersionEnum["One11"] = "1.1.1";
})(GetMapVersionEnum || (GetMapVersionEnum = {}));
var GetMapQueryParams = /** @class */ (function (_super) {
    __extends(GetMapQueryParams, _super);
    function GetMapQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" }),
        __metadata("design:type", String)
    ], GetMapQueryParams.prototype, "bbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetMapQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], GetMapQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=layers" }),
        __metadata("design:type", String)
    ], GetMapQueryParams.prototype, "layers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request" }),
        __metadata("design:type", String)
    ], GetMapQueryParams.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service" }),
        __metadata("design:type", String)
    ], GetMapQueryParams.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=srs" }),
        __metadata("design:type", String)
    ], GetMapQueryParams.prototype, "srs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=styles" }),
        __metadata("design:type", String)
    ], GetMapQueryParams.prototype, "styles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], GetMapQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetMapQueryParams.prototype, "width", void 0);
    return GetMapQueryParams;
}(SpeakeasyBase));
export { GetMapQueryParams };
var GetMapRequest = /** @class */ (function (_super) {
    __extends(GetMapRequest, _super);
    function GetMapRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMapPathParams)
    ], GetMapRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMapQueryParams)
    ], GetMapRequest.prototype, "queryParams", void 0);
    return GetMapRequest;
}(SpeakeasyBase));
export { GetMapRequest };
var GetMapResponse = /** @class */ (function (_super) {
    __extends(GetMapResponse, _super);
    function GetMapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMapResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMapResponse.prototype, "statusCode", void 0);
    return GetMapResponse;
}(SpeakeasyBase));
export { GetMapResponse };
