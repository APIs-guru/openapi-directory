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
export var GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum;
(function (GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum) {
    GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum["Xml"] = "XML";
    GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum["Json"] = "JSON";
})(GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum || (GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum = {}));
var GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams = /** @class */ (function (_super) {
    __extends(GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams, _super);
    function GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" }),
        __metadata("design:type", String)
    ], GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams.prototype, "week", void 0);
    return GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams;
}(SpeakeasyBase));
export { GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams };
var GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest = /** @class */ (function (_super) {
    __extends(GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest, _super);
    function GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams)
    ], GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest.prototype, "pathParams", void 0);
    return GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest;
}(SpeakeasyBase));
export { GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest };
var GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse = /** @class */ (function (_super) {
    __extends(GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse, _super);
    function GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse.prototype, "games", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse.prototype, "statusCode", void 0);
    return GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse;
}(SpeakeasyBase));
export { GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse };
