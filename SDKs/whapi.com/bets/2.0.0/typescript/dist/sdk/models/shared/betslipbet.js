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
var Betslipbet = /** @class */ (function (_super) {
    __extends(Betslipbet, _super);
    function Betslipbet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=betMultiplier" }),
        __metadata("design:type", Number)
    ], Betslipbet.prototype, "betMultiplier", void 0);
    __decorate([
        Metadata({ data: "json, name=freeBets", elemType: shared.FreeBetDetail }),
        __metadata("design:type", Array)
    ], Betslipbet.prototype, "freeBets", void 0);
    __decorate([
        Metadata({ data: "json, name=legs", elemType: shared.Betslipleg }),
        __metadata("design:type", Array)
    ], Betslipbet.prototype, "legs", void 0);
    __decorate([
        Metadata({ data: "json, name=maxStake" }),
        __metadata("design:type", Number)
    ], Betslipbet.prototype, "maxStake", void 0);
    __decorate([
        Metadata({ data: "json, name=minStake" }),
        __metadata("design:type", Number)
    ], Betslipbet.prototype, "minStake", void 0);
    __decorate([
        Metadata({ data: "json, name=numLines" }),
        __metadata("design:type", Number)
    ], Betslipbet.prototype, "numLines", void 0);
    __decorate([
        Metadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], Betslipbet.prototype, "number", void 0);
    __decorate([
        Metadata({ data: "json, name=typeCode" }),
        __metadata("design:type", String)
    ], Betslipbet.prototype, "typeCode", void 0);
    __decorate([
        Metadata({ data: "json, name=typeName" }),
        __metadata("design:type", String)
    ], Betslipbet.prototype, "typeName", void 0);
    return Betslipbet;
}(SpeakeasyBase));
export { Betslipbet };
