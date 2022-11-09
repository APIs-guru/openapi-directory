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
export var PlayerDetailsByTeamFormatEnum;
(function (PlayerDetailsByTeamFormatEnum) {
    PlayerDetailsByTeamFormatEnum["Xml"] = "XML";
    PlayerDetailsByTeamFormatEnum["Json"] = "JSON";
})(PlayerDetailsByTeamFormatEnum || (PlayerDetailsByTeamFormatEnum = {}));
var PlayerDetailsByTeamPathParams = /** @class */ (function (_super) {
    __extends(PlayerDetailsByTeamPathParams, _super);
    function PlayerDetailsByTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PlayerDetailsByTeamPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=team" }),
        __metadata("design:type", String)
    ], PlayerDetailsByTeamPathParams.prototype, "team", void 0);
    return PlayerDetailsByTeamPathParams;
}(SpeakeasyBase));
export { PlayerDetailsByTeamPathParams };
var PlayerDetailsByTeamRequest = /** @class */ (function (_super) {
    __extends(PlayerDetailsByTeamRequest, _super);
    function PlayerDetailsByTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PlayerDetailsByTeamPathParams)
    ], PlayerDetailsByTeamRequest.prototype, "pathParams", void 0);
    return PlayerDetailsByTeamRequest;
}(SpeakeasyBase));
export { PlayerDetailsByTeamRequest };
var PlayerDetailsByTeamResponse = /** @class */ (function (_super) {
    __extends(PlayerDetailsByTeamResponse, _super);
    function PlayerDetailsByTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PlayerDetailsByTeamResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], PlayerDetailsByTeamResponse.prototype, "playerDetails", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PlayerDetailsByTeamResponse.prototype, "statusCode", void 0);
    return PlayerDetailsByTeamResponse;
}(SpeakeasyBase));
export { PlayerDetailsByTeamResponse };
