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
var GetMapVersionNumberStaticimagePathParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberStaticimagePathParams, _super);
    function GetMapVersionNumberStaticimagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberStaticimagePathParams.prototype, "versionNumber", void 0);
    return GetMapVersionNumberStaticimagePathParams;
}(SpeakeasyBase));
export { GetMapVersionNumberStaticimagePathParams };
export var GetMapVersionNumberStaticimageFormatEnum;
(function (GetMapVersionNumberStaticimageFormatEnum) {
    GetMapVersionNumberStaticimageFormatEnum["Png"] = "png";
    GetMapVersionNumberStaticimageFormatEnum["Jpg"] = "jpg";
    GetMapVersionNumberStaticimageFormatEnum["Jpeg"] = "jpeg";
})(GetMapVersionNumberStaticimageFormatEnum || (GetMapVersionNumberStaticimageFormatEnum = {}));
export var GetMapVersionNumberStaticimageLayerEnum;
(function (GetMapVersionNumberStaticimageLayerEnum) {
    GetMapVersionNumberStaticimageLayerEnum["Basic"] = "basic";
    GetMapVersionNumberStaticimageLayerEnum["Hybrid"] = "hybrid";
    GetMapVersionNumberStaticimageLayerEnum["Labels"] = "labels";
})(GetMapVersionNumberStaticimageLayerEnum || (GetMapVersionNumberStaticimageLayerEnum = {}));
export var GetMapVersionNumberStaticimageStyleEnum;
(function (GetMapVersionNumberStaticimageStyleEnum) {
    GetMapVersionNumberStaticimageStyleEnum["Main"] = "main";
    GetMapVersionNumberStaticimageStyleEnum["Night"] = "night";
})(GetMapVersionNumberStaticimageStyleEnum || (GetMapVersionNumberStaticimageStyleEnum = {}));
export var GetMapVersionNumberStaticimageViewEnum;
(function (GetMapVersionNumberStaticimageViewEnum) {
    GetMapVersionNumberStaticimageViewEnum["Unified"] = "Unified";
    GetMapVersionNumberStaticimageViewEnum["In"] = "IN";
})(GetMapVersionNumberStaticimageViewEnum || (GetMapVersionNumberStaticimageViewEnum = {}));
var GetMapVersionNumberStaticimageQueryParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberStaticimageQueryParams, _super);
    function GetMapVersionNumberStaticimageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bbox" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberStaticimageQueryParams.prototype, "bbox", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=center" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberStaticimageQueryParams.prototype, "center", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberStaticimageQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberStaticimageQueryParams.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=layer" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberStaticimageQueryParams.prototype, "layer", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=style" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberStaticimageQueryParams.prototype, "style", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberStaticimageQueryParams.prototype, "view", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberStaticimageQueryParams.prototype, "width", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=zoom" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberStaticimageQueryParams.prototype, "zoom", void 0);
    return GetMapVersionNumberStaticimageQueryParams;
}(SpeakeasyBase));
export { GetMapVersionNumberStaticimageQueryParams };
var GetMapVersionNumberStaticimageRequest = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberStaticimageRequest, _super);
    function GetMapVersionNumberStaticimageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapVersionNumberStaticimagePathParams)
    ], GetMapVersionNumberStaticimageRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapVersionNumberStaticimageQueryParams)
    ], GetMapVersionNumberStaticimageRequest.prototype, "queryParams", void 0);
    return GetMapVersionNumberStaticimageRequest;
}(SpeakeasyBase));
export { GetMapVersionNumberStaticimageRequest };
var GetMapVersionNumberStaticimageResponse = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberStaticimageResponse, _super);
    function GetMapVersionNumberStaticimageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMapVersionNumberStaticimageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMapVersionNumberStaticimageResponse.prototype, "statusCode", void 0);
    return GetMapVersionNumberStaticimageResponse;
}(SpeakeasyBase));
export { GetMapVersionNumberStaticimageResponse };
