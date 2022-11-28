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
export var FantasyDefenseSeasonStatsByTeamFormatEnum;
(function (FantasyDefenseSeasonStatsByTeamFormatEnum) {
    FantasyDefenseSeasonStatsByTeamFormatEnum["Xml"] = "XML";
    FantasyDefenseSeasonStatsByTeamFormatEnum["Json"] = "JSON";
})(FantasyDefenseSeasonStatsByTeamFormatEnum || (FantasyDefenseSeasonStatsByTeamFormatEnum = {}));
var FantasyDefenseSeasonStatsByTeamPathParams = /** @class */ (function (_super) {
    __extends(FantasyDefenseSeasonStatsByTeamPathParams, _super);
    function FantasyDefenseSeasonStatsByTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], FantasyDefenseSeasonStatsByTeamPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], FantasyDefenseSeasonStatsByTeamPathParams.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" }),
        __metadata("design:type", String)
    ], FantasyDefenseSeasonStatsByTeamPathParams.prototype, "team", void 0);
    return FantasyDefenseSeasonStatsByTeamPathParams;
}(SpeakeasyBase));
export { FantasyDefenseSeasonStatsByTeamPathParams };
var FantasyDefenseSeasonStatsByTeamRequest = /** @class */ (function (_super) {
    __extends(FantasyDefenseSeasonStatsByTeamRequest, _super);
    function FantasyDefenseSeasonStatsByTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FantasyDefenseSeasonStatsByTeamPathParams)
    ], FantasyDefenseSeasonStatsByTeamRequest.prototype, "pathParams", void 0);
    return FantasyDefenseSeasonStatsByTeamRequest;
}(SpeakeasyBase));
export { FantasyDefenseSeasonStatsByTeamRequest };
var FantasyDefenseSeasonStatsByTeamResponse = /** @class */ (function (_super) {
    __extends(FantasyDefenseSeasonStatsByTeamResponse, _super);
    function FantasyDefenseSeasonStatsByTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FantasyDefenseSeasonStatsByTeamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FantasyDefenseSeasonStatsByTeamResponse.prototype, "fantasyDefenseSeason", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FantasyDefenseSeasonStatsByTeamResponse.prototype, "statusCode", void 0);
    return FantasyDefenseSeasonStatsByTeamResponse;
}(SpeakeasyBase));
export { FantasyDefenseSeasonStatsByTeamResponse };
