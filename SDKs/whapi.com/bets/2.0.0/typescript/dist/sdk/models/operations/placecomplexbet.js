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
var PlaceComplexBetQueryParams = /** @class */ (function (_super) {
    __extends(PlaceComplexBetQueryParams, _super);
    function PlaceComplexBetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=exclude" }),
        __metadata("design:type", Array)
    ], PlaceComplexBetQueryParams.prototype, "exclude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], PlaceComplexBetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=include" }),
        __metadata("design:type", Array)
    ], PlaceComplexBetQueryParams.prototype, "include", void 0);
    return PlaceComplexBetQueryParams;
}(SpeakeasyBase));
export { PlaceComplexBetQueryParams };
var PlaceComplexBetHeaders = /** @class */ (function (_super) {
    __extends(PlaceComplexBetHeaders, _super);
    function PlaceComplexBetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiKey" }),
        __metadata("design:type", String)
    ], PlaceComplexBetHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiSecret" }),
        __metadata("design:type", String)
    ], PlaceComplexBetHeaders.prototype, "apiSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiTicket" }),
        __metadata("design:type", String)
    ], PlaceComplexBetHeaders.prototype, "apiTicket", void 0);
    return PlaceComplexBetHeaders;
}(SpeakeasyBase));
export { PlaceComplexBetHeaders };
var PlaceComplexBetRequest = /** @class */ (function (_super) {
    __extends(PlaceComplexBetRequest, _super);
    function PlaceComplexBetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaceComplexBetQueryParams)
    ], PlaceComplexBetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaceComplexBetHeaders)
    ], PlaceComplexBetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ComplexBetRequestBody)
    ], PlaceComplexBetRequest.prototype, "request", void 0);
    return PlaceComplexBetRequest;
}(SpeakeasyBase));
export { PlaceComplexBetRequest };
var PlaceComplexBetResponse = /** @class */ (function (_super) {
    __extends(PlaceComplexBetResponse, _super);
    function PlaceComplexBetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlaceComplexBetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlaceComplexBetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BetDelayed }),
        __metadata("design:type", Array)
    ], PlaceComplexBetResponse.prototype, "betDelayedResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BetPlaced }),
        __metadata("design:type", Array)
    ], PlaceComplexBetResponse.prototype, "betPlacedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Errors)
    ], PlaceComplexBetResponse.prototype, "errors", void 0);
    return PlaceComplexBetResponse;
}(SpeakeasyBase));
export { PlaceComplexBetResponse };
