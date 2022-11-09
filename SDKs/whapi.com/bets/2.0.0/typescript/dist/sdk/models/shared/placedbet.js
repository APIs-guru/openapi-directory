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
var PlacedBet = /** @class */ (function (_super) {
    __extends(PlacedBet, _super);
    function PlacedBet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cashinValue" }),
        __metadata("design:type", Number)
    ], PlacedBet.prototype, "cashinValue", void 0);
    __decorate([
        Metadata({ data: "json, name=estimatedReturns" }),
        __metadata("design:type", Number)
    ], PlacedBet.prototype, "estimatedReturns", void 0);
    __decorate([
        Metadata({ data: "json, name=freeBetValue" }),
        __metadata("design:type", Number)
    ], PlacedBet.prototype, "freeBetValue", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PlacedBet.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=legs", elemType: shared.PlacedBetLeg }),
        __metadata("design:type", Array)
    ], PlacedBet.prototype, "legs", void 0);
    __decorate([
        Metadata({ data: "json, name=numLines" }),
        __metadata("design:type", Number)
    ], PlacedBet.prototype, "numLines", void 0);
    __decorate([
        Metadata({ data: "json, name=numSelections" }),
        __metadata("design:type", Number)
    ], PlacedBet.prototype, "numSelections", void 0);
    __decorate([
        Metadata({ data: "json, name=receipt" }),
        __metadata("design:type", String)
    ], PlacedBet.prototype, "receipt", void 0);
    __decorate([
        Metadata({ data: "json, name=settled" }),
        __metadata("design:type", Boolean)
    ], PlacedBet.prototype, "settled", void 0);
    __decorate([
        Metadata({ data: "json, name=stake" }),
        __metadata("design:type", Number)
    ], PlacedBet.prototype, "stake", void 0);
    __decorate([
        Metadata({ data: "json, name=stakePerLine" }),
        __metadata("design:type", Number)
    ], PlacedBet.prototype, "stakePerLine", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PlacedBet.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=transDateTime" }),
        __metadata("design:type", String)
    ], PlacedBet.prototype, "transDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=typeCode" }),
        __metadata("design:type", String)
    ], PlacedBet.prototype, "typeCode", void 0);
    __decorate([
        Metadata({ data: "json, name=typeName" }),
        __metadata("design:type", String)
    ], PlacedBet.prototype, "typeName", void 0);
    __decorate([
        Metadata({ data: "json, name=winnings" }),
        __metadata("design:type", Number)
    ], PlacedBet.prototype, "winnings", void 0);
    return PlacedBet;
}(SpeakeasyBase));
export { PlacedBet };
