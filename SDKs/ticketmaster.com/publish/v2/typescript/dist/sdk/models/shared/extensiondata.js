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
import { Source } from "./source";
export var ExtensionDataRelatedEntityTypeEnum;
(function (ExtensionDataRelatedEntityTypeEnum) {
    ExtensionDataRelatedEntityTypeEnum["Event"] = "event";
    ExtensionDataRelatedEntityTypeEnum["Venue"] = "venue";
    ExtensionDataRelatedEntityTypeEnum["Attraction"] = "attraction";
})(ExtensionDataRelatedEntityTypeEnum || (ExtensionDataRelatedEntityTypeEnum = {}));
// ExtensionData
/**
 * This class defines an extenstion data on the Publish API
**/
var ExtensionData = /** @class */ (function (_super) {
    __extends(ExtensionData, _super);
    function ExtensionData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ExtensionData.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedEntityId" }),
        __metadata("design:type", String)
    ], ExtensionData.prototype, "relatedEntityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedEntitySource" }),
        __metadata("design:type", Source)
    ], ExtensionData.prototype, "relatedEntitySource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedEntityType" }),
        __metadata("design:type", String)
    ], ExtensionData.prototype, "relatedEntityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], ExtensionData.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ExtensionData.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionNumber" }),
        __metadata("design:type", Number)
    ], ExtensionData.prototype, "versionNumber", void 0);
    return ExtensionData;
}(SpeakeasyBase));
export { ExtensionData };
