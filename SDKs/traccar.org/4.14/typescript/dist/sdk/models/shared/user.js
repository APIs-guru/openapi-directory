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
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=administrator" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "administrator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], User.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinateFormat" }),
        __metadata("design:type", String)
    ], User.prototype, "coordinateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceLimit" }),
        __metadata("design:type", Number)
    ], User.prototype, "deviceLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceReadonly" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "deviceReadonly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationTime" }),
        __metadata("design:type", Date)
    ], User.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], User.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitCommands" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "limitCommands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], User.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=map" }),
        __metadata("design:type", String)
    ], User.prototype, "map", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], User.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poiLayer" }),
        __metadata("design:type", String)
    ], User.prototype, "poiLayer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readonly" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "readonly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], User.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twelveHourFormat" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "twelveHourFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLimit" }),
        __metadata("design:type", Number)
    ], User.prototype, "userLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zoom" }),
        __metadata("design:type", Number)
    ], User.prototype, "zoom", void 0);
    return User;
}(SpeakeasyBase));
export { User };
