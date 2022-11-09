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
var SentimentQueryParams = /** @class */ (function (_super) {
    __extends(SentimentQueryParams, _super);
    function SentimentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=all" }),
        __metadata("design:type", Boolean)
    ], SentimentQueryParams.prototype, "all", void 0);
    return SentimentQueryParams;
}(SpeakeasyBase));
export { SentimentQueryParams };
var SentimentRequest = /** @class */ (function (_super) {
    __extends(SentimentRequest, _super);
    function SentimentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SentimentQueryParams)
    ], SentimentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json", elemType: shared.Post }),
        __metadata("design:type", Array)
    ], SentimentRequest.prototype, "request", void 0);
    return SentimentRequest;
}(SpeakeasyBase));
export { SentimentRequest };
var SentimentResponse = /** @class */ (function (_super) {
    __extends(SentimentResponse, _super);
    function SentimentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SentimentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.PostPredicted }),
        __metadata("design:type", Array)
    ], SentimentResponse.prototype, "predictionResults", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SentimentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ValidationErrors)
    ], SentimentResponse.prototype, "validationErrors", void 0);
    return SentimentResponse;
}(SpeakeasyBase));
export { SentimentResponse };
