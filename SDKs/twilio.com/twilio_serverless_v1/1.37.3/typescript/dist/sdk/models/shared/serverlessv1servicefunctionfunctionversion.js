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
import { FunctionVersionEnumVisibilityEnum } from "./functionversionenumvisibilityenum";
var ServerlessV1ServiceFunctionFunctionVersion = /** @class */ (function (_super) {
    __extends(ServerlessV1ServiceFunctionFunctionVersion, _super);
    function ServerlessV1ServiceFunctionFunctionVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ServerlessV1ServiceFunctionFunctionVersion.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], ServerlessV1ServiceFunctionFunctionVersion.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=function_sid" }),
        __metadata("design:type", String)
    ], ServerlessV1ServiceFunctionFunctionVersion.prototype, "functionSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], ServerlessV1ServiceFunctionFunctionVersion.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ServerlessV1ServiceFunctionFunctionVersion.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], ServerlessV1ServiceFunctionFunctionVersion.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ServerlessV1ServiceFunctionFunctionVersion.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ServerlessV1ServiceFunctionFunctionVersion.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], ServerlessV1ServiceFunctionFunctionVersion.prototype, "visibility", void 0);
    return ServerlessV1ServiceFunctionFunctionVersion;
}(SpeakeasyBase));
export { ServerlessV1ServiceFunctionFunctionVersion };
