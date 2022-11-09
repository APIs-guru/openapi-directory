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
import * as shared from "../shared";
var CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner = /** @class */ (function (_super) {
    __extends(CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner, _super);
    function CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner.prototype, "longitude", void 0);
    return CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner;
}(SpeakeasyBase));
export { CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner };
var CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner = /** @class */ (function (_super) {
    __extends(CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner, _super);
    function CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner.prototype, "longitude", void 0);
    return CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner;
}(SpeakeasyBase));
export { CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner };
var CalculateRoutePostDataParametersAvoidAreasRectangles = /** @class */ (function (_super) {
    __extends(CalculateRoutePostDataParametersAvoidAreasRectangles, _super);
    function CalculateRoutePostDataParametersAvoidAreasRectangles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=northEastCorner" }),
        __metadata("design:type", CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner)
    ], CalculateRoutePostDataParametersAvoidAreasRectangles.prototype, "northEastCorner", void 0);
    __decorate([
        Metadata({ data: "json, name=southWestCorner" }),
        __metadata("design:type", CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner)
    ], CalculateRoutePostDataParametersAvoidAreasRectangles.prototype, "southWestCorner", void 0);
    return CalculateRoutePostDataParametersAvoidAreasRectangles;
}(SpeakeasyBase));
export { CalculateRoutePostDataParametersAvoidAreasRectangles };
var CalculateRoutePostDataParametersAvoidAreas = /** @class */ (function (_super) {
    __extends(CalculateRoutePostDataParametersAvoidAreas, _super);
    function CalculateRoutePostDataParametersAvoidAreas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=rectangles", elemType: shared.CalculateRoutePostDataParametersAvoidAreasRectangles }),
        __metadata("design:type", Array)
    ], CalculateRoutePostDataParametersAvoidAreas.prototype, "rectangles", void 0);
    return CalculateRoutePostDataParametersAvoidAreas;
}(SpeakeasyBase));
export { CalculateRoutePostDataParametersAvoidAreas };
var CalculateRoutePostDataParameters = /** @class */ (function (_super) {
    __extends(CalculateRoutePostDataParameters, _super);
    function CalculateRoutePostDataParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allowVignette" }),
        __metadata("design:type", Array)
    ], CalculateRoutePostDataParameters.prototype, "allowVignette", void 0);
    __decorate([
        Metadata({ data: "json, name=avoidAreas" }),
        __metadata("design:type", CalculateRoutePostDataParametersAvoidAreas)
    ], CalculateRoutePostDataParameters.prototype, "avoidAreas", void 0);
    __decorate([
        Metadata({ data: "json, name=avoidVignette" }),
        __metadata("design:type", Array)
    ], CalculateRoutePostDataParameters.prototype, "avoidVignette", void 0);
    __decorate([
        Metadata({ data: "json, name=supportingPoints" }),
        __metadata("design:type", Array)
    ], CalculateRoutePostDataParameters.prototype, "supportingPoints", void 0);
    return CalculateRoutePostDataParameters;
}(SpeakeasyBase));
export { CalculateRoutePostDataParameters };
