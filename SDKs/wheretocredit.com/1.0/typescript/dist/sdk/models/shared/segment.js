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
var Segment = /** @class */ (function (_super) {
    __extends(Segment, _super);
    function Segment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingClass" }),
        __metadata("design:type", String)
    ], Segment.prototype, "bookingClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carrier" }),
        __metadata("design:type", String)
    ], Segment.prototype, "carrier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departure" }),
        __metadata("design:type", Date)
    ], Segment.prototype, "departure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], Segment.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], Segment.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flightNumber" }),
        __metadata("design:type", Number)
    ], Segment.prototype, "flightNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatingCarrier" }),
        __metadata("design:type", String)
    ], Segment.prototype, "operatingCarrier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], Segment.prototype, "origin", void 0);
    return Segment;
}(SpeakeasyBase));
export { Segment };
