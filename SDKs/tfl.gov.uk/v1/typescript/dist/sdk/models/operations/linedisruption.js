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
var LineDisruptionPathParams = /** @class */ (function (_super) {
    __extends(LineDisruptionPathParams, _super);
    function LineDisruptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], LineDisruptionPathParams.prototype, "ids", void 0);
    return LineDisruptionPathParams;
}(SpeakeasyBase));
export { LineDisruptionPathParams };
var LineDisruptionRequest = /** @class */ (function (_super) {
    __extends(LineDisruptionRequest, _super);
    function LineDisruptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LineDisruptionPathParams)
    ], LineDisruptionRequest.prototype, "pathParams", void 0);
    return LineDisruptionRequest;
}(SpeakeasyBase));
export { LineDisruptionRequest };
var LineDisruptionResponse = /** @class */ (function (_super) {
    __extends(LineDisruptionResponse, _super);
    function LineDisruptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], LineDisruptionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LineDisruptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LineDisruptionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesDisruption }),
        __metadata("design:type", Array)
    ], LineDisruptionResponse.prototype, "tflApiPresentationEntitiesDisruptions", void 0);
    return LineDisruptionResponse;
}(SpeakeasyBase));
export { LineDisruptionResponse };
