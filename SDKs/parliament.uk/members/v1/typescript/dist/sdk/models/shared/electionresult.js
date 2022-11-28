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
import { ElectionCandidate } from "./electioncandidate";
import { Party } from "./party";
var ElectionResult = /** @class */ (function (_super) {
    __extends(ElectionResult, _super);
    function ElectionResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidates", elemType: ElectionCandidate }),
        __metadata("design:type", Array)
    ], ElectionResult.prototype, "candidates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constituencyName" }),
        __metadata("design:type", String)
    ], ElectionResult.prototype, "constituencyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=electionDate" }),
        __metadata("design:type", Date)
    ], ElectionResult.prototype, "electionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=electionId" }),
        __metadata("design:type", Number)
    ], ElectionResult.prototype, "electionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=electionTitle" }),
        __metadata("design:type", String)
    ], ElectionResult.prototype, "electionTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=electorate" }),
        __metadata("design:type", Number)
    ], ElectionResult.prototype, "electorate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isGeneralElection" }),
        __metadata("design:type", Boolean)
    ], ElectionResult.prototype, "isGeneralElection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isNotional" }),
        __metadata("design:type", Boolean)
    ], ElectionResult.prototype, "isNotional", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=majority" }),
        __metadata("design:type", Number)
    ], ElectionResult.prototype, "majority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ElectionResult.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=turnout" }),
        __metadata("design:type", Number)
    ], ElectionResult.prototype, "turnout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=winningParty" }),
        __metadata("design:type", Party)
    ], ElectionResult.prototype, "winningParty", void 0);
    return ElectionResult;
}(SpeakeasyBase));
export { ElectionResult };
