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
var AddVideoToVodPathParams = /** @class */ (function (_super) {
    __extends(AddVideoToVodPathParams, _super);
    function AddVideoToVodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], AddVideoToVodPathParams.prototype, "ondemandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], AddVideoToVodPathParams.prototype, "videoId", void 0);
    return AddVideoToVodPathParams;
}(SpeakeasyBase));
export { AddVideoToVodPathParams };
var AddVideoToVodRequestBodyBuyPrice = /** @class */ (function (_super) {
    __extends(AddVideoToVodRequestBodyBuyPrice, _super);
    function AddVideoToVodRequestBodyBuyPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AUD" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "aud", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CAD" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "cad", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CHF" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "chf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DKK" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "dkk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EUR" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "eur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GBP" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "gbp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JPY" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "jpy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KRW" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "krw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NOK" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "nok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PLN" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "pln", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SEK" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "sek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyBuyPrice.prototype, "usd", void 0);
    return AddVideoToVodRequestBodyBuyPrice;
}(SpeakeasyBase));
export { AddVideoToVodRequestBodyBuyPrice };
var AddVideoToVodRequestBodyBuy = /** @class */ (function (_super) {
    __extends(AddVideoToVodRequestBodyBuy, _super);
    function AddVideoToVodRequestBodyBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", AddVideoToVodRequestBodyBuyPrice)
    ], AddVideoToVodRequestBodyBuy.prototype, "price", void 0);
    return AddVideoToVodRequestBodyBuy;
}(SpeakeasyBase));
export { AddVideoToVodRequestBodyBuy };
var AddVideoToVodRequestBodyRentPrice = /** @class */ (function (_super) {
    __extends(AddVideoToVodRequestBodyRentPrice, _super);
    function AddVideoToVodRequestBodyRentPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AUD" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "aud", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CAD" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "cad", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CHF" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "chf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DKK" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "dkk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EUR" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "eur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GBP" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "gbp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JPY" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "jpy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KRW" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "krw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NOK" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "nok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PLN" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "pln", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SEK" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "sek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBodyRentPrice.prototype, "usd", void 0);
    return AddVideoToVodRequestBodyRentPrice;
}(SpeakeasyBase));
export { AddVideoToVodRequestBodyRentPrice };
var AddVideoToVodRequestBodyRent = /** @class */ (function (_super) {
    __extends(AddVideoToVodRequestBodyRent, _super);
    function AddVideoToVodRequestBodyRent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", AddVideoToVodRequestBodyRentPrice)
    ], AddVideoToVodRequestBodyRent.prototype, "price", void 0);
    return AddVideoToVodRequestBodyRent;
}(SpeakeasyBase));
export { AddVideoToVodRequestBodyRent };
export var AddVideoToVodRequestBodyTypeEnum;
(function (AddVideoToVodRequestBodyTypeEnum) {
    AddVideoToVodRequestBodyTypeEnum["Extra"] = "extra";
    AddVideoToVodRequestBodyTypeEnum["Main"] = "main";
    AddVideoToVodRequestBodyTypeEnum["Trailer"] = "trailer";
})(AddVideoToVodRequestBodyTypeEnum || (AddVideoToVodRequestBodyTypeEnum = {}));
var AddVideoToVodRequestBody = /** @class */ (function (_super) {
    __extends(AddVideoToVodRequestBody, _super);
    function AddVideoToVodRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buy" }),
        __metadata("design:type", AddVideoToVodRequestBodyBuy)
    ], AddVideoToVodRequestBody.prototype, "buy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBody.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=release_year" }),
        __metadata("design:type", Number)
    ], AddVideoToVodRequestBody.prototype, "releaseYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rent" }),
        __metadata("design:type", AddVideoToVodRequestBodyRent)
    ], AddVideoToVodRequestBody.prototype, "rent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddVideoToVodRequestBody.prototype, "type", void 0);
    return AddVideoToVodRequestBody;
}(SpeakeasyBase));
export { AddVideoToVodRequestBody };
var AddVideoToVodSecurity = /** @class */ (function (_super) {
    __extends(AddVideoToVodSecurity, _super);
    function AddVideoToVodSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AddVideoToVodSecurity.prototype, "oauth2", void 0);
    return AddVideoToVodSecurity;
}(SpeakeasyBase));
export { AddVideoToVodSecurity };
var AddVideoToVodRequest = /** @class */ (function (_super) {
    __extends(AddVideoToVodRequest, _super);
    function AddVideoToVodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoToVodPathParams)
    ], AddVideoToVodRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.ondemand.video+json" }),
        __metadata("design:type", AddVideoToVodRequestBody)
    ], AddVideoToVodRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoToVodSecurity)
    ], AddVideoToVodRequest.prototype, "security", void 0);
    return AddVideoToVodRequest;
}(SpeakeasyBase));
export { AddVideoToVodRequest };
var AddVideoToVodResponse = /** @class */ (function (_super) {
    __extends(AddVideoToVodResponse, _super);
    function AddVideoToVodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddVideoToVodResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddVideoToVodResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], AddVideoToVodResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OnDemandVideo)
    ], AddVideoToVodResponse.prototype, "onDemandVideo", void 0);
    return AddVideoToVodResponse;
}(SpeakeasyBase));
export { AddVideoToVodResponse };
