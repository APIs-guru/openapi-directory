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
var DirectionsForDirectionPathParams = /** @class */ (function (_super) {
    __extends(DirectionsForDirectionPathParams, _super);
    function DirectionsForDirectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=direction_id" }),
        __metadata("design:type", Number)
    ], DirectionsForDirectionPathParams.prototype, "directionId", void 0);
    return DirectionsForDirectionPathParams;
}(SpeakeasyBase));
export { DirectionsForDirectionPathParams };
var DirectionsForDirectionQueryParams = /** @class */ (function (_super) {
    __extends(DirectionsForDirectionQueryParams, _super);
    function DirectionsForDirectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], DirectionsForDirectionQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], DirectionsForDirectionQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], DirectionsForDirectionQueryParams.prototype, "token", void 0);
    return DirectionsForDirectionQueryParams;
}(SpeakeasyBase));
export { DirectionsForDirectionQueryParams };
var DirectionsForDirectionRequest = /** @class */ (function (_super) {
    __extends(DirectionsForDirectionRequest, _super);
    function DirectionsForDirectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectionsForDirectionPathParams)
    ], DirectionsForDirectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectionsForDirectionQueryParams)
    ], DirectionsForDirectionRequest.prototype, "queryParams", void 0);
    return DirectionsForDirectionRequest;
}(SpeakeasyBase));
export { DirectionsForDirectionRequest };
var DirectionsForDirectionResponse = /** @class */ (function (_super) {
    __extends(DirectionsForDirectionResponse, _super);
    function DirectionsForDirectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DirectionsForDirectionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectionsForDirectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectionsForDirectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3DirectionsResponse)
    ], DirectionsForDirectionResponse.prototype, "v3DirectionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], DirectionsForDirectionResponse.prototype, "v3ErrorResponse", void 0);
    return DirectionsForDirectionResponse;
}(SpeakeasyBase));
export { DirectionsForDirectionResponse };
