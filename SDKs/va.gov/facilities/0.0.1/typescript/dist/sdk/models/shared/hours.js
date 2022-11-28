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
// Hours
/**
 * Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
**/
var Hours = /** @class */ (function (_super) {
    __extends(Hours, _super);
    function Hours() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friday" }),
        __metadata("design:type", String)
    ], Hours.prototype, "friday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monday" }),
        __metadata("design:type", String)
    ], Hours.prototype, "monday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saturday" }),
        __metadata("design:type", String)
    ], Hours.prototype, "saturday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sunday" }),
        __metadata("design:type", String)
    ], Hours.prototype, "sunday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thursday" }),
        __metadata("design:type", String)
    ], Hours.prototype, "thursday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tuesday" }),
        __metadata("design:type", String)
    ], Hours.prototype, "tuesday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wednesday" }),
        __metadata("design:type", String)
    ], Hours.prototype, "wednesday", void 0);
    return Hours;
}(SpeakeasyBase));
export { Hours };
