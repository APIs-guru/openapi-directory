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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PlaceSingleBetQueryParams = /** @class */ (function (_super) {
    __extends(PlaceSingleBetQueryParams, _super);
    function PlaceSingleBetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=exclude" }),
        __metadata("design:type", Array)
    ], PlaceSingleBetQueryParams.prototype, "exclude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], PlaceSingleBetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=include" }),
        __metadata("design:type", Array)
    ], PlaceSingleBetQueryParams.prototype, "include", void 0);
    return PlaceSingleBetQueryParams;
}(SpeakeasyBase));
export { PlaceSingleBetQueryParams };
var PlaceSingleBetHeaders = /** @class */ (function (_super) {
    __extends(PlaceSingleBetHeaders, _super);
    function PlaceSingleBetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=apiKey" }),
        __metadata("design:type", String)
    ], PlaceSingleBetHeaders.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=apiSecret" }),
        __metadata("design:type", String)
    ], PlaceSingleBetHeaders.prototype, "apiSecret", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=apiTicket" }),
        __metadata("design:type", String)
    ], PlaceSingleBetHeaders.prototype, "apiTicket", void 0);
    return PlaceSingleBetHeaders;
}(SpeakeasyBase));
export { PlaceSingleBetHeaders };
var PlaceSingleBetRequest = /** @class */ (function (_super) {
    __extends(PlaceSingleBetRequest, _super);
    function PlaceSingleBetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PlaceSingleBetQueryParams)
    ], PlaceSingleBetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PlaceSingleBetHeaders)
    ], PlaceSingleBetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SingleBetRequestBody)
    ], PlaceSingleBetRequest.prototype, "request", void 0);
    return PlaceSingleBetRequest;
}(SpeakeasyBase));
export { PlaceSingleBetRequest };
var PlaceSingleBetResponse = /** @class */ (function (_super) {
    __extends(PlaceSingleBetResponse, _super);
    function PlaceSingleBetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PlaceSingleBetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PlaceSingleBetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.BetDelayed }),
        __metadata("design:type", Array)
    ], PlaceSingleBetResponse.prototype, "betDelayedResponse", void 0);
    __decorate([
        Metadata({ elemType: shared.BetPlaced }),
        __metadata("design:type", Array)
    ], PlaceSingleBetResponse.prototype, "betPlacedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Errors)
    ], PlaceSingleBetResponse.prototype, "errors", void 0);
    return PlaceSingleBetResponse;
}(SpeakeasyBase));
export { PlaceSingleBetResponse };
