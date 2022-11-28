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
export var PlayerSeasonThirdDownStatsFormatEnum;
(function (PlayerSeasonThirdDownStatsFormatEnum) {
    PlayerSeasonThirdDownStatsFormatEnum["Xml"] = "XML";
    PlayerSeasonThirdDownStatsFormatEnum["Json"] = "JSON";
})(PlayerSeasonThirdDownStatsFormatEnum || (PlayerSeasonThirdDownStatsFormatEnum = {}));
var PlayerSeasonThirdDownStatsPathParams = /** @class */ (function (_super) {
    __extends(PlayerSeasonThirdDownStatsPathParams, _super);
    function PlayerSeasonThirdDownStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PlayerSeasonThirdDownStatsPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], PlayerSeasonThirdDownStatsPathParams.prototype, "season", void 0);
    return PlayerSeasonThirdDownStatsPathParams;
}(SpeakeasyBase));
export { PlayerSeasonThirdDownStatsPathParams };
var PlayerSeasonThirdDownStatsRequest = /** @class */ (function (_super) {
    __extends(PlayerSeasonThirdDownStatsRequest, _super);
    function PlayerSeasonThirdDownStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlayerSeasonThirdDownStatsPathParams)
    ], PlayerSeasonThirdDownStatsRequest.prototype, "pathParams", void 0);
    return PlayerSeasonThirdDownStatsRequest;
}(SpeakeasyBase));
export { PlayerSeasonThirdDownStatsRequest };
var PlayerSeasonThirdDownStatsResponse = /** @class */ (function (_super) {
    __extends(PlayerSeasonThirdDownStatsResponse, _super);
    function PlayerSeasonThirdDownStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlayerSeasonThirdDownStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], PlayerSeasonThirdDownStatsResponse.prototype, "playerSeasonThirdDowns", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlayerSeasonThirdDownStatsResponse.prototype, "statusCode", void 0);
    return PlayerSeasonThirdDownStatsResponse;
}(SpeakeasyBase));
export { PlayerSeasonThirdDownStatsResponse };
