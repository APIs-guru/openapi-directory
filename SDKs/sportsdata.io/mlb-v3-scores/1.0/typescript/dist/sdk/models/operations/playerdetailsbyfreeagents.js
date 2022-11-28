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
export var PlayerDetailsByFreeAgentsFormatEnum;
(function (PlayerDetailsByFreeAgentsFormatEnum) {
    PlayerDetailsByFreeAgentsFormatEnum["Xml"] = "XML";
    PlayerDetailsByFreeAgentsFormatEnum["Json"] = "JSON";
})(PlayerDetailsByFreeAgentsFormatEnum || (PlayerDetailsByFreeAgentsFormatEnum = {}));
var PlayerDetailsByFreeAgentsPathParams = /** @class */ (function (_super) {
    __extends(PlayerDetailsByFreeAgentsPathParams, _super);
    function PlayerDetailsByFreeAgentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PlayerDetailsByFreeAgentsPathParams.prototype, "format", void 0);
    return PlayerDetailsByFreeAgentsPathParams;
}(SpeakeasyBase));
export { PlayerDetailsByFreeAgentsPathParams };
var PlayerDetailsByFreeAgentsRequest = /** @class */ (function (_super) {
    __extends(PlayerDetailsByFreeAgentsRequest, _super);
    function PlayerDetailsByFreeAgentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlayerDetailsByFreeAgentsPathParams)
    ], PlayerDetailsByFreeAgentsRequest.prototype, "pathParams", void 0);
    return PlayerDetailsByFreeAgentsRequest;
}(SpeakeasyBase));
export { PlayerDetailsByFreeAgentsRequest };
var PlayerDetailsByFreeAgentsResponse = /** @class */ (function (_super) {
    __extends(PlayerDetailsByFreeAgentsResponse, _super);
    function PlayerDetailsByFreeAgentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlayerDetailsByFreeAgentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], PlayerDetailsByFreeAgentsResponse.prototype, "players", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlayerDetailsByFreeAgentsResponse.prototype, "statusCode", void 0);
    return PlayerDetailsByFreeAgentsResponse;
}(SpeakeasyBase));
export { PlayerDetailsByFreeAgentsResponse };
