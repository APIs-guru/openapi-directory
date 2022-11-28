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
export var CreateVodAlt1RequestBodyAcceptedCurrenciesEnum;
(function (CreateVodAlt1RequestBodyAcceptedCurrenciesEnum) {
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Aud"] = "AUD";
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Cad"] = "CAD";
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Chf"] = "CHF";
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Dkk"] = "DKK";
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Eur"] = "EUR";
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Gbp"] = "GBP";
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Jpy"] = "JPY";
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Krw"] = "KRW";
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Nok"] = "NOK";
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Pln"] = "PLN";
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Sek"] = "SEK";
    CreateVodAlt1RequestBodyAcceptedCurrenciesEnum["Usd"] = "USD";
})(CreateVodAlt1RequestBodyAcceptedCurrenciesEnum || (CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = {}));
var CreateVodAlt1RequestBodyBuyPrice = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodyBuyPrice, _super);
    function CreateVodAlt1RequestBodyBuyPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AUD" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "aud", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CAD" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "cad", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CHF" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "chf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DKK" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "dkk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EUR" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "eur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GBP" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "gbp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JPY" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "jpy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KRW" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "krw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NOK" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "nok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PLN" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "pln", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SEK" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "sek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyBuyPrice.prototype, "usd", void 0);
    return CreateVodAlt1RequestBodyBuyPrice;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodyBuyPrice };
var CreateVodAlt1RequestBodyBuy = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodyBuy, _super);
    function CreateVodAlt1RequestBodyBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateVodAlt1RequestBodyBuy.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], CreateVodAlt1RequestBodyBuy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", CreateVodAlt1RequestBodyBuyPrice)
    ], CreateVodAlt1RequestBodyBuy.prototype, "price", void 0);
    return CreateVodAlt1RequestBodyBuy;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodyBuy };
export var CreateVodAlt1RequestBodyContentRatingEnum;
(function (CreateVodAlt1RequestBodyContentRatingEnum) {
    CreateVodAlt1RequestBodyContentRatingEnum["Drugs"] = "drugs";
    CreateVodAlt1RequestBodyContentRatingEnum["Language"] = "language";
    CreateVodAlt1RequestBodyContentRatingEnum["Nudity"] = "nudity";
    CreateVodAlt1RequestBodyContentRatingEnum["Safe"] = "safe";
    CreateVodAlt1RequestBodyContentRatingEnum["Unrated"] = "unrated";
    CreateVodAlt1RequestBodyContentRatingEnum["Violence"] = "violence";
})(CreateVodAlt1RequestBodyContentRatingEnum || (CreateVodAlt1RequestBodyContentRatingEnum = {}));
var CreateVodAlt1RequestBodyEpisodesBuyPrice = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodyEpisodesBuyPrice, _super);
    function CreateVodAlt1RequestBodyEpisodesBuyPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyEpisodesBuyPrice.prototype, "usd", void 0);
    return CreateVodAlt1RequestBodyEpisodesBuyPrice;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodyEpisodesBuyPrice };
var CreateVodAlt1RequestBodyEpisodesBuy = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodyEpisodesBuy, _super);
    function CreateVodAlt1RequestBodyEpisodesBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateVodAlt1RequestBodyEpisodesBuy.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], CreateVodAlt1RequestBodyEpisodesBuy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", CreateVodAlt1RequestBodyEpisodesBuyPrice)
    ], CreateVodAlt1RequestBodyEpisodesBuy.prototype, "price", void 0);
    return CreateVodAlt1RequestBodyEpisodesBuy;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodyEpisodesBuy };
export var CreateVodAlt1RequestBodyEpisodesRentPeriodEnum;
(function (CreateVodAlt1RequestBodyEpisodesRentPeriodEnum) {
    CreateVodAlt1RequestBodyEpisodesRentPeriodEnum["OneWeek"] = "1 week";
    CreateVodAlt1RequestBodyEpisodesRentPeriodEnum["OneYear"] = "1 year";
    CreateVodAlt1RequestBodyEpisodesRentPeriodEnum["TwentyFourHour"] = "24 hour";
    CreateVodAlt1RequestBodyEpisodesRentPeriodEnum["ThreeMonth"] = "3 month";
    CreateVodAlt1RequestBodyEpisodesRentPeriodEnum["ThirtyDay"] = "30 day";
    CreateVodAlt1RequestBodyEpisodesRentPeriodEnum["FortyEightHour"] = "48 hour";
    CreateVodAlt1RequestBodyEpisodesRentPeriodEnum["SixMonth"] = "6 month";
    CreateVodAlt1RequestBodyEpisodesRentPeriodEnum["SeventyTwoHour"] = "72 hour";
})(CreateVodAlt1RequestBodyEpisodesRentPeriodEnum || (CreateVodAlt1RequestBodyEpisodesRentPeriodEnum = {}));
var CreateVodAlt1RequestBodyEpisodesRentPrice = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodyEpisodesRentPrice, _super);
    function CreateVodAlt1RequestBodyEpisodesRentPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyEpisodesRentPrice.prototype, "usd", void 0);
    return CreateVodAlt1RequestBodyEpisodesRentPrice;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodyEpisodesRentPrice };
var CreateVodAlt1RequestBodyEpisodesRent = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodyEpisodesRent, _super);
    function CreateVodAlt1RequestBodyEpisodesRent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateVodAlt1RequestBodyEpisodesRent.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", String)
    ], CreateVodAlt1RequestBodyEpisodesRent.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", CreateVodAlt1RequestBodyEpisodesRentPrice)
    ], CreateVodAlt1RequestBodyEpisodesRent.prototype, "price", void 0);
    return CreateVodAlt1RequestBodyEpisodesRent;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodyEpisodesRent };
var CreateVodAlt1RequestBodyEpisodes = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodyEpisodes, _super);
    function CreateVodAlt1RequestBodyEpisodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buy" }),
        __metadata("design:type", CreateVodAlt1RequestBodyEpisodesBuy)
    ], CreateVodAlt1RequestBodyEpisodes.prototype, "buy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rent" }),
        __metadata("design:type", CreateVodAlt1RequestBodyEpisodesRent)
    ], CreateVodAlt1RequestBodyEpisodes.prototype, "rent", void 0);
    return CreateVodAlt1RequestBodyEpisodes;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodyEpisodes };
export var CreateVodAlt1RequestBodyRentPeriodEnum;
(function (CreateVodAlt1RequestBodyRentPeriodEnum) {
    CreateVodAlt1RequestBodyRentPeriodEnum["OneWeek"] = "1 week";
    CreateVodAlt1RequestBodyRentPeriodEnum["OneYear"] = "1 year";
    CreateVodAlt1RequestBodyRentPeriodEnum["TwentyFourHour"] = "24 hour";
    CreateVodAlt1RequestBodyRentPeriodEnum["ThreeMonth"] = "3 month";
    CreateVodAlt1RequestBodyRentPeriodEnum["ThirtyDay"] = "30 day";
    CreateVodAlt1RequestBodyRentPeriodEnum["FortyEightHour"] = "48 hour";
    CreateVodAlt1RequestBodyRentPeriodEnum["SixMonth"] = "6 month";
    CreateVodAlt1RequestBodyRentPeriodEnum["SeventyTwoHour"] = "72 hour";
})(CreateVodAlt1RequestBodyRentPeriodEnum || (CreateVodAlt1RequestBodyRentPeriodEnum = {}));
var CreateVodAlt1RequestBodyRentPrice = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodyRentPrice, _super);
    function CreateVodAlt1RequestBodyRentPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AUD" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "aud", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CAD" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "cad", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CHF" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "chf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DKK" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "dkk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EUR" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "eur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GBP" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "gbp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JPY" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "jpy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KRW" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "krw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NOK" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "nok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PLN" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "pln", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SEK" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "sek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodyRentPrice.prototype, "usd", void 0);
    return CreateVodAlt1RequestBodyRentPrice;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodyRentPrice };
var CreateVodAlt1RequestBodyRent = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodyRent, _super);
    function CreateVodAlt1RequestBodyRent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateVodAlt1RequestBodyRent.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", String)
    ], CreateVodAlt1RequestBodyRent.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", CreateVodAlt1RequestBodyRentPrice)
    ], CreateVodAlt1RequestBodyRent.prototype, "price", void 0);
    return CreateVodAlt1RequestBodyRent;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodyRent };
var CreateVodAlt1RequestBodySubscriptionMonthlyPrice = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodySubscriptionMonthlyPrice, _super);
    function CreateVodAlt1RequestBodySubscriptionMonthlyPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=USD" }),
        __metadata("design:type", Number)
    ], CreateVodAlt1RequestBodySubscriptionMonthlyPrice.prototype, "usd", void 0);
    return CreateVodAlt1RequestBodySubscriptionMonthlyPrice;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodySubscriptionMonthlyPrice };
var CreateVodAlt1RequestBodySubscriptionMonthly = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodySubscriptionMonthly, _super);
    function CreateVodAlt1RequestBodySubscriptionMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateVodAlt1RequestBodySubscriptionMonthly.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", CreateVodAlt1RequestBodySubscriptionMonthlyPrice)
    ], CreateVodAlt1RequestBodySubscriptionMonthly.prototype, "price", void 0);
    return CreateVodAlt1RequestBodySubscriptionMonthly;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodySubscriptionMonthly };
var CreateVodAlt1RequestBodySubscription = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBodySubscription, _super);
    function CreateVodAlt1RequestBodySubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthly" }),
        __metadata("design:type", CreateVodAlt1RequestBodySubscriptionMonthly)
    ], CreateVodAlt1RequestBodySubscription.prototype, "monthly", void 0);
    return CreateVodAlt1RequestBodySubscription;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBodySubscription };
export var CreateVodAlt1RequestBodyTypeEnum;
(function (CreateVodAlt1RequestBodyTypeEnum) {
    CreateVodAlt1RequestBodyTypeEnum["Film"] = "film";
    CreateVodAlt1RequestBodyTypeEnum["Series"] = "series";
})(CreateVodAlt1RequestBodyTypeEnum || (CreateVodAlt1RequestBodyTypeEnum = {}));
var CreateVodAlt1RequestBody = /** @class */ (function (_super) {
    __extends(CreateVodAlt1RequestBody, _super);
    function CreateVodAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accepted_currencies" }),
        __metadata("design:type", String)
    ], CreateVodAlt1RequestBody.prototype, "acceptedCurrencies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buy" }),
        __metadata("design:type", CreateVodAlt1RequestBodyBuy)
    ], CreateVodAlt1RequestBody.prototype, "buy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_rating" }),
        __metadata("design:type", String)
    ], CreateVodAlt1RequestBody.prototype, "contentRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateVodAlt1RequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain_link" }),
        __metadata("design:type", String)
    ], CreateVodAlt1RequestBody.prototype, "domainLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episodes" }),
        __metadata("design:type", CreateVodAlt1RequestBodyEpisodes)
    ], CreateVodAlt1RequestBody.prototype, "episodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], CreateVodAlt1RequestBody.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateVodAlt1RequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rent" }),
        __metadata("design:type", CreateVodAlt1RequestBodyRent)
    ], CreateVodAlt1RequestBody.prototype, "rent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription" }),
        __metadata("design:type", CreateVodAlt1RequestBodySubscription)
    ], CreateVodAlt1RequestBody.prototype, "subscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateVodAlt1RequestBody.prototype, "type", void 0);
    return CreateVodAlt1RequestBody;
}(SpeakeasyBase));
export { CreateVodAlt1RequestBody };
var CreateVodAlt1Request = /** @class */ (function (_super) {
    __extends(CreateVodAlt1Request, _super);
    function CreateVodAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateVodAlt1RequestBody)
    ], CreateVodAlt1Request.prototype, "request", void 0);
    return CreateVodAlt1Request;
}(SpeakeasyBase));
export { CreateVodAlt1Request };
var CreateVodAlt1Response = /** @class */ (function (_super) {
    __extends(CreateVodAlt1Response, _super);
    function CreateVodAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVodAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVodAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OnDemandPage)
    ], CreateVodAlt1Response.prototype, "onDemandPage", void 0);
    return CreateVodAlt1Response;
}(SpeakeasyBase));
export { CreateVodAlt1Response };
