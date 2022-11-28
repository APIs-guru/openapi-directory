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
var ModeArrivalsPathParams = /** @class */ (function (_super) {
    __extends(ModeArrivalsPathParams, _super);
    function ModeArrivalsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mode" }),
        __metadata("design:type", String)
    ], ModeArrivalsPathParams.prototype, "mode", void 0);
    return ModeArrivalsPathParams;
}(SpeakeasyBase));
export { ModeArrivalsPathParams };
var ModeArrivalsQueryParams = /** @class */ (function (_super) {
    __extends(ModeArrivalsQueryParams, _super);
    function ModeArrivalsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], ModeArrivalsQueryParams.prototype, "count", void 0);
    return ModeArrivalsQueryParams;
}(SpeakeasyBase));
export { ModeArrivalsQueryParams };
var ModeArrivalsRequest = /** @class */ (function (_super) {
    __extends(ModeArrivalsRequest, _super);
    function ModeArrivalsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModeArrivalsPathParams)
    ], ModeArrivalsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModeArrivalsQueryParams)
    ], ModeArrivalsRequest.prototype, "queryParams", void 0);
    return ModeArrivalsRequest;
}(SpeakeasyBase));
export { ModeArrivalsRequest };
var ModeArrivalsResponse = /** @class */ (function (_super) {
    __extends(ModeArrivalsResponse, _super);
    function ModeArrivalsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ModeArrivalsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModeArrivalsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModeArrivalsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPrediction }),
        __metadata("design:type", Array)
    ], ModeArrivalsResponse.prototype, "tflApiPresentationEntitiesPredictions", void 0);
    return ModeArrivalsResponse;
}(SpeakeasyBase));
export { ModeArrivalsResponse };
