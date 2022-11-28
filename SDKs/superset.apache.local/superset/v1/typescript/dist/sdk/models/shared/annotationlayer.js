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
export var AnnotationLayerAnnotationTypeEnum;
(function (AnnotationLayerAnnotationTypeEnum) {
    AnnotationLayerAnnotationTypeEnum["Formula"] = "FORMULA";
    AnnotationLayerAnnotationTypeEnum["Interval"] = "INTERVAL";
    AnnotationLayerAnnotationTypeEnum["Event"] = "EVENT";
    AnnotationLayerAnnotationTypeEnum["TimeSeries"] = "TIME_SERIES";
})(AnnotationLayerAnnotationTypeEnum || (AnnotationLayerAnnotationTypeEnum = {}));
export var AnnotationLayerOpacityEnum;
(function (AnnotationLayerOpacityEnum) {
    AnnotationLayerOpacityEnum["Unknown"] = "";
    AnnotationLayerOpacityEnum["OpacityLow"] = "opacityLow";
    AnnotationLayerOpacityEnum["OpacityMedium"] = "opacityMedium";
    AnnotationLayerOpacityEnum["OpacityHigh"] = "opacityHigh";
})(AnnotationLayerOpacityEnum || (AnnotationLayerOpacityEnum = {}));
export var AnnotationLayerSourceTypeEnum;
(function (AnnotationLayerSourceTypeEnum) {
    AnnotationLayerSourceTypeEnum["Unknown"] = "";
    AnnotationLayerSourceTypeEnum["Line"] = "line";
    AnnotationLayerSourceTypeEnum["Native"] = "NATIVE";
    AnnotationLayerSourceTypeEnum["Table"] = "table";
})(AnnotationLayerSourceTypeEnum || (AnnotationLayerSourceTypeEnum = {}));
export var AnnotationLayerStyleEnum;
(function (AnnotationLayerStyleEnum) {
    AnnotationLayerStyleEnum["Dashed"] = "dashed";
    AnnotationLayerStyleEnum["Dotted"] = "dotted";
    AnnotationLayerStyleEnum["Solid"] = "solid";
    AnnotationLayerStyleEnum["LongDashed"] = "longDashed";
})(AnnotationLayerStyleEnum || (AnnotationLayerStyleEnum = {}));
var AnnotationLayer = /** @class */ (function (_super) {
    __extends(AnnotationLayer, _super);
    function AnnotationLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationType" }),
        __metadata("design:type", String)
    ], AnnotationLayer.prototype, "annotationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], AnnotationLayer.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=descriptionColumns" }),
        __metadata("design:type", Array)
    ], AnnotationLayer.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideLine" }),
        __metadata("design:type", Boolean)
    ], AnnotationLayer.prototype, "hideLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intervalEndColumn" }),
        __metadata("design:type", String)
    ], AnnotationLayer.prototype, "intervalEndColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AnnotationLayer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opacity" }),
        __metadata("design:type", String)
    ], AnnotationLayer.prototype, "opacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrides" }),
        __metadata("design:type", Map)
    ], AnnotationLayer.prototype, "overrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show" }),
        __metadata("design:type", Boolean)
    ], AnnotationLayer.prototype, "show", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showMarkers" }),
        __metadata("design:type", Boolean)
    ], AnnotationLayer.prototype, "showMarkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceType" }),
        __metadata("design:type", String)
    ], AnnotationLayer.prototype, "sourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=style" }),
        __metadata("design:type", String)
    ], AnnotationLayer.prototype, "style", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeColumn" }),
        __metadata("design:type", String)
    ], AnnotationLayer.prototype, "timeColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=titleColumn" }),
        __metadata("design:type", String)
    ], AnnotationLayer.prototype, "titleColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], AnnotationLayer.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], AnnotationLayer.prototype, "width", void 0);
    return AnnotationLayer;
}(SpeakeasyBase));
export { AnnotationLayer };
