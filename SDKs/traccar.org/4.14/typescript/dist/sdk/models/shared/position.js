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
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accuracy" }),
        __metadata("design:type", Number)
    ], Position.prototype, "accuracy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], Position.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=altitude" }),
        __metadata("design:type", Number)
    ], Position.prototype, "altitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], Position.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=course" }),
        __metadata("design:type", Number)
    ], Position.prototype, "course", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceId" }),
        __metadata("design:type", Number)
    ], Position.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceTime" }),
        __metadata("design:type", Date)
    ], Position.prototype, "deviceTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixTime" }),
        __metadata("design:type", Date)
    ], Position.prototype, "fixTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Position.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], Position.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], Position.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Map)
    ], Position.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outdated" }),
        __metadata("design:type", Boolean)
    ], Position.prototype, "outdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], Position.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverTime" }),
        __metadata("design:type", Date)
    ], Position.prototype, "serverTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speed" }),
        __metadata("design:type", Number)
    ], Position.prototype, "speed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valid" }),
        __metadata("design:type", Boolean)
    ], Position.prototype, "valid", void 0);
    return Position;
}(SpeakeasyBase));
export { Position };
