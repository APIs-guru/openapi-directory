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
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], Server.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bingKey" }),
        __metadata("design:type", String)
    ], Server.prototype, "bingKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinateFormat" }),
        __metadata("design:type", String)
    ], Server.prototype, "coordinateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceReadonly" }),
        __metadata("design:type", Boolean)
    ], Server.prototype, "deviceReadonly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forceSettings" }),
        __metadata("design:type", Boolean)
    ], Server.prototype, "forceSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Server.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], Server.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitCommands" }),
        __metadata("design:type", Boolean)
    ], Server.prototype, "limitCommands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], Server.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=map" }),
        __metadata("design:type", String)
    ], Server.prototype, "map", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapUrl" }),
        __metadata("design:type", String)
    ], Server.prototype, "mapUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poiLayer" }),
        __metadata("design:type", String)
    ], Server.prototype, "poiLayer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readonly" }),
        __metadata("design:type", Boolean)
    ], Server.prototype, "readonly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registration" }),
        __metadata("design:type", Boolean)
    ], Server.prototype, "registration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twelveHourFormat" }),
        __metadata("design:type", Boolean)
    ], Server.prototype, "twelveHourFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Server.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zoom" }),
        __metadata("design:type", Number)
    ], Server.prototype, "zoom", void 0);
    return Server;
}(SpeakeasyBase));
export { Server };
