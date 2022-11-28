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
var GetCustomLogosPathParams = /** @class */ (function (_super) {
    __extends(GetCustomLogosPathParams, _super);
    function GetCustomLogosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetCustomLogosPathParams.prototype, "userId", void 0);
    return GetCustomLogosPathParams;
}(SpeakeasyBase));
export { GetCustomLogosPathParams };
var GetCustomLogosRequest = /** @class */ (function (_super) {
    __extends(GetCustomLogosRequest, _super);
    function GetCustomLogosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomLogosPathParams)
    ], GetCustomLogosRequest.prototype, "pathParams", void 0);
    return GetCustomLogosRequest;
}(SpeakeasyBase));
export { GetCustomLogosRequest };
var GetCustomLogosResponse = /** @class */ (function (_super) {
    __extends(GetCustomLogosResponse, _super);
    function GetCustomLogosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCustomLogosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCustomLogosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetCustomLogosResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Picture }),
        __metadata("design:type", Array)
    ], GetCustomLogosResponse.prototype, "pictures", void 0);
    return GetCustomLogosResponse;
}(SpeakeasyBase));
export { GetCustomLogosResponse };
