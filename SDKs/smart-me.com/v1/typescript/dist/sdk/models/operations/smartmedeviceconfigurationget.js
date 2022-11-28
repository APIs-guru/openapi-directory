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
import * as shared from "../shared";
var SmartMeDeviceConfigurationGetPathParams = /** @class */ (function (_super) {
    __extends(SmartMeDeviceConfigurationGetPathParams, _super);
    function SmartMeDeviceConfigurationGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], SmartMeDeviceConfigurationGetPathParams.prototype, "id", void 0);
    return SmartMeDeviceConfigurationGetPathParams;
}(SpeakeasyBase));
export { SmartMeDeviceConfigurationGetPathParams };
var SmartMeDeviceConfigurationGetRequest = /** @class */ (function (_super) {
    __extends(SmartMeDeviceConfigurationGetRequest, _super);
    function SmartMeDeviceConfigurationGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SmartMeDeviceConfigurationGetPathParams)
    ], SmartMeDeviceConfigurationGetRequest.prototype, "pathParams", void 0);
    return SmartMeDeviceConfigurationGetRequest;
}(SpeakeasyBase));
export { SmartMeDeviceConfigurationGetRequest };
var SmartMeDeviceConfigurationGetResponse = /** @class */ (function (_super) {
    __extends(SmartMeDeviceConfigurationGetResponse, _super);
    function SmartMeDeviceConfigurationGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SmartMeDeviceConfigurationGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SmartMeDeviceConfigurationGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SmartMeDeviceConfigurationContainer)
    ], SmartMeDeviceConfigurationGetResponse.prototype, "smartMeDeviceConfigurationContainer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SmartMeDeviceConfigurationGetResponse.prototype, "statusCode", void 0);
    return SmartMeDeviceConfigurationGetResponse;
}(SpeakeasyBase));
export { SmartMeDeviceConfigurationGetResponse };
