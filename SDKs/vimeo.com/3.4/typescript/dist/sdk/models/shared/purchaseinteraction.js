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
// PurchaseInteractionBuy
/**
 * Information on purchasing this video.
**/
var PurchaseInteractionBuy = /** @class */ (function (_super) {
    __extends(PurchaseInteractionBuy, _super);
    function PurchaseInteractionBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drm" }),
        __metadata("design:type", Boolean)
    ], PurchaseInteractionBuy.prototype, "drm", void 0);
    return PurchaseInteractionBuy;
}(SpeakeasyBase));
export { PurchaseInteractionBuy };
export var PurchaseInteractionSubscribeStreamEnum;
(function (PurchaseInteractionSubscribeStreamEnum) {
    PurchaseInteractionSubscribeStreamEnum["Available"] = "available";
    PurchaseInteractionSubscribeStreamEnum["Purchased"] = "purchased";
    PurchaseInteractionSubscribeStreamEnum["Restricted"] = "restricted";
    PurchaseInteractionSubscribeStreamEnum["Unavailable"] = "unavailable";
})(PurchaseInteractionSubscribeStreamEnum || (PurchaseInteractionSubscribeStreamEnum = {}));
// PurchaseInteractionSubscribe
/**
 * Information on subscribing to this video.
**/
var PurchaseInteractionSubscribe = /** @class */ (function (_super) {
    __extends(PurchaseInteractionSubscribe, _super);
    function PurchaseInteractionSubscribe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drm" }),
        __metadata("design:type", Boolean)
    ], PurchaseInteractionSubscribe.prototype, "drm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_time" }),
        __metadata("design:type", String)
    ], PurchaseInteractionSubscribe.prototype, "expiresTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], PurchaseInteractionSubscribe.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchase_time" }),
        __metadata("design:type", String)
    ], PurchaseInteractionSubscribe.prototype, "purchaseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stream" }),
        __metadata("design:type", String)
    ], PurchaseInteractionSubscribe.prototype, "stream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PurchaseInteractionSubscribe.prototype, "uri", void 0);
    return PurchaseInteractionSubscribe;
}(SpeakeasyBase));
export { PurchaseInteractionSubscribe };
var PurchaseInteraction = /** @class */ (function (_super) {
    __extends(PurchaseInteraction, _super);
    function PurchaseInteraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buy" }),
        __metadata("design:type", PurchaseInteractionBuy)
    ], PurchaseInteraction.prototype, "buy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rent" }),
        __metadata("design:type", Map)
    ], PurchaseInteraction.prototype, "rent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribe" }),
        __metadata("design:type", PurchaseInteractionSubscribe)
    ], PurchaseInteraction.prototype, "subscribe", void 0);
    return PurchaseInteraction;
}(SpeakeasyBase));
export { PurchaseInteraction };
