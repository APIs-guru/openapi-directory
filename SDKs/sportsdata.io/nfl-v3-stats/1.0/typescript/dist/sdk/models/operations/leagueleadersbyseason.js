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
export var LeagueLeadersBySeasonColumnEnum;
(function (LeagueLeadersBySeasonColumnEnum) {
    LeagueLeadersBySeasonColumnEnum["FantasyPoints"] = "FantasyPoints";
    LeagueLeadersBySeasonColumnEnum["PassingYards"] = "PassingYards";
    LeagueLeadersBySeasonColumnEnum["RushingYards"] = "RushingYards";
    LeagueLeadersBySeasonColumnEnum["Receptions"] = "Receptions";
    LeagueLeadersBySeasonColumnEnum["Sacks"] = "Sacks";
    LeagueLeadersBySeasonColumnEnum["Interceptions"] = "Interceptions";
    LeagueLeadersBySeasonColumnEnum["Touchdowns"] = "Touchdowns";
})(LeagueLeadersBySeasonColumnEnum || (LeagueLeadersBySeasonColumnEnum = {}));
export var LeagueLeadersBySeasonFormatEnum;
(function (LeagueLeadersBySeasonFormatEnum) {
    LeagueLeadersBySeasonFormatEnum["Xml"] = "XML";
    LeagueLeadersBySeasonFormatEnum["Json"] = "JSON";
})(LeagueLeadersBySeasonFormatEnum || (LeagueLeadersBySeasonFormatEnum = {}));
export var LeagueLeadersBySeasonPositionEnum;
(function (LeagueLeadersBySeasonPositionEnum) {
    LeagueLeadersBySeasonPositionEnum["All"] = "ALL";
    LeagueLeadersBySeasonPositionEnum["Offense"] = "OFFENSE";
    LeagueLeadersBySeasonPositionEnum["Qb"] = "QB";
    LeagueLeadersBySeasonPositionEnum["Rb"] = "RB";
    LeagueLeadersBySeasonPositionEnum["Wr"] = "WR";
    LeagueLeadersBySeasonPositionEnum["Te"] = "TE";
    LeagueLeadersBySeasonPositionEnum["Defense"] = "DEFENSE";
    LeagueLeadersBySeasonPositionEnum["Dl"] = "DL";
    LeagueLeadersBySeasonPositionEnum["Lb"] = "LB";
    LeagueLeadersBySeasonPositionEnum["Db"] = "DB";
    LeagueLeadersBySeasonPositionEnum["K"] = "K";
})(LeagueLeadersBySeasonPositionEnum || (LeagueLeadersBySeasonPositionEnum = {}));
var LeagueLeadersBySeasonPathParams = /** @class */ (function (_super) {
    __extends(LeagueLeadersBySeasonPathParams, _super);
    function LeagueLeadersBySeasonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=column" }),
        __metadata("design:type", String)
    ], LeagueLeadersBySeasonPathParams.prototype, "column", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], LeagueLeadersBySeasonPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=position" }),
        __metadata("design:type", String)
    ], LeagueLeadersBySeasonPathParams.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], LeagueLeadersBySeasonPathParams.prototype, "season", void 0);
    return LeagueLeadersBySeasonPathParams;
}(SpeakeasyBase));
export { LeagueLeadersBySeasonPathParams };
var LeagueLeadersBySeasonRequest = /** @class */ (function (_super) {
    __extends(LeagueLeadersBySeasonRequest, _super);
    function LeagueLeadersBySeasonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LeagueLeadersBySeasonPathParams)
    ], LeagueLeadersBySeasonRequest.prototype, "pathParams", void 0);
    return LeagueLeadersBySeasonRequest;
}(SpeakeasyBase));
export { LeagueLeadersBySeasonRequest };
var LeagueLeadersBySeasonResponse = /** @class */ (function (_super) {
    __extends(LeagueLeadersBySeasonResponse, _super);
    function LeagueLeadersBySeasonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LeagueLeadersBySeasonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], LeagueLeadersBySeasonResponse.prototype, "playerSeasons", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LeagueLeadersBySeasonResponse.prototype, "statusCode", void 0);
    return LeagueLeadersBySeasonResponse;
}(SpeakeasyBase));
export { LeagueLeadersBySeasonResponse };
