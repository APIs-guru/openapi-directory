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
var V3VehicleDescriptor = /** @class */ (function (_super) {
    __extends(V3VehicleDescriptor, _super);
    function V3VehicleDescriptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=air_conditioned" }),
        __metadata("design:type", Boolean)
    ], V3VehicleDescriptor.prototype, "airConditioned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], V3VehicleDescriptor.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], V3VehicleDescriptor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", String)
    ], V3VehicleDescriptor.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=low_floor" }),
        __metadata("design:type", Boolean)
    ], V3VehicleDescriptor.prototype, "lowFloor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], V3VehicleDescriptor.prototype, "operator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplier" }),
        __metadata("design:type", String)
    ], V3VehicleDescriptor.prototype, "supplier", void 0);
    return V3VehicleDescriptor;
}(SpeakeasyBase));
export { V3VehicleDescriptor };
