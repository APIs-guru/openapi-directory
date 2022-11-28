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
var ValidateForVoiceQueryParams = /** @class */ (function (_super) {
    __extends(ValidateForVoiceQueryParams, _super);
    function ValidateForVoiceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ValidateForVoiceQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", String)
    ], ValidateForVoiceQueryParams.prototype, "number", void 0);
    return ValidateForVoiceQueryParams;
}(SpeakeasyBase));
export { ValidateForVoiceQueryParams };
var ValidateForVoice200ApplicationJson = /** @class */ (function (_super) {
    __extends(ValidateForVoice200ApplicationJson, _super);
    function ValidateForVoice200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ValidateForVoice200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ValidateForVoice200ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], ValidateForVoice200ApplicationJson.prototype, "success", void 0);
    return ValidateForVoice200ApplicationJson;
}(SpeakeasyBase));
export { ValidateForVoice200ApplicationJson };
var ValidateForVoiceRequest = /** @class */ (function (_super) {
    __extends(ValidateForVoiceRequest, _super);
    function ValidateForVoiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ValidateForVoiceQueryParams)
    ], ValidateForVoiceRequest.prototype, "queryParams", void 0);
    return ValidateForVoiceRequest;
}(SpeakeasyBase));
export { ValidateForVoiceRequest };
var ValidateForVoiceResponse = /** @class */ (function (_super) {
    __extends(ValidateForVoiceResponse, _super);
    function ValidateForVoiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ValidateForVoiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ValidateForVoiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ValidateForVoice200ApplicationJson)
    ], ValidateForVoiceResponse.prototype, "validateForVoice200ApplicationJsonObject", void 0);
    return ValidateForVoiceResponse;
}(SpeakeasyBase));
export { ValidateForVoiceResponse };
