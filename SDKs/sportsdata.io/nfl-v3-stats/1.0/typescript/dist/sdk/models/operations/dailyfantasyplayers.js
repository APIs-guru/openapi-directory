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
export var DailyFantasyPlayersFormatEnum;
(function (DailyFantasyPlayersFormatEnum) {
    DailyFantasyPlayersFormatEnum["Xml"] = "XML";
    DailyFantasyPlayersFormatEnum["Json"] = "JSON";
})(DailyFantasyPlayersFormatEnum || (DailyFantasyPlayersFormatEnum = {}));
var DailyFantasyPlayersPathParams = /** @class */ (function (_super) {
    __extends(DailyFantasyPlayersPathParams, _super);
    function DailyFantasyPlayersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], DailyFantasyPlayersPathParams.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], DailyFantasyPlayersPathParams.prototype, "format", void 0);
    return DailyFantasyPlayersPathParams;
}(SpeakeasyBase));
export { DailyFantasyPlayersPathParams };
var DailyFantasyPlayersRequest = /** @class */ (function (_super) {
    __extends(DailyFantasyPlayersRequest, _super);
    function DailyFantasyPlayersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DailyFantasyPlayersPathParams)
    ], DailyFantasyPlayersRequest.prototype, "pathParams", void 0);
    return DailyFantasyPlayersRequest;
}(SpeakeasyBase));
export { DailyFantasyPlayersRequest };
var DailyFantasyPlayersResponse = /** @class */ (function (_super) {
    __extends(DailyFantasyPlayersResponse, _super);
    function DailyFantasyPlayersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DailyFantasyPlayersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], DailyFantasyPlayersResponse.prototype, "dailyFantasyPlayers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DailyFantasyPlayersResponse.prototype, "statusCode", void 0);
    return DailyFantasyPlayersResponse;
}(SpeakeasyBase));
export { DailyFantasyPlayersResponse };
