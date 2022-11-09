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
export var LeagueLeadersByWeekColumnEnum;
(function (LeagueLeadersByWeekColumnEnum) {
    LeagueLeadersByWeekColumnEnum["FantasyPoints"] = "FantasyPoints";
    LeagueLeadersByWeekColumnEnum["PassingYards"] = "PassingYards";
    LeagueLeadersByWeekColumnEnum["RushingYards"] = "RushingYards";
    LeagueLeadersByWeekColumnEnum["Receptions"] = "Receptions";
    LeagueLeadersByWeekColumnEnum["Sacks"] = "Sacks";
    LeagueLeadersByWeekColumnEnum["Interceptions"] = "Interceptions";
    LeagueLeadersByWeekColumnEnum["Touchdowns"] = "Touchdowns";
})(LeagueLeadersByWeekColumnEnum || (LeagueLeadersByWeekColumnEnum = {}));
export var LeagueLeadersByWeekFormatEnum;
(function (LeagueLeadersByWeekFormatEnum) {
    LeagueLeadersByWeekFormatEnum["Xml"] = "XML";
    LeagueLeadersByWeekFormatEnum["Json"] = "JSON";
})(LeagueLeadersByWeekFormatEnum || (LeagueLeadersByWeekFormatEnum = {}));
export var LeagueLeadersByWeekPositionEnum;
(function (LeagueLeadersByWeekPositionEnum) {
    LeagueLeadersByWeekPositionEnum["All"] = "ALL";
    LeagueLeadersByWeekPositionEnum["Offense"] = "OFFENSE";
    LeagueLeadersByWeekPositionEnum["Qb"] = "QB";
    LeagueLeadersByWeekPositionEnum["Rb"] = "RB";
    LeagueLeadersByWeekPositionEnum["Wr"] = "WR";
    LeagueLeadersByWeekPositionEnum["Te"] = "TE";
    LeagueLeadersByWeekPositionEnum["Defense"] = "DEFENSE";
    LeagueLeadersByWeekPositionEnum["Dl"] = "DL";
    LeagueLeadersByWeekPositionEnum["Lb"] = "LB";
    LeagueLeadersByWeekPositionEnum["Db"] = "DB";
    LeagueLeadersByWeekPositionEnum["K"] = "K";
})(LeagueLeadersByWeekPositionEnum || (LeagueLeadersByWeekPositionEnum = {}));
var LeagueLeadersByWeekPathParams = /** @class */ (function (_super) {
    __extends(LeagueLeadersByWeekPathParams, _super);
    function LeagueLeadersByWeekPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=column" }),
        __metadata("design:type", String)
    ], LeagueLeadersByWeekPathParams.prototype, "column", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], LeagueLeadersByWeekPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=position" }),
        __metadata("design:type", String)
    ], LeagueLeadersByWeekPathParams.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], LeagueLeadersByWeekPathParams.prototype, "season", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=week" }),
        __metadata("design:type", String)
    ], LeagueLeadersByWeekPathParams.prototype, "week", void 0);
    return LeagueLeadersByWeekPathParams;
}(SpeakeasyBase));
export { LeagueLeadersByWeekPathParams };
var LeagueLeadersByWeekRequest = /** @class */ (function (_super) {
    __extends(LeagueLeadersByWeekRequest, _super);
    function LeagueLeadersByWeekRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LeagueLeadersByWeekPathParams)
    ], LeagueLeadersByWeekRequest.prototype, "pathParams", void 0);
    return LeagueLeadersByWeekRequest;
}(SpeakeasyBase));
export { LeagueLeadersByWeekRequest };
var LeagueLeadersByWeekResponse = /** @class */ (function (_super) {
    __extends(LeagueLeadersByWeekResponse, _super);
    function LeagueLeadersByWeekResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LeagueLeadersByWeekResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], LeagueLeadersByWeekResponse.prototype, "playerGames", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LeagueLeadersByWeekResponse.prototype, "statusCode", void 0);
    return LeagueLeadersByWeekResponse;
}(SpeakeasyBase));
export { LeagueLeadersByWeekResponse };
