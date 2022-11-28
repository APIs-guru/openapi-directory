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
export var GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum) {
    GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum["Basic"] = "basic";
    GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum["Hybrid"] = "hybrid";
    GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum["Labels"] = "labels";
})(GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum || (GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum = {}));
export var GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum) {
    GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum["Main"] = "main";
})(GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum || (GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum = {}));
var GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams, _super);
    function GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=X" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams.prototype, "x", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Y" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams.prototype, "y", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=layer" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams.prototype, "layer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=style" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams.prototype, "style", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams.prototype, "versionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zoom" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams.prototype, "zoom", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams;
}(SpeakeasyBase));
export { GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams };
export var GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum;
(function (GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum) {
    GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum["Unified"] = "Unified";
    GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum["Il"] = "IL";
    GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum["In"] = "IN";
})(GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum || (GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum = {}));
var GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams, _super);
    function GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams.prototype, "view", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams;
}(SpeakeasyBase));
export { GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams };
var GetMapVersionNumberTileLayerStyleZoomXYPbfRequest = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXYPbfRequest, _super);
    function GetMapVersionNumberTileLayerStyleZoomXYPbfRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfRequest.prototype, "queryParams", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXYPbfRequest;
}(SpeakeasyBase));
export { GetMapVersionNumberTileLayerStyleZoomXYPbfRequest };
var GetMapVersionNumberTileLayerStyleZoomXYPbfResponse = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberTileLayerStyleZoomXYPbfResponse, _super);
    function GetMapVersionNumberTileLayerStyleZoomXYPbfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMapVersionNumberTileLayerStyleZoomXYPbfResponse.prototype, "statusCode", void 0);
    return GetMapVersionNumberTileLayerStyleZoomXYPbfResponse;
}(SpeakeasyBase));
export { GetMapVersionNumberTileLayerStyleZoomXYPbfResponse };
