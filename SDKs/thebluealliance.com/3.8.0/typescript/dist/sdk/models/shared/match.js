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
import { MatchAlliance } from "./matchalliance";
// MatchAlliances
/**
 * A list of alliances, the teams on the alliances, and their score.
**/
var MatchAlliances = /** @class */ (function (_super) {
    __extends(MatchAlliances, _super);
    function MatchAlliances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blue" }),
        __metadata("design:type", MatchAlliance)
    ], MatchAlliances.prototype, "blue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=red" }),
        __metadata("design:type", MatchAlliance)
    ], MatchAlliances.prototype, "red", void 0);
    return MatchAlliances;
}(SpeakeasyBase));
export { MatchAlliances };
export var MatchCompLevelEnum;
(function (MatchCompLevelEnum) {
    MatchCompLevelEnum["Qm"] = "qm";
    MatchCompLevelEnum["Ef"] = "ef";
    MatchCompLevelEnum["Qf"] = "qf";
    MatchCompLevelEnum["Sf"] = "sf";
    MatchCompLevelEnum["F"] = "f";
})(MatchCompLevelEnum || (MatchCompLevelEnum = {}));
var MatchVideos = /** @class */ (function (_super) {
    __extends(MatchVideos, _super);
    function MatchVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], MatchVideos.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MatchVideos.prototype, "type", void 0);
    return MatchVideos;
}(SpeakeasyBase));
export { MatchVideos };
export var MatchWinningAllianceEnum;
(function (MatchWinningAllianceEnum) {
    MatchWinningAllianceEnum["Red"] = "red";
    MatchWinningAllianceEnum["Blue"] = "blue";
    MatchWinningAllianceEnum["Unknown"] = "";
})(MatchWinningAllianceEnum || (MatchWinningAllianceEnum = {}));
var Match = /** @class */ (function (_super) {
    __extends(Match, _super);
    function Match() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actual_time" }),
        __metadata("design:type", Number)
    ], Match.prototype, "actualTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alliances" }),
        __metadata("design:type", MatchAlliances)
    ], Match.prototype, "alliances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comp_level" }),
        __metadata("design:type", String)
    ], Match.prototype, "compLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_key" }),
        __metadata("design:type", String)
    ], Match.prototype, "eventKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], Match.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=match_number" }),
        __metadata("design:type", Number)
    ], Match.prototype, "matchNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_result_time" }),
        __metadata("design:type", Number)
    ], Match.prototype, "postResultTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predicted_time" }),
        __metadata("design:type", Number)
    ], Match.prototype, "predictedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score_breakdown" }),
        __metadata("design:type", Map)
    ], Match.prototype, "scoreBreakdown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=set_number" }),
        __metadata("design:type", Number)
    ], Match.prototype, "setNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], Match.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos", elemType: MatchVideos }),
        __metadata("design:type", Array)
    ], Match.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=winning_alliance" }),
        __metadata("design:type", String)
    ], Match.prototype, "winningAlliance", void 0);
    return Match;
}(SpeakeasyBase));
export { Match };
