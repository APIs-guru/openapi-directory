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
export var FantasyDefenseGameStatsByTeamFormatEnum;
(function (FantasyDefenseGameStatsByTeamFormatEnum) {
    FantasyDefenseGameStatsByTeamFormatEnum["Xml"] = "XML";
    FantasyDefenseGameStatsByTeamFormatEnum["Json"] = "JSON";
})(FantasyDefenseGameStatsByTeamFormatEnum || (FantasyDefenseGameStatsByTeamFormatEnum = {}));
var FantasyDefenseGameStatsByTeamPathParams = /** @class */ (function (_super) {
    __extends(FantasyDefenseGameStatsByTeamPathParams, _super);
    function FantasyDefenseGameStatsByTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], FantasyDefenseGameStatsByTeamPathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], FantasyDefenseGameStatsByTeamPathParams.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" }),
        __metadata("design:type", String)
    ], FantasyDefenseGameStatsByTeamPathParams.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" }),
        __metadata("design:type", String)
    ], FantasyDefenseGameStatsByTeamPathParams.prototype, "week", void 0);
    return FantasyDefenseGameStatsByTeamPathParams;
}(SpeakeasyBase));
export { FantasyDefenseGameStatsByTeamPathParams };
var FantasyDefenseGameStatsByTeamRequest = /** @class */ (function (_super) {
    __extends(FantasyDefenseGameStatsByTeamRequest, _super);
    function FantasyDefenseGameStatsByTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FantasyDefenseGameStatsByTeamPathParams)
    ], FantasyDefenseGameStatsByTeamRequest.prototype, "pathParams", void 0);
    return FantasyDefenseGameStatsByTeamRequest;
}(SpeakeasyBase));
export { FantasyDefenseGameStatsByTeamRequest };
var FantasyDefenseGameStatsByTeamResponse = /** @class */ (function (_super) {
    __extends(FantasyDefenseGameStatsByTeamResponse, _super);
    function FantasyDefenseGameStatsByTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FantasyDefenseGameStatsByTeamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FantasyDefenseGameStatsByTeamResponse.prototype, "fantasyDefenseGame", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FantasyDefenseGameStatsByTeamResponse.prototype, "statusCode", void 0);
    return FantasyDefenseGameStatsByTeamResponse;
}(SpeakeasyBase));
export { FantasyDefenseGameStatsByTeamResponse };
