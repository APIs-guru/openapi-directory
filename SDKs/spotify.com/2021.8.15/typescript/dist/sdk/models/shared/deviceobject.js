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
// DeviceObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-deviceobject - Find more info on the official Spotify Web API Reference
**/
var DeviceObject = /** @class */ (function (_super) {
    __extends(DeviceObject, _super);
    function DeviceObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeviceObject.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_active" }),
        __metadata("design:type", Boolean)
    ], DeviceObject.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_private_session" }),
        __metadata("design:type", Boolean)
    ], DeviceObject.prototype, "isPrivateSession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_restricted" }),
        __metadata("design:type", Boolean)
    ], DeviceObject.prototype, "isRestricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeviceObject.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DeviceObject.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume_percent" }),
        __metadata("design:type", Number)
    ], DeviceObject.prototype, "volumePercent", void 0);
    return DeviceObject;
}(SpeakeasyBase));
export { DeviceObject };
