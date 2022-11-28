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
export var GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum) {
    GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum["Jpg"] = "jpg";
    GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum["Png"] = "png";
})(GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum || (GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum = {}));
export var GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum) {
    GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum["Basic"] = "basic";
    GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum["Hybrid"] = "hybrid";
    GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum["Labels"] = "labels";
})(GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum || (GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum = {}));
export var GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum) {
    GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum["Main"] = "main";
    GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum["Night"] = "night";
})(GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum || (GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum = {}));
var GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams, _super);
    function GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=X" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams.prototype, "x", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Y" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams.prototype, "y", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=layer" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams.prototype, "layer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=style" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams.prototype, "style", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams.prototype, "versionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zoom" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams.prototype, "zoom", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams;
}(SpeakeasyBase));
export { GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams };
export var GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum) {
    GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum["Unified"] = "Unified";
    GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum["In"] = "IN";
})(GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum || (GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum = {}));
var GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams, _super);
    function GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tileSize" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams.prototype, "tileSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams.prototype, "view", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams;
}(SpeakeasyBase));
export { GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams };
var GetMapVersionNumberTileLayerStyleZoomXYFormatRequest = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXYFormatRequest, _super);
    function GetMapVersionNumberTileLayerStyleZoomXYFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatRequest.prototype, "queryParams", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXYFormatRequest;
}(SpeakeasyBase));
export { GetMapVersionNumberTileLayerStyleZoomXYFormatRequest };
var GetMapVersionNumberTileLayerStyleZoomXYFormatResponse = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXYFormatResponse, _super);
    function GetMapVersionNumberTileLayerStyleZoomXYFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXYFormatResponse.prototype, "statusCode", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXYFormatResponse;
}(SpeakeasyBase));
export { GetMapVersionNumberTileLayerStyleZoomXYFormatResponse };
