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
var CreateVodPathParams = /** @class */ (function (_super) {
    __extends(CreateVodPathParams, _super);
    function CreateVodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], CreateVodPathParams.prototype, "userId", void 0);
    return CreateVodPathParams;
}(SpeakeasyBase));
export { CreateVodPathParams };
export var CreateVodRequestBodyAcceptedCurrenciesEnum;
(function (CreateVodRequestBodyAcceptedCurrenciesEnum) {
    CreateVodRequestBodyAcceptedCurrenciesEnum["Aud"] = "AUD";
    CreateVodRequestBodyAcceptedCurrenciesEnum["Cad"] = "CAD";
    CreateVodRequestBodyAcceptedCurrenciesEnum["Chf"] = "CHF";
    CreateVodRequestBodyAcceptedCurrenciesEnum["Dkk"] = "DKK";
    CreateVodRequestBodyAcceptedCurrenciesEnum["Eur"] = "EUR";
    CreateVodRequestBodyAcceptedCurrenciesEnum["Gbp"] = "GBP";
    CreateVodRequestBodyAcceptedCurrenciesEnum["Jpy"] = "JPY";
    CreateVodRequestBodyAcceptedCurrenciesEnum["Krw"] = "KRW";
    CreateVodRequestBodyAcceptedCurrenciesEnum["Nok"] = "NOK";
    CreateVodRequestBodyAcceptedCurrenciesEnum["Pln"] = "PLN";
    CreateVodRequestBodyAcceptedCurrenciesEnum["Sek"] = "SEK";
    CreateVodRequestBodyAcceptedCurrenciesEnum["Usd"] = "USD";
})(CreateVodRequestBodyAcceptedCurrenciesEnum || (CreateVodRequestBodyAcceptedCurrenciesEnum = {}));
var CreateVodRequestBodyBuyPrice = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodyBuyPrice, _super);
    function CreateVodRequestBodyBuyPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AUD" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "aud", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CAD" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "cad", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CHF" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "chf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DKK" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "dkk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EUR" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "eur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GBP" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "gbp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JPY" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "jpy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KRW" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "krw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NOK" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "nok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PLN" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "pln", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SEK" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "sek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyBuyPrice.prototype, "usd", void 0);
    return CreateVodRequestBodyBuyPrice;
}(SpeakeasyBase));
export { CreateVodRequestBodyBuyPrice };
var CreateVodRequestBodyBuy = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodyBuy, _super);
    function CreateVodRequestBodyBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateVodRequestBodyBuy.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], CreateVodRequestBodyBuy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", CreateVodRequestBodyBuyPrice)
    ], CreateVodRequestBodyBuy.prototype, "price", void 0);
    return CreateVodRequestBodyBuy;
}(SpeakeasyBase));
export { CreateVodRequestBodyBuy };
export var CreateVodRequestBodyContentRatingEnum;
(function (CreateVodRequestBodyContentRatingEnum) {
    CreateVodRequestBodyContentRatingEnum["Drugs"] = "drugs";
    CreateVodRequestBodyContentRatingEnum["Language"] = "language";
    CreateVodRequestBodyContentRatingEnum["Nudity"] = "nudity";
    CreateVodRequestBodyContentRatingEnum["Safe"] = "safe";
    CreateVodRequestBodyContentRatingEnum["Unrated"] = "unrated";
    CreateVodRequestBodyContentRatingEnum["Violence"] = "violence";
})(CreateVodRequestBodyContentRatingEnum || (CreateVodRequestBodyContentRatingEnum = {}));
var CreateVodRequestBodyEpisodesBuyPrice = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodyEpisodesBuyPrice, _super);
    function CreateVodRequestBodyEpisodesBuyPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyEpisodesBuyPrice.prototype, "usd", void 0);
    return CreateVodRequestBodyEpisodesBuyPrice;
}(SpeakeasyBase));
export { CreateVodRequestBodyEpisodesBuyPrice };
var CreateVodRequestBodyEpisodesBuy = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodyEpisodesBuy, _super);
    function CreateVodRequestBodyEpisodesBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateVodRequestBodyEpisodesBuy.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], CreateVodRequestBodyEpisodesBuy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", CreateVodRequestBodyEpisodesBuyPrice)
    ], CreateVodRequestBodyEpisodesBuy.prototype, "price", void 0);
    return CreateVodRequestBodyEpisodesBuy;
}(SpeakeasyBase));
export { CreateVodRequestBodyEpisodesBuy };
export var CreateVodRequestBodyEpisodesRentPeriodEnum;
(function (CreateVodRequestBodyEpisodesRentPeriodEnum) {
    CreateVodRequestBodyEpisodesRentPeriodEnum["OneWeek"] = "1 week";
    CreateVodRequestBodyEpisodesRentPeriodEnum["OneYear"] = "1 year";
    CreateVodRequestBodyEpisodesRentPeriodEnum["TwentyFourHour"] = "24 hour";
    CreateVodRequestBodyEpisodesRentPeriodEnum["ThreeMonth"] = "3 month";
    CreateVodRequestBodyEpisodesRentPeriodEnum["ThirtyDay"] = "30 day";
    CreateVodRequestBodyEpisodesRentPeriodEnum["FortyEightHour"] = "48 hour";
    CreateVodRequestBodyEpisodesRentPeriodEnum["SixMonth"] = "6 month";
    CreateVodRequestBodyEpisodesRentPeriodEnum["SeventyTwoHour"] = "72 hour";
})(CreateVodRequestBodyEpisodesRentPeriodEnum || (CreateVodRequestBodyEpisodesRentPeriodEnum = {}));
var CreateVodRequestBodyEpisodesRentPrice = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodyEpisodesRentPrice, _super);
    function CreateVodRequestBodyEpisodesRentPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyEpisodesRentPrice.prototype, "usd", void 0);
    return CreateVodRequestBodyEpisodesRentPrice;
}(SpeakeasyBase));
export { CreateVodRequestBodyEpisodesRentPrice };
var CreateVodRequestBodyEpisodesRent = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodyEpisodesRent, _super);
    function CreateVodRequestBodyEpisodesRent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateVodRequestBodyEpisodesRent.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", String)
    ], CreateVodRequestBodyEpisodesRent.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", CreateVodRequestBodyEpisodesRentPrice)
    ], CreateVodRequestBodyEpisodesRent.prototype, "price", void 0);
    return CreateVodRequestBodyEpisodesRent;
}(SpeakeasyBase));
export { CreateVodRequestBodyEpisodesRent };
var CreateVodRequestBodyEpisodes = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodyEpisodes, _super);
    function CreateVodRequestBodyEpisodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buy" }),
        __metadata("design:type", CreateVodRequestBodyEpisodesBuy)
    ], CreateVodRequestBodyEpisodes.prototype, "buy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rent" }),
        __metadata("design:type", CreateVodRequestBodyEpisodesRent)
    ], CreateVodRequestBodyEpisodes.prototype, "rent", void 0);
    return CreateVodRequestBodyEpisodes;
}(SpeakeasyBase));
export { CreateVodRequestBodyEpisodes };
export var CreateVodRequestBodyRentPeriodEnum;
(function (CreateVodRequestBodyRentPeriodEnum) {
    CreateVodRequestBodyRentPeriodEnum["OneWeek"] = "1 week";
    CreateVodRequestBodyRentPeriodEnum["OneYear"] = "1 year";
    CreateVodRequestBodyRentPeriodEnum["TwentyFourHour"] = "24 hour";
    CreateVodRequestBodyRentPeriodEnum["ThreeMonth"] = "3 month";
    CreateVodRequestBodyRentPeriodEnum["ThirtyDay"] = "30 day";
    CreateVodRequestBodyRentPeriodEnum["FortyEightHour"] = "48 hour";
    CreateVodRequestBodyRentPeriodEnum["SixMonth"] = "6 month";
    CreateVodRequestBodyRentPeriodEnum["SeventyTwoHour"] = "72 hour";
})(CreateVodRequestBodyRentPeriodEnum || (CreateVodRequestBodyRentPeriodEnum = {}));
var CreateVodRequestBodyRentPrice = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodyRentPrice, _super);
    function CreateVodRequestBodyRentPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AUD" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "aud", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CAD" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "cad", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CHF" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "chf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DKK" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "dkk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EUR" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "eur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GBP" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "gbp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JPY" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "jpy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KRW" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "krw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NOK" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "nok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PLN" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "pln", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SEK" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "sek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodyRentPrice.prototype, "usd", void 0);
    return CreateVodRequestBodyRentPrice;
}(SpeakeasyBase));
export { CreateVodRequestBodyRentPrice };
var CreateVodRequestBodyRent = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodyRent, _super);
    function CreateVodRequestBodyRent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateVodRequestBodyRent.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", String)
    ], CreateVodRequestBodyRent.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", CreateVodRequestBodyRentPrice)
    ], CreateVodRequestBodyRent.prototype, "price", void 0);
    return CreateVodRequestBodyRent;
}(SpeakeasyBase));
export { CreateVodRequestBodyRent };
var CreateVodRequestBodySubscriptionMonthlyPrice = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodySubscriptionMonthlyPrice, _super);
    function CreateVodRequestBodySubscriptionMonthlyPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], CreateVodRequestBodySubscriptionMonthlyPrice.prototype, "usd", void 0);
    return CreateVodRequestBodySubscriptionMonthlyPrice;
}(SpeakeasyBase));
export { CreateVodRequestBodySubscriptionMonthlyPrice };
var CreateVodRequestBodySubscriptionMonthly = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodySubscriptionMonthly, _super);
    function CreateVodRequestBodySubscriptionMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateVodRequestBodySubscriptionMonthly.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", CreateVodRequestBodySubscriptionMonthlyPrice)
    ], CreateVodRequestBodySubscriptionMonthly.prototype, "price", void 0);
    return CreateVodRequestBodySubscriptionMonthly;
}(SpeakeasyBase));
export { CreateVodRequestBodySubscriptionMonthly };
var CreateVodRequestBodySubscription = /** @class */ (function (_super) {
    __extends(CreateVodRequestBodySubscription, _super);
    function CreateVodRequestBodySubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthly" }),
        __metadata("design:type", CreateVodRequestBodySubscriptionMonthly)
    ], CreateVodRequestBodySubscription.prototype, "monthly", void 0);
    return CreateVodRequestBodySubscription;
}(SpeakeasyBase));
export { CreateVodRequestBodySubscription };
export var CreateVodRequestBodyTypeEnum;
(function (CreateVodRequestBodyTypeEnum) {
    CreateVodRequestBodyTypeEnum["Film"] = "film";
    CreateVodRequestBodyTypeEnum["Series"] = "series";
})(CreateVodRequestBodyTypeEnum || (CreateVodRequestBodyTypeEnum = {}));
var CreateVodRequestBody = /** @class */ (function (_super) {
    __extends(CreateVodRequestBody, _super);
    function CreateVodRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accepted_currencies" }),
        __metadata("design:type", String)
    ], CreateVodRequestBody.prototype, "acceptedCurrencies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buy" }),
        __metadata("design:type", CreateVodRequestBodyBuy)
    ], CreateVodRequestBody.prototype, "buy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_rating" }),
        __metadata("design:type", String)
    ], CreateVodRequestBody.prototype, "contentRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateVodRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain_link" }),
        __metadata("design:type", String)
    ], CreateVodRequestBody.prototype, "domainLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episodes" }),
        __metadata("design:type", CreateVodRequestBodyEpisodes)
    ], CreateVodRequestBody.prototype, "episodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], CreateVodRequestBody.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateVodRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rent" }),
        __metadata("design:type", CreateVodRequestBodyRent)
    ], CreateVodRequestBody.prototype, "rent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription" }),
        __metadata("design:type", CreateVodRequestBodySubscription)
    ], CreateVodRequestBody.prototype, "subscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateVodRequestBody.prototype, "type", void 0);
    return CreateVodRequestBody;
}(SpeakeasyBase));
export { CreateVodRequestBody };
var CreateVodRequest = /** @class */ (function (_super) {
    __extends(CreateVodRequest, _super);
    function CreateVodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVodPathParams)
    ], CreateVodRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateVodRequestBody)
    ], CreateVodRequest.prototype, "request", void 0);
    return CreateVodRequest;
}(SpeakeasyBase));
export { CreateVodRequest };
var CreateVodResponse = /** @class */ (function (_super) {
    __extends(CreateVodResponse, _super);
    function CreateVodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVodResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVodResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OnDemandPage)
    ], CreateVodResponse.prototype, "onDemandPage", void 0);
    return CreateVodResponse;
}(SpeakeasyBase));
export { CreateVodResponse };
