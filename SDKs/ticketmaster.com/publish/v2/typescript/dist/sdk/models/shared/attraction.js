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
import { Classification } from "./classification";
import { Image } from "./image";
import { Source } from "./source";
export var AttractionTypeEnum;
(function (AttractionTypeEnum) {
    AttractionTypeEnum["Event"] = "event";
    AttractionTypeEnum["Venue"] = "venue";
    AttractionTypeEnum["Attraction"] = "attraction";
})(AttractionTypeEnum || (AttractionTypeEnum = {}));
// Attraction
/**
 * Attraction
**/
var Attraction = /** @class */ (function (_super) {
    __extends(Attraction, _super);
    function Attraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Attraction.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalInfos" }),
        __metadata("design:type", Map)
    ], Attraction.prototype, "additionalInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classifications", elemType: Classification }),
        __metadata("design:type", Array)
    ], Attraction.prototype, "classifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=descriptions" }),
        __metadata("design:type", Map)
    ], Attraction.prototype, "descriptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discoverable" }),
        __metadata("design:type", Boolean)
    ], Attraction.prototype, "discoverable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: Image }),
        __metadata("design:type", Array)
    ], Attraction.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names" }),
        __metadata("design:type", Map)
    ], Attraction.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=references" }),
        __metadata("design:type", Map)
    ], Attraction.prototype, "references", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationships" }),
        __metadata("design:type", Array)
    ], Attraction.prototype, "relationships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Source)
    ], Attraction.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test" }),
        __metadata("design:type", Boolean)
    ], Attraction.prototype, "test", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Attraction.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Attraction.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Attraction.prototype, "version", void 0);
    return Attraction;
}(SpeakeasyBase));
export { Attraction };
