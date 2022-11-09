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
var CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner = /** @class */ (function (_super) {
    __extends(CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner, _super);
    function CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner.prototype, "longitude", void 0);
    return CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner;
}(SpeakeasyBase));
export { CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner };
var CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner = /** @class */ (function (_super) {
    __extends(CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner, _super);
    function CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner.prototype, "longitude", void 0);
    return CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner;
}(SpeakeasyBase));
export { CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner };
var CalculateReachableRangePostDataParametersAvoidAreasRectangles = /** @class */ (function (_super) {
    __extends(CalculateReachableRangePostDataParametersAvoidAreasRectangles, _super);
    function CalculateReachableRangePostDataParametersAvoidAreasRectangles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=northEastCorner" }),
        __metadata("design:type", CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner)
    ], CalculateReachableRangePostDataParametersAvoidAreasRectangles.prototype, "northEastCorner", void 0);
    __decorate([
        Metadata({ data: "json, name=southWestCorner" }),
        __metadata("design:type", CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner)
    ], CalculateReachableRangePostDataParametersAvoidAreasRectangles.prototype, "southWestCorner", void 0);
    return CalculateReachableRangePostDataParametersAvoidAreasRectangles;
}(SpeakeasyBase));
export { CalculateReachableRangePostDataParametersAvoidAreasRectangles };
var CalculateReachableRangePostDataParametersAvoidAreas = /** @class */ (function (_super) {
    __extends(CalculateReachableRangePostDataParametersAvoidAreas, _super);
    function CalculateReachableRangePostDataParametersAvoidAreas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=rectangles", elemType: shared.CalculateReachableRangePostDataParametersAvoidAreasRectangles }),
        __metadata("design:type", Array)
    ], CalculateReachableRangePostDataParametersAvoidAreas.prototype, "rectangles", void 0);
    return CalculateReachableRangePostDataParametersAvoidAreas;
}(SpeakeasyBase));
export { CalculateReachableRangePostDataParametersAvoidAreas };
var CalculateReachableRangePostDataParameters = /** @class */ (function (_super) {
    __extends(CalculateReachableRangePostDataParameters, _super);
    function CalculateReachableRangePostDataParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allowVignette" }),
        __metadata("design:type", Array)
    ], CalculateReachableRangePostDataParameters.prototype, "allowVignette", void 0);
    __decorate([
        Metadata({ data: "json, name=avoidAreas" }),
        __metadata("design:type", CalculateReachableRangePostDataParametersAvoidAreas)
    ], CalculateReachableRangePostDataParameters.prototype, "avoidAreas", void 0);
    __decorate([
        Metadata({ data: "json, name=avoidVignette" }),
        __metadata("design:type", Array)
    ], CalculateReachableRangePostDataParameters.prototype, "avoidVignette", void 0);
    return CalculateReachableRangePostDataParameters;
}(SpeakeasyBase));
export { CalculateReachableRangePostDataParameters };
